module.exports = function (Blockly) {
    "use strict";

    Blockly.Blocks['TenSiO'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC TenSiO")
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
                .appendField("OutMin (kpa):");
            this.appendValueInput("OutMax")
                .setCheck(null)
                .appendField("OutMax(kpa):");
            this.setOutput(true, null);
            this.setColour("#E67E22");
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    
};

