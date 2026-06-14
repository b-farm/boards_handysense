/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['rs485_ANS_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster ANS_rs485;
				float ANSrs485;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
				ANS_rs485.begin(${text_ID}, Serial2);
			#END

			#LOOP_EXT_CODE
				uint8_t result_ANSrs485 = ANS_rs485.readHoldingRegisters(0, 3);
			#END
	`;
		return code;
	};

	Blockly.JavaScript["rs485_ANS_ammonia_read"] = function () {
		var code = `(ANS_rs485.getResponseBuffer(0) / 100.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["rs485_ANS_pH_read"] = function () {
		var code = `(ANS_rs485.getResponseBuffer(1) / 100.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["rs485_ANS_temp_read"] = function () {
		var code = `(ANS_rs485.getResponseBuffer(2) / 10.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}