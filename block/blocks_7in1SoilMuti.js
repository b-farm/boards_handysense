/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-undef

module.exports = function (Blockly) {
	'use strict';
	var color = "#996600";

	Blockly.Blocks['7in1soilMuti_rs485_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("7in1Soil begin  —  RS485")
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['7in1soilMuti_rs485_mois_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Soil Read moisture (%RH)  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['7in1soilMuti_rs485_temps_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Soil Read temperature (C)  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['7in1soilMuti_rs485_ec_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Soil Read EC   —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['7in1soilMuti_rs485_PH_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Soil Read PH  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['7in1soilMuti_rs485_N_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Soil Read Nitrogen  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['7in1soilMuti_rs485_P_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Soil Read Phosphorus  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['7in1soilMuti_rs485_K_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Soil Read Potassium  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

};