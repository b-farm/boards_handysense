#include "TimeBFarm.h"
#include "time.h"

const char* _ntpServer = "pool.ntp.org";
const long  _gmtOffset_sec = 3600 * 7;// GTM+7 for Bangkok Hanoi Jakata

void BFarmTime::sync()
{
    configTime(_gmtOffset_sec, 0, _ntpServer);
}
int BFarmTime::getYear()
{
    struct tm _timeinfo;
    if(!getLocalTime(&_timeinfo)){
        return -1;
    }
    return _timeinfo.tm_year + 1900;
}
int BFarmTime::getMonth()
{
    struct tm _timeinfo;
    if(!getLocalTime(&_timeinfo)){
        return -1;
    }
    return _timeinfo.tm_mon + 1;
}
int BFarmTime::getDayOfMonth()
{
    struct tm _timeinfo;
    if(!getLocalTime(&_timeinfo)){
        return -1;
    }
    return _timeinfo.tm_mday;
}
int BFarmTime::getDayOfWeek()
{
    struct tm _timeinfo;
    if(!getLocalTime(&_timeinfo)){
        return -1;
    }
    return _timeinfo.tm_wday;
}
int BFarmTime::getHour()
{
    struct tm _timeinfo;
    if(!getLocalTime(&_timeinfo)){
        return -1;
    }
    return _timeinfo.tm_hour;
}
int BFarmTime::getMinute()
{
    struct tm _timeinfo;
    if(!getLocalTime(&_timeinfo)){
        return -1;
    }
    return _timeinfo.tm_min;
}
int BFarmTime::getSecond()
{
    struct tm _timeinfo;
    if(!getLocalTime(&_timeinfo)){
        return -1;
    }
    return _timeinfo.tm_sec;
}