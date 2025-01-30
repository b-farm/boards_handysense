module.exports = function (Blockly) {
  "use strict";

  Blockly.JavaScript['SetThreshold'] = function (block) {
    var input_sensor = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
    var margin = Blockly.JavaScript.valueToCode(block, 'margin', Blockly.JavaScript.ORDER_ATOMIC);
    var minthreshold = Blockly.JavaScript.valueToCode(block, 'minthreshold', Blockly.JavaScript.ORDER_ATOMIC);
    var maxthreshold = Blockly.JavaScript.valueToCode(block, 'maxthreshold', Blockly.JavaScript.ORDER_ATOMIC);
    var RelayChannel = Blockly.JavaScript.valueToCode(block, 'RelayChannel', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
    #EXTINC #include <HandySense.h>#END
 
    Serial.println("input_sensor: ");
    Serial.println(${input_sensor});

      if (${margin} == 0){
        if (${minthreshold} != 0 && ${maxthreshold} != 0){
          if (${minthreshold} < ${maxthreshold}){
            if (${input_sensor} < ${minthreshold}){
              Open_relay(${RelayChannel});
              Serial.println("Open_relay(${RelayChannel})");
            }
            else if (${input_sensor} > ${maxthreshold}){
              Close_relay(${RelayChannel});
              Serial.println("Close_relay(${RelayChannel})");
            }
          }
        }
      }
      else if (${margin} == 1){
        if (${minthreshold} != 0 && ${maxthreshold} != 0){
          if (${minthreshold} < ${maxthreshold}){
            if (${input_sensor} < ${minthreshold}){            
              Close_relay(${RelayChannel});
              Serial.println("Close_relay(${RelayChannel})");
            }
            else if (${input_sensor} > ${maxthreshold}){
              Open_relay(${RelayChannel});
              Serial.println("Open_relay(${RelayChannel})");
            }
          }
        }
      }
      \n
    `;
    return code;
  };

  Blockly.JavaScript['SetTimePeriod'] = function (block) {
    let hhOpen = Blockly.JavaScript.valueToCode(block, 'hhOpen', Blockly.JavaScript.ORDER_ATOMIC);
    let mmOpen = Blockly.JavaScript.valueToCode(block, 'mmOpen', Blockly.JavaScript.ORDER_ATOMIC);
    let hhClose = Blockly.JavaScript.valueToCode(block, 'hhClose', Blockly.JavaScript.ORDER_ATOMIC);
    let mmClose = Blockly.JavaScript.valueToCode(block, 'mmClose', Blockly.JavaScript.ORDER_ATOMIC);
    let dayweek = Blockly.JavaScript.valueToCode(block, 'dayweek', Blockly.JavaScript.ORDER_ATOMIC);
    let statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
    let code = `
    #EXTINC #include <HandySense.h>#END

      int current_time = get_curentTimer();
      Serial.println("current_time  : " + String(current_time));

      int SetTime_Open = (${dayweek} * 24 * 60) + (${hhOpen} * 60) + ${mmOpen};
      Serial.println("SetTime_Open  : " + String(SetTime_Open));

      int SetTime_Close = (${dayweek} * 24 * 60) + (${hhClose} * 60) + ${mmClose};
      Serial.println("SetTime_Close : " + String(SetTime_Close));

      if (current_time == -1) return;
      else{
        if (current_time != old_time){
          if (current_time >= ((${dayweek} * 24 * 60) + (${hhOpen} * 60) + ${mmOpen}) && (current_time <= (${dayweek} * 24 * 60) + (${hhClose} * 60) + ${mmClose})){
            Serial.println("open Time");
            ${statements_callback}
          } else if (current_time <= ((${dayweek} * 24 * 60) + (${hhOpen} * 60) + ${mmOpen}) || current_time >= ((${dayweek} * 24 * 60) + (${hhClose} * 60) + ${mmClose})){
            Serial.println("close Time");
          } 
          old_time = current_time;
        }
      }
      \n
    `;
    return code;
  };

  Blockly.JavaScript['dayofweek'] = function (block) {
    var dayofweek = block.getFieldValue('dayofweek');
    var code = `dayofweekformblock[${dayofweek}]`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['Activethreshold'] = function (block) {
    var ActivethresholdRalay = block.getFieldValue('ActivethresholdRalay');
    var code = `ActivethresholdRalay[${ActivethresholdRalay}]`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['RelayChannel'] = function (block) {
    var Relay_ch = block.getFieldValue('Relay_ch');
    var code = `RelayStatus[${Relay_ch}]`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };



  /* HandySense Orginal*/
  Blockly.JavaScript['handysense_ac'] = function (block) {
    var dropdown_hs_ac = block.getFieldValue('address');
    var code = `${dropdown_hs_ac}`;
    return code;
  };

  Blockly.JavaScript['control_soil'] = function (block) {
    var value_min_soil = Blockly.JavaScript.valueToCode(block, 'Min_Soil', Blockly.JavaScript.ORDER_ATOMIC);
    var value_max_soil = Blockly.JavaScript.valueToCode(block, 'Max_Soil', Blockly.JavaScript.ORDER_ATOMIC);
    var value_active_hs = Blockly.JavaScript.valueToCode(block, 'active_hs', Blockly.JavaScript.ORDER_ATOMIC);
    var value_relay_pin = Blockly.JavaScript.valueToCode(block, 'relay_pin_control', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `control_soil_handysense(${value_min_soil},${value_max_soil},${value_active_hs},${value_relay_pin});`;
    return code;
  };

  Blockly.JavaScript['control_temp'] = function (block) {
    var value_min_temp = Blockly.JavaScript.valueToCode(block, 'Min_Temp', Blockly.JavaScript.ORDER_ATOMIC);
    var value_max_temp = Blockly.JavaScript.valueToCode(block, 'Max_Temp', Blockly.JavaScript.ORDER_ATOMIC);
    var value_active_hs = Blockly.JavaScript.valueToCode(block, 'active_hs', Blockly.JavaScript.ORDER_ATOMIC);
    var value_relay_pin = Blockly.JavaScript.valueToCode(block, 'relay_pin_control', Blockly.JavaScript.ORDER_ATOMIC);
    var value_sensor_control = Blockly.JavaScript.valueToCode(block, 'sensor_control', Blockly.JavaScript.ORDER_ATOMIC);

    var code = `control_temp_handysense(${value_min_temp},${value_max_temp},${value_active_hs},${value_relay_pin},${value_sensor_control});`;
    return code;
  };

  Blockly.JavaScript['relay_timer'] = function (block) {
    var dropdown_relay_timer = block.getFieldValue('relay_timer');
    var code = `${dropdown_relay_timer}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['day_timer'] = function (block) {
    var dropdown_day_timerr = block.getFieldValue('day_timer');
    var code = `${dropdown_day_timerr}`;
    return code;
  };



  Blockly.JavaScript['control_timer_seting'] = function (block) {
    var value_relay_timer = Blockly.JavaScript.valueToCode(block, 'relay_timer', Blockly.JavaScript.ORDER_ATOMIC);
    var value_day_timer = Blockly.JavaScript.valueToCode(block, 'day_timer', Blockly.JavaScript.ORDER_ATOMIC);
    var value_hh_open = Blockly.JavaScript.valueToCode(block, 'hh_open', Blockly.JavaScript.ORDER_ATOMIC);
    var value_mm_open = Blockly.JavaScript.valueToCode(block, 'mm_open', Blockly.JavaScript.ORDER_ATOMIC);
    var value_hh_close = Blockly.JavaScript.valueToCode(block, 'hh_close', Blockly.JavaScript.ORDER_ATOMIC);
    var value_mm_close = Blockly.JavaScript.valueToCode(block, 'mm_close', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `control_timer_seting(${value_relay_timer},${value_day_timer},${value_hh_open},${value_mm_open},${value_hh_close},${value_mm_close});`;
    return code;
  };


  Blockly.JavaScript['delay_function'] = function (block) {
    var value_cd_time = Blockly.JavaScript.valueToCode(block, 'cd_time', Blockly.JavaScript.ORDER_ATOMIC);
    var value_op_time = Blockly.JavaScript.valueToCode(block, 'op_time', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `delay_function(${value_cd_time},${value_op_time});`;
    return code;
  };

  Blockly.JavaScript['SetThresholdAdvance'] = function (block) {
    var input_sensor = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
    var minthreshold = Blockly.JavaScript.valueToCode(block, 'minthreshold', Blockly.JavaScript.ORDER_ATOMIC);
    var maxthreshold = Blockly.JavaScript.valueToCode(block, 'maxthreshold', Blockly.JavaScript.ORDER_ATOMIC);
    var RelayChannel = Blockly.JavaScript.valueToCode(block, 'RelayChannel', Blockly.JavaScript.ORDER_ATOMIC);
    var cd = Blockly.JavaScript.valueToCode(block, 'Cd', Blockly.JavaScript.ORDER_ATOMIC);
    var op_time = Blockly.JavaScript.valueToCode(block, 'Op', Blockly.JavaScript.ORDER_ATOMIC);
    var code = ` 
    Serial.println("input_sensor: ");
    Serial.println(${input_sensor});
    unsigned int c,d,e ;
    unsigned int statusSensor ;
    unsigned int check_functionOpen;
    int init_Sensor ;
    if (${minthreshold} != 0 && ${maxthreshold} != 0) {
      if (check_functionOpen == 2) {
        c = c + 2;
         Serial.print("c : ");  Serial.println(c);
        if (${op_time} != 0) {
          if (c >= ${op_time}) {
            Open_relay(${RelayChannel});
            //statusSensor = 0;
           
            
  //          digitalWrite(LEDY, HIGH);
             Serial.println("humid Time Off");
            check_functionOpen = 1;
            c = 0;
            d = 0;
          }
        }
      }
      if (${input_sensor} < ${minthreshold}) {
        if (check_functionOpen == 1) {
          d = (d + 2);
           Serial.print("d : ");  Serial.println(d);
          if (d >= (${cd} * 60)) {
            statusSensor = 0;
            d = 0;
          }
        }
        if (statusSensor == 0 || init_Sensor == 0) {
         Open_relay(${RelayChannel});
          statusSensor = 1;
         
         
  //        digitalWrite(LEDY, HIGH);
           Serial.println("humid On");
          init_Sensor = 1;
          check_functionOpen = 2;
          e = 2;
        }
      }
  
      else if (${input_sensor} >= ${minthreshold} && ${input_sensor} <= ${maxthreshold}) {
        if (e == 2) {
          if (check_functionOpen == 1) {
            d = (d + 2);
             Serial.print("d : ");  Serial.println(d);
            if (d >= (${cd} * 60)) {
              statusSensor = 0;
              d = 0;
            }
          }
          if (statusSensor == 0 || init_Sensor == 0) {
           Open_relay(${RelayChannel});
            statusSensor = 1;
            
            
  //          digitalWrite(LEDY, HIGH);
             Serial.println("humid On");
            init_Sensor = 1;
            check_functionOpen = 2;
          }
        }
      }
  
      else if (${input_sensor} > ${maxthreshold}) {
         Serial.println("${input_sensor} > ${maxthreshold}");  
        if (statusSensor == 1 || init_Sensor == 0) {
           Serial.println("Close relay");
          Open_relay(${RelayChannel});
          statusSensor = 0;
        
          
  //        digitalWrite(LEDY, HIGH);
           Serial.println("humid Off");
          init_Sensor = 1;
          check_functionOpen = 0;
          c = 0;
          d = 0;
          e = 0;
        }
      }
    }
      \n
    `;
    return code;
  };
};