module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['et0'] = function (block) {
		var value_ra = Blockly.JavaScript.valueToCode(block, 'ra', Blockly.JavaScript.ORDER_ATOMIC);
		var value_tc = Blockly.JavaScript.valueToCode(block, 'tc', Blockly.JavaScript.ORDER_ATOMIC);
		var value_td = Blockly.JavaScript.valueToCode(block, 'td', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `  
		#EXTINC #include <et0_calculations.h> #END
		Serial.println(String(et0(${value_ra},${value_tc},${value_td})));
		`;
		return code;
	};
};