module.exports = function (Blockly) {
  "use strict";
  Blockly.Blocks['PID1_setup'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("PID1_Setup (kp1:")
        .appendField(new Blockly.FieldNumber(0, 0, 10000), "kp1")
        .appendField(" ki1:")
        .appendField(new Blockly.FieldNumber(0, 0, 10000), "ki1")
        .appendField(" kd1:")
        .appendField(new Blockly.FieldNumber(0, 0, 10000), "kd1")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(77);
      this.setTooltip("PID at contro Loop 1-10000 ms Res 8-12 bit");
      this.setHelpUrl("https://en.wikipedia.org/wiki/PID");
    }
  };


  Blockly.Blocks['PID1_read_write'] = {
    init: function () {
      this.appendValueInput("value1")
        .setCheck("Number")
        .appendField("PID1_output: (Input1:");
      this.appendValueInput("setpoint1")
        .setCheck("Number")
        .appendField("    SetPoint1:");
      this.setOutput(true, null);
      this.setColour("#FF00A4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['PID2_setup'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("PID2_Setup (kp2:")
        .appendField(new Blockly.FieldNumber(0, 0, 10000), "kp2")
        .appendField(" ki2:")
        .appendField(new Blockly.FieldNumber(0, 0, 10000), "ki2")
        .appendField(" kd2:")
        .appendField(new Blockly.FieldNumber(0, 0, 10000), "kd2")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(77);
      this.setTooltip("PID at contro Loop 1-10000 ms Res 8-12 bit");
      this.setHelpUrl("https://en.wikipedia.org/wiki/PID");
    }
  };


  Blockly.Blocks['PID2_read_write'] = {
    init: function () {
      this.appendValueInput("value2")
        .setCheck("Number")
        .appendField("PID2_output: (Input2:");
      this.appendValueInput("setpoint2")
        .setCheck("Number")
        .appendField("    SetPoint2:");
      this.setOutput(true, null);
      this.setColour("#FF00A4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
}