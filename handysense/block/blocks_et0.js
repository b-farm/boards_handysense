module.exports = function (Blockly) {
	"use strict";

	Blockly.Blocks['et0'] = {
		init: function () {
			// this.appendDummyInput()
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(
					"/static/icons/icons8_math_96px.png",
					24,
					24,
					"*"))
				.appendField("ET0");
			this.appendValueInput("ra")
				.setCheck(null)
				.appendField("Radiation (MJ m^-2 day^-1)");
			this.appendValueInput("tc")
				.setCheck(null)
				.appendField("Temp Average (C)");
			this.appendValueInput("td")
				.setCheck(null)
				.appendField("Temp Difference (C)");
			// this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#3498DB");
			this.setTooltip("setup command for HandySense");
			this.setHelpUrl("");
		}
	};
};

