/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
  'use strict';
  Blockly.Blocks['task_io_interrupt'] = {
    init: function () {
      this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("on GPIO pin");
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["change", "BFarmEventType::PIN_CHANGE"], ["falling", "BFarmEventType::PIN_FALLING"], ["raising", "BFarmEventType::PIN_RAISING"]]), "type")
        .appendField(" memory : ")
        .appendField(new Blockly.FieldDropdown([
          ["1024", "1024"],
          ["2048", "2048"],
          ["3072", "3072"],
          ["4096", "4096"],
          ["5120", "5120"],
          ["6144", "6144"],
          ["7168", "7168"],
          ["8192", "8192"]
        ]), "memory");
      this.appendStatementInput("callback")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3e4b72");
      this.setTooltip("catch event when digital GPIO has been change.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['task_io_interrupt_ext'] = {
    init: function () {
      this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("on GPIO pin");
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["change", "BFarmEventType::PIN_CHANGE"], ["falling", "BFarmEventType::PIN_FALLING"], ["raising", "BFarmEventType::PIN_RAISING"]]), "type")
        .appendField(" memory : ")
        .appendField(new Blockly.FieldDropdown([
          ["1024", "1024"],
          ["2048", "2048"],
          ["3072", "3072"],
          ["4096", "4096"],
          ["5120", "5120"],
          ["6144", "6144"],
          ["7168", "7168"],
          ["8192", "8192"]
        ]), "memory");
      this.appendStatementInput("callback")
        .setCheck(null);
      this.setPreviousStatement(false, null);
      this.setNextStatement(false, null);
      this.setColour("#3e4b72");
      this.setTooltip("catch event when digital GPIO has been change.");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['task_timer_interrupt'] = {
    init: function () {
      let name = (Blockly.JavaScript.variableDB_) ? Blockly.JavaScript.variableDB_.getDistinctName("MyJob", "VARIABLE") : "MyJob";
      this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("do ")
        .appendField(new Blockly.FieldTextInput(name), "taskname")
        .appendField("every");
      this.appendDummyInput()
        .appendField("milliseconds").appendField(" memory : ")
        .appendField(new Blockly.FieldDropdown([
          ["1024", "1024"],
          ["2048", "2048"],
          ["3072", "3072"],
          ["4096", "4096"],
          ["5120", "5120"],
          ["6144", "6144"],
          ["7168", "7168"],
          ["8192", "8192"]
        ]), "memory");
      this.appendStatementInput("callback")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3e4b72");
      this.setTooltip("do task periodically");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['task_timer_interrupt_ext'] = {
    init: function () {
      let name = (Blockly.JavaScript.variableDB_) ? Blockly.JavaScript.variableDB_.getDistinctName("MyJob", "VARIABLE") : "MyJob";
      this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("do ")
        .appendField(new Blockly.FieldTextInput(name), "taskname")
        .appendField("every");
      this.appendDummyInput()
        .appendField("milliseconds").appendField(" memory : ")
        .appendField(new Blockly.FieldDropdown([
          ["1024", "1024"],
          ["2048", "2048"],
          ["3072", "3072"],
          ["4096", "4096"],
          ["5120", "5120"],
          ["6144", "6144"],
          ["7168", "7168"],
          ["8192", "8192"]
        ]), "memory");
      this.appendStatementInput("callback")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(false, null);
      this.setNextStatement(false, null);
      this.setColour("#3e4b72");
      this.setTooltip("do task periodically");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['task_timer_interrupt_once'] = {
    init: function () {
      this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("do")
        .appendField("after");
      this.appendDummyInput()
        .appendField("milliseconds").appendField(" memory : ")
        .appendField(new Blockly.FieldDropdown([
          ["1024", "1024"],
          ["2048", "2048"],
          ["3072", "3072"],
          ["4096", "4096"],
          ["5120", "5120"],
          ["6144", "6144"],
          ["7168", "7168"],
          ["8192", "8192"]
        ]), "memory");
      this.appendStatementInput("callback")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3e4b72");
      this.setTooltip("do task once");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['task_timer_interrupt_once_ext'] = {
    init: function () {
      this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("do")
        .appendField("after");
      this.appendDummyInput()
        .appendField("milliseconds").appendField(" memory : ")
        .appendField(new Blockly.FieldDropdown([
          ["1024", "1024"],
          ["2048", "2048"],
          ["3072", "3072"],
          ["4096", "4096"],
          ["5120", "5120"],
          ["6144", "6144"],
          ["7168", "7168"],
          ["8192", "8192"]
        ]), "memory");
      this.appendStatementInput("callback")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(false, null);
      this.setNextStatement(false, null);
      this.setColour("#3e4b72");
      this.setTooltip("do task once");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['task_task'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("run task").appendField(" memory : ")
        .appendField(new Blockly.FieldDropdown([
          ["1024", "1024"],
          ["2048", "2048"],
          ["3072", "3072"],
          ["4096", "4096"],
          ["5120", "5120"],
          ["6144", "6144"],
          ["7168", "7168"],
          ["8192", "8192"]
        ]), "memory");
      this.appendStatementInput("callback")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3e4b72");
      this.setTooltip("start concurrent task");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['task_task_ext'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("run task").appendField(" memory : ")
        .appendField(new Blockly.FieldDropdown([
          ["1024", "1024"],
          ["2048", "2048"],
          ["3072", "3072"],
          ["4096", "4096"],
          ["5120", "5120"],
          ["6144", "6144"],
          ["7168", "7168"],
          ["8192", "8192"]
        ]), "memory");
      this.appendStatementInput("callback")
        .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(false, null);
      this.setNextStatement(false, null);
      this.setColour("#3e4b72");
      this.setTooltip("start concurrent task");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['task_detach_timer'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("stop task")
        .appendField(new Blockly.FieldTextInput("MyJob"), "taskname");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3e4b72");
      this.setTooltip("detach running task");
      this.setHelpUrl("");
    }
  };
  Blockly.Blocks['task_detach_gpio'] = {
    init: function () {
      this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("stop GPIO interrupt pin");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3e4b72");
      this.setTooltip("detach gpio interrupt task");
      this.setHelpUrl("");
    }
  };
};