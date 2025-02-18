module.exports = function (Blockly) {
	"use strict";
	Blockly.Blocks['print_system_time'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("print system time");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#f2741b");
			this.setTooltip("print system time");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['get_system_time'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("get system time");
			this.setOutput(true, "String");
			this.setColour("#f2741b");
			this.setTooltip("get system time time");
			this.setHelpUrl("");
		}
	};


	Blockly.Blocks['get_system_time_year'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("get system time: year");
			this.setOutput(true, "Number");
			this.setColour("#f2741b");
			this.setTooltip("get system time year");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['get_system_time_month'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("get system time: month");
			this.setOutput(true, "Number");
			this.setColour("#f2741b");
			this.setTooltip("get system time month");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['get_system_time_day'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("get system time: day");
			this.setOutput(true, "Number");
			this.setColour("#f2741b");
			this.setTooltip("get system time day");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['get_system_time_wday'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("get system time: weekday");
			this.setOutput(true, "Number");
			this.setColour("#f2741b");
			this.setTooltip("0-Sunday ... 6-Saturday");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['get_system_time_hour'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("get system time: hour");
			this.setOutput(true, "Number");
			this.setColour("#f2741b");
			this.setTooltip("get rtsystem timec hour");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['get_system_time_minute'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("get system time: minute");
			this.setOutput(true, "Number");
			this.setColour("#f2741b");
			this.setTooltip("get system time minute");
			this.setHelpUrl("");
		}
	};

	Blockly.Blocks['get_system_time_second'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("get system time: second");
			this.setOutput(true, "Number");
			this.setColour("#f2741b");
			this.setTooltip("get system time second");
			this.setHelpUrl("");
		}
	};


	Blockly.Blocks['set_system_time'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("set system time:");
			this.appendDummyInput("")
				.appendField("Year: 20")
				.appendField(new Blockly.FieldDropdown([
					["00", "0"], ["01", "1"], ["02", "2"], ["03", "3"], ["04", "4"], ["05", "5"], ["06", "6"], ["07", "7"], ["08", "8"], ["09", "9"],
					["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"],
					["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"],
					["30", "30"], ["31", "31"], ["32", "32"], ["33", "33"], ["34", "34"], ["35", "35"], ["36", "36"], ["37", "37"], ["38", "38"], ["39", "39"],
					["40", "40"], ["41", "41"], ["42", "42"], ["43", "43"], ["44", "44"], ["45", "45"], ["46", "46"], ["47", "47"], ["48", "48"], ["49", "49"],
					["50", "50"], ["51", "51"], ["52", "52"], ["53", "53"], ["54", "54"], ["55", "55"], ["56", "56"], ["57", "57"], ["58", "58"], ["59", "59"],
					["60", "60"], ["61", "61"], ["62", "62"], ["63", "63"], ["64", "64"], ["65", "65"], ["66", "66"], ["67", "67"], ["68", "68"], ["69", "69"],
					["70", "70"], ["71", "71"], ["72", "72"], ["73", "73"], ["74", "74"], ["75", "75"], ["76", "76"], ["77", "77"], ["78", "78"], ["79", "79"],
					["80", "80"], ["81", "81"], ["82", "82"], ["83", "83"], ["84", "84"], ["85", "85"], ["86", "86"], ["87", "87"], ["88", "88"], ["89", "89"],
					["90", "90"], ["91", "91"], ["92", "92"], ["93", "93"], ["94", "94"], ["95", "95"], ["96", "96"], ["97", "97"], ["98", "98"], ["99", "99"]
				]), "_year")
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
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour("#7242f5");
			this.setTooltip("set rtc: time");
			this.setHelpUrl("");
		}
	};


}