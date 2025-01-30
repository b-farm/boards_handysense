#include <HandySense.h>
#include <Arduino.h>
#include <WiFi.h>
#include <Wire.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include "time.h"
#include "soc/soc.h"
#include "soc/rtc_cntl_reg.h"



double n_random;



void setup()
{
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);
  setPin_Relay(32, 33, 25, 26);
  setPin_ErrorSensor(19, 18, 5);
  pinMode(36, INPUT);
  pinMode(39, INPUT);
  pinMode(34, INPUT);
  pinMode(35, INPUT);
  
  
  Serial.begin(115200);
  Serial.println(((String("Hello")+String("B-FARM!"))));
}
void loop()
{
    n_random = rand() % 100 + 0;
  Serial.println(((String("Random : ")+String(n_random))));
  delay(1000);

  
}
