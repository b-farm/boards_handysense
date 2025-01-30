/* eslint-disable prettier/prettier */
module.exports = function (Blockly) {
    "use strict";

    Blockly.JavaScript["sw_on_pressed"] = function (block) {
        var ch_sw = block.getFieldValue("ch_sw");
        let REESSED = Blockly.JavaScript.statementToCode(block, "REESSED");
        let code = `
            if (digitalRead(sw_onboard[${ch_sw}]) == 0) {
                ${REESSED}
            }
        \n
        `;
        return code;
    };
    // #EXTINC #include <HandySense.h>#END

    Blockly.JavaScript["sw_on_release"] = function (block) {
        var ch_sw = block.getFieldValue("ch_sw");
        let RELEASE = Blockly.JavaScript.statementToCode(block, "RELEASE");
        let code = `
            if (digitalRead(sw_onboard[${ch_sw}]) == 1) {
                ${RELEASE}
            }
        \n
        `;
        return code;
    };

    Blockly.JavaScript["sw_pressed"] = function (block) {
        var ch_sw = block.getFieldValue("ch_sw");
        var code = `(!digitalRead(sw_onboard[${ch_sw}]))`;
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    Blockly.JavaScript["sw_release"] = function (block) {
        var ch_sw = block.getFieldValue("ch_sw");
        var code = `(digitalRead(sw_onboard[${ch_sw}]))`;
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };
};
