module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['print_system_time'] = function (block) {
		var code = '';
		code += '#EXTINC#include "time_utility.h"#END\n';
		code += '\n';
		code += 'print_system_time();\n';
		return code;
	};

	Blockly.JavaScript['get_system_time'] = function (block) {
		var code = '';
		code += '#EXTINC#include "time_utility.h"#END\n';
		code += 'get_system_time()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['get_system_time_year'] = function (block) {
		var code = '';
		code += '#EXTINC#include "time_utility.h"#END\n';
		code += 'get_system_time_year()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_system_time_month'] = function (block) {
		var code = '';
		code += '#EXTINC#include "time_utility.h"#END\n';
		code += 'get_system_time_month()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_system_time_day'] = function (block) {
		var code = '';
		code += '#EXTINC#include "time_utility.h"#END\n';
		code += 'get_system_time_day()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_system_time_hour'] = function (block) {
		var code = '';
		code += '#EXTINC#include "time_utility.h"#END\n';
		code += 'get_system_time_hour()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_system_time_minute'] = function (block) {
		var code = '';
		code += '#EXTINC#include "time_utility.h"#END\n';
		code += 'get_system_time_minute()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_system_time_second'] = function (block) {
		var code = '';
		code += '#EXTINC#include "time_utility.h"#END\n';
		code += 'get_system_time_second()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	Blockly.JavaScript['get_system_time_wday'] = function (block) {
		var code = '';
		code += '#EXTINC#include "time_utility.h"#END\n';
		code += 'get_system_time_wday()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};

	Blockly.JavaScript['set_system_time'] = function (block) {
		"use strict";
		var _year = block.getFieldValue('_year');
		var _month = block.getFieldValue('_month');
		var _day = block.getFieldValue('_day');
		var _hour = block.getFieldValue('_hour');
		var _minute = block.getFieldValue('_minute');
		var _second = block.getFieldValue('_second');
		var code = ``;
		code += '#EXTINC#include "time_utility.h"#END\n';
		code += `set_system_time(${_year}+2000,${_month},${_day},${_hour},${_minute},${_second});\n`
		return code;
	};
}