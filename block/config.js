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
            name: "Sensor",
            index: 11,
            color: "#fdd835",
            icon: "/static/icons/icons8_thermometer_96px.png",
            blocks: [
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
                        "winddirec3_begin_rs485",
                        "winddirec3_read_rs485",
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
            name : 'GPIO',
            color : '230',
            index : 24,
            icon : '/static/icons/icons8_electronics_96px.png',
            blocks : [
                {
                    xml : 
                    `<block type="io_setpin">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">25</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_digital_read">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">32</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_digital_write">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">33</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },                
                {
                    xml : 
                    `<block type="io_analog_read">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">36</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml :
                    `<block type="io_analog_write">
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">128</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_pwm_write">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">36</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">128</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="io_pulse_in">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">36</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'io_shift_in',
                {
                    xml : 
                    `<block type="io_shift_out">
                        <value name="data">
                            <shadow type="math_number">
                                <field name="NUM">127</field>
                            </shadow>
                        </value>
                    </block>`
                }
            ]
        },        
        {
            name : 'Variables',
            index : 31,
            color : '230',
            icon : '/static/icons/icons8_variable_96px.png',
            custom : 'VARIABLE'
        },
        {
            name : 'Math',
            color : '230',
            index : 32,
            icon : '/static/icons/calculator.png',
            blocks : [
                'math_number',
                {
                    xml : 
                    `<block type="math_arithmetic">
                        <value name="A">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="B">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="math_variables_set">
                        <value name="VALUE">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'math_variables_get',
                {
                    xml : 
                    `<block type="math_pow">
                        <value name="NUM1">
                            <shadow type="math_number">
                                <field name="NUM">2</field>
                            </shadow>
                        </value>
                        <value name="NUM2">
                            <shadow type="math_number">
                                <field name="NUM">3</field>
                            </shadow>
                        </value>
                    </block>`
                },                
                /*'math_sqrt',*/
                {
                    xml : 
                    `<block type="math_single">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">9</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="math_trig">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">90</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml : 
                    `<block type="math_round">
                        <value name="NUM">
                            <shadow type="math_number">
                                <field name="NUM">1.2</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'math_random_int',
                {
                    xml : 
                    `<block type="math_number_property">
                        <value name="NUMBER_TO_CHECK">
                            <shadow type="math_number">
                                <field name="NUM">5</field>
                            </shadow>
                        </value>
                    </block>`
                },
            ]
        },
        {
            name : 'Text',
            color : '230',
            index : 33,
            icon : '/static/icons/texttt.png',
            blocks : [
                'basic_string',                        
                { xml : 
                    `<block type="text_length">
                        <value name="VALUE">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>                                    
                    </block>`
                },
                'text_join',                        
                { xml : 
                    `<block type="text_append">
                        <value name="TEXT">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>                                    
                    </block>`
                },
                { xml : 
                        `<block type="text_isEmpty">
                            <value name="VALUE">
                                <shadow type="basic_string">
                                    <field name="VALUE">Hello B-FARM!</field>
                                </shadow>
                            </value>                                    
                        </block>`
                },
                { xml : 
                    `<block type="text_indexOf">
                        <value name="VALUE">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>                                    
                    </block>`
                },
                { xml : 
                    `<block type="text_charAt">
                        <value name="VALUE">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>                                    
                    </block>`
                },
                { xml : 
                    `<block type="text_getSubstring">
                        <value name="STRING">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>                                    
                    </block>`
                },
                { xml : 
                    `<block type="text_changeCase">
                        <value name="TEXT">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>                                    
                    </block>`
                },
                { xml : 
                    `<block type="text_trim">
                        <value name="TEXT">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>                                    
                    </block>`
                },
                { xml : 
                    `<block type="text_replace">
                        <value name="TEXT">
                            <shadow type="basic_string">
                                <field name="VALUE">Hello B-FARM!</field>
                            </shadow>
                        </value>                                    
                    </block>`
                },
            ]
        },
        {
            name : 'Functions',
            color : '230',
            index : 34,
            icon : '/static/icons/functionnn.png',
            custom : 'PROCEDURE'
        },
        {
            name : 'Logic',
            color : '230',
            index : 35,
            icon : '/static/icons/logiccc.png',
            blocks : [
                'controls_if',
                'logic_compare',
                'logic_operation',
                'logic_negate',
                'logic_boolean',
            ]
        },
        {
            name : 'Loops',
            color : '230',
            index : 36,
            icon : '/static/icons/icons8_repeat_96px.png',
            blocks : [
                'basic_forever',
                'controls_whileUntil',
                {
                    xml : 
                    `<block type="controls_for">
                        <value name="FROM">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="TO">
                            <shadow type="math_number">
                                <field name="NUM">10</field>
                            </shadow>
                        </value>
                        <value name="BY">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                'controls_flow_statements',
            ]
        },
        {
            name: "Task",
            color : '230',
            index : 37,
            icon: "/static/icons/taskkk.png",
            blocks: [
                { xml: "<label text=\"Custom start\" web-class=\"headline\"></label>" },
                {
                    xml:
                      `<block type="task_io_interrupt">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml: `<block type="task_timer_interrupt">
                            <value name="delay">
                                <shadow type="math_number">
                                    <field name="NUM">500</field>
                                </shadow>
                            </value>
                       </block>`
                },
                {
                    xml: `<block type="task_timer_interrupt_once">
                                <value name="delay">
                                    <shadow type="math_number">
                                        <field name="NUM">500</field>
                                    </shadow>
                                </value>
                           </block>`
                },
                "task_task",
                {
                    xml: `<sep gap="32"></sep><label text="Auto start" web-class="headline"></label>`
                },
                {
                    xml:
                      `<block type="task_io_interrupt_ext">
                        <value name="pin">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml: `<block type="task_timer_interrupt_ext">
                            <value name="delay">
                                <shadow type="math_number">
                                    <field name="NUM">500</field>
                                </shadow>
                            </value>
                       </block>`
                },
                {
                    xml: `<block type="task_timer_interrupt_once_ext">
                                <value name="delay">
                                    <shadow type="math_number">
                                        <field name="NUM">500</field>
                                    </shadow>
                                </value>
                           </block>`
                },
                "task_task_ext",
                {
                    xml: `<sep gap="32"></sep><label text="Stopper" web-class="headline"></label>`
                },
                "task_detach_timer",
                {
                    xml: `<block type="task_detach_gpio">
                                <value name="pin">
                                    <shadow type="math_number">
                                        <field name="NUM">1</field>
                                    </shadow>
                                </value>
                           </block>`
                }
            ]
        },
        {
            name : 'Time',
            color : '230',
            index : 41,
            icon : '/static/icons/icons8_Story_Time_96px.png',
            blocks : [
                {
                    xml: `<sep gap="32"></sep><label text="Delay time" web-class="headline"></label>`,
                },
                {
                    xml : 
                    `<block type="time_delay">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml :
                        `<block type="time_delay_microsec">
                        <value name="delay">
                            <shadow type="math_number">
                                <field name="NUM">1000</field>
                            </shadow>
                        </value>
                    </block>`
                },
                {
                    xml: `<sep gap="32"></sep><label text="Internet time In" web-class="headline"></label>`,
                },
                'time_sync',
                'time_get_year',
                'time_get_month',
                'time_get_day',
                'time_get_day_of_week',
                'time_get_hour',
                'time_get_minute',
                'time_get_second',
                'time_millis',
                'time_micros',
                {
                    xml: `<sep gap="32"></sep><label text="Local time In" web-class="headline"></label>`,
                },
                "setup_hardware_RTC2",
                "print_rtc_time",
                "update_system_time_with_rtc2",
                "get_rtc_year",
                "get_rtc_month",
                "get_rtc_day",
                "get_rtc_wday",
                "get_rtc_hour",
                "get_rtc_minute",
                "get_rtc_second",
                "set_rtc_time2",
                "set_system_time2",
            ]
        },
        {
            type: 'category',
            name: 'CronJob',
            color: '#fdd835',
            index: 42,
            icon: '/static/icons/schedule.png',
            blocks: [
                'CJOB_begin',
                'CJOB_runnow',
                'CJOB_addschedule',
                'CJOB_addschedule_every_seconds',
                'CJOB_addschedule_every_minutes',
                'CJOB_addschedule_every_hours',
                'CJOB_add_schedule_time',
                'CJOB_add_schedule_datetime',
                'CJOB_add_schedule_weekday',
                'CJOB_delete_schedule',
                'CJOB_enable_schedule',
                'CJOB_disable_schedule',
            ]
        },
        {
            type : 'category',
            name : 'WiFi',
            index : 51,
            color: "#fdd835",
            icon: "/static/icons/wifiii.png",
            blocks : [
                'wifi_connect',    
                'wifi_ap',
                'wifi_start_server',
                'wifi_server_on',
                {
                    xml : 
                        `<block type="wifi_server_send">
                            <value name="text">
                                <shadow type="basic_string">
                                    <field name="VALUE">Hello B-FARM!</field>
                                </shadow>
                            </value>
                        </block>`
                },
                
                'wifi_get_ip_addr',
                'wifi_get_ap_ip_addr',
                'wifi_get_arg'
            ]
        },
        {
            type : 'category',
            name : 'Bluetooth',
            index : 52,
            color: "#fdd835",
            icon: "/static/icons/bttt.png",
            blocks : [
                'bt_start',
                {
                    xml : 
                        `<block type="bt_send_string">
                            <value name="text">
                                <shadow type="basic_string">
                                    <field name="VALUE">Hello B-FARM!</field>
                                </shadow>
                            </value>
                        </block>`
                },
                'bt_on_receive',
                'bt_read_data',
                'bt_read_line'
            ]
        },
        {
            type : 'category',
            name : 'Serial',
            index : 53,
            color: "#fdd835",
            icon: "/static/icons/serialll.png",
            blocks : [
                'serial_usb_init',
                'serial_hardware_init',
                'serial_available',
                {
                    xml : 
                        `<block type="serial_write_data">
                            <value name="text">
                                <shadow type="basic_string">
                                    <field name="VALUE">Hello B-FARM!</field>
                                </shadow>
                            </value>
                        </block>`
                },
                'serial_write_newline',                        
                'serial_read_line',
                'serial_read_until',                        
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
