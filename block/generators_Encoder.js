/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
	"use strict";

	Blockly.JavaScript['Encoder1_begin'] = function (block) {
		var n_pin_a = block.getFieldValue('pin_enca');
		var n_pin_b = block.getFieldValue('pin_encb');
		var n_pin_input = block.getFieldValue('pin_input');
		var n_pin_vcc = block.getFieldValue('pin_vcc');
		var n_step = block.getFieldValue('mul_step');
		var code = `
		#EXTINC #include "AiEsp32RotaryEncoder.h" #END\n
		#VARIABLE AiEsp32RotaryEncoder rotaryEncoder1 = AiEsp32RotaryEncoder( ${n_pin_a}, ${n_pin_b}, ${n_pin_input}, ${n_pin_vcc}, ${n_step} ); #END\n
	`;
		code += '#VARIABLE // begin Encoder1 #END\n';
		code += '#VARIABLE  long PosEncoder1;#END\n';
		code += '#VARIABLE 	void IRAM_ATTR readEncoder1_ISR() { #END\n';
		code += '#VARIABLE 	rotaryEncoder1.readEncoder_ISR(); } #END\n';
		code += '#VARIABLE // end 1 #END\n';
		code += '#SETUP // begin Encoder1 #END\n';
		code += '#SETUP rotaryEncoder1.begin(); #END\n';
		code += '#SETUP rotaryEncoder1.setup(readEncoder1_ISR); #END\n';
		code += '#SETUP rotaryEncoder1.disableAcceleration(); #END\n';
		code += '#SETUP rotaryEncoder1.setBoundaries(-100000, 100000, false); #END\n';
		code += '#SETUP // end 1  #END\n';
		return code;
	};

	Blockly.JavaScript['Encoder2_begin'] = function (block) {
		var n_pin_a = block.getFieldValue('pin_enca');
		var n_pin_b = block.getFieldValue('pin_encb');
		var n_pin_input = block.getFieldValue('pin_input');
		var n_pin_vcc = block.getFieldValue('pin_vcc');
		var n_step = block.getFieldValue('mul_step');
		var code = `
		#EXTINC #include "AiEsp32RotaryEncoder.h" #END\n
		#VARIABLE AiEsp32RotaryEncoder rotaryEncoder2 = AiEsp32RotaryEncoder( ${n_pin_a}, ${n_pin_b}, ${n_pin_input}, ${n_pin_vcc}, ${n_step} ); #END\n
	`;
		code += '#VARIABLE  // begin Encoder2 #END\n';
		code += '#VARIABLE  long PosEncoder2;#END\n';
		code += '#VARIABLE 	void IRAM_ATTR readEncoder2_ISR() { #END\n';
		code += '#VARIABLE 	rotaryEncoder2.readEncoder_ISR(); } #END\n';
		code += '#VARIABLE  // end 2 #END\n';
		code += '#SETUP // begin Encoder2 #END\n';
		code += '#SETUP rotaryEncoder2.begin(); #END\n';
		code += '#SETUP rotaryEncoder2.setup(readEncoder2_ISR); #END\n';
		code += '#SETUP rotaryEncoder2.setAcceleration(0); #END\n';
		code += '#SETUP //rotaryEncoder2.disableAcceleration(); #END\n';
		code += '#SETUP rotaryEncoder2.setBoundaries(0, 2400, true); #END\n';
		code += '#SETUP // end 2    #END';
		return code;
	};

	Blockly.JavaScript['Encoder1_read'] = function (block) {
		var code = 'rotaryEncoder1.readEncoder()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	
	Blockly.JavaScript['Encoder2_read'] = function (block) {
		var code = 'rotaryEncoder2.readEncoder()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	
	Blockly.JavaScript['Encoder1_Acc_read'] = function (block) {
		var code = 'rotaryEncoder1.getAcceleration()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
	
	Blockly.JavaScript['Encoder2_Acc_read'] = function (block) {
		var code = 'rotaryEncoder2.getAcceleration()';
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
}