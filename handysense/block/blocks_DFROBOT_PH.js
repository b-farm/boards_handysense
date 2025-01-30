module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['DFROBOT_PH_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DFR0300-H pH read")
			this.appendValueInput("volt")
				.setCheck(null)
				.appendField("ADC milliVolt");
			this.appendValueInput("temp")
				.setCheck(null)
				.appendField("Water Temp");
			this.setOutput(true, null);
			this.setColour("#FF5555");
			this.setTooltip("read PH");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['DFROBOT_PH_initial'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DFR0300-H pH begin");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF5555");
			this.setTooltip("begin using DFROBOT PH");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['DFROBOT_PH_initial_cal'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DFR0300-H pH begin")
			this.appendDummyInput()
				.appendField("PH4 milliVolt")
				.appendField(new Blockly.FieldNumber(2032.44), "ph4volt")
			this.appendDummyInput()
				.appendField("PH7 milliVolt")
				.appendField(new Blockly.FieldNumber(1500.00), "ph7volt");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#FF5555");
			this.setTooltip("begin using DFROBOT PH with Calibrate");
			this.setHelpUrl("");
		}
	}
}