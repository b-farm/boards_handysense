/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript["led_begin"] = function (block) {
		var code = "";
		code += '#EXTINC#include "MCP23008.h"#END\n';
		code += "#EXTINC#include <Wire.h>#END\n";
		code += "#VARIABLE MCP23008 MCP (0x24);#END\n";
		code += "\n";
		code += "#SETUP Wire.begin();#END\n";
		code += "#SETUP Wire.setClock(10000);#END\n";
		code += "#SETUP MCP.begin();#END\n";
		code += "#SETUP MCP.pinMode8(0x00);#END\n";
		return code;
	};

	//   Blockly.JavaScript["led_control_on"] = function (block) {
	//     var ch_led = block.getFieldValue("ch_led");
	//     var code = `MCP.digitalWrite(${ch_led}, HIGH);`;
	//     return code;
	//   };

	// Blockly.JavaScript["led_control_off"] = function (block) {
	// 	var ch_led = block.getFieldValue("ch_led");
	// 	var code = `MCP.digitalWrite(${ch_led}, LOW);`;
	// 	return code;
	// };

	Blockly.JavaScript["led_control_on"] = function (block) {
		var ch_led = block.getFieldValue("ch_led");
		var code = `MCP.digitalWrite(${ch_led}, HIGH);
			#EXTINC#include "MCP23008.h"#END
			#EXTINC#include <Wire.h>#END
				#VARIABLE MCP23008 MCP (0x24);#END
					#SETUP Wire.begin();#END
					#SETUP Wire.setClock(10000);#END
					#SETUP MCP.begin();#END
					#SETUP MCP.pinMode8(0x00);#END`;
		return code;
	};

	Blockly.JavaScript["led_control_off"] = function (block) {
		var ch_led = block.getFieldValue("ch_led");
		var code = `MCP.digitalWrite(${ch_led}, LOW);
			#EXTINC#include "MCP23008.h"#END
			#EXTINC#include <Wire.h>#END
				#VARIABLE MCP23008 MCP (0x24);#END
					#SETUP Wire.begin();#END
					#SETUP Wire.setClock(10000);#END
					#SETUP MCP.begin();#END
					#SETUP MCP.pinMode8(0x00);#END`;
		return code;
	};
};
