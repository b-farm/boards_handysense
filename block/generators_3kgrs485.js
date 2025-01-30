/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript["rs485_3kg_begin"] = function () {
		var code = "";
		code += "#EXTINC#include <ModbusMaster.h>#END\n";
		code += "#VARIABLE ModbusMaster rs485_weight;#END\n";
		code += "\n";
		code += "#SETUP Wire.begin();#END\n";
		code += "#SETUP Serial2.begin(9600);#END\n";
		code += "#SETUP rs485_weight.begin(1, Serial2);#END\n";
		code += "#LOOP_EXT_CODE uint8_t result_rs485_weight;#END\n";
		code += "#LOOP_EXT_CODE rs485_weight.readHoldingRegisters(0, 2);#END\n";
		return code;
	};

	Blockly.JavaScript["rs485_3kg_read"] = function (block) {
		var offset = block.getFieldValue("offset");
		var code = `rs485_weight.getResponseBuffer(1) + Number(${offset})`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
};
