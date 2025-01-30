module.exports = function(Blockly){
  'use strict';

// Blockly.JavaScript['time_delay'] = function(block) {
//   var value_delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);  
//   var code = `delay(${value_delay});\n`;
//   return code;
// };

// Blockly.JavaScript['time_delay_microsec'] = function(block) {
//     var value_delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);
//     var code = `delayMicroseconds(${value_delay});\n`;
//     return code;
// };

Blockly.JavaScript['time_sync'] = function(block) {  
  var code = `#EXTINC#include "TimeBFarm.h"#END
  #VARIABLE BFarmTime bfarmtime;#END 
  bfarmtime.sync();\n`;
  return code;
}; 
// #VARIABLE BFarmTime bfarmtime;#END bfarmtime.sync();

// Blockly.JavaScript['time_get_year'] = function(block) {
//   var code = 'bfarmtime.getYear()';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.JavaScript['time_get_month'] = function(block) {
//   var code = 'bfarmtime.getMonth()';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.JavaScript['time_get_day'] = function(block) {
//   var code = 'bfarmtime.getDayOfMonth()';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.JavaScript['time_get_day_of_week'] = function(block) {  
//   var code = 'bfarmtime.getDayOfWeek()';  
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.JavaScript['time_get_hour'] = function(block) {
//   var code = 'bfarmtime.getHour()';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.JavaScript['time_get_minute'] = function(block) {
//   var code = 'bfarmtime.getMinute()';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.JavaScript['time_get_second'] = function(block) {
//   var code = 'bfarmtime.getSecond()';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.JavaScript['time_millis'] = function(block) {
//   var code = 'millis()';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.JavaScript['time_micros'] = function(block) {
//   var code = 'micros()';
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

}