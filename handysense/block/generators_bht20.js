module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript['bht20_setup'] = function (block) {
		var code = '';
		code += '#EXTINC#include "DHT20.h"#END\n';
		code += '#EXTINC#include <Wire.h>#END\n';
		code += '#VARIABLE DHT20 DHT20;#END\n';
		code += '\n';
		code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Wire.setClock(10000);#END\n';
		code += '#SETUP DHT20.begin();#END\n';
		return code;
	};

	Blockly.JavaScript['bht20_loop'] = function (block) {
		var code = '';
		code += 'DHT20.read();\n';
		return code;
	};
	Blockly.JavaScript['bht20_get_temperature'] = function (block) {
		var code = 'DHT20.getTemperature()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['bht20_get_humidity'] = function (block) {
		var code = 'DHT20.getHumidity()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

};