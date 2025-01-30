const dirBoard = Vue.prototype.$global.board.board_info.dir;
const dirIcon = name => `file:///${dirBoard}/static/icons/${name}`

module.exports = function (Blockly) {
  "use strict";

  Blockly.Blocks["Set_Time"] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Set time to');
      this.appendValueInput("open")
        .setCheck(null)
        .appendField("open");
      this.appendValueInput("close")
        .setCheck(null)
        .appendField("close");
      this.appendStatementInput('DO')
        .appendField('do');
      this.setInputsInline(true);
      this.setNextStatement(true, null);
      this.setPreviousStatement(true, null);
      this.setColour("#DAA520");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.Blocks["SetTimePeriod"] = {
    init: function () {
      this.appendDummyInput()
        .appendField('time set');
      this.appendValueInput("hhOpen")
        .setCheck(null)
      //.appendField(":");
      this.appendValueInput("mmOpen")
        .setCheck(null)
        .appendField("hh :");
      this.appendValueInput("hhClose")
        .setCheck(null)
        .appendField("mm to");
      this.appendValueInput("mmClose")
        .setCheck(null)
        .appendField("hh :");
      this.appendValueInput("dayweek")
        .setCheck(null)
        .appendField("mm | Day of week");
      this.appendStatementInput('callback')
        .setCheck(null)
        .appendField("do");
      this.setInputsInline(true);
      this.setNextStatement(true, null);
      this.setPreviousStatement(true, null);
      this.setColour("#DAA520");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.Blocks['SetThreshold'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("set threshold")
        .appendField(new Blockly.FieldImage(dirIcon("threshold-on-svgrepo-com.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("input")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("input");
      //.appendField(new Blockly.FieldImage(dirIcon("threshold.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("margin")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("กำหนดขอบ");
      //.appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("minthreshold")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ค่าต่ำสุด");
      //.appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("maxthreshold")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ค่าสูงสุด");
      //.appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("RelayChannel")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ช่องรีเลย์");
      this.setNextStatement(true, null);
      this.setPreviousStatement(true, null);
      this.setColour("#DAA520");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["dayofweek"] = {
    init: function () {
      this.appendDummyInput()
        .appendField('day of week:')
        .appendField(new Blockly.FieldDropdown([["Monday", "0"], ["Tuesday", "1"], ["Wednesday", "2"], ["Thursday", "3"], ["Friday", "4"], ["Saturday", "5"], ["Sunday", "6"], ["All.day", "7"]]), "dayofweek")
      this.setInputsInline(true);
      this.setOutput(true, ["int", "Number"]);
      this.setColour("#DAA520");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.Blocks["Activethreshold"] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Status of threshold:')
        .appendField(new Blockly.FieldDropdown([["min.threshold", "0"], ["max.threshold", "1"]]), "ActivethresholdRalay")
      this.setInputsInline(true);
      this.setOutput(true, ["int", "Number"]);
      this.setColour("#DAA520");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  Blockly.Blocks["RelayChannel"] = {
    init: function () {
      this.appendDummyInput()
        .appendField('Relay Channel:')
        .appendField(new Blockly.FieldDropdown([["CH1", "0"], ["CH2", "1"], ["CH3", "2"], ["CH4", "3"]]), "Relay_ch")
      this.setInputsInline(true);
      this.setOutput(true, ["int", "Number"]);
      this.setColour("#DAA520");
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

  /* HandySense Orginal*/

  Blockly.Blocks['handysense_ac'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("HandySense Active")
				.appendField(new Blockly.FieldDropdown([["Hight", "1"], ["Low", "0"]]), "address");
        this.setInputsInline(true);
        this.setOutput(true, ["int", "Number"]);
        this.setColour("#DAA520");
        this.setTooltip('');
        this.setHelpUrl('');
		}
	};


  Blockly.Blocks['control_soil'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("HandySense_ControlSensor");
      this.appendValueInput("Min_Soil")
        .setCheck(null)
        .appendField("Min_Soil(0-99)");
      this.appendValueInput("Max_Soil")
        .setCheck(null)
        .appendField("Max_Soil(0-99)");
        this.appendValueInput("active_hs")
        .setCheck(null)
        .appendField("Set HandySense Active");
        this.appendValueInput("relay_pin_control")
        .setCheck(null)
        .appendField("Relay_Pin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  Blockly.Blocks['control_temp'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("HandySense_ControlSensor");
      this.appendValueInput("Min_Temp")
        .setCheck(null)
        .appendField("Min_Temp(0-99)");
      this.appendValueInput("Max_Temp")
        .setCheck(null)
        .appendField("Max_Temp(0-99)");
        this.appendValueInput("active_hs")
        .setCheck(null)
        .appendField("Set HandySense Active");
        this.appendValueInput("relay_pin_control")
        .setCheck(null)
        .appendField("Relay_Pin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };



  Blockly.Blocks['relay_timer'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Relay")
        .appendField(new Blockly.FieldDropdown([["Relay1", "0"], ["Relay2", "1"], ["Relay3", "2"], ["Relay4", "3"]]), "relay_timer");
        this.setInputsInline(true);
        this.setOutput(true, ["int", "Number"]);
        this.setColour("135");
        this.setTooltip('');
        this.setHelpUrl('');
		}
	};

  Blockly.Blocks['day_timer'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("Day_Timer")
        .appendField(new Blockly.FieldDropdown([["monday", "1"], ["tuesday", "2"], 
        ["wednesday", "3"], ["thursday", "4"], ["friday", "5"], ["saturday", "6"], ["sunday", "7"]]), "day_timer");
        this.setInputsInline(true);
        this.setOutput(true, ["int", "Number"]);
        this.setColour("135");
        this.setTooltip('');
        this.setHelpUrl('');
		}
	};


  Blockly.Blocks['control_timer_seting'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Relay_Timer");
      this.appendValueInput("relay_timer")
        .setCheck(null)
        .appendField("Select Relay Timer");
      this.appendValueInput("day_timer")
        .setCheck(null)
        .appendField("day_timer");
        this.appendValueInput("hh_open")
        .setCheck(null)
        .appendField("HH_Open(24)");
        this.appendValueInput("mm_open")
        .setCheck(null)
        .appendField("MM_Open(60)");
        this.appendValueInput("hh_close")
        .setCheck(null)
        .appendField("HH_Close(24)");
        this.appendValueInput("mm_close")
        .setCheck(null)
        .appendField("MM_Close(60)");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
 
  Blockly.Blocks['delay_function'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("cd_op_function");
      this.appendValueInput("cd_time")
        .setCheck(null)
        .appendField("cd_timer");
      this.appendValueInput("op_time")
        .setCheck(null)
        .appendField("op_timer");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(135);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['SetThresholdAdvance'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Control by Sensor and Cooldown")
        .appendField(new Blockly.FieldImage(dirIcon("threshold-on-svgrepo-com.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("input")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("input");
      //.appendField(new Blockly.FieldImage(dirIcon("threshold.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("minthreshold")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ค่าต่ำสุด");
      //.appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("maxthreshold")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ค่าสูงสุด");
      //.appendField(new Blockly.FieldImage(dirIcon("thermometer.svg"), 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("RelayChannel")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ช่องรีเลย์");
        this.appendValueInput("Cd")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("คูลดาวนาที");
        this.appendValueInput("Op")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("เปิดวินาที");
      this.setNextStatement(true, null);
      this.setPreviousStatement(true, null);
      this.setColour("#DAA520");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
};
