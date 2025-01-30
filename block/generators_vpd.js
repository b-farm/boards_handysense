module.exports = function (Blockly) {
  "use strict";
  Blockly.JavaScript["HandySense_VPD_setup"] = function () {
    var code = "#EXTINC #include <vpd_calculate_2.h> #END";
    return code;
  };
  Blockly.JavaScript["HandySense_VPD_Air"] = function (block) {
    var value_Temp_Air = Blockly.JavaScript.valueToCode(
      block,
      "Temp_Air",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_Humi_Air = Blockly.JavaScript.valueToCode(
      block,
      "Humi_Air",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `  
			vpd_air(${value_Temp_Air},${value_Humi_Air})
			`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  // Serial.println(String(vpd_air(${value_Temp_Air},${value_Humi_Air})));

  Blockly.JavaScript["HandySense_VPD_Result"] = function (block) {
    var value_Temp_Air = Blockly.JavaScript.valueToCode(
      block,
      "Temp_Air",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_Humi_Air = Blockly.JavaScript.valueToCode(
      block,
      "Humi_Air",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_Temp_Leaf = Blockly.JavaScript.valueToCode(
      block,
      "Temp_Leaf",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `
			vpd_result(${value_Temp_Air},${value_Humi_Air},${value_Temp_Leaf})
			`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  // Serial.println(String(vpd_result(${value_Temp_Air},${value_Humi_Air},${value_Temp_Leaf})));

  Blockly.JavaScript["HandySense_VPD_heatindex_setup"] = function (block) {
    var value_Temp = Blockly.JavaScript.valueToCode(
      block,
      "Temp",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_Humi = Blockly.JavaScript.valueToCode(
      block,
      "Humi",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = `
			#EXTINC #include <vpd_calculate_2.h> #END
			double HandySense_VPD_Heatindex = vpd_heatindex(${value_Temp},${value_Humi});
			`;
    return code;
  };
  // #EXTINC #include <math.h> #END

  Blockly.JavaScript["HandySense_VPD_heatindex"] = function () {
    var code = "HandySense_VPD_Heatindex";
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript["HandySense_VPD_wbgt"] = function () {
    var code = "0.3629*(HandySense_VPD_Heatindex)+14.7053";
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // #EXTINC double HandySense_VPD_Heatindex; #END
};
