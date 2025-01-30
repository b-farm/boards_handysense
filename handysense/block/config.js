/* eslint-disable prettier/prettier */
// let sdcard = require("./menu/config.group.sdcard");
// let time = require("./menu/config.group.time");

module.exports = {
    blocks: [
        // sdcard,
        // time,
        {
            override: true,
            name: "HS Generic",
            index: 1,
            color: "#fdd835",
            icon: "/static/icons/hslogo.png",
            blocks: [
                {
                    xml:
                        `<block type="HandySense_Setup">
                <value name="URL_HandySense">
                    <shadow type="basic_string">
                        <field name="VALUE">https://handy-sense-netpie.web.app/</field>
                    </shadow>
                </value>
            </block>`
                },
                // 'HandySense_setPin_OldPCB',
                'HandySense_setTime_Interval_Sensor',
                'HandySense_setTime_Interval_publishData',
                {
                    xml:
                        `<block type="HandySense_setPin_Relay">
                <value name="RelayPin1">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="RelayPin2">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="RelayPin3">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="RelayPin4">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
                },
                {
                    xml:
                        `<block type="HandySense_setPin_SensorError">
                <value name="SensorError1">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="SensorError2">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="SensorError3">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
                },
                // { xml: `<sep gap="32"></sep><label text="คำสั่งที่ใช้งานในฟังก์ชั่น Loop" web-class="headline"></label>` },
                {
                    xml:
                        `<block type="HandySense_Update">
                <value name="Soil_RawData">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="Light_RawData">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="Temp_RawData">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="Hum_RawData">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
                },
                //'HandySense_CalSoilSensor',
                'HandySense_statusRelay',
                //'HandySense_Set_statusRelay',
                {
                    xml:
                        `<block type="HandySense_Set_statusRelay">
                <value name="Relay_Status">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
                },
                //'HandySense_Update_StatusRelay',
                'HandySense_statusSensor',
                //'HandySense_Map',
                {
                    xml:
                        `<block type="HandySense_Map">
                <value name="input">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="in_min">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="in_max">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="out_min">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
                <value name="out_max">
                    <shadow type="math_number">
                        <field name="NUM">0</field>
                    </shadow>
                </value>
            </block>`
                },
                // { xml: `<sep gap="32"></sep><label text="LED status Wifi = 2 " web-class="headline"></label>` },
                // { xml: `<sep gap="32"></sep><label text="LED status Server = 12 " web-class="headline"></label>` },
            ]
        },
        // {
        //     override: true,
        //     name: "SensorHUB",
        //     index: 2,
        //     color: "#fdd835",
        //     icon: "/static/icons/icons8-brain-64 (3).png",
        //     blocks: [
        //         //"Set_Time",
        //         {
        //             xml:
        //                 `<block type="SetTimePeriod">
        //         <value name="hhOpen">
        //             <shadow type="math_number">
        //                 <field name="NUM">08</field>
        //             </shadow>
        //         </value>
        //         <value name="mmOpen">
        //             <shadow type="math_number">
        //                 <field name="NUM">30</field>
        //             </shadow>
        //         </value>
        //         <value name="hhClose">
        //             <shadow type="math_number">
        //                 <field name="NUM">09</field>
        //             </shadow>
        //         </value>
        //         <value name="mmClose">
        //             <shadow type="math_number">
        //                 <field name="NUM">00</field>
        //             </shadow>
        //         </value>
        //     </block>`
        //         },
        //         {
        //             xml:
        //                 `<block type="SetThreshold">
        //         <value name="input">
        //             <shadow type="math_number">
        //                 <field name="NUM">input sensor</field>
        //             </shadow>
        //         </value>
        //         <value name="margin">
        //             <shadow type="math_number">
        //                 <field name="NUM">active low/high</field>
        //             </shadow>
        //         </value>
        //         <value name="minthreshold">
        //             <shadow type="math_number">
        //                 <field name="NUM">0</field>
        //             </shadow>
        //         </value>
        //         <value name="maxthreshold">
        //             <shadow type="math_number">
        //                 <field name="NUM">0</field>
        //             </shadow>
        //         </value>
        //         <value name="RelayChannel">
        //             <shadow type="math_number">
        //                 <field name="NUM">Relay channel</field>
        //             </shadow>
        //         </value>
        //     </block>`
        //         },
        //         "dayofweek",
        //         "Activethreshold",
        //         "RelayChannel",
        //         "SetThresholdAdvance",
        //         //"handysense_ac",
        //         //"control_timer_seting",
        //         //"relay_timer",
        //         //"day_timer",
        //         //"control_temp",
        //         //"control_soil",
        //         //"delay_function",
        //         //"netpie.on_rev",
        //     ]
        // },
        // {
        //     override: true,
        //     name: "NECTEC ACE 2024",
        //     index: 2,
        //     color: "#fdd835",
        //     icon: "/static/icons/nnn-ace2024.png",
        //     blocks: [
        //     ]
        // },
        // {
        //     override: true,
        //     name: "TMECSense",
        //     index: 3,
        //     color: "#fdd835",
        //     icon: "/static/icons/Logo-TMEC-01.png",
        //     blocks: [
        //         {
        //             xml:
        //                 `<block type="Pressure_sensor">
        //                 <value name="valueMin">
        //                     <shadow type="math_number">
        //                         <field name="NUM">0</field>
        //                     </shadow>
        //                 </value>
        //                 <value name="valueMax">
        //                     <shadow type="math_number">
        //                         <field name="NUM">0</field>
        //                     </shadow>
        //                 </value>
        //                 <value name="OutMin">
        //                     <shadow type="math_number">
        //                         <field name="NUM">0</field>
        //                     </shadow>
        //                 </value>
        //                 <value name="OutMax">
        //                     <shadow type="math_number">
        //                         <field name="NUM">0</field>
        //                     </shadow>
        //                 </value>
        //             </block>`
        //         },
        //         {
        //             xml:
        //                 `<block type="TenSiO">
        //                 <value name="valueMin">
        //                     <shadow type="math_number">
        //                         <field name="NUM">0</field>
        //                     </shadow>
        //                 </value>
        //                 <value name="valueMax">
        //                     <shadow type="math_number">
        //                         <field name="NUM">0</field>
        //                     </shadow>
        //                 </value>
        //                 <value name="OutMin">
        //                     <shadow type="math_number">
        //                         <field name="NUM">0</field>
        //                     </shadow>
        //                 </value>
        //                 <value name="OutMax">
        //                     <shadow type="math_number">
        //                         <field name="NUM">0</field>
        //                     </shadow>
        //                 </value>
        //             </block>`
        //         },
        //     ]
        // },
        // {
        //     override: true,
        //     name: "Sensor",
        //     index: 3,
        //     color: "#fdd835",
        //     icon: "/static/icons/icons8_thermometer_96px.png",
        //     blocks: [
        //         {
        //             type: 'category',
        //             name: 'Analog',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 'ReadAnalog_MCP3424',
        //                 {
        //                     xml:
        //                         `<block type="ReadAnalog_from_MPC3424">
        //                         <value name="valueMin">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="valueMax">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="OutMin">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="OutMax">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                     </block>`
        //                 },
        //                 {
        //                     xml:
        //                         `<block type="AWD-Wet2Dry">
        //                         <value name="valueMin">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="valueMax">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="OutMin">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="OutMax">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                     </block>`
        //                 },
        //                 {
        //                     xml:
        //                         `<block type="SoilEC">
        //                         <value name="valueMin">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="valueMax">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="OutMin">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="OutMax">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                     </block>`
        //                 },
        //                 {
        //                     xml:
        //                         `<block type="SoilpH">
        //                         <value name="valueMin">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="valueMax">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="OutMin">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                         <value name="OutMax">
        //                             <shadow type="math_number">
        //                                 <field name="NUM">0</field>
        //                             </shadow>
        //                         </value>
        //                     </block>`
        //                 },
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             name: '4-20mA',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 'Read4_20_mA_MCP3424',
        //                 {
        //                     xml:
        //                         `<block type="Read4_20_mA_MCP3424_map">
        //         <value name="valueMin">
        //             <shadow type="math_number">
        //                 <field name="NUM">0</field>
        //             </shadow>
        //         </value>
        //         <value name="valueMax">
        //             <shadow type="math_number">
        //                 <field name="NUM">0</field>
        //             </shadow>
        //         </value>
        //         <value name="OutMin">
        //             <shadow type="math_number">
        //                 <field name="NUM">0</field>
        //             </shadow>
        //         </value>
        //         <value name="OutMax">
        //             <shadow type="math_number">
        //                 <field name="NUM">0</field>
        //             </shadow>
        //         </value>
        //     </block>`
        //                 },
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             name: 'i2C',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 "sht31_begin",
        //                 "sht31_read_init",
        //                 "sht31_read_temp",
        //                 "bh1750_begin",
        //                 "bh1750_read",
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             name: 'SPI',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 //'sht31_begin',
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             name: 'RS-485',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 'rs485_bh1750_begin',
        //                 'rs485_bh1750_read',
        //             ]
        //         },
        //     ]
        // },
        {
            override: true,
            name: "Sensor",
            index: 11,
            color: "#fdd835",
            icon: "/static/icons/icons8_thermometer_96px.png",
            blocks: [
                // {
                //     type: 'category',
                //     name: 'Analog',
                //     //index : 20,
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         'ReadAnalog_MCP3424',
                //         {
                //             xml:
                //                 `<block type="ReadAnalog_from_MPC3424">
                //                             <value name="valueMin">
                //                                 <shadow type="math_number">
                //                                     <field name="NUM">0</field>
                //                                 </shadow>
                //                             </value>
                //                             <value name="valueMax">
                //                                 <shadow type="math_number">
                //                                     <field name="NUM">0</field>
                //                                 </shadow>
                //                             </value>
                //                             <value name="OutMin">
                //                                 <shadow type="math_number">
                //                                     <field name="NUM">0</field>
                //                                 </shadow>
                //                             </value>
                //                             <value name="OutMax">
                //                                 <shadow type="math_number">
                //                                     <field name="NUM">0</field>
                //                                 </shadow>
                //                             </value>
                //                         </block>`
                //         },
                //         // {
                //         //     xml:
                //         //         `<block type="AWD-Wet2Dry">
                //         //         <value name="valueMin">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="valueMax">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="OutMin">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="OutMax">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //     </block>`
                //         // },

                //     ]
                // },

                // {
                //     type: 'category',
                //     name: 'CO2',
                //     //index : 20,
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         { xml: `<sep gap="24"></sep><label text="I2C protocol" web-class="headline"></label>` },
                //         "SCD40_begin",
                //         "SCD04_int",
                //         "SCD40_read_Co2",
                //     ]
                // },
                // {
                //     type: 'category',
                //     name: 'EC',
                //     //index : 20,
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         { xml: `<sep gap="24"></sep><label text="Analog" web-class="headline"></label>` },
                //         {
                //             xml:
                //                 `<block type="SoilEC">
                //                 <value name="valueMin">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="valueMax">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="OutMin">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="OutMax">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //             </block>`
                //         },
                //         { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                //         "rs485_NPK_begin_DT7",
                //         "rs485_ec_read_DT7",
                //         { xml: `<sep gap="24"></sep><label text="I2C protocol" web-class="headline"></label>` },
                //         "DFROBOT_EC_begin_DT7",
                //         "DFROBOT_EC_read_DT7",
                //     ]
                // },
                {
                    type: 'category',
                    name: 'Humidity',
                    //index : 20,
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "sht31_begin_rs",
                        "sht31_read_humid_rs",
                        // "sht45_begin_rs485",
                        // "sht45_read_humid_rs485",
                        { xml: `<sep gap="24"></sep><label text="I2C protocol" web-class="headline"></label>` },
                        "sht31_begin_i2c",
                        "sht31_read_init_i2c",
                        "sht31_read_humid_i2c",
                        // "sht45_begin",
                        // "sht45_read_init",
                        // "sht45_read_humid",
                        // "bht20_setup",
                        // "bht20_loop",
                        // "bht20_get_humidity",
                        // "SCD40_begin",
                        // "SCD04_int",
                        // "SCD40_read_humi",
                    ]
                },
                {
                    type: 'category',
                    name: 'Light',
                    //index : 20,
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "rs485_light_begin",
                        "rs485_Light_read",
                        { xml: `<sep gap="24"></sep><label text="I2C protocol" web-class="headline"></label>` },
                        "bh1750_begin",
                        "bh1750_read",
                        // "MAX44009_begin",
                        // "MAX44009_read",
                    ]
                },
                // {
                //     type: 'category',
                //     name: 'Magnetic',
                //     //index : 20,
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         { xml: `<sep gap="24"></sep><label text="On Handysense" web-class="headline"></label>` },
                //         "HallSensor_begin",
                //         "HallSensor_read",
                //     ]
                // },
                // {
                //     type: 'category',
                //     name: 'Nitrogen (N)',
                //     //index : 20,
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                //         "rs485_NPK_begin_DT7",
                //         "rs485_N_read_DT7",
                //     ]
                // },
                {
                    type: 'category',
                    name: 'pH',
                    //index : 20,
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        // { xml: `<sep gap="24"></sep><label text="Analog" web-class="headline"></label>` },
                        // {
                        //     xml:
                        //         `<block type="SoilpH">
                        //         <value name="valueMin">
                        //             <shadow type="math_number">
                        //                 <field name="NUM">0</field>
                        //             </shadow>
                        //         </value>
                        //         <value name="valueMax">
                        //             <shadow type="math_number">
                        //                 <field name="NUM">0</field>
                        //             </shadow>
                        //         </value>
                        //         <value name="OutMin">
                        //             <shadow type="math_number">
                        //                 <field name="NUM">0</field>
                        //             </shadow>
                        //         </value>
                        //         <value name="OutMax">
                        //             <shadow type="math_number">
                        //                 <field name="NUM">0</field>
                        //             </shadow>
                        //         </value>
                        //     </block>`
                        // },
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "rs485_PH_begin",
                        "rs485_PH_read",
                        // { xml: `<sep gap="24"></sep><label text="I2C protocol" web-class="headline"></label>` },
                        // "DFROBOT_PH_initial",
                        // "DFROBOT_PH_initial_cal",
                        // "DFROBOT_PH_read",
                        // "rs485_NPK_begin",
                        // "rs485_PH_read",
                    ]
                },
                // {
                //     type: 'category',
                //     name: 'Phosphorus (P)',
                //     //index : 20,
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                //         "rs485_NPK_begin_DT7",
                //         "rs485_P_read_DT7",
                //     ]
                // },
                // {
                //     type: 'category',
                //     name: 'Potassium (K)',
                //     //index : 20,
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                //         "rs485_NPK_begin_DT7",
                //         "rs485_K_read_DT7",
                //     ]
                // },
                // {
                //     type: 'category',
                //     name: 'Pressure',
                //     //index : 20,
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         { xml: `<sep gap="24"></sep><label text="Analog" web-class="headline"></label>` },
                //         {
                //             xml:
                //                 `<block type="Pressure_sensor">
                //                         <value name="valueMin">
                //                             <shadow type="math_number">
                //                                 <field name="NUM">0</field>
                //                             </shadow>
                //                         </value>
                //                         <value name="valueMax">
                //                             <shadow type="math_number">
                //                                 <field name="NUM">0</field>
                //                             </shadow>
                //                         </value>
                //                         <value name="OutMin">
                //                             <shadow type="math_number">
                //                                 <field name="NUM">0</field>
                //                             </shadow>
                //                         </value>
                //                         <value name="OutMax">
                //                             <shadow type="math_number">
                //                                 <field name="NUM">0</field>
                //                             </shadow>
                //                         </value>
                //                     </block>`
                //         },
                //         {
                //             xml:
                //                 `<block type="TenSiO">
                //                         <value name="valueMin">
                //                             <shadow type="math_number">
                //                                 <field name="NUM">0</field>
                //                             </shadow>
                //                         </value>
                //                         <value name="valueMax">
                //                             <shadow type="math_number">
                //                                 <field name="NUM">0</field>
                //                             </shadow>
                //                         </value>
                //                         <value name="OutMin">
                //                             <shadow type="math_number">
                //                                 <field name="NUM">0</field>
                //                             </shadow>
                //                         </value>
                //                         <value name="OutMax">
                //                             <shadow type="math_number">
                //                                 <field name="NUM">0</field>
                //                             </shadow>
                //                         </value>
                //                     </block>`
                //         },
                //     ]
                // },
                // {
                //     type: 'category',
                //     name: 'Soil',
                //     //index : 20,
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         // "soil_begin",
                //         // "soil_read",
                //         { xml: `<sep gap="24"></sep><label text="Analog" web-class="headline"></label>` },
                //         {
                //             xml:
                //                 `<block type="SoilEC">
                //                 <value name="valueMin">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="valueMax">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="OutMin">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="OutMax">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //             </block>`
                //         },
                //         {
                //             xml:
                //                 `<block type="SoilpH">
                //                 <value name="valueMin">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="valueMax">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="OutMin">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="OutMax">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //             </block>`
                //         },
                //         { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                //         "rs485_NPK_begin_DT7",
                //         "rs485_mois_read_DT7",
                //         "rs485_temps_read_DT7",
                //         "rs485_ec_read_DT7",
                //         "rs485_PH_read_DT7",
                //         "rs485_N_read_DT7",
                //         "rs485_P_read_DT7",
                //         "rs485_K_read_DT7",
                //     ]
                // },
                {
                    type: 'category',
                    name: 'Temperature',
                    //index : 20,
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "sht31_begin_rs",
                        "sht31_read_temp_rs",
                        // "sht45_begin_rs485",
                        // "sht45_read_temp_rs485",
                        { xml: `<sep gap="24"></sep><label text="I2C protocol" web-class="headline"></label>` },
                        "sht31_begin_i2c",
                        "sht31_read_init_i2c",
                        "sht31_read_temp_i2c",
                        // "sht45_begin",
                        // "sht45_read_init",
                        // "sht45_read_temp",
                        // "bht20_setup",
                        // "bht20_loop",
                        // "bht20_get_temperature",
                        // "MLX90640_initial",
                        // "MLX90640_initial_config",
                        // "MLX90640_read",
                        // "MLX90640_read2",
                        // "SCD40_begin",
                        // "SCD04_int",
                        // "SCD40_read_temp",
                        // "rs485_NPK_begin",
                        // "rs485_temps_read",
                        // { xml: `<sep gap="24"></sep><label text="Other protocol" web-class="headline"></label>` },
                        // "NTC_initial",
                        // "NTC_read",
                        // "DS18B20_initial",
                        // "DS18B20_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'Weight',
                    //index : 20,
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "rs485_3kg_begin",
                        "rs485_3kg_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'Wind',
                    //index : 20,
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "winddirec3_begin_rs485",
                        "winddirec3_read_rs485",
                    ]
                },
                // {
                //     type: 'category',
                //     name: 'Other',
                //     //index : 20,
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         { xml: `<sep gap="24"></sep><label text="Read 4-20mA" web-class="headline"></label>` },
                //         'Read4_20_mA_MCP3424',
                //         {
                //             xml:
                //                 `<block type="Read4_20_mA_MCP3424_map">
                //                 <value name="valueMin">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="valueMax">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="OutMin">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="OutMax">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //             </block>`
                //         },
                //         { xml: `<sep gap="24"></sep><label text="Read Analog" web-class="headline"></label>` },
                //         'ReadAnalog_MCP3424',
                //         {
                //             xml:
                //                 `<block type="ReadAnalog_from_MPC3424">
                //                 <value name="valueMin">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="valueMax">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="OutMin">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //                 <value name="OutMax">
                //                     <shadow type="math_number">
                //                         <field name="NUM">0</field>
                //                     </shadow>
                //                 </value>
                //             </block>`
                //         },
                //         // {
                //         //     xml:
                //         //         `<block type="AWD-Wet2Dry">
                //         //         <value name="valueMin">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="valueMax">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="OutMin">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="OutMax">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //     </block>`
                //         // },
                //         // {
                //         //     xml:
                //         //         `<block type="SoilEC">
                //         //         <value name="valueMin">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="valueMax">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="OutMin">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="OutMax">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //     </block>`
                //         // },
                //         // {
                //         //     xml:
                //         //         `<block type="SoilpH">
                //         //         <value name="valueMin">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="valueMax">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="OutMin">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //         <value name="OutMax">
                //         //             <shadow type="math_number">
                //         //                 <field name="NUM">0</field>
                //         //             </shadow>
                //         //         </value>
                //         //     </block>`
                //         // },
                //     ]
                // },
            ]
        },
        {
            override: true,
            name: "Analog",
            index: 12,
            color: "#fdd835",
            icon: "/static/icons/analog.png",
            blocks: [
                { xml: `<sep gap="24"></sep><label text="Read 4-20mA" web-class="headline"></label>` },
                'Read4_20_mA_MCP3424',
                {
                    xml:
                        `<block type="Read4_20_mA_MCP3424_map">
                                <value name="valueMin">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="valueMax">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="OutMin">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="OutMax">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                            </block>`
                },
                { xml: `<sep gap="24"></sep><label text="Read Analog" web-class="headline"></label>` },
                'ReadAnalog_MCP3424',
                {
                    xml:
                        `<block type="ReadAnalog_from_MPC3424">
                                <value name="valueMin">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="valueMax">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="OutMin">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                                <value name="OutMax">
                                    <shadow type="math_number">
                                        <field name="NUM">0</field>
                                    </shadow>
                                </value>
                            </block>`
                },
            ]
        },
        // {
        //     override: true,
        //     name: "Switch",
        //     index: 21,
        //     color: "#fdd835",
        //     icon: "/static/icons/sw12x12.png",
        //     blocks: [
        //         "sw_on_pressed",
        //         "sw_on_release",
        //         "sw_pressed",
        //         "sw_release",
        //     ]
        // },
        // {
        //     override: true,
        //     name: "LED",
        //     index: 22,
        //     color: "#fdd835",
        //     icon: "/static/icons/led.png",
        //     blocks: [
        //         // "led_begin",
        //         "led_control_on",
        //         "led_control_off",
        //     ]
        // },
        // {
        //     override: true,
        //     name: "Relay",
        //     index: 23,
        //     color: "#fdd835",
        //     icon: "/static/icons/relay.png",
        //     blocks: [
        //         "relay_on",
        //         "relay_off",
        //     ]
        // },
        {
            override: true,
            name: "Electronics",
            index: 23,
            color: "#fdd835",
            icon: "/static/icons/sw12x12.png",
            blocks: [
                { xml: `<sep gap="24"></sep><label text="Switch" web-class="headline"></label>` },
                "sw_on_pressed",
                "sw_on_release",
                "sw_pressed",
                "sw_release",
                { xml: `<sep gap="24"></sep><label text="LED" web-class="headline"></label>` },
                "led_control_on",
                "led_control_off",
                { xml: `<sep gap="24"></sep><label text="Relay" web-class="headline"></label>` },
                "relay_on",
                "relay_off",
            ]
        },

        // {
        //     override: true,
        //     name: "Music",
        //     index: 7,
        //     color: "#fdd835",
        //     icon: "/static/icons/icons8_musical_notes_96px.png",
        //     blocks: [

        //     ]
        // },

        // {
        //     override: true,
        //     name: "Calculation",
        //     index: 33,
        //     color: "#fdd835",
        //     icon: "/static/icons/nnn-math.png",
        //     blocks: [
        //         // {
        //         //     type: 'category',
        //         //     name: 'Bee',
        //         //     //index : 20,
        //         //     icon: '/static/icons/icons8_text_color_96px.png',
        //         //     blocks: [
        //         //         "HandySense_bee_Setup",
        //         //         "HandySense_bee_Update",
        //         //     ]
        //         // },
        //         {
        //             type: 'category',
        //             name: 'Vapor Pressure Deficits (VPD)',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 "HandySense_VPD_setup",
        //                 "HandySense_VPD_Air",
        //                 "HandySense_VPD_Result",
        //                 "HandySense_VPD_heatindex_setup",
        //                 "HandySense_VPD_heatindex",
        //                 "HandySense_VPD_wbgt",
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             name: 'ET0',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 "et0",
        //             ]
        //         },
        //     ]
        // },
        // {
        //     override: true,
        //     name: "Control",
        //     index: 7,
        //     color: "#fdd835",
        //     icon: "/static/icons/nnn-control.png",
        //     blocks: [
        //         {
        //             type: 'category',
        //             name: 'Encoder',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 "Encoder1_begin",
        //                 "Encoder2_begin",
        //                 "Encoder1_read",
        //                 "Encoder2_read",
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             name: 'Heat',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 "hc_variable_set",
        //                 "hc_variable_get",
        //                 "initialization",
        //                 "mode_value",
        //                 "set_off_mode",
        //                 "set_fix_mode_dummy",
        //                 "set_fix_mode_value",
        //                 "set_saturation_mode_dummy",
        //                 "set_saturation_mode_value",
        //                 "set_pid_mode_dummy",
        //                 "set_pid_mode_value",
        //                 "read_status",
        //                 "retrieve_running_mode",
        //                 "retrieve_running_percent",
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             name: 'Motor',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 "motor1_setup",
        //                 "Motor1_read_write",
        //                 "motor2_setup",
        //                 "Motor2_read_write",
        //             ]
        //         },
        //         {
        //             type: 'category',
        //             name: 'PID',
        //             //index : 20,
        //             icon: '/static/icons/icons8_text_color_96px.png',
        //             blocks: [
        //                 "PID1_setup",
        //                 "PID1_read_write",
        //                 "PID2_setup",
        //                 "PID2_read_write",
        //             ]
        //         },
        //     ]
        // },
        // {
        //     override: true,
        //     name: "NETPIE",
        //     index: 8,
        //     color: "#fdd835",
        //     icon: "/static/icons/netpie-logo.png",
        //     blocks: [
        //         // "WIFI_begin",
        //         // "WIFI_begin_2",
        //         "WIFI_begin_3",
        //         "netpie_begin",
        //         "netpie_connect",
        //         "callback_netpie",
        //         "callback_setup",
        //         // "callback_topic",
        //         "netpie_topic",
        //         "pub_topic",
        //         "payload",
        //         "text",
        //     ]
        // },
        {
            override: true,
            name: "Cloud",
            index: 54,
            color: "#fdd835",
            icon: "/static/icons/nnn-cloud.png",
            blocks: [
                {
                    type: 'category',
                    name: 'NETPIE',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        // { xml: `<sep gap="24"></sep><label text="NETPIE" web-class="headline"></label>` },
                        "WIFI_begin_2",
                        "netpie_begin",
                        "netpie_connect",
                        "callback_netpie",
                        "callback_setup",
                        "netpie_topic",
                        "pub_topic",
                        "payload",
                        "text",
                    ]
                },
                {
                    type: 'category',
                    name: 'MAGELLAN',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        // { xml: `<sep gap="24"></sep><label text="MAGELLAN" web-class="headline"></label>` },
                        "magellan_begin",
                        "magellan_begin3",
                        "magellan_reconnect",
                        "magellan_isconnected",
                        // "wifi_magellan_begin",
                        "magellan_interval",
                        "magellan_interval2",
                        "callback_magellan",
                        "extract_value",
                        "conv_val",
                        "condition_key",
                        "condition_value",
                        "magellan_condition_callback",
                        "magellan_request",
                        "magellan_sensor_add",
                        "magellan_sensor_add_txt",
                        "magellan_sensor_report",
                        "magellan_client_config_add",
                        "magellan_client_config_add_txt",
                        "magellan_client_config_send",
                    ]
                },
                {
                    type: 'category',
                    name: 'Thingspeak',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        // { xml: `<sep gap="24"></sep><label text="ThingSpeak" web-class="headline"></label>` },
                        "Thingspeak_begin",
                        "Thingspeak_connectWifi",
                        "Thingspeak_Finish",
                        "Thingspeak_set_field_value",
                    ]
                },
            ]
        },
        {
            override: true,
            name: "LINE",
            index: 55,
            color: "#fdd835",
            icon: "/static/icons/lineee.png",
            blocks: [
                {
                    xml:
                        `<block type="line_set_token">
                        <value name="token">
                            <shadow type="basic_string">
                                <field name="VALUE">PQaQAcP6SpOPRBfqhpKa1iyhk</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml:
                        `<block type="line_notify">
                        <value name="msg">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>
                    </block>`
                },
                "line_sticker",
                {
                    xml:
                        `<block type="line_sticker_msg">
                        <value name="msg">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml:
                        `<block type="line_notify_picture">
                        <value name="url">
                            <shadow type="basic_string">
                                <field name="VALUE">https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml:
                        `<block type="line_notify_picture_msg">
                        <value name="msg">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>
                        <value name="url">
                            <shadow type="basic_string">
                                <field name="VALUE">https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg</field>
                            </shadow>
                        </value>
                    </block>`
                },
            ]
        },
        // {
        //     override: true,
        //     name: "MAGELLAN",
        //     index: 9,
        //     color: "#fdd835",
        //     // icon: "/static/icons/icons8_electronics_96px.png",
        //     icon: "/static/icons/icon-magellan.png",
        //     blocks: [
        //         "magellan_begin",
        //         // "magellan_begin2",
        //         "magellan_begin3",
        //         "magellan_reconnect",
        //         "magellan_isconnected",
        //         // "magellan_begin4",
        //         // "magellan_begin4_ota",
        //         // "endpoint_maker",
        //         // "endpoint_enterprise",
        //         "wifi_magellan_begin",
        //         "magellan_interval",
        //         "magellan_interval2",
        //         // "callback_control",
        //         // "callback_report",
        //         // "callback_serverconfig",
        //         "callback_magellan",
        //         "extract_value",
        //         "conv_val",
        //         "condition_key",
        //         "condition_value",
        //         "magellan_condition_callback",
        //         "magellan_request",
        //         "magellan_sensor_add",
        //         "magellan_sensor_add_txt",
        //         "magellan_sensor_report",
        //         "magellan_client_config_add",
        //         "magellan_client_config_add_txt",
        //         "magellan_client_config_send",

        //         // "magellan_check_update_ota",
        //         // "magellan_get_ota_auto",
        //         // "magellan_set_ota_auto",
        //         // "magellan_exec_ota",
        //         // "subscribes_group",
        //         // "magellan_subscribe_control",
        //         // "magellan_subscribe_report",
        //         // "magellan_subscribe_server_config",
        //         // "magellan_subscribe",
        //     ]
        // },
    ],
};
