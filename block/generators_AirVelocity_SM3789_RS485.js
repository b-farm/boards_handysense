/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict'; Blockly.JavaScript['AirVelocity_SM3789_begin'] = function (block) {
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster AirVelocityRs485;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
			#END
	`;
		return code;
	};

	Blockly.JavaScript['AirVelocity_SM3789_read'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `([](){
			AirVelocityRs485.begin(${text_ID}, Serial2);
			delay(50);
			if (AirVelocityRs485.readHoldingRegisters(0, 1) == AirVelocityRs485.ku8MBSuccess) {
				return (AirVelocityRs485.getResponseBuffer(0) / 1.0f);
			}
			return 0.0f;
		}())`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}