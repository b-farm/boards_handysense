/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript['sht31_begin'] = function (block) {
		var code = '';
		code += '#EXTINC#include "SHT31.h"#END\n';
		code += '#EXTINC#include <Wire.h>#END\n';
		code += '#VARIABLE SHT31 sht;#END\n';
		code += '\n';
		code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Wire.setClock(10000);#END\n';
		code += '#SETUP sht.begin(0x44);#END\n';
		return code;
	};

	Blockly.JavaScript['sht31_read_init'] = function (block) {
		var code = '';
		code += 'sht.read();\n';
		//code += 'Serial.println(sht.getTemperature(), 1);\n'; 
		return code;
	};

	Blockly.JavaScript['sht31_read_temp'] = function (block) {
		var code = 'sht.getTemperature()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	// Blockly.JavaScript['sht20_read_temperature'] = function (block) {
	// 	var code = 'sht20.temperature()';
	// 	return [code, Blockly.JavaScript.ORDER_NONE];
	// };

	Blockly.JavaScript['sht31_read_humidity'] = function (block) {
		var code = 'sht31.getHumidity()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	// <------------------------------------------------->

	Blockly.JavaScript['sht31_begin_i2c'] = function (block) {
		var code = '';
		code += '#EXTINC#include "SHT31.h"#END\n';
		code += '#EXTINC#include <Wire.h>#END\n';
		code += '#VARIABLE SHT31 sht;#END\n';
		code += '\n';
		code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Wire.setClock(10000);#END\n';
		code += '#SETUP sht.begin(0x44);#END\n';
		return code;
	};

	Blockly.JavaScript['sht31_read_init_i2c'] = function (block) {
		var code = '';
		code += 'sht.read();\n';
		//code += 'Serial.println(sht.getTemperature(), 1);\n'; 
		return code;
	};

	Blockly.JavaScript['sht31_read_temp_i2c'] = function (block) {
		var code = 'sht.getTemperature()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['sht31_read_humid_i2c'] = function (block) {
		var code = 'sht.getHumidity()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};


	Blockly.JavaScript['sht31_begin_rs'] = function (block) {
		var code = '';
		code += '#EXTINC#include <ModbusMaster.h>#END\n';
		code += '#VARIABLE ModbusMaster rs485_sht31Meter;#END\n';
		code += '\n';
		code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Serial2.begin(9600);#END\n';
		code += '#SETUP rs485_sht31Meter.begin(1, Serial2);#END\n';
		code += '#LOOP_EXT_CODE uint8_t result_temp;#END\n';
		code += '#LOOP_EXT_CODE rs485_sht31Meter.readHoldingRegisters(0, 2);#END\n';
		return code;
	};
	
	Blockly.JavaScript['sht31_read_temp_rs'] = function (block) {
		var code = '(rs485_sht31Meter.getResponseBuffer(0) / 10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	
	Blockly.JavaScript['sht31_read_humid_rs'] = function (block) {
		var code = '(rs485_sht31Meter.getResponseBuffer(1) / 10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

};