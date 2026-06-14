/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.Blocks['rs485_lux120k_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Lux120k begin (rs485)  —  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FFFF00");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_lux120k_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Lux120k Read (rs485)");
			this.setOutput(true, null);
			this.setColour("#FFFF00");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}