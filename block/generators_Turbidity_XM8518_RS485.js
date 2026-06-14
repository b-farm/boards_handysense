/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['Turbidity_XM8518_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster Turbidity_XM8518_Rs485;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
				Turbidity_XM8518_Rs485.begin(${text_ID}, Serial2);
			#END

	`;
		return code;
	};

	Blockly.JavaScript["Turbidity_XM8518_readHoldingRegisters"] = function (block) {
		var code = `uint8_t result_Turbidity_XM3318_Rs485 = Turbidity_XM3318_Rs485.readHoldingRegisters(0, 1);`;
		return code;
	};

	Blockly.JavaScript["Turbidity_XM8518_read"] = function (block) {
		var code = `(Turbidity_XM8518_Rs485.getResponseBuffer(0))`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}