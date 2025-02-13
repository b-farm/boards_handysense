/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	'use strict';
	// =============================================================================
	//math Addiditon
	// =============================================================================

	Blockly.Blocks["math_number"] = {
		init: function () {
			this.jsonInit(
				{
					"type": "math_number",
					"message0": "%1",
					"args0": [{
						"type": "field_number",
						"name": "NUM",
						"value": 0
					}],
					"output": "Number",
					"helpUrl": "%{BKY_MATH_NUMBER_HELPURL}",
					"colour": Blockly.Msg.MATH_HUE,
					"tooltip": "%{BKY_MATH_NUMBER_TOOLTIP}",
					"extensions": ["parent_tooltip_when_inline"]
				}
			);
		}
	};

	Blockly.Blocks["math_single"] = {
		init: function () {
			this.jsonInit({
				"type": "math_single",
				"message0": "%1 %2",
				"args0": [{
					"type": "field_dropdown",
					"name": "OP",
					"options": [
						["%{BKY_MATH_SINGLE_OP_ROOT}", 'ROOT'],
						["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", 'ABS'],
						['-', 'NEG'],
						['ln', 'LN'],
						['log10', 'LOG10'],
						['e^', 'EXP'],
						['10^', 'POW10']
					]
				},
				{
					"type": "input_value",
					"name": "NUM",
					"check": "Number"
				}
				],
				"output": "Number",
				"colour": Blockly.Msg.MATH_HUE,
				"helpUrl": "%{BKY_MATH_SINGLE_HELPURL}",
				"extensions": ["math_op_tooltip"]
			});
		}
	}
	Blockly.Blocks['math_trig'] = {
		init: function () {
			this.jsonInit({
				"type": "math_trig",
				"message0": "%1 %2",
				"args0": [{
					"type": "field_dropdown",
					"name": "OP",
					"options": [
						["%{BKY_MATH_TRIG_SIN}", "SIN"],
						["%{BKY_MATH_TRIG_COS}", "COS"],
						["%{BKY_MATH_TRIG_TAN}", "TAN"],
						["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
						["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
						["%{BKY_MATH_TRIG_ATAN}", "ATAN"]
					]
				},
				{
					"type": "input_value",
					"name": "NUM",
					"check": "Number"
				}
				],
				"output": "Number",
				"colour": Blockly.Msg.MATH_HUE,
				"helpUrl": "%{BKY_MATH_TRIG_HELPURL}",
				"extensions": ["math_op_tooltip"]
			});
		}
	}
	Blockly.Blocks['math_round'] = {
		init: function () {
			this.jsonInit({
				"type": "math_round",
				"message0": "%1 %2",
				"args0": [{
					"type": "field_dropdown",
					"name": "OP",
					"options": [
						["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
						["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
						["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]
					]
				},
				{
					"type": "input_value",
					"name": "NUM",
					"check": "Number"
				}
				],
				"output": "Number",
				"colour": Blockly.Msg.MATH_HUE,
				"helpUrl": "%{BKY_MATH_ROUND_HELPURL}",
				"tooltip": "%{BKY_MATH_ROUND_TOOLTIP}"
			});
		}
	}
	Blockly.Blocks['math_random_int'] = {
		init: function () {
			this.jsonInit({
				"type": "math_random_int",
				"message0": "%{BKY_MATH_RANDOM_INT_TITLE}",
				"args0": [
					{
						"type": "field_number",
						"name": "FROM",
						"value": 0,
						"min": -9999999,
						"max": 9999999,
						"precision": 1
					},
					{
						"type": "field_number",
						"name": "TO",
						"value": 100,
						"min": -9999999,
						"max": 9999999,
						"precision": 1
					}
				],
				"inputsInline": true,
				"output": "Number",
				"colour": Blockly.Msg.MATH_HUE,
				"tooltip": "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
				"helpUrl": "%{BKY_MATH_RANDOM_INT_HELPURL}"
			});
		}
	}
	Blockly.Blocks['math_pow'] = {
		init: function () {
			this.jsonInit({
				"type": "math_pow",
				"message0": "%1 " + Blockly.Msg.MATH_POW_TITLE + " %2",
				"args0": [{
					"type": "input_value",
					"name": "NUM1",
					"check": "Number"
				},
				{
					"type": "input_value",
					"name": "NUM2",
					"check": "Number"
				}
				],
				"inputsInline": true,
				"output": "Number",
				"colour": Blockly.Msg.MATH_HUE,
				"tooltip": Blockly.Msg.MATH_POW_TOOLTIP,
				"helpUrl": Blockly.Msg.MATH_POW_HELPURL
			});
		}
	}
	Blockly.Blocks['math_number_property'] = {
		init: function () {
			this.jsonInit({
				"type": "math_number_property",
				"message0": "%1 %2",
				"args0": [{
					"type": "input_value",
					"name": "NUMBER_TO_CHECK",
					"check": "Number"
				},
				{
					"type": "field_dropdown",
					"name": "PROPERTY",
					"options": [
						["%{BKY_MATH_IS_EVEN}", "EVEN"],
						["%{BKY_MATH_IS_ODD}", "ODD"],
						["%{BKY_MATH_IS_PRIME}", "PRIME"],
						["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
						["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
					]
				}
				],
				"inputsInline": true,
				"output": "Boolean",
				"colour": Blockly.Msg.MATH_HUE,
				"tooltip": "%{BKY_MATH_IS_TOOLTIP}",
				"mutator": "math_is_divisibleby_mutator"
			});
		}
	}

	Blockly.Blocks['convert_ra_de'] = {
		init: function () {
			this.jsonInit({
				"type": "convert_ra_de",
				"message0": "%{BKY_MATH_CONVERT_RA_DE_TITLE} %1 %2",
				"args0": [
					{
						"type": "field_dropdown",
						"name": "OP",
						"options": [
							[
								"%{BKY_MATH_CONVERT_RA_DE}",
								"RA_TO_DE"
							],
							[
								"%{BKY_MATH_CONVERT_DE_RA}",
								"DE_TO_RA"
							]
						]
					},
					{
						"type": "input_value",
						"name": "NUM",
						"check": "Number"
					}
				],
				"output": "Number",
				"colour": Blockly.Msg.MATH_HUE,
				"tooltip": "%{BKY_MATH_CONVERT_RA_DE_TOOLTIP}",
			});
		}
	}



	Blockly.Blocks['math_nnt_begin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Math Statistics Begin");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(230);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	}

	Blockly.Blocks['math_nnt_average'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Average of")
				.appendField(new Blockly.FieldDropdown([["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]],
					this.updateShape_.bind(this)), "numInputs")  // Bind dropdown change to updateShape_
				.appendField("numbers")
				.appendField("numInputs : " + parseInt(this.getFieldValue('numInputs')));

			this.setOutput(true, "Number");  // Output type is number
			this.setColour(230);
			this.setTooltip("Calculate the average of the specified number of inputs.");
			this.setHelpUrl("");
			var numInputs = parseInt(this.getFieldValue('numInputs')) || 2;
			this.updateShape_(numInputs);
		},
		updateShape_: function (numInputs) {
			// Remove any existing input fields.
			for (let i = 0; i < this.inputList.length; i++) {
				let input = this.inputList[i];
				if (input.name && input.name.startsWith('INPUT')) {
					this.removeInput(input.name);
					i--;  // Adjust index after removal
				}
			}

			// Add new input fields based on the selected number.
			for (let i = 1; i <= numInputs; i++) {
				this.appendValueInput('INPUT' + (i - 1))
					.setCheck("Number")
					.appendField("Input " + i);
			}
		},

		onchange: function (event) {
			if (event.blockId === this.id && event.name === "numInputs") {
				var numInputs = parseInt(this.getFieldValue('numInputs'));
				this.updateShape_(numInputs);
			}
		}
	};

	Blockly.Blocks['math_nnt_max'] = {
		init: function () {
			// Initialize the block with a dropdown and set other basic block properties
			this.appendDummyInput()
				.appendField("Max of")
				.appendField(new Blockly.FieldDropdown([["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]],
					this.updateShape_.bind(this)), "numInputs")  // Bind dropdown change to updateShape_
				.appendField("numbers")
				.appendField("numInputs : " + parseInt(this.getFieldValue('numInputs')));

			this.setOutput(true, "Number");  // Output type is number
			this.setColour(230);
			this.setTooltip("Return the maximum of the specified number of inputs.");
			this.setHelpUrl("");

			// Default to 2 inputs unless stored
			var numInputs = parseInt(this.getFieldValue('numInputs')) || 2;
			this.updateShape_(numInputs);
		},
		updateShape_: function (numInputs) {
			// Remove any existing input fields.
			for (let i = 0; i < this.inputList.length; i++) {
				let input = this.inputList[i];
				if (input.name && input.name.startsWith('INPUT')) {
					this.removeInput(input.name);
					i--;  // Adjust index after removal
				}
			}

			// Add new input fields based on the selected number.
			for (let i = 1; i <= numInputs; i++) {
				this.appendValueInput('INPUT' + (i - 1))
					.setCheck("Number")
					.appendField("Input " + i);
			}
		},

		onchange: function (event) {
			if (event.blockId === this.id && event.name === "numInputs") {
				var numInputs = parseInt(this.getFieldValue('numInputs'));
				this.updateShape_(numInputs);
			}
		}
	};

	Blockly.Blocks['math_nnt_min'] = {
		init: function () {
			// Initialize the block with a dropdown and set other basic block properties
			this.appendDummyInput()
				.appendField("Min of")
				.appendField(new Blockly.FieldDropdown([["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]],
					this.updateShape_.bind(this)), "numInputs")  // Bind dropdown change to updateShape_
				.appendField("numbers")
				.appendField("numInputs : " + parseInt(this.getFieldValue('numInputs')));

			this.setOutput(true, "Number");  // Output type is number
			this.setColour(230);
			this.setTooltip("Return the minimum of the specified number of inputs.");
			this.setHelpUrl("");

			// Default to 2 inputs unless stored
			var numInputs = parseInt(this.getFieldValue('numInputs')) || 2;
			this.updateShape_(numInputs);
		},
		updateShape_: function (numInputs) {
			// Remove any existing input fields.
			for (let i = 0; i < this.inputList.length; i++) {
				let input = this.inputList[i];
				if (input.name && input.name.startsWith('INPUT')) {
					this.removeInput(input.name);
					i--;  // Adjust index after removal
				}
			}

			// Add new input fields based on the selected number.
			for (let i = 1; i <= numInputs; i++) {
				this.appendValueInput('INPUT' + (i - 1))
					.setCheck("Number")
					.appendField("Input " + i);
			}
		},
		
		onchange: function (event) {
			if (event.blockId === this.id && event.name === "numInputs") {
				var numInputs = parseInt(this.getFieldValue('numInputs'));
				this.updateShape_(numInputs);
			}
		}
	};


	Blockly.Blocks['math_nnt_median'] = {
		init: function () {
			// Initialize the block with a dropdown and set other basic block properties
			this.appendDummyInput()
				.appendField("Median of")
				.appendField(new Blockly.FieldDropdown([["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]],
					this.updateShape_.bind(this)), "numInputs")  // Bind dropdown change to updateShape_
				.appendField("numbers")
				.appendField("numInputs : " + parseInt(this.getFieldValue('numInputs')));

			this.setOutput(true, "Number");  // Output type is number
			this.setColour(230);
			this.setTooltip("Return the median of the specified number of inputs.");
			this.setHelpUrl("");

			// Default to 2 inputs unless stored
			var numInputs = parseInt(this.getFieldValue('numInputs')) || 2;
			this.updateShape_(numInputs);
		},
		updateShape_: function (numInputs) {
			// Remove any existing input fields.
			for (let i = 0; i < this.inputList.length; i++) {
				let input = this.inputList[i];
				if (input.name && input.name.startsWith('INPUT')) {
					this.removeInput(input.name);
					i--;  // Adjust index after removal
				}
			}

			// Add new input fields based on the selected number.
			for (let i = 1; i <= numInputs; i++) {
				this.appendValueInput('INPUT' + (i - 1))
					.setCheck("Number")
					.appendField("Input " + i);
			}
		},
		
		onchange: function (event) {
			if (event.blockId === this.id && event.name === "numInputs") {
				var numInputs = parseInt(this.getFieldValue('numInputs'));
				this.updateShape_(numInputs);
			}
		}
	};
}