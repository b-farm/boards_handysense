module.exports = function (Blockly) {
	"use strict";
	Blockly.Blocks['AT24C256_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("AT24C256 begin");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#1e81b0');
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	//---------------------------------------------------
	Blockly.Blocks['AT24C256_WriteData'] = {
		init: function () {
			this.appendDummyInput().appendField('Write 1 byte data to: ')
				.appendField('Address ')
				.appendField(new Blockly.FieldTextInput('00'), 'address01')
				.appendField('Data [0...255] ')
				.appendField(new Blockly.FieldTextInput('255',), 'data01');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#6495ED');
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	//----------------------------------------------------
	Blockly.Blocks['AT24C256_WriteDataMulti'] = {
		init: function () {
			this.appendDummyInput().appendField('Write data from variable to ');
			this.appendDummyInput().appendField('Address ')
				.appendField(new Blockly.FieldTextInput('01'), 'addresswr')
				.appendField('Data ').appendField(new Blockly.FieldVariable('dataWrite'), 'datawr');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#6495ED');
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	//---------------------------------------------------
	Blockly.Blocks['AT24C256_ReadData'] = {
		init: function () {
			this.appendDummyInput().appendField('Read data from address ')
				.appendField(new Blockly.FieldTextInput('00'), 'add02')
			this.setOutput(true, 'String');
			this.setColour('#6495ED');
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	//-----------------------------------------------------------
	Blockly.Blocks['AT24C256_ReadDataMulti'] = {
		init: function () {
			this.appendDummyInput().appendField('Multi-byte data reading ');
			this.appendDummyInput().appendField('Start address ')
				.appendField(new Blockly.FieldTextInput('00'), 'addressMR')
				.appendField(' Byte number ').appendField(new Blockly.FieldTextInput('20'), 'numBytesMR');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#6495ED');
			this.setTooltip('');
			this.setHelpUrl('');
		},
	};
}