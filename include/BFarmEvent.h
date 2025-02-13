#ifndef BFarmEvent_H
#define BFarmEvent_H

#include <Arduino.h>
#include <FunctionalInterrupt.h>

extern "C" {
  #include "esp_timer.h"
}
#include <vector>
#include <deque>
#include <stdlib.h>

enum BFarmEventType
{
      NONE,
      PIN_CHANGE,
      PIN_RAISING,
      PIN_FALLING,
      EVERY,
      ONCE,
      TASK
};
enum BFarmEventExecuteType{
        SEQUENTIAL,
        PARALLEL
};
static portMUX_TYPE BFarm_mux = portMUX_INITIALIZER_UNLOCKED;

class BFarmEvent
{
    typedef void (*kb_callback_t)(void);
    typedef void (*BFarm_callback_with_arg_t)(void*);

    struct BFarmIsrArg {
        const char *name;
        uint16_t uid;
        BFarmEvent *mother;
        BFarm_callback_with_arg_t cb;
        uint32_t param;
        void *arg;
        BFarmEventType event_type;
        BFarmEventExecuteType queue_type;
        esp_timer_handle_t timer;
    };

    protected:
        std::vector<BFarmIsrArg> subscribers;
        std::deque<BFarmIsrArg *> queue;
        bool isSequenceTaskStarted = false;
    public:

        BFarmEvent::BFarmEvent(){
            subscribers.reserve(128);
        }

        BFarmEvent::~BFarmEvent() {
          //detach();
        }

        static void isr(void *arg) {
            BFarmIsrArg* c_arg = static_cast<BFarmIsrArg*>(arg);
            BFarmEvent *mother = c_arg->mother;
            portENTER_CRITICAL( &BFarm_mux );
            if(c_arg->queue_type == BFarmEventExecuteType::SEQUENTIAL){
                if(!mother->isSequenceTaskStarted){
                    xTaskCreate(&BFarmEvent::event_consumer, "BFarmEvent_PULLING", 2048, mother, 10, NULL);
                    mother->isSequenceTaskStarted = true;
                }
                mother->enqueue(c_arg);
            }else if(c_arg->queue_type == BFarmEventExecuteType::PARALLEL){
                for(auto const&el : mother->subscribers){ //loop all member to check if multiple callback
                    if(el.queue_type == c_arg->queue_type &&
                        el.param == c_arg->param &&
                        el.event_type == c_arg->event_type){
                        xTaskCreate([](BFarmIsrArg *argc){
                            argc->cb(argc->arg);
                            vTaskDelete( NULL );
                        }, "BFarmEvent_PTASK", 2048, &el, 128, NULL);
                    }
                }
            }
            portEXIT_CRITICAL( &BFarm_mux );
        }

