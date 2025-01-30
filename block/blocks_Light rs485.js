module.exports = function (Blockly) {
	"use strict";
	Blockly.Blocks['rs485_light_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DT-Par485 begin  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_Light_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DT-Par485 read  —  RS485");
			this.setOutput(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}

