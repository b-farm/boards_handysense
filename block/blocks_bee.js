module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['HandySense_bee_Setup'] = {
		init: function () {
		  this.appendDummyInput()
		  this.appendDummyInput()
			.appendField(new Blockly.FieldImage(
			  "/static/icons/bee.png",
			  24,
			  24,
			  "*"))
			.appendField("BeeBox Setup");
		  this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour("#3498DB");
		  this.setTooltip("setup command for HandySense");
		  this.setHelpUrl("");
		}
	  };
	  
	  Blockly.Blocks['HandySense_bee_Update'] = {
		init: function () {
		  this.appendDummyInput()
			.appendField(new Blockly.FieldImage(
			  "/static/icons/bee.png",
			  24,
			  24,
			  "*"))
			.appendField("BeeBox loop");
		  this.appendValueInput("Soil_RawData")
			.setCheck(null)
			.appendField("Weight (kg)");
		  this.appendValueInput("Light_RawData")
			.setCheck(null)
			.appendField("Sound (dB)");
		  this.appendValueInput("Temp_RawData")
			.setCheck(null)
			.appendField("Temp ('C)");
		  this.appendValueInput("Hum_RawData")
			.setCheck(null)
			.appendField("Humidity (%RH)");
		  //this.setInputsInline(true);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour("#3498DB");
		  this.setTooltip("Update data from sensor to Wed app");
		  this.setHelpUrl("");
		}
	  };
};

