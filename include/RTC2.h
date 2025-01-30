#include <RTClib.h>
RTC_DS1307 rtc2;
DateTime RTCnow;
void print_rtc_time(void)
{
  RTCnow = rtc2.now();
  char timeStamp[20];
  sprintf(timeStamp,"%04d-%02d-%02d %02d:%02d:%02d",RTCnow.year(),RTCnow.month(),RTCnow.day(),RTCnow.hour(),RTCnow.minute(),RTCnow.second());
  Serial.println(timeStamp);
}