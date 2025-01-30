module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript['soil_begin'] = function (block) {
		var code = '';
		code += '#EXTINC#include <SoftwareSerial.h>#END\n';
		// code += '#EXTINC#include <Wire.h>#END\n';
		// code += '#VARIABLE SOIL lightMeter;#END\n';
		code += '\n';
        code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP lightMeter.begin();#END\n';
		return code;
	};

	Blockly.JavaScript['soil_read'] = function (block) {	
		var code = 'SOIL.readLightLevel()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
};