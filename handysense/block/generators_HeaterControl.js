module.exports = function (Blockly) {
  "use strict";
  Blockly.JavaScript['hc_variable_set'] = function (block) {
    var varName = block.getFieldValue('VAR_NAME');
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT);
    var code = '';

    code += '#EXTINC';
    code += ['percent', 'controlMode'].includes(varName) ? ' unsigned int ' : ' float ';
    code += varName + '; #END\n';
    code += value ? varName + ' = ' + value + ';' : varName + ' = 0;';

    return code;
  };

  Blockly.JavaScript['hc_variable_get'] = function (block) {
    var varName = block.getFieldValue('VAR_NAME');

    return [varName, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['initialization'] = function (block) {
    var code = '';

    code += '#EXTINC #include "HeaterControl.h" #END\n';
    code += 'modbus.begin(9600);\n';
    code += 'Serial2.begin(9600);\n';
    code += 'heaterControl.init();\n';

    return code;
  };

  Blockly.JavaScript['mode_value'] = function (block) {
    return block.getFieldValue('VALUE');
  };

  Blockly.JavaScript['set_off_mode'] = function (block) {
    return 'heaterControl.setOffMode();\n';
  };

  Blockly.JavaScript['set_fix_mode_dummy'] = function (block) {
    var percent = block.getFieldValue('percent');
    var code = '';

    code += `heaterControl.setFixMode(${percent});\n`;

    return code;
  };

  Blockly.JavaScript['set_fix_mode_value'] = function (block) {
    var percent = Blockly.JavaScript.valueToCode(block, 'percent', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '';

    code += `heaterControl.setFixMode(${percent});\n`;

    return code;
  };

  Blockly.JavaScript['set_saturation_mode_dummy'] = function (block) {
    var actualTemp = Blockly.JavaScript.valueToCode(block, 'actualTemp', Blockly.JavaScript.ORDER_ATOMIC);
    var offThreshold = block.getFieldValue('offThreshold');
    var onThreshold = block.getFieldValue('onThreshold');
    var code = '';

    code += `heaterControl.setSaturationMode(${actualTemp}, ${offThreshold}, ${onThreshold});\n`;

    return code;
  };

  Blockly.JavaScript['set_saturation_mode_value'] = function (block) {
    var actualTemp = Blockly.JavaScript.valueToCode(block, 'actualTemp', Blockly.JavaScript.ORDER_ATOMIC);
    var offThreshold = Blockly.JavaScript.valueToCode(block, 'offThreshold', Blockly.JavaScript.ORDER_ATOMIC);
    var onThreshold = Blockly.JavaScript.valueToCode(block, 'onThreshold', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '';

    code += `heaterControl.setSaturationMode(${actualTemp}, ${offThreshold}, ${onThreshold});\n`;

    return code;
  };

  Blockly.JavaScript['set_pid_mode_dummy'] = function (block) {
    var actualTemp = Blockly.JavaScript.valueToCode(block, 'actualTemp', Blockly.JavaScript.ORDER_ATOMIC);
    var settingTemp = block.getFieldValue('settingTemp');
    var gainP = block.getFieldValue('gainP');
    var gainI = block.getFieldValue('gainI');
    var gainD = block.getFieldValue('gainD');
    var code = '';

    code += `heaterControl.setPIDMode(${actualTemp}, ${settingTemp}, ${gainP}, ${gainI}, ${gainD});\n`;

    return code;
  };

  Blockly.JavaScript['set_pid_mode_value'] = function (block) {
    var actualTemp = Blockly.JavaScript.valueToCode(block, 'actualTemp', Blockly.JavaScript.ORDER_ATOMIC);
    var settingTemp = Blockly.JavaScript.valueToCode(block, 'settingTemp', Blockly.JavaScript.ORDER_ATOMIC);
    var gainP = Blockly.JavaScript.valueToCode(block, 'gainP', Blockly.JavaScript.ORDER_ATOMIC);
    var gainI = Blockly.JavaScript.valueToCode(block, 'gainI', Blockly.JavaScript.ORDER_ATOMIC);
    var gainD = Blockly.JavaScript.valueToCode(block, 'gainD', Blockly.JavaScript.ORDER_ATOMIC);
    var code = '';

    code += `heaterControl.setPIDMode(${actualTemp}, ${settingTemp}, ${gainP}, ${gainI}, ${gainD});\n`;

    return code;
  };

  Blockly.JavaScript['read_status'] = function (block) {
    return 'heaterControl.readStatus();\n';
  };

  Blockly.JavaScript['retrieve_running_mode'] = function (block) {
    return ['heaterControl.getRunningMode()', Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['retrieve_running_percent'] = function (block) {
    return ['heaterControl.getRunningPercent()', Blockly.JavaScript.ORDER_ATOMIC];
  };
}