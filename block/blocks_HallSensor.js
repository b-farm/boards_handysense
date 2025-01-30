module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['HallSensor_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('Built-in Hall begin');
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour('#1e81b0');
		}
	};

	Blockly.Blocks['HallSensor_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Built-in Hall read");
			this.setOutput(true, "Number");
			this.setColour('#6495ED');
			this.setTooltip("Reads the value from the Hall Sensor.");
		}
	};

};

