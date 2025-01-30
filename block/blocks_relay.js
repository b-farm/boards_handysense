module.exports = function (Blockly) {
	"use strict";

    Blockly.Blocks['relay_on'] = {
		init: function () {
			this.appendDummyInput()
            .appendField('relay')
            .appendField(new Blockly.FieldDropdown([["r0", "0"], ["r1", "1"], ["r2", "2"], ["r3", "3"]]), "ch_relay")
            .appendField('on');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#0f725e");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

    Blockly.Blocks['relay_off'] = {
		init: function () {
			this.appendDummyInput()
            .appendField('relay')
            .appendField(new Blockly.FieldDropdown([["r0", "0"], ["r1", "1"], ["r2", "2"], ["r3", "3"]]), "ch_relay")
            .appendField('off');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#0f725e");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
};