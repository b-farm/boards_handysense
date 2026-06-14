/* eslint-disable prettier/prettier */
module.exports = {
    blocks: [
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
                'HandySense_statusRelay',
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
                'HandySense_statusSensor',
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
                'HandySense_brownout',
            ]
        },
        {
            override: true,
            name: "Solution",
            index: 11,
            color: "#fdd835",
            icon: "/static/icons/solutionnnn.png",
            blocks: [
                {
                    type: 'category',
                    name: 'Alternate Water Drying',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "HandySense_awdv1",
                    ]
                },
                {
                    type: 'category',
                    name: 'Evapotranspiration',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "HandySense_et0v1_begin",
                        "HandySense_et0v1_et0",
                        "HandySense_et0v1_etc",
                    ]
                },
                {
                    type: 'category',
                    name: 'Fertilizer Control',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "Initial_Fertilizer",
                        "Load_preferences",
                        "Clear_preferences",
                        "Print_preferences",
                        "control_EC",
                        "control_pH",
                        "Read_pH",
                        "Read_temp",
                        "Read_EC",
                        "set_preferences",
                        "set_single_preferences",
                        "read_single_preferences",
                    ]
                }
            ]
        },
        {
            override: true,
            name: "Sensor",
            index: 11,
            color: "#fdd835",
            icon: "/static/icons/icons8_thermometer_96px.png",
            blocks: [
                {
                    type: 'category',
                    name: 'Carbon dioxide',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "Weather_HTCo2PLx_begin_rs485",
                        "Weather_HTCo2PLx_read_co2_rs485",
                    ]
                },
                {
                    type: 'category',
                    name: 'Humidity',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "sht31_begin_rs",
                        "sht31_read_humid_rs",
                        { xml: `<sep gap="24"></sep><label text="I2C protocol" web-class="headline"></label>` },
                        "sht31_begin_i2c",
                        "sht31_read_init_i2c",
                        "sht31_read_humid_i2c",
                    ]
                },
                {
                    type: 'category',
                    name: 'Light',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "rs485_light_begin",
                        "rs485_Light_read",
                        { xml: `<sep gap="24"></sep><label text="I2C protocol" web-class="headline"></label>` },
                        "bh1750_begin",
                        "bh1750_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'pH',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "rs485_PH_begin",
                        "rs485_PH_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'Pressure',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "Weather_HTCo2PLx_begin_rs485",
                        "Weather_HTCo2PLx_read_pressure_rs485",
                    ]
                },
                {
                    type: 'category',
                    name: 'Rain',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "Rain_begin_rs485",
                        "Rain_read_rs485",
                    ]
                },
                {
                    type: 'category',
                    name: 'Temperature',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        "sht31_begin_rs",
                        "sht31_read_temp_rs",
                        { xml: `<sep gap="24"></sep><label text="I2C protocol" web-class="headline"></label>` },
                        "sht31_begin_i2c",
                        "sht31_read_init_i2c",
                        "sht31_read_temp_i2c",
                    ]
                },
                {
                    type: 'category',
                    name: 'Weight',
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
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        { xml: `<sep gap="24"></sep><label text="MODBUS protocol" web-class="headline"></label>` },
                        // "winddirec3_begin_rs485",
                        // "winddirec3_read_rs485",
                        "Wind_begin_rs485",
                        "Wind_read_rs485",
                        "Wind_speed_begin_rs485",
                        "Wind_speed_read_rs485",
                    ]
                },
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
                        // "WIFI_begin_2",
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
                        "magellan_begin",
                        "magellan_begin3",
                        "magellan_reconnect",
                        "magellan_isconnected",
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
            name: "Plugins Official",
            index: 65,
            color: "#fdd835",
            icon: "/static/icons/nnn-control.png",
            blocks: [
                {
                    type: 'category',
                    name: '7in1 Soil Sensor',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "7in1soilMuti_rs485_begin",
                        "7in1soilMuti_rs485_mois_read",
                        "7in1soilMuti_rs485_temps_read",
                        "7in1soilMuti_rs485_ec_read",
                        "7in1soilMuti_rs485_PH_read",
                        "7in1soilMuti_rs485_N_read",
                        "7in1soilMuti_rs485_P_read",
                        "7in1soilMuti_rs485_K_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'Air Velocity SM3789',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "AirVelocity_SM3789_begin",
                        "AirVelocity_SM3789_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'ANS RS485',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "rs485_ANS_begin",
                        "rs485_ANS_ammonia_read",
                        "rs485_ANS_pH_read",
                        "rs485_ANS_temp_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'Lux120k RS485',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "rs485_lux120k_begin",
                        "rs485_lux120k_read",
                    ]
                },
                // {
                //     type: 'category',
                //     name: 'SEN55',
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         "I2C_SEN55_begin",
                //         "I2C_SEN55_read",
                //         "I2C_SEN55_pm1p0_read",
                //         "I2C_SEN55_pm2p5_read",
                //         "I2C_SEN55_pm4p0_read",
                //         "I2C_SEN55_pm10p0_read",
                //         "I2C_SEN55_temp_read",
                //         "I2C_SEN55_humid_read",
                //         "I2C_SEN55_voc_read",
                //         "I2C_SEN55_nox_read",
                //     ]
                // }
                {
                    type: 'category',
                    name: 'Soil Temperature RS485',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "rs485_soiltMuti_begin",
                        "rs485_soiltMuti_soilmoistRead",
                        "rs485_soiltMuti_soiltempRead",
                    ]
                },
                {
                    type: 'category',
                    name: 'TMEC Sensor',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "ReadAnalog_Tensiometer",
                        "ReadAnalog_Pressure",
                        "ReadAnalog_Diff_Pressure",
                        "ReadAnalog_Water_Level_Pressure",
                        "ReadAnalog_Light",
                        "ReadAnalog_RTDandHeater",
                    ]
                },
                {
                    type: 'category',
                    name: 'Nitrate-ISFET',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "nitrate_isfet_rs485_begin",
                        "nitrate_isfet_rs485_readholding",
                        "nitrate_isfet_rs485_vout_read",
                        "nitrate_isfet_rs485_vout_temp_read",
                        "nitrate_isfet_rs485_sample_value_read",
                        "nitrate_isfet_rs485_temperature_read",
                        "nitrate_isfet_rs485_error_read",
                        "nitrate_isfet_rs485_r_quare_read",
                        "nitrate_isfet_rs485_sensitivity_read",
                        "nitrate_isfet_rs485_STD1_50ppm_read",
                        "nitrate_isfet_rs485_STD2_100ppm_read",
                        "nitrate_isfet_rs485_STD3_300ppm_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'Tensio-RS485',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "TMEC_Tensio_Rs485_begin",
                        "TMEC_Tensio_Rs485_riR",
                        "TMEC_Tensio_Rs485_temp_read",
                        "TMEC_Tensio_Rs485_humid_read",
                        "TMEC_Tensio_Rs485_light_read",
                        "TMEC_Tensio_Rs485_volt_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'Tubular Soil Sensor',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "TubularSoil_begin",
                        "TubularSoilMois_10cm_read",
                        "TubularSoilTemp_10cm_read",
                        "TubularSoilMois_20cm_read",
                        "TubularSoilTemp_20cm_read",
                        "TubularSoilMois_30cm_read",
                        "TubularSoilTemp_30cm_read",
                        "TubularSoilMois_40cm_read",
                        "TubularSoilTemp_40cm_read",
                        "TubularSoilMois_50cm_read",
                        "TubularSoilTemp_50cm_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'Turbidity XM3318B',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "Turbidity_XM3318B_begin",
                        "Turbidity_XM8518B_readHoldingRegisters",
                        "Turbidity_XM3318B_read",
                    ]
                },
                // {
                //     type: 'category',
                //     name: 'Turbidity XM8518',
                //     icon: '/static/icons/icons8_text_color_96px.png',
                //     blocks: [
                //         "Turbidity_XM8518_begin",
                //         "Turbidity_XM8518_readHoldingRegisters",
                //         "Turbidity_XM8518_read",
                //     ]
                // }
                {
                    type: 'category',
                    name: 'Ultrasonic RS485',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "rs485_Ultrasonic_begin",
                        "rs485_Ultrasonic_readholdingregisters",
                        "rs485_Ultrasonic_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'Water Quality Sensor',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "WQ_rs485_Water_Level_begin",
                        "WQ_rs485_Water_Level_readholding",
                        "WQ_rs485_Water_Level_read",
                        "WQ_rs485_Water_temp_read",
                        "WQ_rs485_pH_begin",
                        "WQ_rs485_pH_readholding",
                        "WQ_rs485_pH_read",
                        "WQ_rs485_DO_begin",
                        "WQ_rs485_DO_readholding",
                        "WQ_rs485_DO_read",
                        "WQ_rs485_DO_temp_read",
                        "WQ_rs485_EC_begin",
                        "WQ_rs485_EC_readholding",
                        "WQ_rs485_EC_read",
                        "rs485_ANS_begin",
                        "rs485_ANS_readholding",
                        "rs485_ANS_ammonia_read",
                        "rs485_ANS_pH_read",
                        "rs485_ANS_temp_read",
                    ]
                },
                {
                    type: 'category',
                    name: 'Weather Sensor',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "WTs_rs485_begin",
                        "WTs_rs485_readholding",
                        "WTs_rs485_humidity",
                        "WTs_rs485_temperature",
                        "WTs_rs485_noise",
                        "WTs_rs485_co2",
                        "WTs_rs485_pressure",
                        "WTs_rs485_lux",
                    ]
                },
                {
                    type: 'category',
                    name: 'Wifi Manager',
                    icon: '/static/icons/icons8_text_color_96px.png',
                    blocks: [
                        "WiFi_Manager_begin",
                    ]
                }
            ]
        },
    ],
};
