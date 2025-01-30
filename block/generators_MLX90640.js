module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['MLX90640_initial'] = function (block) {
		var code = '';
		code += '#EXTINC#include "Adafruit_MLX90640.h"#END\n';
		code += '#VARIABLE Adafruit_MLX90640 mlx;#END\n';
		code += '#VARIABLE float frame[32*24];#END\n';
		code += '\n';
		code += 'if (! mlx.begin(MLX90640_I2CADDR_DEFAULT, &Wire)) {\n';
		code += '   Serial.println("MLX90640 not found!");\n';
		code += '}\n';
		code += 'Serial.println("Found Adafruit MLX90640");\n';
		code += 'Serial.print("Serial number: ");\n';
		code += 'Serial.print(mlx.serialNumber[0], HEX);\n';
		code += 'Serial.print(mlx.serialNumber[1], HEX);\n';
		code += 'Serial.println(mlx.serialNumber[2], HEX);\n';
		code += 'mlx.setMode(MLX90640_CHESS);\n';
		code += 'mlx.setResolution(MLX90640_ADC_18BIT);\n';
		code += 'mlx.setRefreshRate(MLX90640_2_HZ);\n';


		code += '#LOOP_EXT_CODE uint8_t max_temp;#END\n';
		code += '#LOOP_EXT_CODE mlx.getFrame(frame);#END\n';
		return code;
	};


	Blockly.JavaScript["MLX90640_initial_config"] = function (block) {
		var set_Mode = block.getFieldValue("mode");
		var set_Resolution = block.getFieldValue("resolution");
		var set_Refreashrate = block.getFieldValue("refreshrate");
		var code = `
	#EXTINC #include "Adafruit_MLX90640.h" #END
	#FUNCTION


	float getThemaladdr(int addr){
		mlx.getFrame(Tframe);
		return (Tframe[addr]);
	}

	#END
	#VARIABLE
	Adafruit_MLX90640 mlx;
	float Tframe[32*24];
	float ThermalMax=0,ThermalMin=1000,ThermalAVG=0;
	#END
	if (! mlx.begin(MLX90640_I2CADDR_DEFAULT, &Wire)) {
		Serial.println("MLX90640 not found!");
	}
	Serial.println("Found Adafruit MLX90640");
	Serial.print("Serial number: ");
	Serial.print(mlx.serialNumber[0], HEX);
	Serial.print(mlx.serialNumber[1], HEX);
	Serial.println(mlx.serialNumber[2], HEX);
	mlx.setMode(${set_Mode});
	mlx.setResolution(${set_Resolution});
	mlx.setRefreshRate(${set_Refreashrate});
	mlx.getFrame(Tframe);
	
	#LOOP_EXT_CODE
	
	#END
	`;
		return code;
	};

	Blockly.JavaScript["MLX90640_read_frame"] = function (block) {

		var code = `getThemalframe()`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript["MLX90640_read"] = function (block) {

		var set_addr = block.getFieldValue('addr');

		var code = `getThemaladdr(${set_addr})`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript["MLX90640_read2"] = function (block) {

		var set_addr = Blockly.JavaScript.valueToCode(block, 'addr', Blockly.JavaScript.ORDER_ATOMIC);

		var code = `getThemaladdr(${set_addr})`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
}