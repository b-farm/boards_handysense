module.exports = function (Blockly) {
  "use strict";
  Blockly.Blocks['motor1_setup'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Motor1_Setup: (PWM pin:")
        .appendField(new Blockly.FieldNumber(19, 0, 39), "pwm")
        .appendField(" Dir pin:")
        .appendField(new Blockly.FieldNumber(23, 0, 39), "dir")
        .appendField(" channel:")
        .appendField(new Blockly.FieldNumber(1, 0, 7), "channel")
        .appendField(" freq:")
        .appendField(new Blockly.FieldNumber(1000, 10, 100000), "freq")
        .appendField(" bit:")
        .appendField(new Blockly.FieldDropdown([["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"]]), "bit")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(88);
      this.setTooltip("Motor PWM pin(value 0-4095) at freq 0-100KHz Res 8-12 bit");
      this.setHelpUrl("https://en.wikipedia.org/wiki/Pulse-width_modulation");
    }
  };

  Blockly.Blocks['Motor1_read_write'] = {
    init: function () {
      this.appendValueInput("value1")
        .setCheck("Number")
        .appendField("Motor1 value: ");
      this.setOutput(true, null);
      this.setColour("#FF00A4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['motor2_setup'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Motor2_Setup: (PWM pin:")
        .appendField(new Blockly.FieldNumber(18, 0, 39), "pwm")
        .appendField(" Dir pin:")
        .appendField(new Blockly.FieldNumber(4, 0, 39), "dir")
        .appendField(" channel:")
        .appendField(new Blockly.FieldNumber(2, 0, 7), "channel")
        .appendField(" freq:")
        .appendField(new Blockly.FieldNumber(1000, 10, 100000), "freq")
        .appendField(" bit:")
        .appendField(new Blockly.FieldDropdown([["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"]]), "bit")
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(88);
      this.setTooltip("Motor PWM pin(value 0-4095) at freq 0-100KHz Res 8-12 bit");
      this.setHelpUrl("https://en.wikipedia.org/wiki/Pulse-width_modulation");
    }
  };

  Blockly.Blocks['Motor2_read_write'] = {
    init: function () {
      this.appendValueInput("value2")
        .setCheck("Number")
        .appendField("Motor2 value: ");
      this.setOutput(true, null);
      this.setColour("#FF00A4");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
}