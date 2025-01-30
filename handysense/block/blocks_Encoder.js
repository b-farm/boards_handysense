module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['Encoder1_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Encoder1_Setup ")
				.appendField("(pin A: ")
				.appendField(new Blockly.FieldNumber(36, 0, 39), "pin_enca")
				.appendField(" pin B: ")
				.appendField(new Blockly.FieldNumber(39, 0, 39), "pin_encb")
				.appendField(" pin Input: ")
				.appendField(new Blockly.FieldNumber(13, 0, 39), "pin_input")
				.appendField(" Pin Vcc: ")
				.appendField(new Blockly.FieldNumber(-1, -1, 39), "pin_vcc")
				.appendField(" Step: ")
				.appendField(new Blockly.FieldDropdown([["4", "4"], ["2", "2"], ["1", "1"]]), "mul_step")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF91A4");
			this.setTooltip("Encoder1: pinA,B,Input,Vcc(0-39) multiply step(1,2,4)");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['Encoder2_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Encoder2_Setup ")
				.appendField("(pin A: ")
				.appendField(new Blockly.FieldNumber(34, 0, 39), "pin_enca")
				.appendField(" pin B: ")
				.appendField(new Blockly.FieldNumber(35, 0, 39), "pin_encb")
				.appendField(" pin Input: ")
				.appendField(new Blockly.FieldNumber(15, 0, 39), "pin_input")
				.appendField(" Pin Vcc: ")
				.appendField(new Blockly.FieldNumber(-1, -1, 39), "pin_vcc")
				.appendField(" Step: ")
				.appendField(new Blockly.FieldDropdown([["4", "4"], ["2", "2"], ["1", "1"]]), "mul_step")
				.appendField(")");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF91A4");
			this.setTooltip("Encoder2: pinA,B,Input,Vcc(0-39) multiply step(1,2,4)");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['Encoder1_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Encoder1_Read");
			this.setOutput(true, null);
			this.setColour(15);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['Encoder2_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Encoder2_Read");
			this.setOutput(true, null);
			this.setColour(15);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	}
}