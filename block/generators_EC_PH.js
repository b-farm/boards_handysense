/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
module.exports = function (Blockly) {
  "use strict";

  Blockly.JavaScript["Initial_Fertilizer"] = function () {

    var code = `
	#EXTINC#include <Preferences.h>
  #include <fertilizer.h>
  #END
	#FUNCTION #END
	#VARIABLE#END
  preferences.begin("credentials", false);
  load_preferences();
	#LOOP_EXT_CODE

	#END
	`;
    return code;
  };


  Blockly.JavaScript["Load_preferences"] = function () {

    var code = `
	load_preferences();
	`;
    return code;
  };

  Blockly.JavaScript["Clear_preferences"] = function () {

    var code = `
	clear_preferences();
	`;
    return code;
  };

  Blockly.JavaScript["Print_preferences"] = function () {

    var code = `
	print_config();
	`;
    return code;
  };

  Blockly.JavaScript['Read_pH'] = function (block) {
    var _adc_ph = Blockly.JavaScript.valueToCode(block, '_adc_ph', Blockly.JavaScript.ORDER_ATOMIC);
    var code = ``;
    code += `(float)(PHcompute(${_adc_ph}))`
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['Read_temp'] = function (block) {
    var _adc_temp = Blockly.JavaScript.valueToCode(block, '_adc_temp', Blockly.JavaScript.ORDER_ATOMIC);
    var code = ``;
    code += `(float)(Tempcompute(${_adc_temp}))`
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['Read_EC'] = function (block) {
    var _adc_ec = Blockly.JavaScript.valueToCode(block, '_adc_ec', Blockly.JavaScript.ORDER_ATOMIC);
    var _adc_temp = Blockly.JavaScript.valueToCode(block, '_adc_temp', Blockly.JavaScript.ORDER_ATOMIC);
    var code = ``;
    code += `(int)(ECcompute(${_adc_ec},${_adc_temp}))`
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['set_preferences'] = function (block) {
    "use strict";
    var _ph4 = Blockly.JavaScript.valueToCode(block, '_ph4', Blockly.JavaScript.ORDER_ATOMIC);
    var _ph7 = Blockly.JavaScript.valueToCode(block, '_ph7', Blockly.JavaScript.ORDER_ATOMIC);
    var _ph10 = Blockly.JavaScript.valueToCode(block, '_ph7', Blockly.JavaScript.ORDER_ATOMIC);
    var _ec0 = Blockly.JavaScript.valueToCode(block, '_ec0', Blockly.JavaScript.ORDER_ATOMIC);
    var _ec1413 = Blockly.JavaScript.valueToCode(block, '_ec1413', Blockly.JavaScript.ORDER_ATOMIC);
    var _calTemp = Blockly.JavaScript.valueToCode(block, '_calTemp', Blockly.JavaScript.ORDER_ATOMIC);
    //var _ec5000 = Blockly.JavaScript.valueToCode(block, '_ec5000', Blockly.JavaScript.ORDER_ATOMIC);
    var _phmin = Blockly.JavaScript.valueToCode(block, '_phmin', Blockly.JavaScript.ORDER_ATOMIC);
    var _phmax = Blockly.JavaScript.valueToCode(block, '_phmax', Blockly.JavaScript.ORDER_ATOMIC);
    var _ecmin = Blockly.JavaScript.valueToCode(block, '_ecmin', Blockly.JavaScript.ORDER_ATOMIC);
    var _phdur = Blockly.JavaScript.valueToCode(block, '_phdur', Blockly.JavaScript.ORDER_ATOMIC);
    var _ecdur = Blockly.JavaScript.valueToCode(block, '_ecdur', Blockly.JavaScript.ORDER_ATOMIC);
    var code = ``;
    code += `calTemp=${_calTemp};calPH4=${_ph4};calPH7=${_ph7};calPH10=${_ph10};calEC0=${_ec0};calEC1413=${_ec1413};PHthresh_min=${_phmin};PHthresh_max=${_phmax};ECthresh_min=${_ecmin};PHdura_value=${_phdur};ECdura_value=${_ecdur};\n`
    code += `set_preferences();\n`
    return code;
  };

  Blockly.JavaScript['set_single_preferences'] = function (block) {
    "use strict";
    var _param = block.getFieldValue('_param');
    var _value = Blockly.JavaScript.valueToCode(block, '_value', Blockly.JavaScript.ORDER_ATOMIC);
    var code = ``;
    code += `${_param}=${_value};\n`
    code += `set_preferences();\n`
    return code;
  };

  Blockly.JavaScript['read_single_preferences'] = function (block) {
    var _param = block.getFieldValue('_param');
    var code = ``;
    code += `${_param}`
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
}