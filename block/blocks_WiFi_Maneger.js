/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	var color = "#2BA3D9";

	Blockly.Blocks['WiFi_Manager_begin'] = {
		init: function () {
			this.appendDummyInput()
				//.appendField(new Blockly.FieldImage("static/icons_wifi.png", 24, 24, "*"))
				.appendField("WiFi Manager Setup")
			this.appendDummyInput()
				.appendField("Create Name for Device")
			this.appendDummyInput()
				.appendField("SSID  :")
				.appendField(new Blockly.FieldTextInput("B-Farm WiFi Manager"), "wifiname")
			this.appendDummyInput()
				.appendField("PASS  :")
				.appendField(new Blockly.FieldTextInput("123456789"), "wifipassword");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(color);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}