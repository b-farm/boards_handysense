module.exports = function (Blockly) {
    "use strict";

    Blockly.JavaScript['ReadAnalog_MCP3424'] = function (block) {
        var ch = block.getFieldValue('ch');
        var code = `ReadAnalog_MPC3424(${ch})`;
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    Blockly.JavaScript['ReadAnalog_from_MPC3424'] = function (block) {
        var ch = block.getFieldValue('ch');
        var valueMin = Blockly.JavaScript.valueToCode(block, 'valueMin', Blockly.JavaScript.ORDER_ATOMIC);
        var valueMax = Blockly.JavaScript.valueToCode(block, 'valueMax', Blockly.JavaScript.ORDER_ATOMIC);
        var OutMin = Blockly.JavaScript.valueToCode(block, 'OutMin', Blockly.JavaScript.ORDER_ATOMIC);
        var OutMax = Blockly.JavaScript.valueToCode(block, 'OutMax', Blockly.JavaScript.ORDER_ATOMIC);
        var code = `ReadAnalog_from_MPC3424(${ch}, ${valueMin}, ${valueMax}, ${OutMin}, ${OutMax})`;
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };
};
