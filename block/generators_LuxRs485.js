/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict'; Blockly.JavaScript['rs485_lux120k_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster lux120k_rs485;
				float lux120k;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
				lux120k_rs485.begin(${text_ID}, Serial2);
			#END

			#LOOP_EXT_CODE
				uint8_t result_lux120k;
    			result_lux120k = lux120k_rs485.readHoldingRegisters(0, 5);
			#END
	`;
		return code;
	};

	Blockly.JavaScript["rs485_lux120k_read"] = function () {
		var code = `(lux120k_rs485.getResponseBuffer(3))`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}