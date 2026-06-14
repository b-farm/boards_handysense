/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['rs485_soiltMuti_begin'] = function (block) {
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster soilt_rs485;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
			#END
	`;
		return code;
	};

	Blockly.JavaScript['rs485_soiltMuti_soilmoistRead'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `([](){
		soilt_rs485.begin(${text_ID}, Serial2);
		delay(50);
		if (soilt_rs485.readHoldingRegisters(0, 2) == soilt_rs485.ku8MBSuccess) {
			return (soilt_rs485.getResponseBuffer(0) / 10.00f);
		}
		return 0.0f;
	}())`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['rs485_soiltMuti_soiltempRead'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `([](){
		soilt_rs485.begin(${text_ID}, Serial2);
		delay(50);
		if (soilt_rs485.readHoldingRegisters(0, 2) == soilt_rs485.ku8MBSuccess) {
			return (soilt_rs485.getResponseBuffer(1) / 10.00f);
		}
		return 0.0f;
	}())`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}