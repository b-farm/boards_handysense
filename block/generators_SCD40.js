module.exports = function (Blockly) {
  "use strict";
  Blockly.JavaScript['SCD40_begin'] = function (block) {
    var code = '';
    code += '#EXTINC #include <DFRobot_SCD4X.h>#END\n';
    //code += '#EXTINC#include <Wire.h>#END\n';
    code += '#VARIABLE DFRobot_SCD4X SCD4X(&Wire, /*i2cAddr = */SCD4X_I2C_ADDR);#END\n';
    code += '\n';
    //code += '#SETUP Wire.begin();#END\n';
    code += `
  // Init the sensor
  while( !SCD4X.begin() ){
    Serial.println("Communication with device failed, please check connection");
    delay(3000);
  }
  
  float temp = 0;
  temp = SCD4X.getTempComp();
  uint16_t altitude = 0;
  altitude = SCD4X.getSensorAltitude();

  SCD4X.enablePeriodMeasure(SCD4X_START_PERIODIC_MEASURE); `;

    return code;
  };



  Blockly.JavaScript["SCD04_int"] = function (block) {
    var block_loopcallback = Blockly.JavaScript.statementToCode(block, "SCD40_read_temp");
    var code = `
         if(SCD4X.getDataReadyStatus()) {       
    
      DFRobot_SCD4X::sSensorMeasurement_t data;
      SCD4X.readMeasurement(&data);
  
      float temp = data.temp;
      
      float humi = data.humidity;
      
      float Co2 = data.CO2ppm; 
     ${block_loopcallback}
      }
    
    `;
    return code;
  };

  Blockly.JavaScript['SCD40_read_temp'] = function (block) {
    var code = 'temp';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['SCD40_read_humi'] = function (block) {
    var code = 'humi';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['SCD40_read_Co2'] = function (block) {
    var code = 'Co2';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
}