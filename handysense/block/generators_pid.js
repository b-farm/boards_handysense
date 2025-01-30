/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
  "use strict";
  Blockly.JavaScript['PID1_setup'] = function (block) {
    var value_kp1 = block.getFieldValue('kp1');
    var value_ki1 = block.getFieldValue('ki1');
    var value_kd1 = block.getFieldValue('kd1');
    var code = `
    #VARIABLE  //Start PID1 Program  #END\n
    #VARIABLE  long currentTime1,previousTime1,elapsedTime1; #END\n
    #VARIABLE  double PID_out1,error1,cumError1,rateError1,lastError1; #END\n    
    #VARIABLE  int compute_PID1(int value_input, int value_setpoint) { #END\n
    #VARIABLE     currentTime1 = millis(); #END\n  
    #VARIABLE    //get current time #END\n
    #VARIABLE    elapsedTime1 = (double)(currentTime1 - previousTime1); #END\n
    #VARIABLE    //compute time elapsed from previous computation #END\n
    #VARIABLE    //error1 = value_setpoint - value_input; // determine error #END\n
    #VARIABLE    error1 = ((value_setpoint - value_input) * 0.8) + ((0 - value_input) * 0.2) ; // error with 1st order #END\n
    #VARIABLE    cumError1 += error1 * elapsedTime1; // compute integral #END\n
    #VARIABLE    rateError1 = (error1 - lastError1) / elapsedTime1; // compute derivative #END\n
    #VARIABLE    double out = (${value_kp1} * error1)/1000 + (${value_ki1} * cumError1)/100 + (${value_kd1} * rateError1)/100; //PID output #END\n
    #VARIABLE    lastError1 = error1; //remember current error #END\n
    #VARIABLE    previousTime1 = currentTime1;  //remember current time #END\n
    #VARIABLE    PID_out1 = out; //remember current time #END\n
    #VARIABLE    return round(PID_out1); }//remember current time #END\n  
    #VARIABLE  // End PID1 Program #END\n
  `;
    return code;
  };

  Blockly.JavaScript['PID1_read_write'] = function (block) {
    var value1_input = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
    var value1_setpoint = Blockly.JavaScript.valueToCode(block, 'setpoint1', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `compute_PID1(${value1_input}, ${value1_setpoint})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['PID2_setup'] = function(block) {
    var value_kp2 = block.getFieldValue('kp2'); 
    var value_ki2 = block.getFieldValue('ki2');   
    var value_kd2 = block.getFieldValue('kd2');
    var code = `
      #VARIABLE  //Start PID2 Program  #END\n
      #VARIABLE  long currentTime2,previousTime2,elapsedTime2; #END\n
      #VARIABLE  double PID_out2,error2,cumError2,rateError2,lastError2; #END\n    
      #VARIABLE  int compute_PID2(int value_input, int value_setpoint) { #END\n
      #VARIABLE     currentTime2 = millis(); #END\n  
      #VARIABLE    //get current time #END\n
      #VARIABLE    elapsedTime2 = (double)(currentTime2 - previousTime2); #END\n
      #VARIABLE    //compute time elapsed from previous computation #END\n
      #VARIABLE    error2 = value_setpoint - value_input; // determine error #END\n
      #VARIABLE    cumError2 += error2 * elapsedTime2; // compute integral #END\n
      #VARIABLE    rateError2 = (error2 - lastError2) / elapsedTime2; // compute derivative #END\n
      #VARIABLE    double out = (${value_kp2} * error2)/10 + (${value_ki2} * cumError2)/10 + (${value_kd2} * rateError2)/10; //PID output #END\n
      #VARIABLE    lastError2 = error2; //remember current error #END\n
      #VARIABLE    previousTime2 = currentTime2;  //remember current time #END\n
      #VARIABLE    PID_out2 = out; //remember current time #END\n
      #VARIABLE    return round(PID_out2); }//remember current time #END\n  
      #VARIABLE  // End PID Program #END\n
    `;
    return code;
  };
  
  Blockly.JavaScript['PID2_read_write'] = function (block) {
    var value2_input = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
    var value2_setpoint = Blockly.JavaScript.valueToCode(block, 'setpoint2', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `compute_PID2(${value2_input}, ${value2_setpoint})`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
}