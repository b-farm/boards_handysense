/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	var Waterlevel_color = "#330099";
	var pH_color = "#3366CC";
	var DO_color = "#33CCFF";
	var EC_color = "#FFCC00";
	var AM_color = "#4169E1";

	Blockly.Blocks['WQ_rs485_Water_Level_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Water Level begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(Waterlevel_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_Water_Level_readholding'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Water Level readHoldingRegisters  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(Waterlevel_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_Water_Level_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Water Level (cm)  —  RS485");
			this.setOutput(true, null);
			this.setColour(Waterlevel_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_pH_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("pH begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pH_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_pH_readholding'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("pH readHoldingRegisters  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(pH_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_pH_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read pH  —  RS485");
			this.setOutput(true, null);
			this.setColour(pH_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_Water_temp_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read Water Temperature (°C)  —  RS485");
			this.setOutput(true, null);
			this.setColour(pH_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_DO_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DO begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(DO_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_DO_readholding'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("DO readHoldingRegisters  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(DO_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_DO_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read DO (mg/L)  —  RS485");
			this.setOutput(true, null);
			this.setColour(DO_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_DO_temp_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read DO Temperature (°C)  —  RS485");
			this.setOutput(true, null);
			this.setColour(DO_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_EC_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("EC begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(EC_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_EC_readholding'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("EC readHoldingRegisters  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(EC_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['WQ_rs485_EC_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read EC (S/m)  —  RS485");
			this.setOutput(true, null);
			this.setColour(EC_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_ANS_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("ANS begin  —  RS485  id :")
				.appendField(new Blockly.FieldTextInput("1"), "ID");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(AM_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_ANS_readholding'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("ANS readHoldingRegisters  —  RS485");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(AM_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_ANS_ammonia_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("ANS Ammonia Read (mg/L)  —  RS485");
			this.setOutput(true, null);
			this.setColour(AM_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_ANS_pH_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("ANS pH Read  —  RS485");
			this.setOutput(true, null);
			this.setColour(AM_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['rs485_ANS_temp_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Read ANS Temperature (°C)  —  RS485");
			this.setOutput(true, null);
			this.setColour(AM_color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}