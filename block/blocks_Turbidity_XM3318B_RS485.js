/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	var color = "#6495ED";

	Blockly.Blocks['Turbidity_XM3318B_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Turbidity XM3318B begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["Turbidity_XM8518B_readHoldingRegisters"] = {
		init: function () {
			this.appendDummyInput()
				.appendField(" Turbidity XM3318B readHoldingRegisters  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["Turbidity_XM3318B_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Turbidity XM3318B  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}