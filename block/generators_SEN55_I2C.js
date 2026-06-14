/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['I2C_SEN55_begin'] = function (block) {
		var code = `
			#EXTINC
				#include <SensirionI2CSen5x.h>
			#END

			#VARIABLE
				SensirionI2CSen5x sen5x;
				float pm1p0, pm2p5, pm4p0, pm10p0, ambientHumidity, ambientTemperature, vocIndex, noxIndex;
			#END

			#SETUP
				Wire.begin();
				sen5x.begin(Wire);
				sen5x.startMeasurement();
			#END
	`;
		return code;
	};

	Blockly.JavaScript['I2C_SEN55_read'] = function (block) {
		var code = `
			uint16_t sen55 = sen5x.readMeasuredValues(
				pm1p0, pm2p5, pm4p0, pm10p0, ambientHumidity, ambientTemperature, vocIndex, noxIndex
			);
	`;
		return code;
	};

	Blockly.JavaScript['I2C_SEN55_pm1p0_read'] = function (block) {
		var code = 'pm1p0';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['I2C_SEN55_pm2p5_read'] = function (block) {
		var code = 'pm2p5';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['I2C_SEN55_pm4p0_read'] = function (block) {
		var code = 'pm4p0';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['I2C_SEN55_pm10p0_read'] = function (block) {
		var code = 'pm10p0';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['I2C_SEN55_temp_read'] = function (block) {
		var code = 'ambientTemperature';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['I2C_SEN55_humid_read'] = function (block) {
		var code = 'ambientHumidity';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['I2C_SEN55_voc_read'] = function (block) {
		var code = 'vocIndex';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['I2C_SEN55_nox_read'] = function (block) {
		var code = 'noxIndex';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}