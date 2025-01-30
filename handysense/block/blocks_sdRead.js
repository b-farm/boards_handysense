module.exports = function (Blockly) {
	"use strict";
	// Theme of Plug
	// this.setColour('#6495ED');
	// this.setColour('#1e81b0');

	Blockly.Blocks['setup_sdCard'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('SD : Card begin');
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour('#1e81b0');
		}
	};

	//------------------------------------------------------------------------
	/*  Blockly.Blocks['sdCard_Type'] = {
		init: function() {
		  this.appendDummyInput().appendField('ตรวจสอบประเภท sd card ');
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour('#6495ED');
		  this.setTooltip('');
		  this.setHelpUrl('');
		}
	  };
	*/
	//---------------------------------------------------------
	Blockly.Blocks['readList_sdcard'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('SD card : Read all files name');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#6495ED');
			this.setTooltip('SD card');
			this.setHelpUrl('Reads all file names from sd Card.');
		}
	};

	//---------------------------------------------------
	Blockly.Blocks['sdCard_GetDataFileName'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('SD Card : Read data 2 kByte from file ')
				.appendField(new Blockly.FieldTextInput('F2N_ST1.CSV'), 'NAME02');
			//this.setOutput(true, 'String');

			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#6495ED');
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	//---------------------------------------------------
	Blockly.Blocks['sdCard_CreateFileName'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('Create file ')
				.appendField(new Blockly.FieldTextInput('filename01.csv'), 'NAME01');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#6495ED');
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	//------------------------------------------------------------------------
	Blockly.Blocks['sdCard_DeleteFile'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('Delete file ')
				.appendField(new Blockly.FieldTextInput('filename'), 'NAME03');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#6495ED');
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	//------------------------------------------------------------------------
	Blockly.Blocks['sdCard_MrDir'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('Create Folder ')
				.appendField(new Blockly.FieldTextInput('dirname'), 'dir01');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#6495ED');
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};

	//------------------------------------------------------------------------
	Blockly.Blocks['sdCard_DelDir'] = {
		init: function () {
			this.appendDummyInput()
				.appendField('Delete Folder ')
				.appendField(new Blockly.FieldTextInput('dirname'), 'dir00');
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour('#6495ED');
			this.setTooltip('');
			this.setHelpUrl('');
		}
	};
	//------------------------------------------------------
	/*Blockly.Blocks['sdCard_Print'] = {
	  init: function() {
		//this.appendValueInput("DATA").setCheck("Array").appendField("ข้อมูล: ");
		this.appendDummyInput().appendField("พิมพ์ข้อมูลจากตัวแปรอเรย์ ");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour('#1e81b0');
		this.setTooltip("พิมพ์ข้อมูลจากตัวแปรอเรย์ไปยังไฟล์บนการ์ด SD");
		this.setHelpUrl("https://www.youtube.com/watch?v=fPw8CVpNZ0o");
	  }
	}; 
  */

}