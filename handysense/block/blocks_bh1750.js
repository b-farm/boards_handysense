module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['bh1750_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("BH1750 begin  —  I2C");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#996633");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['bh1750_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("BH1750 read  —  I2C");
			this.setOutput(true, null);
			this.setColour("#996633");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
};

