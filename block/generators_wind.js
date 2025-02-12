/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	"use strict";


	Blockly.JavaScript['winddirec3_begin_rs485'] = function (block) {
		var id = block.getFieldValue("id");
		var code = `#EXTINC#include <ModbusMaster.h>#END\n
		#VARIABLE ModbusMaster rs485_direc3;#END\n
		#VARIABLE float direc3;#END\n
		\n
		#SETUP Serial2.begin(9600);#END\n
		#SETUP rs485_direc3.begin(${id}, Serial2);#END\n
		#LOOP_EXT_CODE uint8_t result_direc3;#END\n
		#LOOP_EXT_CODE     result_direc3 = rs485_direc3.readHoldingRegisters(0, 2);#END\n`
		return code;
	};

	///Blockly.JavaScript['VEML7700_read_init'] = function (block) {
	//	var code = '';
	//	code += 'float lux;\n';
	//	code += 'als.getALSLux(lux);\n'; 
	//	return code;
	//};

	Blockly.JavaScript['winddirec3_read_rs485'] = function (block) {
		var code = '((rs485_direc3.getResponseBuffer(0))/10.0f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};



};