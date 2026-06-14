/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	var color = "#003300";

	Blockly.Blocks['I2C_SEN55_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SEN55 begin  —  I2C")
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['I2C_SEN55_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SEN55 Read  —  I2C");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['I2C_SEN55_pm1p0_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SEN55 PM1.0 Read (ug/m3)  —  I2C");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['I2C_SEN55_pm2p5_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SEN55 PM2.5 Read (ug/m3)  —  I2C");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['I2C_SEN55_pm4p0_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SEN55 PM4.0 Read (ug/m3)  —  I2C");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['I2C_SEN55_pm10p0_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SEN55 PM10.0 Read (ug/m3)  —  I2C");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['I2C_SEN55_temp_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SEN55 Temperature Read (C)  —  I2C");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['I2C_SEN55_humid_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SEN55 Humidity Read (%)  —  I2C");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['I2C_SEN55_voc_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SEN55 VOC Read  —  I2C");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['I2C_SEN55_nox_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("SEN55 NOx Read  —  I2C");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}