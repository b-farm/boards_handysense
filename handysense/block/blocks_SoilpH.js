module.exports = function (Blockly) {
    "use strict";

    Blockly.Blocks['SoilpH'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("MPC3424 Soil-pH")
               // .appendField("TensioMeter")
                .appendField(new Blockly.FieldDropdown([["AIN2", "3"], ["AIN3", "4"]]), "ch");
            this.appendValueInput("valueMin")
                .setCheck(null)
                .appendField("Offset (V):");
            this.appendValueInput("valueMax")
                .setCheck(null)
                .appendField("Full out (V):");
            this.appendValueInput("OutMin")
                .setCheck(null)
                .appendField("OutMin (pH):");
            this.appendValueInput("OutMax")
                .setCheck(null)
                .appendField("OutMax(pH):");
            this.setOutput(true, null);
            this.setColour("#E67E22");
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    
};

