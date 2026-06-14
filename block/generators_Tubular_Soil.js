/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['TubularSoil_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster TubularSoilRs485;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
				TubularSoilRs485.begin(${text_ID}, Serial2);
			#END

			#LOOP_EXT_CODE
				uint8_t result_TubularSoilRs485 = TubularSoilRs485.readHoldingRegisters(0, 10);
			#END
	`;
		return code;
	};

	Blockly.JavaScript["TubularSoilMois_10cm_read"] = function (block) {
		var code = `(TubularSoilRs485.getResponseBuffer(0) / 10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["TubularSoilTemp_10cm_read"] = function (block) {
		var code = `(TubularSoilRs485.getResponseBuffer(1) / 10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["TubularSoilMois_20cm_read"] = function (block) {
		var code = `(TubularSoilRs485.getResponseBuffer(2) / 10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["TubularSoilTemp_20cm_read"] = function (block) {
		var code = `(TubularSoilRs485.getResponseBuffer(3) / 10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["TubularSoilMois_30cm_read"] = function (block) {
		var code = `(TubularSoilRs485.getResponseBuffer(4) / 10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["TubularSoilTemp_30cm_read"] = function (block) {
		var code = `(TubularSoilRs485.getResponseBuffer(5) / 10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["TubularSoilMois_40cm_read"] = function (block) {
		var code = `(TubularSoilRs485.getResponseBuffer(6) / 10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["TubularSoilTemp_40cm_read"] = function (block) {
		var code = `(TubularSoilRs485.getResponseBuffer(7) / 10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["TubularSoilMois_50cm_read"] = function (block) {
		var code = `(TubularSoilRs485.getResponseBuffer(8) / 10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["TubularSoilTemp_50cm_read"] = function (block) {
		var code = `(TubularSoilRs485.getResponseBuffer(9) / 10.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}