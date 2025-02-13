/* eslint-disable prettier/prettier */
/* eslint-disable no-redeclare */
/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
	'use strict';

	Blockly.JavaScript['math_number'] = function (block) {
		// Numeric value.
		var code = parseFloat(block.getFieldValue('NUM'));
		var order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC :
			Blockly.JavaScript.ORDER_UNARY_NEGATION;
		return [code, order];
	};

	Blockly.JavaScript['math_random_int'] = function (block) {
		var num1 = block.getFieldValue('FROM') || '0';
		var num2 = block.getFieldValue('TO') || '0';

		console.log(num1, num2)
		if (num2 > num1) {
			var code = 'rand() % ' + num2 + ' + ' + num1;
		}
		else {
			var code = '0';
		}
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['math_pow'] = function (block) {
		var arg1 = Blockly.JavaScript.valueToCode(block, 'NUM1', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
		var arg2 = Blockly.JavaScript.valueToCode(block, 'NUM2', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
		var code = 'pow(' + arg1 + ',' + arg2 + ')';
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['math_single'] = function (block) {
		// Math operators with single operand.
		var operator = block.getFieldValue('OP');
		var code;
		var arg = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

		switch (operator) {
			case 'ABS':
				code = 'fabs(' + arg + ')';
				break;
			case 'ROOT':
				code = 'sqrt(' + arg + ')';
				break;
			case 'LN':
				code = 'log(' + arg + ')';
				break;
			case 'LOG10':
				code = 'log10(' + arg + ')';
				break;
			case 'EXP':
				code = 'exp(' + arg + ')';
				break;
			case 'POW10':
				code = 'pow(10,' + arg + ')';
				break;
			case 'NEG':
				code = '(-' + arg + ')';
				break;
		}

		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['math_trig'] = function (block) {
		// Math operators with single operand.
		var operator = block.getFieldValue('OP');
		var code;
		var arg = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

		switch (operator) {
			case 'SIN':
				code = 'sin (' + arg + ' * PI/180.0)';
				break;
			case 'COS':
				code = 'cos (' + arg + ' * PI/180.0)';
				break;
			case 'TAN':
				code = 'tan (' + arg + ' * PI/180.0)';
				break;
			case 'ASIN':
				code = 'asin(' + arg + ') * 180.0 / PI';
				break;
			case 'ACOS':
				code = 'acos(' + arg + ') * 180.0 / PI';
				break;
			case 'ATAN':
				code = 'atan(' + arg + ') * 180.0 / PI';
				break;
		}

		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}

	Blockly.JavaScript['math_round'] = function (block) {
		// Math operators with single operand.
		var operator = block.getFieldValue('OP');
		var code;
		var arg = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

		switch (operator) {
			case 'ROUND':
				code = '(double)round(' + arg + ')';
				break;
			case 'ROUNDUP':
				code = '(double)ceil(' + arg + ')';
				break;
			case 'ROUNDDOWN':
				code = '(double)floor(' + arg + ')';
				break;
		}
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}

	Blockly.JavaScript['math_number_property'] = function (block) {
		// Math operators with single operand.
		var operator = block.getFieldValue('PROPERTY');
		var code;
		var arg = Blockly.JavaScript.valueToCode(block, 'NUMBER_TO_CHECK', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

		switch (operator) {
			case 'EVEN':
				code = '( (int)' + arg + ' % 2 == 0 )';
				break;
			case 'ODD':
				code = '( (int)' + arg + ' % 2 != 0)';
				break;
			case 'PRIME':
				code = 'check_is_prime( (int)' + arg + ')';
				break;
			case 'POSITIVE':
				code = '( ' + arg + ' > 0)';
				break;
			case 'NEGATIVE':
				code = '( ' + arg + ' < 0)';
				break;
		}
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}

	Blockly.JavaScript['convert_ra_de'] = function (block) {
		// Math operators with single operand.
		var operator = block.getFieldValue('OP');
		var code;
		var arg = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';

		switch (operator) {
			case 'RA_TO_DE':
				code = '( ' + arg + ' * 180.0 ) / PI';
				break;
			case 'DE_TO_RA':
				code = '( ' + arg + ' * PI ) / 180.0';
				break;
		}
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	}

	Blockly.JavaScript['math_nnt_begin'] = function () {
		let code = `#EXTINC #include <Statistics.h> #END`;

		return code;
	};

	Blockly.JavaScript['math_nnt_average'] = function (block) {
		var numInputs = parseInt(block.getFieldValue('numInputs'));  // Get number of inputs
		var values = [];

		for (let i = 0; i < numInputs; i++) {
			let input = Blockly.JavaScript.valueToCode(block, 'INPUT' + i, Blockly.JavaScript.ORDER_ATOMIC) || '0';
			values.push(input);
		}

		var code = `Statistics::average(new double[${numInputs}] { ${values.join(', ')} }, ${numInputs})`;
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
	};

	Blockly.JavaScript['math_nnt_max'] = function (block) {
		var numInputs = parseInt(block.getFieldValue('numInputs'));
		var values = [];

		for (var i = 0; i < numInputs; i++) {
			var input = Blockly.JavaScript.valueToCode(block, 'INPUT' + i, Blockly.JavaScript.ORDER_ATOMIC) || '0';
			values.push(input);
		}

		// C++ Code to calculate the maximum manually
		var code = `Statistics::max(new double[${numInputs}] { ${values.join(', ')} }, ${numInputs})`;
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
	};

	Blockly.JavaScript['math_nnt_min'] = function (block) {
		var numInputs = parseInt(block.getFieldValue('numInputs'));
		var values = [];

		for (var i = 0; i < numInputs; i++) {
			var input = Blockly.JavaScript.valueToCode(block, 'INPUT' + i, Blockly.JavaScript.ORDER_ATOMIC) || '0';
			values.push(input);
		}

		// C++ Code to calculate the maximum manually
		var code = `Statistics::min(new double[${numInputs}] { ${values.join(', ')} }, ${numInputs})`;
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
	};

	Blockly.JavaScript['math_nnt_median'] = function (block) {
		var numInputs = parseInt(block.getFieldValue('numInputs'));
		var values = [];

		for (var i = 0; i < numInputs; i++) {
			var input = Blockly.JavaScript.valueToCode(block, 'INPUT' + i, Blockly.JavaScript.ORDER_ATOMIC) || '0';
			values.push(input);
		}

		// C++ Code to calculate the maximum manually
		var code = `Statistics::median(new double[${numInputs}] { ${values.join(', ')} }, ${numInputs})`;
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
	};

}