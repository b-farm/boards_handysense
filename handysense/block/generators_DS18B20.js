module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript["DS18B20_initial"] = function (block) {

		var set_gpio = block.getFieldValue('addr');
		var code = `
	#EXTINC 
	#include <OneWire.h>
	#include <DallasTemperature.h>
	#END
	#FUNCTION
	float readTempDS1820(DeviceAddress deviceAddress)
	{
		sensorsDS1820.requestTemperatures();
		float tempC = sensorsDS1820.getTempC(deviceAddress);
		return (tempC);
	}
	#END
	#VARIABLE
	// Data wire is plugged into port 2 on the Arduino
	#define ONE_WIRE_BUS ${set_gpio}
	OneWire oneWire(ONE_WIRE_BUS);
	DallasTemperature sensorsDS1820(&oneWire);
	DeviceAddress insideThermometer;
	float readTempDS1820(DeviceAddress deviceAddress);
	#END
	// locate devices on the bus
  	Serial.print("Locating devices...");
  	sensorsDS1820.begin();
  	Serial.print("Found ");
  	Serial.print(sensorsDS1820.getDeviceCount(), DEC);
  	Serial.println(" devices.");
	if (!sensorsDS1820.getAddress(insideThermometer, 0)) Serial.println("Unable to find address for Device 0");
	sensorsDS1820.setResolution(insideThermometer, 9);
	#LOOP_EXT_CODE
	
	#END
	`;
		return code;
	};


	Blockly.JavaScript["DS18B20_read"] = function (block) {

		var code = `readTempDS1820(insideThermometer)`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}
}