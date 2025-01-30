/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['rs485_NPK_begin_DT7'] = function (block) {
		var code = '';
		code += '#EXTINC#include <ModbusMaster.h>#END\n';
		code += '#VARIABLE ModbusMaster rs485_npk;#END\n';
		code += '#VARIABLE float npk;#END\n';
		code += '\n';
		//code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Serial2.begin(9600);#END\n';
		code += '#SETUP rs485_npk.begin(1, Serial2);#END\n';
		code += '#LOOP_EXT_CODE uint8_t result_npk;#END\n';
		code += '#LOOP_EXT_CODE     result_npk = rs485_npk.readHoldingRegisters(0, 10);#END\n';
		return code;
	};

	Blockly.JavaScript['rs485_mois_read_DT7'] = function (block) {
		var code = '(rs485_npk.getResponseBuffer(1)/ 10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['rs485_temps_read_DT7'] = function (block) {
		var code = '(rs485_npk.getResponseBuffer(2)/ 10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['rs485_ec_read_DT7'] = function (block) {
		var code = '(rs485_npk.getResponseBuffer(3))';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['rs485_PH_read_DT7'] = function (block) {
		var code = '(rs485_npk.getResponseBuffer(4))';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['rs485_N_read_DT7'] = function (block) {
		var code = '(rs485_npk.getResponseBuffer(5))';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['rs485_P_read_DT7'] = function (block) {
		var code = '(rs485_npk.getResponseBuffer(6))';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['rs485_K_read_DT7'] = function (block) {
		var code = '(rs485_npk.getResponseBuffer(7))';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

}