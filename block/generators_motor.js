/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
  "use strict";
  Blockly.JavaScript['motor1_setup'] = function (block) {
    var value_pin_pwm = block.getFieldValue('pwm');
    var value_pin_dir = block.getFieldValue('dir');
    var number_channel = block.getFieldValue('channel');
    var number_freq = block.getFieldValue('freq');
    var number_bit = block.getFieldValue('bit');
    var code = `
  #SETUP  // Start Motor1 PWM  #END\n
  #SETUP  ledcSetup( ${number_channel}, ${number_freq}, ${number_bit} ); #END\n
  #SETUP  ledcAttachPin(${value_pin_pwm}, ${number_channel}); #END\n
  #SETUP  pinMode(${value_pin_pwm}, OUTPUT); #END\n
  #SETUP  pinMode(${value_pin_dir}, OUTPUT); #END\n
  #SETUP  // End. Motor1 PWM #END\n
  #VARIABLE   // Start Motor1 PWM Function #END\n
  #VARIABLE   int motor1_write_pwm(int value1_input) { #END\n
  #VARIABLE   int value1_dir = 0; #END\n
  #VARIABLE   if (value1_input > 0) value1_dir=0; else value1_dir= 1; #END\n
  #VARIABLE   ledcWrite( ${number_channel}, fabs(value1_input) ); #END\n
  #VARIABLE   digitalWrite( ${value_pin_dir}, value1_dir ); #END\n
  #VARIABLE   return value1_dir; } #END\n
  #VARIABLE   // End. Motor1 PWM #END\n
  `;
    return code;
  };

  Blockly.JavaScript['Motor1_read_write'] = function (block) {
    var value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `motor1_write_pwm(${value1})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['motor2_setup'] = function (block) {
    var value_pin_pwm = block.getFieldValue('pwm');
    var value_pin_dir = block.getFieldValue('dir');
    var number_channel = block.getFieldValue('channel');
    var number_freq = block.getFieldValue('freq');
    var number_bit = block.getFieldValue('bit');
    var code = `
  #SETUP  // Start Motor2 PWM  #END\n
  #SETUP  ledcSetup( ${number_channel}, ${number_freq}, ${number_bit} ); #END\n
  #SETUP  ledcAttachPin(${value_pin_pwm}, ${number_channel}); #END\n
  #SETUP  pinMode(${value_pin_pwm}, OUTPUT); #END\n
  #SETUP  pinMode(${value_pin_dir}, OUTPUT); #END\n
  #SETUP  // End. Motor2 PWM #END\n
  #VARIABLE   // Start Motor2 PWM Function #END\n
  #VARIABLE   int motor2_write_pwm(int value2_input) { #END\n
  #VARIABLE   int value2_dir = 0; #END\n
  #VARIABLE   if (value2_input > 0) value2_dir=0; else value2_dir= 1; #END\n
  #VARIABLE   ledcWrite( ${number_channel}, fabs(value2_input) ); #END\n
  #VARIABLE   digitalWrite( ${value_pin_dir}, value2_dir ); #END\n
  #VARIABLE   return value2_dir; } #END\n
  #VARIABLE   // End. Motor2 PWM #END\n
  `;
    return code;
  };

  Blockly.JavaScript['Motor2_read_write'] = function (block) {
    var value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `motor2_write_pwm(${value2})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
}