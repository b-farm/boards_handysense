module.exports = function (Blockly) {
	"use strict";

    Blockly.Blocks['led_begin'] = {
		init: function () {
			this.appendDummyInput()
                .appendField('led begin');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#0f725e");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

    Blockly.Blocks['led_control_on'] = {
		init: function () {
			this.appendDummyInput()
            .appendField('led')
            .appendField(new Blockly.FieldDropdown([["led0", "0"], ["led1", "1"], ["led2", "2"], ["led3", "3"], ["led4", "4"], ["led5", "5"], ["led6", "6"], ["led7", "7"]]), "ch_led")
            .appendField('on');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#0f725e");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

    Blockly.Blocks['led_control_off'] = {
		init: function () {
			this.appendDummyInput()
            .appendField('led')
            .appendField(new Blockly.FieldDropdown([["led0", "0"], ["led1", "1"], ["led2", "2"], ["led3", "3"], ["led4", "4"], ["led5", "5"], ["led6", "6"], ["led7", "7"]]), "ch_led")
            .appendField('off');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#0f725e");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
};