#include <Arduino.h>
#include <Wire.h>
#include "SHT31.h"

SHT31 sht;

float sht31_read(){
    float buff_temp;
    sht.read(); 
    buff_temp = sht.getTemperature();        
    return buff_temp;
}