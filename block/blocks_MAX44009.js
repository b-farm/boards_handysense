module.exports = function (Blockly) {
	"use strict";


	Blockly.Blocks['MAX44009_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("MAX44009 begin");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FFA500");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};


	Blockly.Blocks['MAX44009_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("MAX44009 read light ('lux)");
			this.setOutput(true, null);
			this.setColour("#FFA500");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

}