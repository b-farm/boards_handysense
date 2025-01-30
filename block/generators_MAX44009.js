module.exports = function (Blockly) {
	"use strict";


	Blockly.JavaScript['MAX44009_begin'] = function (block) {
		var code = '';
		code += '#EXTINC#include <MAX44009.h>#END\n';
		code += '#EXTINC#include <Wire.h>#END\n';
		code += '#VARIABLE Max44009 myLux(0x4A);#END\n';
		code += '#VARIABLE uint32_t lastDisplay = 0;#END\n';
		code += '\n';
		code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Wire.setClock(10000);#END\n';
		//code += '#SETUP myLux.begin(0x4A);#END\n';
		code += '#LOOP_EXT_CODE uint32_t interval = 1000;#END\n';

		return code;
	};



	Blockly.JavaScript['MAX44009_read'] = function (block) {
		var code = 'myLux.getLux()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};


}