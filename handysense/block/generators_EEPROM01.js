module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['AT24C256_begin'] = function (block) {
		var code = '';
		code += '#EXTINC #include "AT24C256.h" #END\n';
		code += '#VARIABLE AT24C256 eeprom; #END\n';
		code += '#VARIABLE char dataread[50]; #END\n';
		code += '#VARIABLE int address_wr; #END\n';
		code += '#VARIABLE char data_wr; #END\n';

		code += '\n';
		code += '#SETUP Wire.begin(); #END\n';
		code += '#SETUP Serial.begin(115200); #END\n';
		return code;
	};

	//-------------------------------------------------------
	Blockly.JavaScript['AT24C256_WriteData'] = function (block) {
		var code = `
	 address_wr = ${block.getFieldValue('address01')};
	 data_wr = ${block.getFieldValue('data01')};
	eeprom.write(data_wr, address_wr);
	`;
		return code;
	};

	//-----------------------------------------------------------
	Blockly.JavaScript['AT24C256_WriteDataMulti'] = function (block) {
		var code = `
	int addresswr = ${block.getFieldValue('addresswr')}; 
	int numchar;
	int i;
	String str01 = dataWrite;
	for (int i = 0; i < str01.length(); i++) {
	  eeprom.write(str01[i], addresswr + i);
	  numchar = i;
	}
	Serial.print("เขียนข้อมูล AT24C256 จำนวน = ");
	Serial.print(numchar);
	Serial.print(" ข้อมูลแรก: ");
	Serial.print(str01[0]);
	Serial.print(" ข้อมูลสุดท้าย: ");
	Serial.println(str01[numchar]);
	`;
		return code;
	};

	//-------------------------------------------------------------------
	Blockly.JavaScript['AT24C256_ReadData'] = function (block) {
		var code = 'eeprom.read(' + block.getFieldValue('add02') + ')';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	//-------------------------------------------------------------------
	Blockly.JavaScript['AT24C256_ReadDataMulti'] = function (block) {
		var code = `
	int address = ${block.getFieldValue('addressMR')}; 
	int numBytes = ${block.getFieldValue('numBytesMR')}; 
	int i = 0;
	// อ่านข้อมูลจาก EEPROM
	char data[numBytes];
	for (i = 0; i < numBytes; i++) {
	  data[i] = eeprom.read(address + i);
	}
	// พิมพ์ข้อมูลบน Serial Monitor
	for (i = 0; i < numBytes; i++) {
	  dataread[i] = data[i];
	  Serial.print(dataread[i]);
	  Serial.print(" ");
	}
	Serial.println();
	`;
		return code;
	};
}