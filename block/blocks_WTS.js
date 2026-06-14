/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	var Weather_color = "#191970";

	Blockly.Blocks['WTs_rs485_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Weather begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(Weather_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WTs_rs485_readholding'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Weather readHoldingRegisters  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(Weather_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WTs_rs485_humidity'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Humidity (%)  —  RS485");
			this.setOutput(true, null);
			this.setColour(Weather_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WTs_rs485_temperature'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Temperature (°C)  —  RS485");
			this.setOutput(true, null);
			this.setColour(Weather_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WTs_rs485_noise'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Noise (-dB)  —  RS485");
			this.setOutput(true, null);
			this.setColour(Weather_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WTs_rs485_co2'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read CO2 (ppm)  —  RS485");
			this.setOutput(true, null);
			this.setColour(Weather_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WTs_rs485_pressure'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Pressure (hPa)  —  RS485");
			this.setOutput(true, null);
			this.setColour(Weather_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WTs_rs485_lux'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Lux  —  RS485");
			this.setOutput(true, null);
			this.setColour(Weather_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}