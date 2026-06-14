/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	var color = "#98FB98";

	Blockly.Blocks['AirVelocity_SM3789_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("AirVelocity SM3789 begin  —  RS485")
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['AirVelocity_SM3789_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("AirVelocity SM3789 Read  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}