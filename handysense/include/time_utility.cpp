#include "RTClib.h"
#include <sys/time.h>
#include "time.h"
#include "time_utility.h"


#ifdef DEBUG
#define DEBUG_PRINT(x)   // Serial.print(x)
#define DEBUG_PRINTLN(x) // Serial.println(x)
#else
#define DEBUG_PRINT(x) Serial.print(x)
#define DEBUG_PRINTLN(x) Serial.println(x)
#endif

void print_system_time(void)
{
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo))
  {
    Serial.print("Invalid time: ");
    //    Serial.println("Failed to obtain time");
  }
  Serial.println(&timeinfo, "%A, %B %d %Y %H:%M:%S");
}

 struct tm * get_system_time_tm (struct tm *new_time){
    // Get current time as 'struct timeval'.
   struct timeval new_timeval;
  int err = gettimeofday(&new_timeval, NULL);
  assert(err == 0);
  // Extract Unix time
  time_t new_unix_time = new_timeval.tv_sec;
  // Convert to broken-down time
  // See https://en.cppreference.com/w/c/chrono/localtime
 // struct tm new_time;
//  new_time = &result;

  localtime_r(&new_unix_time, new_time);
  return (new_time);

}
struct tm new_time;
uint16_t get_system_time_year(void)
{
  get_system_time_tm(&new_time);

  return (new_time.tm_year + 1900);
}

uint8_t get_system_time_month(void)
{
  get_system_time_tm(&new_time);
  return (new_time.tm_mon + 1);
}
uint8_t get_system_time_day(void)
{
  get_system_time_tm(&new_time);

  return (new_time.tm_mday);
}

uint8_t get_system_time_hour(void)
{
  get_system_time_tm(&new_time);

  return (new_time.tm_hour);
}

uint8_t get_system_time_minute(void)
{
  get_system_time_tm(&new_time);

  return (new_time.tm_min);
}

uint8_t get_system_time_second(void)
{
  get_system_time_tm(&new_time);

  return (new_time.tm_sec);
}
uint8_t get_system_time_wday(void)
{
  get_system_time_tm(&new_time);

  return (new_time.tm_wday); // 0-Sunday -> 6-Saturday
}
/**************************************************************************/
/*!
    @brief  get rtc time in String
    @param
*/
/**************************************************************************/
char *get_system_time(void)
{
  get_system_time_tm(&new_time);

  return(asctime(&new_time));
}

void set_system_time(uint16_t _year,uint8_t _month,uint8_t _day,uint8_t _hour,uint8_t _minute,uint8_t _second)
{
  struct tm tm_newtime;

  tm_newtime.tm_year = _year - 1900;
  tm_newtime.tm_mon = _month - 1;
  tm_newtime.tm_mday = _day;
  tm_newtime.tm_hour = _hour;
  tm_newtime.tm_min = _minute;
  tm_newtime.tm_sec = _second;
  tm_newtime.tm_isdst = 0;

  timeval tv = {mktime(&tm_newtime), 0};
  timezone tz = {0, 0};
  settimeofday(&tv, &tz);
}


// uint16_t get_system_time_year(void)
// {
//   // Get current time as 'struct timeval'.
//   struct timeval new_timeval;
//   int err = gettimeofday(&new_timeval, NULL);
//   assert(err == 0);
//   // Extract Unix time
//   time_t new_unix_time = new_timeval.tv_sec;
//   // Convert to broken-down time
//   // See https://en.cppreference.com/w/c/chrono/localtime
//   struct tm new_time;
//   localtime_r(&new_unix_time, &new_time);
//   // 'new_time' now contains the current time components
//   // return(asctime(&new_time));
//   return (new_time.tm_year + 1900);
// }

// uint8_t get_system_time_month(void)
// {
//   // Get current time as 'struct timeval'.
//   struct timeval new_timeval;
//   int err = gettimeofday(&new_timeval, NULL);
//   assert(err == 0);
//   // Extract Unix time
//   time_t new_unix_time = new_timeval.tv_sec;
//   // Convert to broken-down time
//   struct tm new_time;
//   localtime_r(&new_unix_time, &new_time);
//   // 'new_time' now contains the current time components
//   return (new_time.tm_mon + 1);
// }
// uint8_t get_system_time_day(void)
// {
//   // Get current time as 'struct timeval'.
//   struct timeval new_timeval;
//   int err = gettimeofday(&new_timeval, NULL);
//   assert(err == 0);
//   // Extract Unix time
//   time_t new_unix_time = new_timeval.tv_sec;
//   // Convert to broken-down time
//   // See https://en.cppreference.com/w/c/chrono/localtime
//   struct tm new_time;
//   localtime_r(&new_unix_time, &new_time);
//   // 'new_time' now contains the current time components
//   // return(asctime(&new_time));
//   return (new_time.tm_mday);
// }

// uint8_t get_system_time_hour(void)
// {
//   // Get current time as 'struct timeval'.
//     struct timeval new_timeval;
//   int err = gettimeofday(&new_timeval, NULL);
//   assert(err == 0);
//   // Extract Unix time
//   time_t new_unix_time = new_timeval.tv_sec;
//   // Convert to broken-down time
//   // See https://en.cppreference.com/w/c/chrono/localtime
//   struct tm new_time;
//   localtime_r(&new_unix_time, &new_time);
//   // 'new_time' now contains the current time components
//   // return(asctime(&new_time));
//   return (new_time.tm_hour);
// }

// uint8_t get_system_time_minute(void)
// {
//   // Get current time as 'struct timeval'.
//   struct timeval new_timeval;
//   int err = gettimeofday(&new_timeval, NULL);
//   assert(err == 0);
//   // Extract Unix time
//   time_t new_unix_time = new_timeval.tv_sec;
//   // Convert to broken-down time
//   // See https://en.cppreference.com/w/c/chrono/localtime
//   struct tm new_time;
//   localtime_r(&new_unix_time, &new_time);
//   // 'new_time' now contains the current time components
//   // return(asctime(&new_time));
//   return (new_time.tm_min);
// }

// uint8_t get_system_time_second(void)
// {
//   // Get current time as 'struct timeval'.
//   struct timeval new_timeval;
//   int err = gettimeofday(&new_timeval, NULL);
//   assert(err == 0);
//   // Extract Unix time
//   time_t new_unix_time = new_timeval.tv_sec;
//   // Convert to broken-down time
//   // See https://en.cppreference.com/w/c/chrono/localtime
//   struct tm new_time;
//   localtime_r(&new_unix_time, &new_time);
//   // 'new_time' now contains the current time components
//   // return(asctime(&new_time));
//   return (new_time.tm_sec);
// }
// /**************************************************************************/
// /*!
//     @brief  get rtc time in String
//     @param
// */
// /**************************************************************************/
// char *get_system_time(void)
// {
//   // Get current time as 'struct timeval'.
//    struct timeval new_timeval;
//   int err = gettimeofday(&new_timeval, NULL);
//   assert(err == 0);
//   // Extract Unix time
//   time_t new_unix_time = new_timeval.tv_sec;
//   // Convert to broken-down time
//   // See https://en.cppreference.com/w/c/chrono/localtime
//   struct tm new_time;
//   localtime_r(&new_unix_time, &new_time);
//   // 'new_time' now contains the current time components
//   return(asctime(&new_time));
// }

