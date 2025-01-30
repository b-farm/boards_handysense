module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript['HallSensor_begin'] = function (block) {
		return `
			  Serial.begin(115200);
			   if (!Serial) { Serial.println("ไม่พบ Serial port"); }
			Wire.begin();
	  `;
	};

	Blockly.JavaScript['HallSensor_read'] = function (block) {
		var code = `hallRead()`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

};