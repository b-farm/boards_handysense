#include <HandySense.h>
#include <Arduino.h>
#include <WiFi.h>
#include <Wire.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include "time.h"

#include <ModbusMaster.h>
#include <BH1750.h>
#include <Wire.h>

ModbusMaster rs485_sht31Meter;
BH1750 lightMeter;
ModbusMaster soil_rs485;



void setup()
{
  Wire.begin();
Serial2.begin(9600);
rs485_sht31Meter.begin(1, Serial2);
lightMeter.begin();
soil_rs485.begin(2, Serial2);
  setup_HandySense();
    LED_WIFI = 26;
  LED_SERVER = 27;

                  setPin_Relay(32,33,25,26);
                  setPin_ErrorSensor(19,18,5);

                  type_RTC = 0;
      eventInterval = 2000;

                  eventInterval_brightness = 2000;
  eventInterval_publishData = 30000;
}
void loop()
{
      loop_HandySense(((soil_rs485.getResponseBuffer(1) / 10.00f)),(lightMeter.readLightLevel()),((rs485_sht31Meter.getResponseBuffer(0) / 10.00f)),((rs485_sht31Meter.getResponseBuffer(1) / 10.00f)));

  uint8_t result_temp;
rs485_sht31Meter.readHoldingRegisters(0, 2);
uint8_t result_soil;
soil_rs485.readHoldingRegisters(0, 2);
}
