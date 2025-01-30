module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript["DFROBOT_PH_read"] = function (block) {

		var set_volt = Blockly.JavaScript.valueToCode(block, 'volt', Blockly.JavaScript.ORDER_ATOMIC);
		var set_temp = Blockly.JavaScript.valueToCode(block, 'temp', Blockly.JavaScript.ORDER_ATOMIC);
		var code = `ph.readPH(${set_volt}, ${set_temp})`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript["DFROBOT_PH_initial"] = function (block) {

		var code = `
	#EXTINC 
	#include "DFRobot_PH.h"
	#include "EEPROM.h"
	#END
	#FUNCTION
   
	#END
	#VARIABLE
	DFRobot_PH ph;
	float phVolt, phValue, phTemp = 25;
	#END
	//ph.begin();
	#LOOP_EXT_CODE

	#END
	`;
		return code;
	};

	Blockly.JavaScript["DFROBOT_PH_initial_cal"] = function (block) {

		var set_ph4volt = block.getFieldValue('ph4volt');
		var set_ph7volt = block.getFieldValue('ph7volt');
		var code = `
	#EXTINC 
	#include "DFRobot_PH.h"
	#include "EEPROM.h"
	#END
	#FUNCTION
   
	#END
	#VARIABLE
	DFRobot_PH ph;
	float phVolt, phValue, phTemp = 25;
	#END
	ph.set_PHcal(${set_ph4volt},${set_ph7volt});
	#LOOP_EXT_CODE

	#END
	`;
		return code;
	}
}