module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript["NTC_initial"] = function (block) {
		var Vpp = block.getFieldValue('vpp');
		var pin = block.getFieldValue('ch');
		var Rref = block.getFieldValue('R0');
		var RNor = block.getFieldValue('R_NTC');
		var Temp = block.getFieldValue('Temp');
		var B_Value = block.getFieldValue('B_Value');
		var code = `
	#EXTINC
	 #include "Thermistor.h"
	 #include "NTC_Thermistor.h"
//	 #define SENSOR_PIN         ${pin}
//	 #define REFERENCE_RESISTANCE   ${Rref}
//	 #define NOMINAL_RESISTANCE     ${RNor}
//	 #define NOMINAL_TEMPERATURE    ${Temp}
//	 #define B_VALUE                ${B_Value}
	 Thermistor* thermistor${pin};
	#END

	#FUNCTION
   	#END
	#VARIABLE
	#END

	#SETUP
	thermistor${pin} = new NTC_Thermistor(
		${Vpp},
		${pin},
		${Rref},
		${RNor},
		${Temp},
		${B_Value}
	  );
	#END
	#LOOP_EXT_CODE
	#END
	`;

		return code;
	};


	Blockly.JavaScript["NTC_read"] = function (block) {

		var set_mode = block.getFieldValue('mode');
		var set_ch = block.getFieldValue('ch');

		var code = `thermistor${set_ch}->${set_mode}`;
		//	var code = `thermistor->${set_mode}`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];


	};
}