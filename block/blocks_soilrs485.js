module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['soil_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("soil begin");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E67E22");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['soil_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("soil read");
			this.setOutput(true, null);
			this.setColour("#E67E22");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
};

