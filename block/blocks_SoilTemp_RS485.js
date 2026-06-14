/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.Blocks['rs485_soiltMuti_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SoilTemp begin  —  RS485")
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF8247");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_soiltMuti_soilmoistRead'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Soil MoistureRead Read (%RH)  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setOutput(true, null);
			this.setColour('#FF8247');
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_soiltMuti_soiltempRead'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Soil Temperature Read (C)  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setOutput(true, null);
			this.setColour('#FF8247');
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}