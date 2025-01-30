/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['DFROBOT_EC_begin_DT7'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DFR0300-H EC begin");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF5555");
			this.setTooltip("begin using DFROBOT EC");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['DFROBOT_EC_read_DT7'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DFR0300-H EC read")
			this.appendValueInput("volt")
				.setCheck(null)
				.appendField("ADC milliVolt");
			this.appendValueInput("temp")
				.setCheck(null)
				.appendField("Water Temp");
			this.setOutput(true, null);
			this.setColour("#FF5555");
			this.setTooltip("read EC (ms/cm)");
			this.setHelpUrl("");
		}
	};

	// Blockly.Blocks['sht20_read_temperature'] = {
	// 	init: function () {
	// 		this.appendDummyInput()
	// 			.appendField("SHT20 read temperature (*C)");
	// 		this.setOutput(true, null);
	// 		this.setColour(135);
	// 		this.setTooltip("Read temperature from SHT20");
	// 		this.setHelpUrl("");
	// 	}
	// };

	// Blockly.Blocks['sht20_read_humidity'] = {
	// 	init: function () {
	// 		this.appendDummyInput()
	// 			.appendField("SHT20 read humidity (%RH)");
	// 		this.setOutput(true, null);
	// 		this.setColour(135);
	// 		this.setTooltip("Read humidity from SHT20");
	// 		this.setHelpUrl("");
	// 	}
	// };
};

