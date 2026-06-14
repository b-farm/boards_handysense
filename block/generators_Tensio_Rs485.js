/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['TMEC_Tensio_Rs485_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
        	#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster TMEC_Tensio_rs485;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
				TMEC_Tensio_rs485.begin(${text_ID}, Serial2);
			#END

    `;
		return code;
	};

	Blockly.JavaScript['TMEC_Tensio_Rs485_riR'] = function (block) {
		var code = 'uint8_t result_TMEC_Tensio_rs485 = TMEC_Tensio_rs485.readInputRegisters(0, 6);';
		return code;
	};

	Blockly.JavaScript['TMEC_Tensio_Rs485_temp_read'] = function (block) {
		var code = '(TMEC_Tensio_rs485.getResponseBuffer(1) / 10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['TMEC_Tensio_Rs485_humid_read'] = function (block) {
		var code = '(TMEC_Tensio_rs485.getResponseBuffer(2) / 10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['TMEC_Tensio_Rs485_light_read'] = function (block) {
		var code = '(TMEC_Tensio_rs485.getResponseBuffer(3) / 1.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['TMEC_Tensio_Rs485_volt_read'] = function (block) {
		var code = '(TMEC_Tensio_rs485.getResponseBuffer(5) / 1000.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}