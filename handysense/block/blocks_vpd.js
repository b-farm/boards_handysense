module.exports = function (Blockly) {
  "use strict";
  Blockly.Blocks["HandySense_VPD_setup"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldImage(
            "/static/icons/icons8_math_96px.png",
            24,
            24,
            "*"
          )
        )
        .appendField("VPD setup");
      //this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3498DB");
      this.setTooltip("Update data from sensor to Wed app");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["HandySense_VPD_Air"] = {
    init: function () {
      // this.appendDummyInput()
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldImage(
            "/static/icons/icons8_math_96px.png",
            24,
            24,
            "*"
          )
        )
        .appendField("VPD Air");
      this.appendValueInput("Temp_Air")
        .setCheck(null)
        .appendField("Temperature Air (C)");
      this.appendValueInput("Humi_Air")
        .setCheck(null)
        .appendField("Humidity Air (%RH)");
      // this.setInputsInline(true);
      // this.setPreviousStatement(true, null);
      // this.setNextStatement(true, null);
      this.setOutput(true, null);

      this.setColour("#3498DB");
      this.setTooltip("setup command for HandySense");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["HandySense_VPD_Result"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldImage(
            "/static/icons/icons8_math_96px.png",
            24,
            24,
            "*"
          )
        )
        .appendField("VPD Result");
      this.appendValueInput("Temp_Air")
        .setCheck(null)
        .appendField("Temperature Air (C)");
      this.appendValueInput("Humi_Air")
        .setCheck(null)
        .appendField("Humidity Air (%RH)");
      this.appendValueInput("Temp_Leaf")
        .setCheck(null)
        .appendField("Temperature Leaf (C)");
      //this.setInputsInline(true);
      // this.setPreviousStatement(true, null);
      // this.setNextStatement(true, null);
      this.setOutput(true, null);

      this.setColour("#3498DB");
      this.setTooltip("Update data from sensor to Wed app");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["HandySense_VPD_heatindex_setup"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldImage(
            "/static/icons/icons8_math_96px.png",
            24,
            24,
            "*"
          )
        )
        .appendField("Heat index & wbgt setup");
      this.appendValueInput("Temp")
        .setCheck(null)
        .appendField("Temperature (C)");
      this.appendValueInput("Humi")
        .setCheck(null)
        .appendField("Humidity (%RH)");
      //this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3498DB");
      this.setTooltip("Update data from sensor to Wed app");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["HandySense_VPD_heatindex"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldImage(
            "/static/icons/icons8_math_96px.png",
            24,
            24,
            "*"
          )
        )
        .appendField("Heat index read");
      this.setOutput(true, null);
      this.setColour("#3498DB");
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["HandySense_VPD_wbgt"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldImage(
            "/static/icons/icons8_math_96px.png",
            24,
            24,
            "*"
          )
        )
        .appendField("Wbgt read");
      this.setOutput(true, null);
      this.setColour("#3498DB");
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };
};
