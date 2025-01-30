module.exports = function (Blockly) {
	"use strict";
	Blockly.Blocks['NTC_initial'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("NTC add (Thermistor)")
			this.appendDummyInput()
				.appendField("Voltage VPP")
				.appendField(new Blockly.FieldNumber(5, 0, 5), "vpp")
			this.appendDummyInput()
				.appendField("Analog ch:")
				.appendField(new Blockly.FieldDropdown([["AIN2", "3"], ["AIN3", "4"]]), "ch")
			this.appendDummyInput()
				.appendField("R pull Up")
				.appendField(new Blockly.FieldNumber(10000, 0, 50000), "R0")
			this.appendDummyInput()
				.appendField("NTC_resistance")
				.appendField(new Blockly.FieldNumber(10000, 0, 50000), "R_NTC")
			this.appendDummyInput()
				.appendField("NTC_temperature")
				.appendField(new Blockly.FieldNumber(25, 0, 50), "Temp")
			this.appendDummyInput()
				.appendField("B Value")
				.appendField(new Blockly.FieldNumber(3425, 0, 10000), "B_Value")
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#0088d2");
			this.setTooltip("begin using NTC with default configs");
			this.setHelpUrl("");
		}
	};


	Blockly.Blocks['NTC_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("NTC read ch ")
				.appendField(new Blockly.FieldDropdown([["AIN2", "3"], ["AIN3", "4"]]), "ch")
				.appendField(" unit ")
				.appendField(new Blockly.FieldDropdown([["celsius", "readCelsius()"], ["kelvin", "readKelvin()"], ["kelvifahrenheit", "readFahrenheit()"]]), "mode")
			this.setOutput(true, null);
			this.setColour("#0088d2");
			this.setTooltip("read NTC");
			this.setHelpUrl("");
		}
	};
}