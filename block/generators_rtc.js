/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['setup_hardware_RTC2'] = function (block) {
		var _rtc = block.getFieldValue('_rtc');
		//code += '#EXTINC#include <RTClib.h>#END\n';
		var code = `
		#EXTINC 
		//#include "RTC2.h"
		#include "time_utility.h"
		#END
		#FUNCTION
		void print_rtc_time(void)
		{
  		RTCnow = rtc2.now();
  		char timeStamp[20];
 		sprintf(timeStamp,"%04d-%02d-%02d %02d:%02d:%02d",RTCnow.year(),RTCnow.month(),RTCnow.day(),RTCnow.hour(),RTCnow.minute(),RTCnow.second());
  		Serial.println(timeStamp);
		}
		void set_rtc_time2(int year,int month,int day,int hour,int minute,int second)
		{
  			rtc2.adjust(DateTime(year, month, day, hour, minute,second));
		}
		void update_system_time_with_rtc2(void)
		{
  		RTCnow = rtc2.now();
  		set_system_time(RTCnow.year(), RTCnow.month(), RTCnow.day(), RTCnow.hour(), RTCnow.minute(), RTCnow.second());
		}

		#END
		#VARIABLE

		void print_rtc_time(void);
		void set_rtc_time2(int year,int month,int day,int hour,int minute,int second);
		void update_system_time_with_rtc2(void);

		${_rtc} rtc2;
		DateTime RTCnow;
		#END
		#SETUP
	
		#END

		#LOOP_EXT_CODE
	
		#END
		rtc2.begin();
	
	`;
		return code;
	};

	Blockly.JavaScript['update_system_time_with_rtc2'] = function () {
		var code = '';
		code += 'update_system_time_with_rtc2();\n';
		return code;
	};

	Blockly.JavaScript['set_rtc_time2'] = function (block) {
		"use strict";
		var _year = Blockly.JavaScript.valueToCode(block, '_year', Blockly.JavaScript.ORDER_ATOMIC);
		var _month = Blockly.JavaScript.valueToCode(block, '_month', Blockly.JavaScript.ORDER_ATOMIC);
		var _day = Blockly.JavaScript.valueToCode(block, '_day', Blockly.JavaScript.ORDER_ATOMIC);
		var _hour = Blockly.JavaScript.valueToCode(block, '_hour', Blockly.JavaScript.ORDER_ATOMIC);
		var _minute = Blockly.JavaScript.valueToCode(block, '_minute', Blockly.JavaScript.ORDER_ATOMIC);
		var _second = Blockly.JavaScript.valueToCode(block, '_second', Blockly.JavaScript.ORDER_ATOMIC);
		var code = ``;
		//		code += 'set_rtc_time(2022,11,15,12,23,34);\n'
		code += `set_rtc_time2(${_year},${_month},${_day},${_hour},${_minute},${_second});\n`
		return code;
	};

	Blockly.JavaScript['set_system_time2'] = function (block) {
		"use strict";

		var _year = Blockly.JavaScript.valueToCode(block, '_year', Blockly.JavaScript.ORDER_ATOMIC);
		var _month = Blockly.JavaScript.valueToCode(block, '_month', Blockly.JavaScript.ORDER_ATOMIC);
		var _day = Blockly.JavaScript.valueToCode(block, '_day', Blockly.JavaScript.ORDER_ATOMIC);
		var _hour = Blockly.JavaScript.valueToCode(block, '_hour', Blockly.JavaScript.ORDER_ATOMIC);
		var _minute = Blockly.JavaScript.valueToCode(block, '_minute', Blockly.JavaScript.ORDER_ATOMIC);
		var _second = Blockly.JavaScript.valueToCode(block, '_second', Blockly.JavaScript.ORDER_ATOMIC);
		var code = ``;
		//code += '#EXTINC#include "time_utility.h"#END\n';
		code += `set_system_time(${_year},${_month},${_day},${_hour},${_minute},${_second});\n`
		return code;
	};

	Blockly.JavaScript['print_rtc_time'] = function () {
		var code = '';
		code += 'print_rtc_time();\n';
		return code;
	};

	Blockly.JavaScript['get_rtc_time'] = function () {
		var code = '';
		// code += '#EXTINC#include "rtc_ds1388.h"#END\n';
		// code += 'get_rtc_time()';
		code += 'rtc2.now()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['get_rtc_year'] = function () {
		var code = '';
		// code += '#EXTINC#include "rtc_ds1388.h"#END\n';
		// code += 'get_rtc_year()';
		code += 'rtc2.now().year()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_rtc_month'] = function () {
		var code = '';
		// code += '#EXTINC#include "rtc_ds1388.h"#END\n';
		// code += 'get_rtc_month()';
		code += 'rtc2.now().month()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_rtc_day'] = function () {
		var code = '';
		// code += '#EXTINC#include "rtc_ds1388.h"#END\n';
		// code += 'get_rtc_day()';
		code += 'rtc2.now().day()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_rtc_hour'] = function () {
		var code = '';
		// code += '#EXTINC#include "rtc_ds1388.h"#END\n';
		// code += 'get_rtc_hour()';
		code += 'rtc2.now().hour()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_rtc_minute'] = function () {
		var code = '';
		// code += '#EXTINC#include "rtc_ds1388.h"#END\n';
		// code += 'get_rtc_minute()';
		code += 'rtc2.now().minute()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_rtc_second'] = function () {
		var code = '';
		// code += '#EXTINC#include "rtc_ds1388.h"#END\n';
		// code += 'get_rtc_second()';
		code += 'rtc2.now().second()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_rtc_wday'] = function () {
		var code = '';
		code += '#EXTINC#include "rtc_ds1388.h"#END\n';
		code += 'get_rtc_weekday()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};


	/*
		Blockly.JavaScript['print_system_time'] = function (block) {
			var code = '';
			code += '#EXTINC#include "rtc_ds1388.h"#END\n';
			code += '\n';
			code += 'print_system_time();\n';
			return code;
		};
	
		Blockly.JavaScript['get_system_time'] = function (block) {
			var code = '';
			code += '#EXTINC#include "rtc_ds1388.h"#END\n';
			code += 'get_system_time()';
			return [code, Blockly.JavaScript.ORDER_NONE];
		};
	
		Blockly.JavaScript['get_system_time_year'] = function (block) {
			var code = '';
			code += '#EXTINC#include "rtc_ds1388.h"#END\n';
			code += 'get_system_time_year()';
			return [code, Blockly.JavaScript.ORDER_NONE];
		};
		Blockly.JavaScript['get_system_time_month'] = function (block) {
			var code = '';
			code += '#EXTINC#include "rtc_ds1388.h"#END\n';
			code += 'get_system_time_month()';
			return [code, Blockly.JavaScript.ORDER_NONE];
		};
		Blockly.JavaScript['get_system_time_day'] = function (block) {
			var code = '';
			code += '#EXTINC#include "rtc_ds1388.h"#END\n';
			code += 'get_system_time_day()';
			return [code, Blockly.JavaScript.ORDER_NONE];
		};
		Blockly.JavaScript['get_system_time_hour'] = function (block) {
			var code = '';
			code += '#EXTINC#include "rtc_ds1388.h"#END\n';
			code += 'get_system_time_hour()';
			return [code, Blockly.JavaScript.ORDER_NONE];
		};
		Blockly.JavaScript['get_system_time_minute'] = function (block) {
			var code = '';
			code += '#EXTINC#include "rtc_ds1388.h"#END\n';
			code += 'get_system_time_minute()';
			return [code, Blockly.JavaScript.ORDER_NONE];
		};
		Blockly.JavaScript['get_system_time_second'] = function (block) {
			var code = '';
			code += '#EXTINC#include "rtc_ds1388.h"#END\n';
			code += 'get_system_time_second()';
			return [code, Blockly.JavaScript.ORDER_NONE];
		};	
	
		Blockly.JavaScript['set_systime_time'] = function (block) {
			"use strict";
			var _year = block.getFieldValue('_year');
			var _month = block.getFieldValue('_month');
			var _day = block.getFieldValue('_day');
			var _hour = block.getFieldValue('_hour');
			var _minute = block.getFieldValue('_minute');
			var _second = block.getFieldValue('_second');
			var code = ``;
			code += `#EXTINC#include "rtc_ds1388.h"#END\n`;
			code += `set_system_time(${_year},${_month},${_day},${_hour},${_minute},${_second});\n`
			return code;
		};
		*/
}