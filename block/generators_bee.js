module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['HandySense_bee_Setup'] = function (block) {
		//var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
		var code = `  
		#EXTINC #include <beebox.h> #END
		bee_setup();
		`;
		return code;
	};

	Blockly.JavaScript['HandySense_bee_Update'] = function (block) {
		var value_Soil_RawData = Blockly.JavaScript.valueToCode(block, 'Soil_RawData', Blockly.JavaScript.ORDER_ATOMIC);
		var value_Light_RawData = Blockly.JavaScript.valueToCode(block, 'Light_RawData', Blockly.JavaScript.ORDER_ATOMIC);
		var value_Temp_RawData = Blockly.JavaScript.valueToCode(block, 'Temp_RawData', Blockly.JavaScript.ORDER_ATOMIC);
		var value_Hum_RawData = Blockly.JavaScript.valueToCode(block, 'Hum_RawData', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `
		sendDataToweb(${value_Soil_RawData},${value_Light_RawData},${value_Temp_RawData},${value_Hum_RawData});
		`;
		return code;
	};

};