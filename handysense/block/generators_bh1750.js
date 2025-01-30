module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript['bh1750_begin'] = function (block) {
		var code = '';
		code += '#EXTINC#include <BH1750.h>#END\n';
		code += '#EXTINC#include <Wire.h>#END\n';
		code += '#VARIABLE BH1750 lightMeter;#END\n';
		code += '\n';
        code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP lightMeter.begin();#END\n';
		return code;
	};

	Blockly.JavaScript['bh1750_read'] = function (block) {	
		var code = 'lightMeter.readLightLevel()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
};