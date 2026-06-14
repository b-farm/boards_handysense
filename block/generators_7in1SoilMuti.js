/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	Blockly.JavaScript['7in1soilMuti_rs485_begin'] = function (block) {
		var code = `
			#EXTINC
				#include <ModbusMaster.h>
			#END

			#VARIABLE
				ModbusMaster rs485_npk;
			#END

			#SETUP
				Wire.begin();
				Serial2.begin(9600);
			#END
	`;
		return code;
	};

	Blockly.JavaScript['7in1soilMuti_rs485_mois_read'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `([](){
			rs485_npk.begin(${text_ID}, Serial2);
			delay(50);
			if (rs485_npk.readHoldingRegisters(0, 10) == rs485_npk.ku8MBSuccess) {
				return (rs485_npk.getResponseBuffer(0) / 10.00f);
			}
			return 0.0f;
		}())`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['7in1soilMuti_rs485_temps_read'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `([](){
			rs485_npk.begin(${text_ID}, Serial2);
			delay(50);
			if (rs485_npk.readHoldingRegisters(0, 10) == rs485_npk.ku8MBSuccess) {
				return (rs485_npk.getResponseBuffer(1) / 10.00f);
			}
			return 0.0f;
		}())`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['7in1soilMuti_rs485_ec_read'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `([](){
			rs485_npk.begin(${text_ID}, Serial2);
			delay(50);
			if (rs485_npk.readHoldingRegisters(0, 10) == rs485_npk.ku8MBSuccess) {
				return (rs485_npk.getResponseBuffer(2) / 1.0f);
			}
			return 0.0f;
		}())`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['7in1soilMuti_rs485_PH_read'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `([](){
			rs485_npk.begin(${text_ID}, Serial2);
			delay(50);
			if (rs485_npk.readHoldingRegisters(0, 10) == rs485_npk.ku8MBSuccess) {
				return (rs485_npk.getResponseBuffer(3) / 10.00f);
			}
			return 0.0f;
		}())`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['7in1soilMuti_rs485_N_read'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `([](){
			rs485_npk.begin(${text_ID}, Serial2);
			delay(50);
			if (rs485_npk.readHoldingRegisters(0, 10) == rs485_npk.ku8MBSuccess) {
				return (rs485_npk.getResponseBuffer(4) / 1.0f);
			}
			return 0.0f;
		}())`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['7in1soilMuti_rs485_P_read'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `([](){
			rs485_npk.begin(${text_ID}, Serial2);
			delay(50);
			if (rs485_npk.readHoldingRegisters(0, 10) == rs485_npk.ku8MBSuccess) {
				return (rs485_npk.getResponseBuffer(5) / 1.0f);
			}
			return 0.0f;
		}())`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['7in1soilMuti_rs485_K_read'] = function (block) {
		var text_ID = block.getFieldValue("ID");
		var code = `([](){
			rs485_npk.begin(${text_ID}, Serial2);
			delay(50);
			if (rs485_npk.readHoldingRegisters(0, 10) == rs485_npk.ku8MBSuccess) {
				return (rs485_npk.getResponseBuffer(6) / 1.0f);
			}
			return 0.0f;
		}())`;
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

};