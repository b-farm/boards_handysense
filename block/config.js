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
            icon: "/static/icons/aiiii.png",
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
    ],
};
