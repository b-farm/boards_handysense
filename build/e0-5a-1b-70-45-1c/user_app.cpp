#include <HandySense.h>
#include <Arduino.h>
#include <WiFi.h>
#include <Wire.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include "time.h"

#include "SHT31.h"
#include <Wire.h>

SHT31 sht;



void setup()
{
  Wire.begin();
Wire.setClock(10000);
sht.begin(0x44);
  Serial.begin(115200);
}
void loop()
{
    sht.read();
  Serial.println((sht.getTemperature()));
  delay(1000);
  Serial.println((sht.getHumidity()));
  delay(1000);

  
}
