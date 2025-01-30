/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {

	Blockly.JavaScript['rs485_PH_begin'] = function (block) {
		var code = '';
		code += '#EXTINC#include <ModbusMaster.h>#END\n';
		code += '#VARIABLE ModbusMaster PHrs485;#END\n';
		code += '#VARIABLE float PH;#END\n';
		code += '\n';
		//code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Serial2.begin(9600);#END\n';
		code += '#SETUP PHrs485.begin(1, Serial2);#END\n';
		code += '#LOOP_EXT_CODE uint8_t result_PH;#END\n';
		code += '#LOOP_EXT_CODE     result_PH = PHrs485.readHoldingRegisters(0, 2);#END\n';
		return code;
	};

	Blockly.JavaScript['rs485_PH_read'] = function (block) {
		var code = '(PHrs485.getResponseBuffer(1)/10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['rs485_PH_read_temp'] = function (block) {
		var code = '(PHrs485.getResponseBuffer(0)/10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}