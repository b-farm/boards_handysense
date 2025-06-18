/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	"use strict";
	const fs = require('fs');
	const path = require('path');
	const rootDir = path.join(__dirname, '..', '..', '..');

	// let email_string;

	try {
		const emailPath = path.join(rootDir, 'email.txt');
		email_string = fs.readFileSync(emailPath, 'utf8').trim();
	} catch (err) {
		email_string = 'bfarm.oldversion@awd';
	}

	Blockly.JavaScript["HandySense_et0v1_begin"] = function (block) {
		var value_kc = Blockly.JavaScript.valueToCode(block, "value_kc", Blockly.JavaScript.ORDER_ATOMIC);
		var value_temp = Blockly.JavaScript.valueToCode(block, "value_temp", Blockly.JavaScript.ORDER_ATOMIC);
		var value_humi = Blockly.JavaScript.valueToCode(block, "value_humi", Blockly.JavaScript.ORDER_ATOMIC);
		var value_wind = Blockly.JavaScript.valueToCode(block, "value_wind", Blockly.JavaScript.ORDER_ATOMIC);
		var value_radw = Blockly.JavaScript.valueToCode(block, "value_radw", Blockly.JavaScript.ORDER_ATOMIC);
		var value_Heat = Blockly.JavaScript.valueToCode(block, "value_Heat", Blockly.JavaScript.ORDER_ATOMIC);
		var code = `  
			#EXTINC 
				#include <ThingSpeakWriter_asukiaaa.h>
				#include <mqtt_client.h>
				#include <pub_topic.h>
			#END

			#VARIABLE
				const float gamma_const  = 0.066;
				const float cp = 1.013 * 1e-3;
				const float rho = 1.225;
			#END

			#FUNCTION
				float calculateETo(float delta, float Rn, float G, float es, float ea, float ra, float rs) {
					return (delta * (Rn - G) + rho * cp * (es - ea) / ra) / (delta + gamma_const  * (1 + rs / ra));
				}

				float calculateETc(float Kc, float ETo) {
					return Kc * ETo;
				}
			#END

				float Kc = ${value_kc};

				float T = 	${value_temp};   // Temp (°C)
				float RH = 	${value_humi};  // Humi (%)
				float u2 = 	${value_wind};   // Wind speed 2 meter (m/s)
				float Rn = 	${value_radw};  // Net surface radiation (MJ/m²/day)
				float G = 	${value_Heat};    // Heat flow in soil (MJ/m²/day)

				float es = 0.6108 * exp((17.27 * T) / (T + 237.3));  // kPa
				float ea = es * (RH / 100.0);                        // kPa
				float delta = 4098 * (0.6108 * exp((17.27 * T) / (T + 237.3))) / pow((T + 237.3), 2);  // kPa/°C
				float ra = 208.0 / u2;
				float rs = 100.0; 

				float ETo = calculateETo(delta, Rn, G, es, ea, ra, rs);
				float ETc = calculateETc(Kc, ETo);
			`;
		return code;
	};

	Blockly.JavaScript["HandySense_et0v1_et0"] = function () {
		var code = "ETo";
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript["HandySense_et0v1_etc"] = function () {
		var code = "ETc";
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}