/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	var color = "#337cff";

	Blockly.Blocks['Turbidity_XM8518_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Turbidity XM8518 begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["Turbidity_XM8518_readHoldingRegisters"] = {
		init: function () {
			this.appendDummyInput()
				.appendField(" Turbidity XM3318 readHoldingRegisters  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["Turbidity_XM8518_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Turbidity XM8518  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}