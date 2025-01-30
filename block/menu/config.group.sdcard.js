module.exports = {
    name: "Memory",
    index: 20,
    color: "65",
    icon: "/static/icons/icons8_stack_96px.png",
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="SD Card" web-class="headline"></label>`
            // xml: `<sep gap="32"></sep><label text="RTC_DS1388" web-class="headline"></label>`
        },
        "setup_sdCard",
        "readList_sdcard",
        "sdCard_GetDataFileName",
        "sdCard_CreateFileName",
        "sdCard_DeleteFile",
        "sdCard_MrDir",
        "sdCard_DelDir",
        {
            xml: `<sep gap="32"></sep><label text="EEPROM" web-class="headline"></label>`
        },
        "AT24C256_begin",
        "AT24C256_WriteData",
        "AT24C256_WriteDataMulti",
        "AT24C256_ReadData",
        "AT24C256_ReadDataMulti",
        "AT24C256_ReadDataMulti",

        // "sdcard_begin",
        // {
        //     xml:
        //         `<block type="sdcard_write_txt">
        //               <value name="DATA">
        //                   <shadow type="basic_string">
        //                       <field name="VALUE">Hello B-FARM</field>
        //                   </shadow>
        //               </value>
        //           </block>`
        // },
        // {
        //     xml:
        //         `<block type="sdcard_write_csv">
        //               <value name="DATA1">
        //                   <shadow type="basic_string">
        //                       <field name="VALUE"></field>
        //                   </shadow>
        //               </value>
        //               <value name="DATA2">
        //                   <shadow type="basic_string">
        //                       <field name="VALUE"></field>
        //                   </shadow>
        //               </value>
        //               <value name="DATA3">
        //                   <shadow type="basic_string">
        //                       <field name="VALUE"></field>
        //                   </shadow>
        //               </value>
        //               <value name="DATA4">
        //                   <shadow type="basic_string">
        //                       <field name="VALUE"></field>
        //                   </shadow>
        //               </value>
        //           </block>`
        // }
    ]
};