/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['WiFi_Manager_begin'] = function (block) {
		var wifiname = block.getFieldValue("wifiname");
		var wifipassword = block.getFieldValue("wifipassword");
		var code = `
			#EXTINC
				#include "BfarmWiFiManager.h"
			#END

			#VARIABLE
				BfarmWiFiManager BfarmwifiManager("${wifiname}", "${wifipassword}");
			#END

			#SETUP
				BfarmwifiManager.begin();
			#END

			#LOOP_EXT_CODE
				BfarmwifiManager.reconnect();
			#END
	`;
		return code;
	};
}