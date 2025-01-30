#include <HandySense.h>
#include <Arduino.h>
#include <WiFi.h>
#include <Wire.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include "time.h"

#include <getchip.h>





void setup()
{
  
  WiFi.begin("nammonnnt","1212312121");
      while(WiFi.status() != WL_CONNECTED){
        delay(500);
      }

      setup_chipid();
}
void loop()
{
  
  loop_chipid();
}
