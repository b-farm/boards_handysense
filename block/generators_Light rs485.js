/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['rs485_light_begin'] = function (block) {
		var id = block.getFieldValue("id");
		var code = `#EXTINC#include <ModbusMaster.h>#END\n
		#VARIABLE ModbusMaster rs485_pair;#END\n
		#VARIABLE float pair;#END\n
		\n
		#SETUP Wire.begin();#END\n
		#SETUP Serial2.begin(9600);#END\n
		#SETUP rs485_pair.begin(${id}, Serial2);#END\n
		#LOOP_EXT_CODE uint8_t result_pair;#END\n
		#LOOP_EXT_CODE result_pair = rs485_pair.readHoldingRegisters(0, 2);#END\n`;
		return code;
	};

	Blockly.JavaScript['rs485_Light_read'] = function (block) {
		var code = '(rs485_pair.getResponseBuffer(0))';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

}