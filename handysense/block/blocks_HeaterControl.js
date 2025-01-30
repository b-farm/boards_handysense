module.exports = function (Blockly) {
  "use strict";
  Blockly.Blocks['hc_variable_set'] = {
    init: function () {
      this.appendValueInput("VALUE")
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([
          ["controlMode", "controlMode"],
          ["percent", "percent"],
          ["temperature", "temperature"],
          ["offThreshold", "offThreshold"],
          ["onThreshold", "onThreshold"],
          ["settingTemperature", "settingTemperature"],
          ["gain_P", "gain_P"],
          ["gain_I", "gain_I"],
          ["gain_D", "gain_D"]
        ]), "VAR_NAME")
        .setCheck("Number")
        .appendField("to");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#DF1010");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.Blocks['hc_variable_get'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["controlMode", "controlMode"],
          ["percent", "percent"],
          ["temperature", "temperature"],
          ["offThreshold", "offThreshold"],
          ["onThreshold", "onThreshold"],
          ["settingTemperature", "settingTemperature"],
          ["gain_P", "gain_P"],
          ["gain_I", "gain_I"],
          ["gain_D", "gain_D"]
        ]), "VAR_NAME");
      this.setOutput(true, 'Number');
      this.setColour("#DF1010");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.Blocks['initialization'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Heater Control initialization");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#DF1010");
    }
  };

  Blockly.Blocks['mode_value'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('value of control mode:')
        .appendField(new Blockly.FieldDropdown([
          ["off", "0"],
          ["fix", "1"],
          ["saturation", "2"],
          ["pid", "3"]
        ]), "VALUE");
      this.setOutput(true, null);
      this.setColour("#DF1010");
    }
  };

  Blockly.Blocks["set_off_mode"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Off mode");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#DF1010");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["set_fix_mode_dummy"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Fix mode");
      this.appendDummyInput()
        .appendField("  percent:")
        .appendField(new Blockly.FieldNumber(50, 0, 100, 1), "percent");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#DF1010");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["set_fix_mode_value"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Fix mode");
      this.appendValueInput("percent")
        .setCheck("Number")
        .appendField("  percent:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#DF1010");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["set_saturation_mode_dummy"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Saturation mode");
      this.appendValueInput("actualTemp")
        .setCheck("Number")
        .appendField("  actual temperature:");
      this.appendDummyInput()
        .appendField("  turn OFF temperature:")
        .appendField(new Blockly.FieldTextInput("24"), "offThreshold");
      this.appendDummyInput()
        .appendField("  turn ON temperature:")
        .appendField(new Blockly.FieldTextInput("26"), "onThreshold");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#DF1010");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["set_saturation_mode_value"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Saturation mode");
      this.appendValueInput("actualTemp")
        .setCheck("Number")
        .appendField("  actual temperature:");
      this.appendValueInput("offThreshold")
        .setCheck("Number")
        .appendField("  turn OFF temperature:");
      this.appendValueInput("onThreshold")
        .setCheck("Number")
        .appendField("  turn ON temperature:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#DF1010");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["set_pid_mode_dummy"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("PID mode");
      this.appendValueInput("actualTemp")
        .setCheck("Number")
        .appendField("  actual temperature:");
      this.appendDummyInput()
        .appendField("  setting temperature:")
        .appendField(new Blockly.FieldTextInput("24"), "settingTemp");
      this.appendDummyInput()
        .appendField("  gain P:")
        .appendField(new Blockly.FieldTextInput("50"), "gainP");
      this.appendDummyInput()
        .appendField("  gain I:")
        .appendField(new Blockly.FieldTextInput("0.1"), "gainI");
      this.appendDummyInput()
        .appendField("  gain D:")
        .appendField(new Blockly.FieldTextInput("0.5"), "gainD");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#DF1010");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["set_pid_mode_value"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("PID mode");
      this.appendValueInput("actualTemp")
        .setCheck("Number")
        .appendField("  actual temperature:");
      this.appendValueInput("settingTemp")
        .setCheck("Number")
        .appendField("  setting temperature:");
      this.appendValueInput("gainP")
        .setCheck("Number")
        .appendField("  gain P:");
      this.appendValueInput("gainI")
        .setCheck("Number")
        .appendField("  gain I:");
      this.appendValueInput("gainD")
        .setCheck("Number")
        .appendField("  gain D:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#DF1010");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["read_status"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Read controller status");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#DF1010");
    }
  };

  Blockly.Blocks["retrieve_running_mode"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Retrieve latest 'running mode'");
      this.setOutput(true, "Number");
      this.setColour("#DF1010");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["retrieve_running_percent"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Retrieve latest 'running percent'");
      this.setOutput(true, "Number");
      this.setColour("#DF1010");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
}