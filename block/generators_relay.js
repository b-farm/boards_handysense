module.exports = function (Blockly) {
    "use strict";

    Blockly.JavaScript['relay_on'] = function (block) {
        var ch_relay = block.getFieldValue('ch_relay');
        var code = `digitalWrite(const_relay_pin[${ch_relay}], HIGH);`;
        return code;
    };

    Blockly.JavaScript['relay_off'] = function (block) {
        var ch_relay = block.getFieldValue('ch_relay');
        var code = `digitalWrite(const_relay_pin[${ch_relay}], LOW);`;
        return code;
    };
};