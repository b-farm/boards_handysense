/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
    'use strict';
    var color = "#246C86"

    Blockly.Blocks['ReadAnalog_Tensiometer'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Tensiometer Sensor")
            this.appendDummyInput()
                .appendField("Read Analog (MCP3424)")
                .appendField(new Blockly.FieldDropdown([["AIN0", "1"], ["AIN1", "2"], ["AIN2", "3"], ["AIN3", "4"]]), "ch");
            this.appendValueInput("valueMin")
                .setCheck(null)
                .appendField("Offset (uV) :");
            this.appendValueInput("valueMax")
                .setCheck(null)
                .appendField("Span (uV) :");
            this.appendValueInput("OutMin")
                .setCheck(null)
                .appendField("PressureMin (kpa) :");
            this.appendValueInput("OutMax")
                .setCheck(null)
                .appendField("PressureMax (kpa) :");
            this.setOutput(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ReadAnalog_Pressure'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Pressure Sensor")
            this.appendDummyInput()
                .appendField("Read Analog (MCP3424)")
                .appendField(new Blockly.FieldDropdown([["AIN0", "1"], ["AIN1", "2"], ["AIN2", "3"], ["AIN3", "4"]]), "ch");
            this.appendValueInput("valueMin")
                .setCheck(null)
                .appendField("Offset (uV) :");
            this.appendValueInput("valueMax")
                .setCheck(null)
                .appendField("Span (uV) :");
            this.appendValueInput("OutMin")
                .setCheck(null)
                .appendField("PressureMin (kpa) :");
            this.appendValueInput("OutMax")
                .setCheck(null)
                .appendField("PressureMax (kpa) :");
            this.setOutput(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ReadAnalog_Diff_Pressure'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Diff Pressure Sensor")
            this.appendDummyInput()
                .appendField("Read Analog (MCP3424)")
                .appendField(new Blockly.FieldDropdown([["AIN0", "1"], ["AIN1", "2"], ["AIN2", "3"], ["AIN3", "4"]]), "ch");
            this.appendValueInput("valueMin")
                .setCheck(null)
                .appendField("Offset (uV) :");
            this.appendValueInput("valueMax")
                .setCheck(null)
                .appendField("Span (uV) :");
            this.appendValueInput("OutMin")
                .setCheck(null)
                .appendField("PressureMin (kpa) :");
            this.appendValueInput("OutMax")
                .setCheck(null)
                .appendField("PressureMax (kpa) :");
            this.setOutput(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ReadAnalog_Water_Level_Pressure'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Water Level Sensor")
            this.appendDummyInput()
                .appendField("Read Analog (MCP3424)")
                .appendField(new Blockly.FieldDropdown([["AIN0", "1"], ["AIN1", "2"], ["AIN2", "3"], ["AIN3", "4"]]), "ch");
            this.appendValueInput("valueMin")
                .setCheck(null)
                .appendField("Offset (uV) :");
            this.appendValueInput("valueMax")
                .setCheck(null)
                .appendField("Span (uV) :");
            this.appendValueInput("OutMin")
                .setCheck(null)
                .appendField("LevelMin (cm) :");
            this.appendValueInput("OutMax")
                .setCheck(null)
                .appendField("LevelMax (cm) :");
            this.setOutput(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ReadAnalog_Light'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Light Sensor")
            this.appendDummyInput()
                .appendField("Read Analog (MCP3424)")
                .appendField(new Blockly.FieldDropdown([["AIN0", "1"], ["AIN1", "2"], ["AIN2", "3"], ["AIN3", "4"]]), "ch");
            this.appendValueInput("valueMin")
                .setCheck(null)
                .appendField("Offset (uV) :");
            this.appendValueInput("valueMax")
                .setCheck(null)
                .appendField("Span (uV) :");
            this.appendValueInput("OutMin")
                .setCheck(null)
                .appendField("LightMin (klux) :");
            this.appendValueInput("OutMax")
                .setCheck(null)
                .appendField("LightMax (klux) :");
            this.setOutput(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['ReadAnalog_RTDandHeater'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC RTD&Heater")
            this.appendDummyInput()
                .appendField("Read Analog (MCP3424)")
                .appendField(new Blockly.FieldDropdown([["AIN0", "1"], ["AIN1", "2"], ["AIN2", "3"], ["AIN3", "4"]]), "ch");
            this.appendValueInput("valueMin")
                .setCheck(null)
                .appendField("Offset (uV) :");
            this.appendValueInput("valueMax")
                .setCheck(null)
                .appendField("Span (uV) :");
            this.appendValueInput("OutMin")
                .setCheck(null)
                .appendField("TempMin (C) :");
            this.appendValueInput("OutMax")
                .setCheck(null)
                .appendField("TempMax (C) :");
            this.setOutput(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
}