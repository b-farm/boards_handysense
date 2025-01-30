module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['winddirec3_begin_rs485'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Wind-Direc begin  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	//Blockly.Blocks['VEML7700_read_init'] = {
	//	init: function () {
	//		this.appendDummyInput()
	//			.appendField("VEML7700 init. (I2C)");
	//		this.setPreviousStatement(true, null);
	//		this.setNextStatement(true, null);
	//		this.setColour("#DB7093");
	//		this.setTooltip("");
	//		this.setHelpUrl("");
	//	}
	//};
	
	Blockly.Blocks['winddirec3_read_rs485'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Wind-Direc read (degree)  —  RS485");
			this.setOutput(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	
	

};

