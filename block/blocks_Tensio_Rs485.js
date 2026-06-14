/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
    'use strict';
    var color = "#246C86";

    Blockly.Blocks['TMEC_Tensio_Rs485_begin'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Tensio Begin —  RS485  id :")
                .appendField(new Blockly.FieldTextInput("1"), "ID");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['TMEC_Tensio_Rs485_riR'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Tensio readInputRegisters —  RS485")
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['TMEC_Tensio_Rs485_temp_read'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Tensio Temperature Read —  RS485")
            this.setOutput(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['TMEC_Tensio_Rs485_humid_read'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Tensio Humidity Read —  RS485")
            this.setOutput(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['TMEC_Tensio_Rs485_light_read'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Tensio Light Read —  RS485")
            this.setOutput(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.Blocks['TMEC_Tensio_Rs485_volt_read'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("TMEC Tensio Volt Read —  RS485")
            this.setOutput(true, null);
            this.setColour(color);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
}