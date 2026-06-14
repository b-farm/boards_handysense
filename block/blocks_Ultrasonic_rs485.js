/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.Blocks['rs485_Ultrasonic_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Ultrasonic begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#05276A");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_Ultrasonic_readholdingregisters'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Ultrasonic ReadHoldingRegisters  (RS485)");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#05276A");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_Ultrasonic_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Ultrasonic  (RS485)");
			this.setOutput(true, null);
			this.setColour("#05276A");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}