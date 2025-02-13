/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	"use strict";
	Blockly.JavaScript['CJOB_begin'] = function (block) {
		var code = '';
		code += '#EXTINC#include <time.h>#END\n';
		code += '#EXTINC#include "cjob.h"#END\n';
		code += '#VARIABLE int CJOB_begin;#END\n';
		code += '\n';
		code += '#LOOP_EXT_CODE Cron.delay();#END\n'

		return code;
	};


	Blockly.JavaScript['CJOB_addschedule'] = function (block) {

		var schedule = block.getFieldValue('schedule');
		let _oneshort = (block.getFieldValue('_oneshort') == 'TRUE') ? 'true' : 'false';
		let statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
		var jobname = Blockly.JavaScript.variableDB_.getName(
			block.getFieldValue('jobname'), Blockly.Procedures.NAME_TYPE);
		let _schname = block.getFieldValue('schname').trim();


		var code = ''

		code += '#VARIABLE'
		code += 'void ' + jobname + '(){\n\n'
		code += statements_callback
		code += '}\n'
		code += '\n'
		code += '\n#END'


		if (_schname.length > 0) {
			code += '#VARIABLE int id_' + _schname + ';#END\n';
			code += 'id_' + _schname + '=Cron.create(' + schedule + ',' + jobname + ',false); \n'
		} else {
			code += 'Cron.create(' + schedule + ',' + jobname + ',false); \n'
		}


		return code;
	};

	Blockly.JavaScript['CJOB_add_schedule_time'] = function (block) {
		"use strict";

		let _hour = block.getFieldValue('_hour');
		let _minute = block.getFieldValue('_minute');
		let _second = block.getFieldValue('_second');
		let _oneshort = (block.getFieldValue('_oneshort') == 'TRUE') ? 'true' : 'false';
		let statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
		var jobname = Blockly.JavaScript.variableDB_.getName(
			block.getFieldValue('jobname'), Blockly.Procedures.NAME_TYPE);

		let _schname = block.getFieldValue('schname').trim();

		var code = ''

		code += '#VARIABLE'
		code += 'void ' + jobname + '(){\n\n'
		code += statements_callback
		code += '}\n'
		code += '\n'
		code += '\n#END'

		if (_schname.length > 0) {
			code += '#VARIABLE int id_' + _schname + ';#END\n';
			code += 'id_' + _schname + '=Cron.create(' + '"' + _second + ' ' + _minute + ' ' + _hour + ' ' + '*' + ' ' + '*' + ' ' + '*' + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		} else {
			code += 'Cron.create(' + '"' + _second + ' ' + _minute + ' ' + _hour + ' ' + '*' + ' ' + '*' + ' ' + '*' + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		}


		return code;
	};

	Blockly.JavaScript['CJOB_add_schedule_datetime'] = function (block) {
		"use strict";
		let _month = block.getFieldValue('_month');
		let _day = block.getFieldValue('_day');
		let _hour = block.getFieldValue('_hour');
		let _minute = block.getFieldValue('_minute');
		let _second = block.getFieldValue('_second');
		let _oneshort = (block.getFieldValue('_oneshort') == 'TRUE') ? 'true' : 'false';
		let _schname = block.getFieldValue('schname').trim();
		let statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
		var jobname = Blockly.JavaScript.variableDB_.getName(
			block.getFieldValue('jobname'), Blockly.Procedures.NAME_TYPE);


		var code = ''

		code += '#VARIABLE'
		code += 'void ' + jobname + '(){\n\n'
		code += statements_callback
		code += '}\n'
		code += '\n'
		code += '\n#END'
		if (_schname.length > 0) {
			code += '#VARIABLE int id_' + _schname + ';#END\n';
			code += 'id_' + _schname + '=Cron.create(' + '"' + _second + ' ' + _minute + ' ' + _hour + ' ' + _day + ' ' + _month + ' ' + '*' + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		} else {
			code += 'Cron.create(' + '"' + _second + ' ' + _minute + ' ' + _hour + ' ' + _day + ' ' + _month + ' ' + '*' + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		}
		return code;
	};

	Blockly.JavaScript['CJOB_add_schedule_weekday'] = function (block) {
		"use strict";
		let _weekday = block.getFieldValue('_weekday');
		let _hour = block.getFieldValue('_hour');
		let _minute = block.getFieldValue('_minute');
		let _second = block.getFieldValue('_second');
		let _oneshort = (block.getFieldValue('_oneshort') == 'TRUE') ? 'true' : 'false';
		let _schname = block.getFieldValue('schname').trim();
		let statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
		var jobname = Blockly.JavaScript.variableDB_.getName(
			block.getFieldValue('jobname'), Blockly.Procedures.NAME_TYPE);


		var code = ''
		code += '#VARIABLE'
		code += 'void ' + jobname + '(){\n\n'
		code += statements_callback
		code += '}\n'
		code += '\n'
		code += '\n#END'

		if (_schname.length > 0) {
			code += '#VARIABLE int id_' + _schname + ';#END\n';
			code += 'id_' + _schname + '= Cron.create(' + '"' + _second + ' ' + _minute + ' ' + _hour + ' ' + '*' + ' ' + '*' + ' ' + _weekday + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		} else {
			code += 'Cron.create(' + '"' + _second + ' ' + _minute + ' ' + _hour + ' ' + '*' + ' ' + '*' + ' ' + _weekday + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		}
		return code;
	};

	Blockly.JavaScript['CJOB_addschedule_every_seconds'] = function (block) {
		"use strict";
		let _second = block.getFieldValue('_second');
		let _oneshort = (block.getFieldValue('_oneshort') == 'TRUE') ? 'true' : 'false';
		let _schname = block.getFieldValue('schname').trim();
		let statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
		var jobname = Blockly.JavaScript.variableDB_.getName(
			block.getFieldValue('jobname'), Blockly.Procedures.NAME_TYPE);


		var code = ''
		code += '#VARIABLE'
		code += 'void ' + jobname + '(){\n\n'
		code += statements_callback
		code += '}\n'
		code += '\n'
		code += '\n#END'
		if (_schname.length > 0) {
			code += '#VARIABLE int id_' + _schname + ';#END\n';
			code += 'id_' + _schname + '=Cron.create(' + '"' + _second + ' ' + '*' + ' ' + '*' + ' ' + '*' + ' ' + '*' + ' ' + '*' + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		} else {
			code += 'Cron.create(' + '"' + _second + ' ' + '*' + ' ' + '*' + ' ' + '*' + ' ' + '*' + ' ' + '*' + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		}

		return code;
	};
	Blockly.JavaScript['CJOB_addschedule_every_minutes'] = function (block) {
		"use strict";
		let _minute = block.getFieldValue('_minute');
		let _second = block.getFieldValue('_second');
		let _oneshort = (block.getFieldValue('_oneshort') == 'TRUE') ? 'true' : 'false';
		let _schname = block.getFieldValue('schname').trim();

		let statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
		var jobname = Blockly.JavaScript.variableDB_.getName(
			block.getFieldValue('jobname'), Blockly.Procedures.NAME_TYPE);

		var code = ''
		code += '#VARIABLE'
		code += 'void ' + jobname + '(){\n\n'
		code += statements_callback
		code += '}\n'
		code += '\n'
		code += '\n#END'

		if (_schname.length > 0) {
			code += '#VARIABLE int id_' + _schname + ';#END\n';
			code += 'id_' + _schname + '=Cron.create(' + '"' + _second + ' ' + _minute + ' ' + '*' + ' ' + '*' + ' ' + '*' + ' ' + '*' + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		} else {
			code += 'Cron.create(' + '"' + _second + ' ' + _minute + ' ' + '*' + ' ' + '*' + ' ' + '*' + ' ' + '*' + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		}

		return code;
	};
	Blockly.JavaScript['CJOB_addschedule_every_hours'] = function (block) {
		"use strict";
		let _hour = block.getFieldValue('_hour');
		let _minute = block.getFieldValue('_minute');
		let _second = block.getFieldValue('_second');
		let _oneshort = (block.getFieldValue('_oneshort') == 'TRUE') ? 'true' : 'false';
		let _schname = block.getFieldValue('schname').trim();

		let statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
		var jobname = Blockly.JavaScript.variableDB_.getName(
			block.getFieldValue('jobname'), Blockly.Procedures.NAME_TYPE);

		var code = ''
		code += '#VARIABLE'
		code += 'void ' + jobname + '(){\n\n'
		code += statements_callback
		code += '}\n'
		code += '\n'
		code += '\n#END'
		if (_schname.length > 0) {
			code += '#VARIABLE int id_' + _schname + ';#END\n';
			code += 'id_' + _schname + '=Cron.create(' + '"' + _second + ' ' + _minute + ' ' + _hour + ' ' + '*' + ' ' + '*' + ' ' + '*' + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		} else {
			code += 'Cron.create(' + '"' + _second + ' ' + _minute + ' ' + _hour + ' ' + '*' + ' ' + '*' + ' ' + '*' + '"' + ',' + jobname + ',' + _oneshort + ');\n'
		}

		return code;
	};
	Blockly.JavaScript['CJOB_runnow'] = function (block) {
		let statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');

		var code = ''
		code += statements_callback

		return code;
	};

	Blockly.JavaScript['CJOB_delete_schedule'] = function (block) {

		let _schname = block.getFieldValue('schname').trim();

		var code = ''

		if (_schname.length > 0) {
			code += 'Cron.free(id_' + _schname + '); \n'
		}

		return code;
	};
	Blockly.JavaScript['CJOB_enable_schedule'] = function (block) {

		let _schname = block.getFieldValue('schname').trim();

		var code = ''

		if (_schname.length > 0) {
			code += 'Cron.enable(id_' + _schname + '); \n'
		}

		return code;
	};
	Blockly.JavaScript['CJOB_disable_schedule'] = function (block) {

		let _schname = block.getFieldValue('schname').trim();

		var code = ''

		if (_schname.length > 0) {
			code += 'Cron.disable(id_' + _schname + '); \n'
		}

		return code;
	}
}