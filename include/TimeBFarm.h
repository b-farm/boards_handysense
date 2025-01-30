// #include "time.h"

// const char* _ntpServer          = "pool.ntp.org";
// const char* _nistTime           = "time.nist.gov";
// const long  _gmtOffset_sec      = 7 * 3600;
// const int   _daylightOffset_sec = 0;
// struct tm   _timeinfo;
// int _hourNow,
//     _minuteNow,
//     _secondNow,
//     _dayNow,
//     _monthNow,
//     _yearNow,
//     _weekdayNow;

// void get_sync() {
//     configTime(_gmtOffset_sec, _daylightOffset_sec, _ntpServer, _nistTime);
// }

// int get_secondNow() {
//     _secondNow = _timeinfo.tm_sec;
//     return _secondNow;
// }

// #ifndef BFARMTIME_H
// #define BFARMTIME_H

#if(ARDUINO >= 100)
    #include "Arduino.h"
#else
    #include "WProgram.h"
#endif

#include "time.h"

class BFarmTime
{
    public:
        void sync(void);
        int getYear(void);
        int getMonth(void);
        int getDayOfMonth(void);
        int getDayOfWeek(void);
        int getHour(void);
        int getMinute(void);
        int getSecond(void);    
};
/*
class BFarmHTTP
{
    public:
        String httpGet(String url);
        String httpPost(String url,String data,const char* contentType);        
};*/

// #endif