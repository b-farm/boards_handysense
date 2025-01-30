module.exports = function (Blockly) {
	"use strict";

    Blockly.Blocks["sw_on_pressed"] = {
        init: function () {
          this.appendDummyInput()
            .appendField('sw')
            .appendField(new Blockly.FieldDropdown([["S1", "0"], ["S2", "1"], ["S3", "2"], ["S4", "3"]]), "ch_sw")
            .appendField('on pressed');
            this.appendStatementInput('REESSED')
            .appendField('do');
          this.setInputsInline(true);
          this.setNextStatement(true, null);
          this.setPreviousStatement(true, null);
          this.setColour("#0f725e");
          this.setTooltip('');
          this.setHelpUrl('');
        }
      };

      Blockly.Blocks["sw_on_release"] = {
        init: function () {
          this.appendDummyInput()
            .appendField('sw')
            .appendField(new Blockly.FieldDropdown([["S1", "0"], ["S2", "1"], ["S3", "2"], ["S4", "3"]]), "ch_sw")
            .appendField('on release');
            this.appendStatementInput('RELEASE')
            .appendField('do');
          this.setInputsInline(true);
          this.setNextStatement(true, null);
          this.setPreviousStatement(true, null);
          this.setColour("#0f725e");
          this.setTooltip('');
          this.setHelpUrl('');
        }
      };

      Blockly.Blocks['sw_pressed'] = {
        init: function() {
          this.appendDummyInput()             
              .appendField('sw')
              .appendField(new Blockly.FieldDropdown([["S1", "0"], ["S2", "1"], ["S3", "2"], ["S4", "3"]]), "ch_sw")
              .appendField('pressed');
          this.setInputsInline(true);
          this.setOutput(true, "Boolean");
          this.setColour("#0f725e");
       this.setTooltip("get button A pressed or not");
       this.setHelpUrl("");
        }
      };

      Blockly.Blocks['sw_release'] = {
        init: function() {
          this.appendDummyInput()             
              .appendField('sw')
              .appendField(new Blockly.FieldDropdown([["S1", "0"], ["S2", "1"], ["S3", "2"], ["S4", "3"]]), "ch_sw")
              .appendField('release');
          this.setInputsInline(true);
          this.setOutput(true, "Boolean");
          this.setColour("#0f725e");
       this.setTooltip("get button A pressed or not");
       this.setHelpUrl("");
        }
      };
};