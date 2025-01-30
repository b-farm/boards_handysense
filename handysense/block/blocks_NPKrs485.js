/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	"use strict";
	Blockly.Blocks['rs485_NPK_begin_DT7'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DT-7 soil begin (RS485)");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_mois_read_DT7'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DT-7 soil read moisture (%RH) (RS485)");
			this.setOutput(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_temps_read_DT7'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DT-7 soil read temperature ('C) (RS485)");
			this.setOutput(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_ec_read_DT7'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DT-7 soil read EC (RS485)");
			this.setOutput(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_PH_read_DT7'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DT-7 soil read pH (RS485)");
			this.setOutput(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_N_read_DT7'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DT-7 soil read Nitrogen (RS485)");
			this.setOutput(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_P_read_DT7'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DT-7 soil read Phosphorus (RS485)");
			this.setOutput(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_K_read_DT7'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DT-7 soil read Potassium (RS485)");
			this.setOutput(true, null);
			this.setColour("#663300");
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

}