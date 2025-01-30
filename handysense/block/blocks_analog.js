/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
    "use strict";

    Blockly.Blocks['ReadAnalog_MCP3424'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Read Analog (MPC3424)")
                .appendField(new Blockly.FieldDropdown([["AIN0", "1"], ["AIN1", "2"], ["AIN2", "3"], ["AIN3", "4"]]), "ch");
            this.setOutput(true, null);
            this.setColour("#E67E22");
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ReadAnalog_from_MPC3424'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("Read Analog (MPC3424)")
                .appendField(new Blockly.FieldDropdown([["AIN0", "1"], ["AIN1", "2"], ["AIN2", "3"], ["AIN3", "4"]]), "ch");
            this.appendValueInput("valueMin")
                .setCheck(null)
                .appendField("valueMin:");
            this.appendValueInput("valueMax")
                .setCheck(null)
                .appendField("valueMax:");
            this.appendValueInput("OutMin")
                .setCheck(null)
                .appendField("OutMin:");
            this.appendValueInput("OutMax")
                .setCheck(null)
                .appendField("OutMax:");
            this.setOutput(true, null);
            this.setColour("#E67E22");
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    //   Blockly.Blocks["ReadAnalog_MCP3424"] = {
    //     init: function () {
    //       this.appendDummyInput()
    //         .appendField("Read Analog (MPC3424)")
    //         .appendField(
    //           new Blockly.FieldDropdown([
    //             ["AIN2", "3"],
    //             ["AIN3", "4"],
    //           ]),
    //           "ch"
    //         );
    //       this.setOutput(true, null);
    //       this.setColour("#E67E22");
    //       this.setTooltip("");
    //       this.setHelpUrl("");
    //     },
    //   };

    //   Blockly.Blocks["ReadAnalog_from_MPC3424"] = {
    //     init: function () {
    //       this.appendDummyInput()
    //         .appendField("Read Analog (MPC3424)")
    //         .appendField(
    //           new Blockly.FieldDropdown([
    //             ["AIN2", "3"],
    //             ["AIN3", "4"],
    //           ]),
    //           "ch"
    //         );
    //       this.appendValueInput("valueMin").setCheck(null).appendField("valueMin:");
    //       this.appendValueInput("valueMax").setCheck(null).appendField("valueMax:");
    //       this.appendValueInput("OutMin").setCheck(null).appendField("OutMin:");
    //       this.appendValueInput("OutMax").setCheck(null).appendField("OutMax:");
    //       this.setOutput(true, null);
    //       this.setColour("#E67E22");
    //       this.setTooltip("");
    //       this.setHelpUrl("");
    //     },
    //   };
};
