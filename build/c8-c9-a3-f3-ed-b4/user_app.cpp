#include <HandySense.h>
#include <Arduino.h>
#include <WiFi.h>
#include <Wire.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include "time.h"
#include "soc/soc.h"
#include "soc/rtc_cntl_reg.h"

#include <getchip.h>
#include <Arduino.h>
#include <MAGELLAN_MQTT.h> //VERSION 1.0.0
#include <mqtt_client.h>
#include "MCP23008.h"
#include <Wire.h>

WiFiClient WiFi_client;
              MAGELLAN_MQTT magel(WiFi_client);
MCP23008 MCP (0x24);

String thingIdentifier = "12311412312131312331";
              String thingSecret = "31213444123123313";

void setup()
{
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);
  setPin_Relay(32, 33, 25, 26);
  setPin_ErrorSensor(19, 18, 5);
  pinMode(36, INPUT);
  pinMode(39, INPUT);
  pinMode(34, INPUT);
  pinMode(35, INPUT);
  
  Wire.begin();
Wire.setClock(10000);
MCP.begin();
MCP.pinMode8(0x00);
  Serial.begin(115200);
  

      WiFi.begin("nammonnnt","1212312121");
      while(WiFi.status() != WL_CONNECTED){
        delay(500);
      }

      setup_chipid("test@test");
      

              
              
              


              

              

              setting.endpoint = "magellan.ais.co.th";
              setting.ThingIdentifier = thingIdentifier;
              setting.ThingSecret = thingSecret;
              setting.clientBufferSize = defaultOTABuffer;
              magel.begin(setting);
              setupMQTT();

              

          magel.getControl([](String key, String value){
          Serial.println("# Control incoming");
          Serial.print("# # [Key]: ");
          Serial.println(key);
          Serial.print("# [Value]: ");
          Serial.println(value);
            if (key == "led_tg") {  if (value == "True") {  Serial.println(value);
      MCP.digitalWrite(0, HIGH);
      			
      			
      				
      					
      					
      					
      					  }  else {  MCP.digitalWrite(0, LOW);
      			
      			
      				
      					
      					
      					
      					  }}
          magel.control.ACK(key, value);
          });
}
void loop()
{
  
  loop_chipid("test@test");
magel.loop();
              magel.subscribes([](){
                 magel.subscribe.serverConfig(PLAINTEXT);
                 magel.subscribe.control(PLAINTEXT);
               });
}