        static void event_consumer(BFarmEvent *mother)
        {
            while(true)
            {
                while(mother->queue.size() > 0){
                   BFarmIsrArg *arg = mother->queue.front();
                   BFarm_callback_with_arg_t cb = arg->cb;
                   mother->queue.pop_front();
                   cb(arg->arg);
                }
                delay(1);
            }
            vTaskDelete( NULL );
        }
        void inline attach_master(
            const char *name,
            BFarmEventType type,
            BFarmEventExecuteType queue_type,
            BFarm_callback_with_arg_t callback,
            uint32_t param,
            uint32_t memory,
            void *arg)
        {
            uint16_t uid = rand();
            BFarmIsrArg subscriber = {
                name,
                uid,
                this,       //class instance
                callback,   //callback
                param,      //param
                arg,
                type,
                queue_type,
                NULL
            };
            //subscriber.name = new char [strlen(name) + 1];
            //strcpy(subscriber.name, name);
            taskENTER_CRITICAL( &BFarm_mux );
            switch(type){
                case BFarmEventType::PIN_CHANGE:
                    subscribers.push_back(subscriber);
                    attachInterruptArg(param,BFarmEvent::isr,&subscribers.back(),CHANGE);
                    //attachInterrupt(param, std::bind(&BFarmEvent::isr,this), CHANGE);
                    break;
                case BFarmEventType::PIN_FALLING:
                    subscribers.push_back(subscriber);
                    attachInterruptArg(param,BFarmEvent::isr,&subscribers.back(),FALLING);
                    break;
                case BFarmEventType::PIN_RAISING:
                    subscribers.push_back(subscriber);
                    attachInterruptArg(param,BFarmEvent::isr,&subscribers.back(),RISING);
                    break;
                case BFarmEventType::EVERY:
                    //check existing name
                    for(auto const &el : subscribers)
                    {
                        if(strcmp(el.name,name) == 0)
                        {
                            return;
                        }
                    }
                    esp_timer_create_args_t _timerConfig;
                    _timerConfig.arg = arg;
                    _timerConfig.callback = callback;
                    _timerConfig.dispatch_method = ESP_TIMER_TASK;
                    _timerConfig.name = "Ticker";
                    subscriber.timer = {0};
                    esp_timer_create(&_timerConfig, &subscriber.timer);
                    esp_timer_start_periodic(subscriber.timer, param * 1000);
                    subscribers.push_back(subscriber);
                    break;
                case BFarmEventType::ONCE:
                    esp_timer_create_args_t _timerConfig_once;
                    _timerConfig_once.arg = arg;
                    _timerConfig_once.callback = callback;
                    _timerConfig_once.dispatch_method = ESP_TIMER_TASK;
                    _timerConfig_once.name = "Ticker";
                    subscriber.timer = {0};
                    esp_timer_create(&_timerConfig_once, &subscriber.timer);
                    esp_timer_start_once(subscriber.timer, param * 1000);
                    subscribers.push_back(subscriber);
                    break;
                case BFarmEventType::TASK:
                    const char *task_name = String(uid).c_str();
                    xTaskCreate(callback,task_name, memory, arg, 128, NULL);
                    // xTaskCreate(callback,task_name, 2048, arg, 128, NULL);
            }
            taskEXIT_CRITICAL( &BFarm_mux );
        }
        void inline attach(const char *name,BFarmEventType type,BFarmEventExecuteType queue_type,kb_callback_t callback,uint32_t param, uint32_t memory)
        {
            attach_master(name,type,queue_type,reinterpret_cast<BFarm_callback_with_arg_t>(callback), param, memory,NULL);
        }
        template<typename TArg>
        void inline attach(const char *name,BFarmEventType type,BFarmEventExecuteType queue_type,void (*callback)(TArg),uint32_t param, TArg arg, uint32_t memory)
        {
            void *ptr;
            memcpy(&ptr, &arg, sizeof arg);
            attach_master(name,type,queue_type,reinterpret_cast<BFarm_callback_with_arg_t>(callback), param, memory, ptr);
        }
        void inline attach(const char *name, BFarmEventType type,kb_callback_t callback,uint32_t param, uint32_t memory)
        {
            attach_master(name,type,BFarmEventExecuteType::PARALLEL,reinterpret_cast<BFarm_callback_with_arg_t>(callback), param, memory,0);
        }
        template<typename TArg>
        void inline attach(const char *name, BFarmEventType type,void (*callback)(TArg),uint32_t param, TArg arg, uint32_t memory)
        {
            void *ptr;
            memcpy(&ptr, &arg, sizeof arg);
            attach_master(name,type,BFarmEventExecuteType::PARALLEL,reinterpret_cast<BFarm_callback_with_arg_t>(callback), param, memory, ptr);
        }
        void inline enqueue(BFarmIsrArg *el)
        {
            taskENTER_CRITICAL( &BFarm_mux );
            queue.push_back(el);
            taskEXIT_CRITICAL( &BFarm_mux );
        }
        void inline detach(uint32_t param)
        {
            taskENTER_CRITICAL( &BFarm_mux );
            for(std::vector<BFarmIsrArg>::iterator el = subscribers.begin(); el != subscribers.end(); el++)
            {
                if(el->param == param)
                {
                    if(disable_callback(el))
                    {
                        el--;
                    }
                }
            }
            taskEXIT_CRITICAL( &BFarm_mux );
        }
        void inline BFarmEvent::detach(const char * name)
        {
            taskENTER_CRITICAL( &BFarm_mux );
            for(auto el = subscribers.begin(); el != subscribers.end(); el++)
            {
                if(strcmp(name,el->name) == 0)
                {
                    //Serial.println(el->name);
                    if(disable_callback(el))
                    {
                        el--;
                    }
                }
            }
            taskEXIT_CRITICAL( &BFarm_mux );
        }
        void inline BFarmEvent::detach_all()
        {
            taskENTER_CRITICAL( &BFarm_mux );
            for(auto el = subscribers.begin(); el != subscribers.end(); el++)
            {
                if(disable_callback(el))
                {
                    el--;
                }
            }
            taskEXIT_CRITICAL( &BFarm_mux );
        }
    private:
        bool inline disable_callback(std::vector<BFarmIsrArg>::iterator el)
        {
            bool removed = false;
            taskENTER_CRITICAL( &BFarm_mux );
            if(el->event_type == BFarmEventType::PIN_CHANGE ||
                el->event_type == BFarmEventType::PIN_RAISING ||
                el->event_type == BFarmEventType::PIN_FALLING)
            {
                detachInterrupt(el->param);
                subscribers.erase(el);
                removed = true;
            }else if(el->event_type == BFarmEventType::EVERY ||
                el->event_type == BFarmEventType::ONCE)
            {
                if(el->timer && el->timer != nullptr){
                    esp_timer_stop(el->timer);
                    //esp_timer_delete(el->timer);// TODO : check here, this line cause error when detach
                    el->timer = nullptr;
                }
                subscribers.erase(el);
                removed = true;
            }
            taskEXIT_CRITICAL( &BFarm_mux );
            return removed;
        }
};
#endif  // BFarmEvent_H