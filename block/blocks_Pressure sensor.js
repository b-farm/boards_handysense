module.exports = function (Blockly) {
    "use strict";

    Blockly.Blocks['Pressure_sensor'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Pressure sensor")
                // .appendField("Pressure sensor (MPC3424)")
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
                .appendField("OutMin (Bar):");
            this.appendValueInput("OutMax")
                .setCheck(null)
                .appendField("OutMax(Bar):");
            this.setOutput(true, null);
            this.setColour("#E67E22");
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    
};

