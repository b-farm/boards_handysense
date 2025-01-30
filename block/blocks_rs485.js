module.exports = function (Blockly) {
    "use strict";

    Blockly.Blocks['rs485_bh1750_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("bh1750 begin (RS485)");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#E67E22");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_bh1750_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("bh1750 read (RS485)");
			this.setOutput(true, null);
			this.setColour("#E67E22");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
};