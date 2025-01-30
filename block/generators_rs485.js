module.exports = function (Blockly) {
    "use strict";

    Blockly.JavaScript['rs485_bh1750_begin'] = function (block) {
		var code = '';
		code += '#EXTINC#include <ModbusMaster.h>#END\n';
		code += '#VARIABLE ModbusMaster rs485_lightMeter;#END\n';
        code += '#VARIABLE float rs485_light;#END\n';
		code += '\n';
        code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Serial2.begin(9600);#END\n';
        code += '#SETUP rs485_lightMeter.begin(245, Serial2);#END\n';
        code += '#LOOP_EXT_CODE uint8_t result_light;#END\n';
        code += '#LOOP_EXT_CODE rs485_lightMeter.readInputRegisters(4, 1);#END\n';
		return code;
	};

	Blockly.JavaScript['rs485_bh1750_read'] = function (block) {	
		var code = 'rs485_lightMeter.getResponseBuffer(0) / 1000.00f'; 
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
};