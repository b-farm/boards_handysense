module.exports = function (Blockly) {
	"use strict";
	Blockly.Blocks['MLX90640_initial'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("MLX90640 begin (I2C)");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#3f51b5");
			this.setTooltip("begin using MLX90640 with default configs");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['MLX90640_initial_config'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("setMode")
				.appendField(new Blockly.FieldDropdown([["CHESS", "MLX90640_CHESS"], ["INTERLEAVED", "MLX90640_INTERLEAVED"]]), "mode")
				.appendField("setResolution")
				.appendField(new Blockly.FieldDropdown([["16BIT", "MLX90640_ADC_16BIT"], ["17BIT", "MLX90640_ADC_17BIT"], ["18BIT", "MLX90640_ADC_18BIT"], ["19BIT", "MLX90640_ADC_19BIT"]]), "resolution")
				.appendField("setRefreshRate")
				.appendField(new Blockly.FieldDropdown([["0.5 HZ", "MLX90640_0_5_HZ"], ["1 HZ", "MLX90640_1_HZ"], ["2 HZ", "MLX90640_2_HZ"], ["4 HZ", "MLX90640_4_HZ"], ["8 HZ", "MLX90640_8_HZ"], ["16 HZ", "MLX90640_16_HZ"], ["32 HZ", "MLX90640_32_HZ"], ["64 HZ", "MLX90640_64_HZ"]]), "refreshrate");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#3f51b5");
			this.setTooltip("begin using MLX90640 with manual configs");
			this.setHelpUrl("");
		}
	};


	Blockly.Blocks['MLX90640_read'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("MLX90640 read temp ")
				.appendField(new Blockly.FieldNumber(100, 0, 767), "addr")
			this.setOutput(true, null);
			this.setColour("#3f51b5");
			this.setTooltip("read Temp data from MLX9060");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['MLX90640_read2'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("MLX90640 read")
			this.appendValueInput("addr")
				.setCheck(null)
				.appendField("address");
			this.setOutput(true, null);
			this.setColour("#3f51b5");
			this.setTooltip("read frame Temp data from MLX9060");
			this.setHelpUrl("");
		}
	};

}