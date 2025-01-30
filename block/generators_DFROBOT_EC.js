/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript['DFROBOT_EC_begin_DT7'] = function (block) {
		var code = '';
		code += '#EXTINC#include "DFRobot_EC.h"#END\n';
		code += '#VARIABLE DFRobot_EC ec;#END\n';
		code += '\n';
		return code;
	};

	Blockly.JavaScript['DFROBOT_EC_read_DT7'] = function (block) {
		var set_volt = Blockly.JavaScript.valueToCode(block, 'volt', Blockly.JavaScript.ORDER_ATOMIC);
		var set_temp = Blockly.JavaScript.valueToCode(block, 'temp', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `ec.readEC(${set_volt}, ${set_temp})*10000`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	// Blockly.JavaScript['sht20_read_temperature'] = function (block) {
	// 	var code = 'sht20.temperature()';
	// 	return [code, Blockly.JavaScript.ORDER_NONE];
	// };

	// Blockly.JavaScript['sht20_read_humidity'] = function (block) {
	// 	var code = 'sht20.humidity()';
	// 	return [code, Blockly.JavaScript.ORDER_NONE];
	// };


};