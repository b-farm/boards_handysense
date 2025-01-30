module.exports = function (Blockly) {
  "use strict";
  Blockly.Blocks['SCD40_begin'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("SCD40 begin (I2C)");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7169D3");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };



  Blockly.Blocks["SCD04_int"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("SCD40 init (I2C)");
      this.appendStatementInput("SCD40_read_temp")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7169D3");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['SCD40_read_temp'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("SCD40 read temperature ('C) (I2C)");
      this.setOutput(true, null);
      this.setColour("#7169D3");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['SCD40_read_humi'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("SCD40 read humidity (%RH) (I2C)");
      this.setOutput(true, null);
      this.setColour("#7169D3");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['SCD40_read_Co2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("SCD40 read CO2 (PPM) (I2C)");
      this.setOutput(true, null);
      this.setColour("#7169D3");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


}