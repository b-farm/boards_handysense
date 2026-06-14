/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['WTs_rs485_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster rs485_Weather_HTCo2PLx;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
				rs485_Weather_HTCo2PLx.begin(${text_ID}, Serial2);
			#END

	`;
		return code;
	};

	Blockly.JavaScript['WTs_rs485_readholding'] = function (block) {
		var code = `
				uint8_t result_rs485_Weather_HTCo2PLx = rs485_Weather_HTCo2PLx.readHoldingRegisters(500, 10);
	`;
		return code;
	};

	Blockly.JavaScript['WTs_rs485_humidity'] = function (block) {
		var code = '(rs485_Weather_HTCo2PLx.getResponseBuffer(0)/10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['WTs_rs485_temperature'] = function (block) {
		var code = '(rs485_Weather_HTCo2PLx.getResponseBuffer(1)/10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['WTs_rs485_noise'] = function (block) {
		var code = '(rs485_Weather_HTCo2PLx.getResponseBuffer(2)/10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['WTs_rs485_co2'] = function (block) {
		var code = '(rs485_Weather_HTCo2PLx.getResponseBuffer(3)/1.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['WTs_rs485_pressure'] = function (block) {
		var code = '(rs485_Weather_HTCo2PLx.getResponseBuffer(5)/1.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['WTs_rs485_lux'] = function (block) {
		var code = '(rs485_Weather_HTCo2PLx.getResponseBuffer(7))';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}