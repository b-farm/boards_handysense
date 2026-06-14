/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	var color = '#4169E1'

	Blockly.Blocks['rs485_ANS_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("ANS begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_ANS_ammonia_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("ANS Ammonia Read (mg/L)  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_ANS_pH_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("ANS pH Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_ANS_temp_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("ANS Temperature (°C) Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}