/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['rs485_Ultrasonic_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
		#EXTINC
			#include <ModbusMaster.h>
		#END

		#VARIABLE
			ModbusMaster Ultrars485;
		#END

		#SETUP
			Wire.begin();
			Serial2.begin(9600);
			Ultrars485.begin(${text_ID}, Serial2);
		#END

	`;
		return code;
	};

	Blockly.JavaScript['rs485_Ultrasonic_readholdingregisters'] = function (block) {
		var code = `
			uint8_t result_rs485_Ultrars485 = Ultrars485.readHoldingRegisters(256, 2);
	`;
		return code;
	};

	Blockly.JavaScript['rs485_Ultrasonic_read'] = function (block) {
		var code = `(Ultrars485.getResponseBuffer(256)/10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}