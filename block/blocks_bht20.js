module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['bht20_setup'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DHT20 setup");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#5ba56d");
			this.setTooltip("Put in Setup DHT20");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['bht20_loop'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DHT20 loop");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#5ba56d");
			this.setTooltip("Put in Loop for Read DHT20");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['bht20_get_temperature'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DHT20 get temperature ('C)");
			this.setOutput(true, null);
			//this.setColour("#E67E22");			
			this.setColour("#5ba56d");
			this.setTooltip("Read temperature from DHT20");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['bht20_get_humidity'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DHT20 get humidity (%RH)");
			this.setOutput(true, null);
			//this.setColour("#E67E22");			
			this.setColour("#5ba56d");
			this.setTooltip("Read humidity from DHT20");
			this.setHelpUrl("");
		}
	};

};

