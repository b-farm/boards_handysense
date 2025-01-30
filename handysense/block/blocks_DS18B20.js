module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['DS18B20_initial'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DS18B20 begin (OneWire) GPIO:")
				.appendField(new Blockly.FieldNumber(4), "addr")
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF5555");
			this.setTooltip("begin using DS18B20");
			this.setHelpUrl("");
		}
	};


	Blockly.Blocks['DS18B20_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DS18B20 read temperature");
			this.setOutput(true, null);
			this.setColour("#FF5555");
			this.setTooltip("read Temp from DS18B@)");
			this.setHelpUrl("");
		}
	}
}
