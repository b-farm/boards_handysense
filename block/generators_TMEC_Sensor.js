/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['ReadAnalog_Tensiometer'] = function (block) {
		var ch = block.getFieldValue('ch');
		var valueMin = Blockly.JavaScript.valueToCode(block, 'valueMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var valueMax = Blockly.JavaScript.valueToCode(block, 'valueMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMin = Blockly.JavaScript.valueToCode(block, 'OutMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMax = Blockly.JavaScript.valueToCode(block, 'OutMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var code = `ReadAnalog_from_MPC3424(${ch}, ${valueMin}, ${valueMax}, ${OutMin}, ${OutMax})`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['ReadAnalog_Pressure'] = function (block) {
		var ch = block.getFieldValue('ch');
		var valueMin = Blockly.JavaScript.valueToCode(block, 'valueMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var valueMax = Blockly.JavaScript.valueToCode(block, 'valueMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMin = Blockly.JavaScript.valueToCode(block, 'OutMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMax = Blockly.JavaScript.valueToCode(block, 'OutMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var code = `ReadAnalog_from_MPC3424(${ch}, ${valueMin}, ${valueMax}, ${OutMin}, ${OutMax})`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['ReadAnalog_Diff_Pressure'] = function (block) {
		var ch = block.getFieldValue('ch');
		var valueMin = Blockly.JavaScript.valueToCode(block, 'valueMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var valueMax = Blockly.JavaScript.valueToCode(block, 'valueMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMin = Blockly.JavaScript.valueToCode(block, 'OutMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMax = Blockly.JavaScript.valueToCode(block, 'OutMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var code = `ReadAnalog_from_MPC3424(${ch}, ${valueMin}, ${valueMax}, ${OutMin}, ${OutMax})`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['ReadAnalog_Water_Level_Pressure'] = function (block) {
		var ch = block.getFieldValue('ch');
		var valueMin = Blockly.JavaScript.valueToCode(block, 'valueMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var valueMax = Blockly.JavaScript.valueToCode(block, 'valueMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMin = Blockly.JavaScript.valueToCode(block, 'OutMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMax = Blockly.JavaScript.valueToCode(block, 'OutMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var code = `ReadAnalog_from_MPC3424(${ch}, ${valueMin}, ${valueMax}, ${OutMin}, ${OutMax})`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['ReadAnalog_Light'] = function (block) {
		var ch = block.getFieldValue('ch');
		var valueMin = Blockly.JavaScript.valueToCode(block, 'valueMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var valueMax = Blockly.JavaScript.valueToCode(block, 'valueMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMin = Blockly.JavaScript.valueToCode(block, 'OutMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMax = Blockly.JavaScript.valueToCode(block, 'OutMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var code = `ReadAnalog_from_MPC3424(${ch}, ${valueMin}, ${valueMax}, ${OutMin}, ${OutMax})`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};

	Blockly.JavaScript['ReadAnalog_RTDandHeater'] = function (block) {
		var ch = block.getFieldValue('ch');
		var valueMin = Blockly.JavaScript.valueToCode(block, 'valueMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var valueMax = Blockly.JavaScript.valueToCode(block, 'valueMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMin = Blockly.JavaScript.valueToCode(block, 'OutMin', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var OutMax = Blockly.JavaScript.valueToCode(block, 'OutMax', Blockly.JavaScript.ORDER_ATOMIC) || '0';
		var code = `ReadAnalog_from_MPC3424(${ch}, ${valueMin}, ${valueMax}, ${OutMin}, ${OutMax})`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
}