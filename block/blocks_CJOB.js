/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	"use strict";
	Blockly.Blocks['CJOB_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob Setup");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};


	Blockly.Blocks['CJOB_runnow'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob runnow");
			this.appendStatementInput("callback")
				.setCheck(null)
				.appendField("to do ");

			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['CJOB_addschedule'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob add schedule");
			this.appendDummyInput()
				.appendField("   name (optional)")
				.appendField(new Blockly.FieldTextInput("   "), "schname");
			this.appendDummyInput()
				.appendField("schedule")
				.appendField(new Blockly.FieldTextInput('"1 * * * * *"'), "schedule")
				.appendField("  one shot")
				.appendField(new Blockly.FieldCheckbox("False"), "_oneshort");
			this.appendStatementInput("callback")
				.setCheck(null)
				.appendField("to do job")
				.appendField(new Blockly.FieldTextInput("job1"), "jobname");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['CJOB_addschedule_every_seconds'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob add schedule second period");
			this.appendDummyInput()
				.appendField("   schedule name (optional)")
				.appendField(new Blockly.FieldTextInput("   "), "schname");		// this.appendValueInput("schedule")
			this.appendDummyInput()
				.appendField("schedule every")
				.appendField(new Blockly.FieldDropdown([["1", "*"], ["2", "*/2"], ["3", "*/3"], ["4", "*/4"], ["5", "*/5"], ["6", "*/6"], ["10", "*/10"], ["12", "*/12"], ["15", "*/15"], ["20", "*/20"], ["30", "*/30"]]), "_second")
				.appendField("seconds")
				.appendField("  one shot")
				.appendField(new Blockly.FieldCheckbox("False"), "_oneshort");
			this.appendDummyInput();
			this.appendStatementInput("callback")
				.setCheck(null)
				.appendField("to do job")
				.appendField(new Blockly.FieldTextInput("job1"), "jobname");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['CJOB_addschedule_every_minutes'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob add schedule minute period");
			this.appendDummyInput()
				.appendField("   schedule name (optional)")
				.appendField(new Blockly.FieldTextInput("   "), "schname");		// this.appendValueInput("schedule")
			this.appendDummyInput()
				.appendField("schedule every")
				.appendField(new Blockly.FieldDropdown([["1", "*"], ["2", "*/2"], ["3", "*/3"], ["4", "*/4"], ["5", "*/5"], ["6", "*/6"], ["10", "*/10"], ["12", "*/12"], ["15", "*/15"], ["20", "*/20"], ["30", "*/30"]]), "_minute")
				.appendField("minutes")
			this.appendDummyInput()
				.appendField("   at second :")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "_second")
				.appendField("  one shot")
				.appendField(new Blockly.FieldCheckbox("False"), "_oneshort");
			this.appendDummyInput();
			this.appendStatementInput("callback")
				.setCheck(null)
				.appendField("to do job")
				.appendField(new Blockly.FieldTextInput("job1"), "jobname");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['CJOB_addschedule_every_hours'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob add schedule hour period");
			this.appendDummyInput()
				.appendField("   schedule name (optional)")
				.appendField(new Blockly.FieldTextInput("   "), "schname");		// this.appendValueInput("schedule")
			this.appendDummyInput()
				.appendField("schedule every")
				.appendField(new Blockly.FieldDropdown([["1", "*"], ["2", "*/2"], ["3", "*/3"], ["4", "*/4"], ["5", "*/5"], ["6", "*/6"], ["10", "*/10"], ["12", "*/12"], ["15", "*/15"], ["20", "*/20"], ["30", "*/30"]]), "_hour")
				.appendField("hours")
			this.appendDummyInput()
				.appendField("   at minute :")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "_minute")
				.appendField("second :")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "_second")
				.appendField("  one shot")
				.appendField(new Blockly.FieldCheckbox("FALSE"), "_oneshort");
			this.appendDummyInput();
			this.appendStatementInput("callback")
				.setCheck(null)
				.appendField("to do job")
				.appendField(new Blockly.FieldTextInput("job1"), "jobname");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['CJOB_add_schedule_time'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob add schedule time");
			this.appendDummyInput()
				.appendField("   schedule name (optional)")
				.appendField(new Blockly.FieldTextInput("   "), "schname");		// this.appendValueInput("schedule")
			this.appendDummyInput()
				.appendField("HH:")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "_hour")
				.appendField("MM:")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "_minute")
				.appendField("SS:")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "_second")
				.appendField("  one shot")
				.appendField(new Blockly.FieldCheckbox("False"), "_oneshort");
			this.appendDummyInput();
			this.appendStatementInput("callback")
				.setCheck(null)
				.appendField("to do job")
				.appendField(new Blockly.FieldTextInput("job1"), "jobname");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['CJOB_add_schedule_datetime'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob add schedule datetime");
			this.appendDummyInput()
				.appendField("   schedule name (optional)")
				.appendField(new Blockly.FieldTextInput("   "), "schname");		// this.appendValueInput("schedule")
			this.appendDummyInput()
				.appendField("Month:")
				.appendField(new Blockly.FieldDropdown([["Jan", "1"], ["Feb", "2"], ["Mar", "3"], ["Apr", "4"], ["May", "5"], ["Jun", "6"], ["Jul", "7"], ["Aug", "8"], ["Sep", "9"], ["Oct", "10"], ["Nov", "11"], ["Dec", "12"]]), "_month")
				.appendField("Day:")
				.appendField(new Blockly.FieldDropdown([["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"]]), "_day")
				.appendField("HH:")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "_hour")
				.appendField("MM:")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "_minute")
				.appendField("SS:")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "_second")
				.appendField("  one shot")
				.appendField(new Blockly.FieldCheckbox("False"), "_oneshort");
			this.appendDummyInput();
			this.appendStatementInput("callback")
				.setCheck(null)
				.appendField("to do job")
				.appendField(new Blockly.FieldTextInput("job1"), "jobname");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['CJOB_add_schedule_weekday'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob add schedule weekday");
			this.appendDummyInput()
				.appendField("   schedule name (optional)")
				.appendField(new Blockly.FieldTextInput("   "), "schname");		// this.appendValueInput("schedule")
			this.appendDummyInput()
				.appendField("WeekDay:")
				.appendField(new Blockly.FieldDropdown([["Sun", "0"], ["Mon", "1"], ["Tue", "2"], ["Wed", "3"], ["Thu", "4"], ["Fri", "5"], ["Sat", "6"]]), "_weekday")
				.appendField("HH:")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"]]), "_hour")
				.appendField("MM:")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "_minute")
				.appendField("SS:")
				.appendField(new Blockly.FieldDropdown([["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"], ["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"], ["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"], ["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"]]), "_second")
				.appendField("  one shot")
				.appendField(new Blockly.FieldCheckbox("False"), "_oneshort");
			this.appendDummyInput();
			this.appendStatementInput("callback")
				.setCheck(null)
				.appendField("to do job")
				.appendField(new Blockly.FieldTextInput("job1"), "jobname");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['CJOB_delete_schedule'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob delete schedule");
			this.appendDummyInput()
				.appendField("schedule name")
				.appendField(new Blockly.FieldTextInput("   "), "schname");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['CJOB_enable_schedule'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob enable schedule");
			this.appendDummyInput()
				.appendField("schedule name")
				.appendField(new Blockly.FieldTextInput("   "), "schname");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['CJOB_disable_schedule'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("CronJob disable schedule");
			this.appendDummyInput()
				.appendField("schedule name")
				.appendField(new Blockly.FieldTextInput("   "), "schname");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	}
}