/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	"use strict";
	Blockly.Blocks["rs485_3kg_begin"] = {
		init: function () {
			this.appendDummyInput().appendField("Weight begin  —  RS485");
			// this.appendDummyInput().appendField("DT-3kg485 Weight 3kg begin (RS485)");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};

	Blockly.Blocks["rs485_3kg_read"] = {
		init: function () {
			this.appendDummyInput()
				// .appendField("DT-3kg485 Weight 3kg Read (RS485)")
				.appendField("Weight Read  —  RS485")
				.appendField("offset : ")
				.appendField(new Blockly.FieldTextInput("0"), "offset");
			this.setOutput(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		},
	};
};
