/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['sht45_begin'] = function (block) {
		var code = '';
		code += '#EXTINC#include "ArtronShop_SHT45.h"#END\n';
		code += '#EXTINC#include <Wire.h>#END\n';
		code += '#VARIABLE ArtronShop_SHT45 sht45;#END\n';
		code += '\n';
		code += '#SETUP Wire.begin();#END\n';

		return code;
	};

	Blockly.JavaScript['sht45_read_init'] = function (block) {
		var code = '';
		code += 'sht45.measure();\n';
		//code += 'Serial.println(sht.getTemperature(), 1);\n'; 
		return code;
	};

	Blockly.JavaScript['sht45_read_temp'] = function (block) {
		var code = 'sht45.temperature()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['sht45_read_humid'] = function (block) {
		var code = 'sht45.humidity()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['sht45_begin_rs485'] = function (block) {
		var code = '';
		code += '#EXTINC#include <ModbusMaster.h>#END\n';
		code += '#VARIABLE ModbusMaster rs485_SHT45id4;#END\n';
		code += '\n';
		code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Serial2.begin(9600);#END\n';
		code += '#SETUP rs485_SHT45id4.begin(4, Serial2);#END\n';
		code += '#LOOP_EXT_CODE uint8_t result_temp4;#END\n';
		code += '#LOOP_EXT_CODE rs485_SHT45id4.readHoldingRegisters(0, 2);#END\n';
		return code;
	};
	
	Blockly.JavaScript['sht45_read_temp_rs485'] = function (block) {
		var code = '(rs485_SHT45id4.getResponseBuffer(0) / 100.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	
	Blockly.JavaScript['sht45_read_humid_rs485'] = function (block) {
		var code = '(rs485_SHT45id4.getResponseBuffer(1) / 100.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}