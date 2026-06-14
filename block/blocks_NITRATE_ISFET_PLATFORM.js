/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	var color = "#666666";

	Blockly.Blocks['nitrate_isfet_rs485_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Nitrate-ISFET begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_readholding'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Nitrate-ISFET readHoldingRegisters  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_vout_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Vout (mV) Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_vout_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Vout (mV) Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_vout_temp_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Vout Temperature (mV) Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_sample_value_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Sample Value (ppm) Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_temperature_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Temperature (C°) Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_error_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Error (%) Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_r_quare_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("R-quare Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_sensitivity_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Sensitivity (mV/dec) Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_STD1_50ppm_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("STD1 50ppm Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_STD2_100ppm_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("STD2 100ppm Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['nitrate_isfet_rs485_STD3_300ppm_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("STD3 300ppm Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}