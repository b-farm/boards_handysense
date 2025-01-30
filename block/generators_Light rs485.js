module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['rs485_light_begin'] = function (block) {
		var code = '';
		code += '#EXTINC#include <ModbusMaster.h>#END\n';
		code += '#VARIABLE ModbusMaster rs485_pair;#END\n';
		code += '#VARIABLE float pair;#END\n';
		code += '\n';
		//code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Serial2.begin(4800);#END\n';
		code += '#SETUP rs485_pair.begin(1, Serial2);#END\n';
		code += '#LOOP_EXT_CODE uint8_t result_pair;#END\n';
		code += '#LOOP_EXT_CODE     result_pair = rs485_pair.readHoldingRegisters(0, 2);#END\n';
		return code;
	};

	Blockly.JavaScript['rs485_Light_read'] = function (block) {
		var code = '(rs485_pair.getResponseBuffer(0))';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

}