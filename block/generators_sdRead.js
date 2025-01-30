module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['setup_sdCard'] = function (block) {
		var code = '';
		code += '#EXTINC#include "mySD.h"#END\n';
		code += '#EXTINC#include <SPI.h>#END\n';
		code += '#EXTINC#include <Wire.h>#END\n';
		code += '#VARIABLE char readraw[2024]; #END\n';
		code += '\n';
		code += '#SETUP Wire.begin();#END\n';
		code += '#SETUP Serial.begin(115200);#END\n';
		code += '#SETUP SD.begin(5, 23, 19, 18);#END\n';
		code += '\n';
		return code;
	};
	//--------------------------------------------------------------
	/*Blockly.JavaScript['sdCard_Type'] = function(block) {
		var typeVar = block.getFieldValue('type03');
		var code = `
		  var sdType = SD.cardType();
		  Serial.println("ประเภทของ SD Card: " + sdType);
		`;
	  
		return code;
	  };
	 */
	//--------------------------------------------------------------
	Blockly.JavaScript['readList_sdcard'] = function (block) {
		return `
	File root = SD.open("/");
	while (true) {
	  File file3 = root.openNextFile();
	  if (!file3) {
		break;
	  }
	  Serial.println(file3.name()); // แสดงชื่อไฟล์
	  file3.close();// ปิดไฟล์
	}
	root.close();// ปิดไดเร็กทอรี
	`;
	};

	//--------------------------------------------------------
	Blockly.JavaScript['sdCard_GetDataFileName'] = function (block) {
		var filename = block.getFieldValue('NAME02');
		var code = `
	File file = SD.open("${filename}", O_READ);
	if (!file) {
	  Serial.println("ไม่พบไฟล์");
	  return;
	}
	// อ่านข้อมูลจากไฟล์
	int rumm = 0;
	while (file.available()) {
	  char c = file.read();
	  if (rumm < 2024) {
		readraw[rumm] = c;
		rumm++;
	  } else {
		Serial.println("จำนวนข้อมูลเกินขนาดตัวแปร buffer");
		break;
	  }
	}
	file.close(); // ปิดไฟล์
	
	Serial.println("จำนวนข้อมูล = " + String(rumm));
    Serial.print("ตัวอย่างข้อมูล ");
    for (int i = (rumm-20); i < rumm; i++) {
        Serial.print(readraw[i]);
    }
    Serial.println();
    Serial.println("อ่านข้อมูลสำเร็จ");
	`;
		return code;
	};

	//-----------------------------------------------------------------
	Blockly.JavaScript['sdCard_CreateFileName'] = function (block) {
		var filenameCr = block.getFieldValue('NAME01');
		var code = `
	File fileCr = SD.open("${filenameCr}", FILE_WRITE);
	Serial.println("สร้างไฟล์สำเร็จ"); 
    file.close(); // ปิดไฟล์
	`;
		return code;
	};

	//----------------------------------------------------------------
	Blockly.JavaScript['sdCard_DeleteFile'] = function (block) {
		var filenameDl = block.getFieldValue('NAME03');
		var code = `
	    //SD.remove("${filenameDl}");
	  if (SD.exists("${filenameDl}")) {
		  SD.remove("${filenameDl}");
		  Serial.println("ลบไฟล์สำเร็จ");
	  } else {
		Serial.println("ไม่พบไฟล์ ");
	  }

	`;

		return code;
	};

	//-----------------------------------------------------------------
	Blockly.JavaScript['sdCard_MrDir'] = function (block) {
		var dirName = block.getFieldValue('dir01');
		var code = `
	  if (!SD.exists("${dirName}")) {
		SD.mkdir("${dirName}");
		Serial.println("สร้างไดเรกทอรีสำเร็จ");
	  } else {
		Serial.println("ไดเรกทอรีนี้มีอยู่แล้ว");
	  }
	`;
		return code;
	};

	//----------------------------------------------------------------
	Blockly.JavaScript['sdCard_DelDir'] = function (block) {
		var dirName = block.getFieldValue('dir00');
		var code = `
	  if (SD.exists("${dirName}")) {
		SD.rmdir("${dirName}");
		Serial.println("ลบไดเรกทอรี สำเร็จ");
	  } else {
		Serial.println("ไม่พบไดเรกทอรี ");
	  }
	`;

		return code;
	};

	//--------------------------------------------------------------
	/*Blockly.JavaScript['sdCard_Print'] = function(block) {
		var readraw = block.getFieldValue('READRAW');
		var code = `
		for (int i = 0; i < 100; i++) {
			Serial.print(readraw[i]);
		  }
		`;
	  
		return code;
	  };
	  */
}