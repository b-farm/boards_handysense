/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	var color = "#FFA500";

	Blockly.Blocks['TubularSoil_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Tubular Soil Moisture begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["TubularSoilMois_10cm_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Tubular Soil Moisture 10cm  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["TubularSoilTemp_10cm_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Tubular Soil Temperature 10cm  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["TubularSoilMois_20cm_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Tubular Soil Moisture 20cm  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["TubularSoilTemp_20cm_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Tubular Soil Temperature 20cm  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["TubularSoilMois_30cm_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Tubular Soil Moisture 30cm  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["TubularSoilTemp_30cm_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Tubular Soil Temperature 30cm  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["TubularSoilMois_40cm_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Tubular Soil Moisture 40cm  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["TubularSoilTemp_40cm_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Tubular Soil Temperature 40cm  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["TubularSoilMois_50cm_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Tubular Soil Moisture 50cm  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks["TubularSoilTemp_50cm_read"] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Tubular Soil Temperature 50cm  —  RS485");
			this.setOutput(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}