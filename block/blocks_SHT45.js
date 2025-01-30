/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	"use strict";
	Blockly.Blocks['sht45_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SHT45 begin (I2C)");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#B22222");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['sht45_read_init'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SHT45 init (I2C)");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#B22222");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['sht45_read_temp'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SHT45 read temperature ('C) (I2C)");
			this.setOutput(true, null);
			this.setColour("#B22222");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['sht45_read_humid'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SHT45 read humidity (%RH) (I2C)");
			this.setOutput(true, null);
			this.setColour("#B22222");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['sht45_begin_rs485'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SHT45 begin (RS485)");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#800000");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['sht45_read_temp_rs485'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SHT45 read temperature('C) (RS485)");
			this.setOutput(true, null);
			this.setColour("#800000");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['sht45_read_humid_rs485'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SHT45 read humidity(%RH) (RS485)");
			this.setOutput(true, null);
			this.setColour("#800000");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	


}