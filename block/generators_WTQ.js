/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['WQ_rs485_Water_Level_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster Levelrs485;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
				Levelrs485.begin(${text_ID}, Serial2);
			#END

	`;
		return code;
	};

	Blockly.JavaScript['WQ_rs485_Water_Level_readholding'] = function (block) {
		var code = `
				uint8_t result_level_water = Levelrs485.readHoldingRegisters(0, 5);
	`;
		return code;
	};

	Blockly.JavaScript['WQ_rs485_pH_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster PHrs485;
				float PH;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
				PHrs485.begin(${text_ID}, Serial2);
			#END

	`;
		return code;
	};

	Blockly.JavaScript['WQ_rs485_pH_readholding'] = function (block) {
		var code = `
				uint8_t result_PH = PHrs485.readHoldingRegisters(0, 2);
	`;
		return code;
	};

	Blockly.JavaScript['WQ_rs485_DO_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
				float wordsToFloat_BE(uint16_t hi, uint16_t lo) {
                    uint32_t u = ((uint32_t)hi << 16) | lo;
                    float f;
                    memcpy(&f, &u, sizeof(f));
                    return f;
                }
			#END

			#VARIABLE
				ModbusMaster DOrs485;
			#END

			#SETUP
				Serial2.begin(9600, SERIAL_8N1, 16, 17);
				DOrs485.begin(${text_ID}, Serial2);
			#END

	`;
		return code;
	};

	Blockly.JavaScript['WQ_rs485_DO_readholding'] = function (block) {
		var code = `
				uint8_t result_DO = DOrs485.readHoldingRegisters(0, 5);
	`;
		return code;
	};

	Blockly.JavaScript['WQ_rs485_EC_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster ECrs485;
				float EC;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
				ECrs485.begin(${text_ID}, Serial2);
			#END

	`;
		return code;
	};

	Blockly.JavaScript['WQ_rs485_EC_readholding'] = function (block) {
		var code = `
				uint8_t result_EC = ECrs485.readHoldingRegisters(0, 2);
	`;
		return code;
	};

	Blockly.JavaScript['rs485_ANS_begin'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster ANSrs485;
				float ANSrs485;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
				ANSrs485.begin(${text_ID}, Serial2);
			#END
	`;
		return code;
	};

	Blockly.JavaScript['rs485_ANS_readholding'] = function (block) {
		var code = `
				uint8_t result_ANSrs485 = ANSrs485.readHoldingRegisters(0, 3);
	`;
		return code;
	};

	Blockly.JavaScript["WQ_rs485_Water_Level_read"] = function () {
		var code = `(Levelrs485.getResponseBuffer(4) / 1.0f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['WQ_rs485_pH_read'] = function (block) {
		var code = `(PHrs485.getResponseBuffer(1)/10.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['WQ_rs485_Water_temp_read'] = function (block) {
		var code = '(PHrs485.getResponseBuffer(0)/10.00f)';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['WQ_rs485_DO_read'] = function (block) {
		var code = `wordsToFloat_BE(DOrs485.getResponseBuffer(2), DOrs485.getResponseBuffer(3))`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['WQ_rs485_DO_temp_read'] = function (block) {
		var code = `wordsToFloat_BE(DOrs485.getResponseBuffer(4), DOrs485.getResponseBuffer(5))`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['WQ_rs485_EC_read'] = function (block) {
		var code = `(ECrs485.getResponseBuffer(1)/10.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["rs485_ANS_ammonia_read"] = function () {
		var code = `(ANSrs485.getResponseBuffer(0) / 100.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["rs485_ANS_pH_read"] = function () {
		var code = `(ANSrs485.getResponseBuffer(1) / 100.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["rs485_ANS_temp_read"] = function () {
		var code = `(ANSrs485.getResponseBuffer(2) / 10.00f)`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}