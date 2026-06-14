/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['nitrate_isfet_rs485_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster nitrate_isfet_rs485;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(115200);
				nitrate_isfet_rs485.begin(${text_ID}, Serial2);
			#END

	`;
		return code;
	};

	Blockly.JavaScript['nitrate_isfet_rs485_readholding'] = function (block) {
		var code = `
				uint8_t result_nitrate_isfet_rs485 = nitrate_isfet_rs485.readHoldingRegisters(0, 10);
	`;
		return code;
	};

	Blockly.JavaScript["nitrate_isfet_rs485_vout_read"] = function (block) {
		var code = `(nitrate_isfet_rs485.getResponseBuffer(0) / 10.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["nitrate_isfet_rs485_vout_temp_read"] = function (block) {
		var code = `(nitrate_isfet_rs485.getResponseBuffer(1) / 10.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["nitrate_isfet_rs485_sample_value_read"] = function (block) {
		var code = `(nitrate_isfet_rs485.getResponseBuffer(2) / 10.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["nitrate_isfet_rs485_temperature_read"] = function (block) {
		var code = `(nitrate_isfet_rs485.getResponseBuffer(3) / 10.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["nitrate_isfet_rs485_error_read"] = function (block) {
		var code = `(nitrate_isfet_rs485.getResponseBuffer(4) / 100.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["nitrate_isfet_rs485_r_quare_read"] = function (block) {
		var code = `(nitrate_isfet_rs485.getResponseBuffer(5) / 1000.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["nitrate_isfet_rs485_sensitivity_read"] = function (block) {
		var code = `(nitrate_isfet_rs485.getResponseBuffer(6) / 10.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["nitrate_isfet_rs485_STD1_50ppm_read"] = function (block) {
		var code = `(nitrate_isfet_rs485.getResponseBuffer(7) / 100.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["nitrate_isfet_rs485_STD2_100ppm_read"] = function (block) {
		var code = `(nitrate_isfet_rs485.getResponseBuffer(8) / 100.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["nitrate_isfet_rs485_STD3_300ppm_read"] = function (block) {
		var code = `(nitrate_isfet_rs485.getResponseBuffer(9) / 100.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}