/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
  'use strict';

  Blockly.JavaScript['magellan_begin'] = function (block) {
    var text_mqtt_host = block.getFieldValue("MQTT_HOST");
    var text_mqtt_username = block.getFieldValue("MQTT_THING_IDENT");
    var text_mqtt_password = block.getFieldValue("MQTT_THING_SECRET");
    // var dropdown_client_buffer = block.getFieldValue('MQTT_clientBuffer');
    // var text_mqtt_port = block.getFieldValue("MQTT_PORT");
    // var code = `
    //         #EXTINC #include <Arduino.h> #END
    //         #EXTINC #include <MAGELLAN_MQTT.h> //VERSION 1.0.0 #END

    //         #VARIABLE
    //         WiFiClient WiFi_client;
    //         MAGELLAN_MQTT magel(WiFi_client);
	  //         #END

    //         #FUNCTION
    //         String thingIdentifier = "${text_mqtt_username}";
    //         String thingSecret = "${text_mqtt_password}";
    //         #END
            
    //         setting.endpoint = "${text_mqtt_host}";
    //         setting.ThingIdentifier = thingIdentifier;
    //         setting.ThingSecret = thingSecret;
    //         setting.ThingSecret = thingSecret;
    //         setting.clientBufferSize = defaultOTABuffer;
    //         magel.begin(setting); 
            
    //         #LOOP_EXT_CODE
    //         magel.loop();
    //         magel.subscribes([](){
    //            magel.subscribe.serverConfig(PLAINTEXT);
    //            magel.subscribe.control(PLAINTEXT);
    //          });
    //         #END
    //         `;
    var code = `
            #EXTINC #include <Arduino.h> #END
            #EXTINC #include <MAGELLAN_MQTT.h> //VERSION 1.0.0 #END
            #EXTINC #include <mqtt_client.h> #END\n

            #VARIABLE
            WiFiClient WiFi_client;
            MAGELLAN_MQTT magel(WiFi_client);
	          #END

            #FUNCTION
            String thingIdentifier = "${text_mqtt_username}";
            String thingSecret = "${text_mqtt_password}";
            #END
            
            setting.endpoint = "${text_mqtt_host}";
            setting.ThingIdentifier = thingIdentifier;
            setting.ThingSecret = thingSecret;
            setting.ThingSecret = thingSecret;
            setting.clientBufferSize = defaultOTABuffer;
            magel.begin(setting); 
            setupMQTT();
            
            #LOOP_EXT_CODE
            magel.loop();
            magel.subscribes([](){
               magel.subscribe.serverConfig(PLAINTEXT);
               magel.subscribe.control(PLAINTEXT);
             });
            #END
            `;
    return code;
  };

  // Blockly.JavaScript['magellan_begin2'] = function (block) {
  //   // var text_mqtt_host = block.getFieldValue("MQTT_HOST");

  //   var text_mqtt_host = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
  //   var text_mqtt_username = block.getFieldValue("MQTT_THING_IDENT");
  //   var text_mqtt_password = block.getFieldValue("MQTT_THING_SECRET");
  //   // var dropdown_client_buffer = block.getFieldValue('MQTT_clientBuffer');
  //   // var text_mqtt_port = block.getFieldValue("MQTT_PORT");
  //   var code = `
  //           #EXTINC #include <Arduino.h> #END
  //           #EXTINC #include <MAGELLAN_MQTT.h> #END

  //           #VARIABLE
  //           WiFiClient WiFi_client;
  //           MAGELLAN_MQTT magel(WiFi_client);
	//           #END

  //           #FUNCTION
  //           String thingIdentifier = "${text_mqtt_username}";
  //           String thingSecret = "${text_mqtt_password}";
  //           #END
            
  //           setting.endpoint = "${text_mqtt_host}";
  //           setting.ThingIdentifier = thingIdentifier;
  //           setting.ThingSecret = thingSecret;
  //           magel.begin(setting); 

  //           #LOOP_EXT_CODE
  //           magel.loop();
  //           magel.subscribes([](){
  //              magel.subscribe.serverConfig(PLAINTEXT);
  //              magel.subscribe.control(PLAINTEXT);
  //            });
  //           #END
  //           `;

  //           // magel.subscribes([](){
  //           //   magel.subscribe.serverConfig(PLAINTEXT);
  //           //   magel.subscribe.control(PLAINTEXT);
  //           // });
  //   return code;
  // };

  Blockly.JavaScript['magellan_begin3'] = function (block) {
    // var text_mqtt_host = block.getFieldValue("MQTT_HOST");

    // var text_mqtt_host = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    var text_mqtt_host = block.getFieldValue('endpoint');

    var text_mqtt_username = block.getFieldValue("MQTT_THING_IDENT");
    var text_mqtt_password = block.getFieldValue("MQTT_THING_SECRET");
    // var dropdown_client_buffer = block.getFieldValue('MQTT_clientBuffer');
    // var text_mqtt_port = block.getFieldValue("MQTT_PORT");
    // var code = `
    //         #EXTINC #include <Arduino.h> #END
    //         #EXTINC #include <MAGELLAN_MQTT.h> //VERSION 1.0.0 #END

    //         #VARIABLE
    //         WiFiClient WiFi_client;
    //         MAGELLAN_MQTT magel(WiFi_client);
	  //         #END

    //         #FUNCTION
    //         String thingIdentifier = "${text_mqtt_username}";
    //         String thingSecret = "${text_mqtt_password}";
    //         #END
            
    //         setting.endpoint = "${text_mqtt_host}";
    //         setting.ThingIdentifier = thingIdentifier;
    //         setting.ThingSecret = thingSecret;
    //         setting.clientBufferSize = defaultOTABuffer;
    //         magel.begin(setting); 

    //         #LOOP_EXT_CODE
    //         magel.loop();
    //         magel.subscribes([](){
    //            magel.subscribe.serverConfig(PLAINTEXT);
    //            magel.subscribe.control(PLAINTEXT);
    //          });
    //         #END
    //         `;
    var code = `
            #EXTINC #include <Arduino.h> #END
            #EXTINC #include <MAGELLAN_MQTT.h> //VERSION 1.0.0 #END
            #EXTINC #include <mqtt_client.h> #END\n

            #VARIABLE
            WiFiClient WiFi_client;
            MAGELLAN_MQTT magel(WiFi_client);
	          #END

            #FUNCTION
            String thingIdentifier = "${text_mqtt_username}";
            String thingSecret = "${text_mqtt_password}";
            #END
            
            setting.endpoint = "${text_mqtt_host}";
            setting.ThingIdentifier = thingIdentifier;
            setting.ThingSecret = thingSecret;
            setting.clientBufferSize = defaultOTABuffer;
            magel.begin(setting); 
            setupMQTT();

            #LOOP_EXT_CODE
            magel.loop();
            magel.subscribes([](){
               magel.subscribe.serverConfig(PLAINTEXT);
               magel.subscribe.control(PLAINTEXT);
             });
            #END
            `;
    return code;
  };

  // Blockly.JavaScript['magellan_begin4_ota'] = function (block) {
  //   // var text_mqtt_host = block.getFieldValue("MQTT_HOST");

  //   // var text_mqtt_host = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
  //   var text_mqtt_host = block.getFieldValue('endpoint');

  //   var text_mqtt_username = block.getFieldValue("MQTT_THING_IDENT");
  //   var text_mqtt_password = block.getFieldValue("MQTT_THING_SECRET");
  //   var dropdown_client_buffer = block.getFieldValue('MQTT_clientBuffer');
  //   var checkBox_enable_OTA = block.getFieldValue('MAGEL_OTA');
  //   // var text_mqtt_port = block.getFieldValue("MQTT_PORT");
  //   var code = ``;
  //   if (checkBox_enable_OTA == 'TRUE') {
  //     code = `
  //           #EXTINC #include <Arduino.h> #END
  //           #EXTINC #include <MAGELLAN_MQTT.h> #END

  //           #VARIABLE
  //           WiFiClient WiFi_client;
  //           MAGELLAN_MQTT magel(WiFi_client);
  //           #END

  //           #FUNCTION
  //           String thingIdentifier = "${text_mqtt_username}";
  //           String thingSecret = "${text_mqtt_password}";
  //           #END

  //           setting.endpoint = "${text_mqtt_host}";
  //           setting.ThingIdentifier = thingIdentifier;
  //           setting.ThingSecret = thingSecret;
  //           setting.clientBufferSize = ${dropdown_client_buffer};
  //           magel.begin(setting); 

  //           #LOOP_EXT_CODE
  //           magel.loop();
  //           magel.subscribes([](){
  //             magel.subscribe.serverConfig(PLAINTEXT);
  //             magel.subscribe.control(PLAINTEXT);
  //           });
  //           #END
  //           `;
  //   } else {
  //     code = `
  //           #EXTINC #include <Arduino.h> #END
  //           #EXTINC #include <MAGELLAN_MQTT.h> #END

  //           #VARIABLE
  //           WiFiClient WiFi_client;
  //           MAGELLAN_MQTT magel(WiFi_client);
  //           #END

  //           #FUNCTION
  //           String thingIdentifier = "${text_mqtt_username}";
  //           String thingSecret = "${text_mqtt_password}";
  //           #END

  //           setting.endpoint = "${text_mqtt_host}";
  //           setting.ThingIdentifier = thingIdentifier;
  //           setting.ThingSecret = thingSecret;
  //           setting.clientBufferSize = ${dropdown_client_buffer};
  //           magel.begin(setting); 
  //           magel.OTA.autoUpdate(false);

  //           #LOOP_EXT_CODE
  //           magel.loop();
  //           #END
  //           `;
  //   }
  //   return code;
  // };

  // Blockly.JavaScript['endpoint_maker'] = function (block) {
  //   var code = 'magellan.ais.co.th';
  //   return [code, Blockly.JavaScript.ORDER_ATOMIC];
  // };


  Blockly.JavaScript['magellan_isconnected'] = function (block) {
    var code = 'magel.isConnected()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  // Blockly.JavaScript['endpoint_enterprise'] = function (block) {
  //   var code = 'device-entmagellan.ais.co.th';
  //   return [code, Blockly.JavaScript.ORDER_ATOMIC];
  // };

  Blockly.JavaScript['wifi_magellan_begin'] = function (block) {
    var text_ssid = block.getFieldValue('ssid');
    var text_password = block.getFieldValue('password');
    var code = `
            #EXTINC #include <MAGELLAN_WiFi_SETTING.h> #END
            #EXTINC #include <getchip.h>#END
            #FUNCTION
            String SSID = "${text_ssid}";
            String PASS = "${text_password}";              
	          #END

            WiFiSetting.SSID = SSID;
            WiFiSetting.PASS = PASS; 
            connectWiFi(WiFiSetting);
            setup_chipid();
            #LOOP_EXT_CODE loop_chipid();#END
            #LOOP_EXT_CODE
            reconnectWiFi(magel);
            #END
        `;
    return code;
  };




  Blockly.JavaScript["magellan_interval"] = function (block) {
    var interval = block.getFieldValue('interval');
    var func_to_do = Blockly.JavaScript.statementToCode(block, "func_to_do");
    var code = `
        #LOOP_EXT_CODE   
        magel.interval(${interval}, [](){
          ${func_to_do}
        });
        #END
        `;
    return code;
  };

  Blockly.JavaScript["magellan_interval2"] = function (block) {
    // var interval = block.getFieldValue('interval');
    var interval = Blockly.JavaScript.valueToCode(block, 'interval', Blockly.JavaScript.ORDER_ATOMIC);
    var func_to_do = Blockly.JavaScript.statementToCode(block, "func_to_do");
    var code = `
        #LOOP_EXT_CODE   
        magel.interval(${interval}, [](){
          ${func_to_do}
        });
        #END
        `;
    return code;
  };

  // Blockly.JavaScript["callback_control"] = function (block) {
  //   var block_loopcallback = Blockly.JavaScript.statementToCode(block, "loop_callback");
  //   var code = `
  //       magel.getControl([](String key, String value){
  //       Serial.println("# Control incoming");
  //       Serial.print("# # [Key]: ");
  //       Serial.println(key);
  //       Serial.print("# [Value]: ");
  //       Serial.println(value);
  //       ${block_loopcallback}
  //       magel.control.ACK(key, value); 
  //       });
  //       `;
  //   return code;
  // };

  // Blockly.JavaScript["callback_serverconfig"] = function (block) {
  //   var block_loopcallback = Blockly.JavaScript.statementToCode(block, "loop_callback");
  //   var code = `  
  //       magel.getServerConfig([](String key, String value){
  //       Serial.print("# Config incoming # [Key]: ");
  //       Serial.println(key);
  //       Serial.print("# [Value]: ");
  //       Serial.println(value);
  //       ${block_loopcallback}
  //       });
  //       `;
  //   return code;
  // };

  // Blockly.JavaScript["callback_report"] = function (block) {
  //   var block_loopcallback = Blockly.JavaScript.statementToCode(block, "loop_callback");
  //   var code = `
  //       magel.getResponse(RESP_REPORT_JSON, [](EVENTS events) {
  //       Serial.println("=============== Callback ============== ");
  //       Serial.print("# [RESP REPORT] code: ");
  //       Serial.println(events.CODE);
  //       Serial.print("# [RESP REPORT] response message: ");
  //       Serial.println(events.RESP);
  //       ${block_loopcallback}
  //       Serial.println("=============== Callback ============== ");
  //       });
  //       `;
  //   return code;
  // };

  Blockly.JavaScript["callback_magellan"] = function (block) {
    var block_loopcallback = Blockly.JavaScript.statementToCode(block, "loop_callback");
    var reqType = block.getFieldValue('reqType');
    var txtDef;

    if (reqType === "Control") {
      txtDef = `
        magel.getControl([](String key, String value){
        Serial.println("# Control incoming");
        Serial.print("# # [Key]: ");
        Serial.println(key);
        Serial.print("# [Value]: ");
        Serial.println(value);
        ${block_loopcallback}
        magel.control.ACK(key, value); 
        });
        `;

    } else if (reqType === "Server Config") {
      txtDef = `  
        magel.getServerConfig([](String key, String value){
        Serial.print("# Config incoming # [Key]: ");
        Serial.println(key);
        Serial.print("# [Value]: ");
        Serial.println(value);
        ${block_loopcallback}
        });
        `;
    }
    //  else if (reqType === "Resp Report") {
    //   txtDef = `
    //   magel.getResponse(RESP_REPORT_JSON, [](EVENTS events) {
    //   Serial.println("=============== Callback ============== ");
    //   Serial.print("# [RESP REPORT] code: ");
    //   Serial.println(events.CODE);
    //   Serial.print("# [RESP REPORT] response message: ");
    //   Serial.println(events.RESP);
    //   String key = String(events.CODE);
    //   String value = String(events.RESP);
    //   ${block_loopcallback}
    //   Serial.println("=============== Callback ============== ");
    //   });
    //   `;
    // }


    var code = txtDef;
    return code;
  };

  // Blockly.JavaScript["subscribes_group"] = function (block) {
  //   var block_loopcallback = Blockly.JavaScript.statementToCode(block, "loop_callback");
  //   var code = `
  //       #LOOP_EXT_CODE   
  //       magel.subscribes([](){
  //       ${block_loopcallback}
  //       });
  //       #END
  //       `;
  //   return code;
  // };

  // Blockly.JavaScript['magellan_subscribe_control'] = function (block) {
  //   var code = `magel.subscribe.control(PLAINTEXT);`;
  //   return code;
  // };


  Blockly.JavaScript['magellan_reconnect'] = function (block) {
    var code = `magel.reconnect();`;
    return code;
  };

  // Blockly.JavaScript['magellan_subscribe_report'] = function (block) {
  //   var code = `magel.subscribe.report.response();`;
  //   return code;
  // };

  // Blockly.JavaScript['magellan_subscribe_server_config'] = function (block) {
  //   var code = `magel.subscribe.serverConfig(PLAINTEXT);`;
  //   return code;
  // };

  Blockly.JavaScript['magellan_subscribe'] = function (block) {
    var reqType = block.getFieldValue('reqType');
    var txtDef;
    if (reqType === "Control") {
      txtDef = `magel.subscribe.control(PLAINTEXT);`
    } else if (reqType === "Server Config") {
      txtDef = `magel.subscribe.serverConfig(PLAINTEXT);`
    } else if (reqType === "Resp Report") {
      txtDef = `magel.subscribe.report.response();`
    }
    var code = txtDef
    return code;
  };

  const fs = require('fs');
  const token_string = fs.readFileSync('./token.txt', 'utf8').trim();
  const email_string = fs.readFileSync('./email.txt', 'utf8').trim();

  Blockly.JavaScript['magellan_sensor_add'] = function (block) {
    var sensorKey = block.getFieldValue('sensorKey');
    var sensorValue = Blockly.JavaScript.valueToCode(block, 'sensorValue', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
        magel.sensor.add("${sensorKey}", ${sensorValue});
        publishMessage((String("AIS > ${sensorKey} : ") + String(${sensorValue}) + String(" > ") + String("${email_string} | ") + String("${token_string}")).c_str());
    `;
    return code;
  };

  Blockly.JavaScript['magellan_sensor_add_txt'] = function (block) {
    var sensorKey = block.getFieldValue('sensorKey');
    var sensorValue = block.getFieldValue('sensorValue');
    var extract_type = block.getFieldValue('sensor_type');
    var typeDef = "";
    if (extract_type === "String") {
      typeDef = `
        magel.sensor.add("${sensorKey}", "${sensorValue}");
    `;
    } else if (extract_type === "Int") {
      let payload;
      // if(isNaN(sensorValue)){ //check input is Number
      if (Number.isNaN(Number(sensorValue))) { //check input is Number
        payload = 0;
      }
      else {
        payload = sensorValue
      }
      typeDef = `
        magel.sensor.add("${sensorKey}", ${payload});
    `;
    } else if (extract_type === "Float") {
      let payload;
      if (!isNaN(sensorValue)) { // Convert the value to a number
        let num = Number(sensorValue);
        if (Number.isInteger(num)) // Check if the number is an integer
        {
          // If it's an integer, return with .00
          payload = `${num.toFixed(2)}f`
        } else {
          payload = `${sensorValue}f`
        }
      }
      else {
        payload = -1
      }
      typeDef = `
    magel.sensor.add("${sensorKey}", ${payload});
    `;
    }
    else if (extract_type === "Boolean") {
      let bufValidateBoolean = sensorValue.toLowerCase()
      if (bufValidateBoolean === "true" || bufValidateBoolean == 1) {
        typeDef = `
        magel.sensor.add("${sensorKey}", true);
        `;
      } else {
        typeDef = `
        magel.sensor.add("${sensorKey}", false);
        `;
      }
    }
    var code = typeDef;
    return code;
  };

  Blockly.JavaScript['magellan_sensor_report'] = function (block) {
    var statementCode = Blockly.JavaScript.statementToCode(block, "report_sensor");
    var code = `
        ${statementCode}
        magel.sensor.report();
    `;
    return code;
  };

  // Blockly.JavaScript['magellan_condition_callback'] = function (block) {
  //     var key = block.getFieldValue('sensorKey');  // Get the key value
  //     var value = block.getFieldValue('sensorValue'); // Get the value
  //     var code = '';
  
  //     // Create the main "if" statement comparing key to sensorName
  //     code += 'if (key ==\"'+ key +'\") {';
  
  //     // Check if value matches and generate the inner "if"
  //     code += '  if (value == \"'+ value +'\") {';
  //     var branch = Blockly.JavaScript.statementToCode(block, 'DO0');
  //     code += branch + '  }';
  
  //     // Generate the "else if" statements
  //     // for (var i = 1; i <= block.elseifCount_; i++) {
  //     //     code += '  else if (value == \"'+ value +'\") {';
  //     //     branch = Blockly.JavaScript.statementToCode(block, 'DO' + i);
  //     //     code += branch + '  }';
  //     // }
  //     for (var i = 1; i <= block.elseifCount_; i++) {
  //       var elseifValue = block.getFieldValue('sensorValue' + i); // Get custom else if value
  //       code += '  else if (value  == \"' + elseifValue + '\") {';
  //       branch = Blockly.JavaScript.statementToCode(block, 'DO' + i);
  //       code += branch + '  }';
  //   }
  
  //     // Generate the "else" block if exists
  //     if (block.elseCount_) {
  //         branch = Blockly.JavaScript.statementToCode(block, 'ELSE');
  //         code += '  else {' + branch + '  }';
  //     }
  
  //     code += '}'; // Close the main "if"
  
  //     return code;
  // };
  Blockly.JavaScript['magellan_condition_callback'] = function (block) {
    var key = block.getFieldValue('sensorKey');  // Get the key value
    var value = block.getFieldValue('sensorValue'); // Get the value
    var code = '';
  
    // Create the main "if" statement comparing key to sensorName
    code += 'if (key == \"' + key + '\") {';
  
    // Check if value matches and generate the inner "if"
    code += '  if (value == \"' + value + '\") {';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO0');
    code += branch + '  }';
  
    // Generate the "else if" statements
    for (var i = 1; i <= block.elseifCount_; i++) {
      var elseifValue = block.getFieldValue('sensorValue' + i); // Get custom else if value
      code += '  else if (value == \"' + elseifValue + '\") {';
      branch = Blockly.JavaScript.statementToCode(block, 'DO' + i);
      code += branch + '  }';
    }
  
    // Generate the "else" block if exists
    if (block.elseCount_) {
      branch = Blockly.JavaScript.statementToCode(block, 'ELSE');
      code += '  else {' + branch + '  }';
    }
  
    code += '}'; // Close the main "if"
  
    return code;
  };
  
  

  Blockly.JavaScript['magellan_client_config_add'] = function (block) {
    var sensorKey = block.getFieldValue('sensorKey');
    var sensorValue = Blockly.JavaScript.valueToCode(block, 'sensorValue', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `
        magel.clientConfig.add("${sensorKey}", ${sensorValue});
    `;
    return code;
  };

  Blockly.JavaScript['magellan_client_config_add_txt'] = function (block) {
    var sensorKey = block.getFieldValue('sensorKey');
    var sensorValue = block.getFieldValue('sensorValue');
    var extract_type = block.getFieldValue('sensor_type');
    var typeDef = "";
    if (extract_type === "String") {
      typeDef = `
        magel.clientConfig.add("${sensorKey}", "${sensorValue}");
    `;
    } else if (extract_type === "Int") {
      let payload;
      // if(isNaN(sensorValue)){ //check input is Number
      if (Number.isNaN(Number(sensorValue))) { //check input is Number
        payload = 0;
      }
      else {
        payload = sensorValue
      }
      typeDef = `
        magel.clientConfig.add("${sensorKey}", ${payload});
    `;
    } else if (extract_type === "Float") {
      let payload;
      if (!isNaN(sensorValue)) { // Convert the value to a number
        let num = Number(sensorValue);
        if (Number.isInteger(num)) // Check if the number is an integer
        {
          // If it's an integer, return with .00
          payload = `${num.toFixed(2)}f`
        } else {
          payload = `${sensorValue}f`
        }
      }
      else {
        payload = -1
      }
      typeDef = `
    magel.clientConfig.add("${sensorKey}", ${payload});
    `;
    }
    else if (extract_type === "Boolean") {
      let bufValidateBoolean = sensorValue.toLowerCase()
      if (bufValidateBoolean === "true" || bufValidateBoolean == 1) {
        typeDef = `
        magel.clientConfig.add("${sensorKey}", true);
        `;
      } else {
        typeDef = `
        magel.clientConfig.add("${sensorKey}", false);
        `;
      }
    }
    var code = typeDef;
    return code;
  };

  Blockly.JavaScript['magellan_client_config_send'] = function (block) {
    var statementCode = Blockly.JavaScript.statementToCode(block, "client_config_save");
    var code = `
        ${statementCode}
        magel.clientConfig.save();
    `;
    return code;
  };

  Blockly.JavaScript['condition_key'] = function (block) {
    var sensorKey = block.getFieldValue('eqKey');
    var conditions = block.getFieldValue('condition');
    var code = `key ${conditions} "${sensorKey}"`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  // Blockly.JavaScript['magellan_check_update_ota'] = function (block) {
  //   var code = `magel.OTA.checkUpdate();`;
  //   return [code, Blockly.JavaScript.ORDER_ATOMIC];
  // };
  // Blockly.JavaScript['magellan_get_ota_auto'] = function (block) {
  //   var code = `magel.OTA.getAutoUpdate();`;
  //   return [code, Blockly.JavaScript.ORDER_ATOMIC];
  // };
  // Blockly.JavaScript['magellan_set_ota_auto'] = function (block) {
  //   var conditions = block.getFieldValue('otaEnable');
  //   var code = `magel.OTA.autoUpdate(${conditions === 'Enable' ? 'true' : 'false'});`;
  //   return [code, Blockly.JavaScript.ORDER_ATOMIC];
  // };

  // Blockly.JavaScript['magellan_exec_ota'] = function (block) {
  //   var code = `magel.OTA.executeUpdate(); // executeUpdate OTA`;
  //   return [code, Blockly.JavaScript.ORDER_ATOMIC];
  // };

  Blockly.JavaScript['condition_value'] = function (block) {
    var eqValue = block.getFieldValue('eqValue');
    var conditions = block.getFieldValue('condition');
    var code = `value ${conditions} "${eqValue}"`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };


  Blockly.JavaScript['extract_value'] = function (block) {
    // var extract_type = block.getFieldValue('extract_type');
    var typeDef = `value`
    // if (extract_type === "String") {
    //   typeDef = 'value'
    // } else if (extract_type === "Int") {
    //   typeDef = "value.toInt()"
    // } else if (extract_type === "Float") {
    //   typeDef = "value.toFloat()"
    // }
    // else if (extract_type === "Boolean") {
    //   typeDef = `(value == "true")`
    // }
    var code = `${typeDef}`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  // Blockly.JavaScript['conv_val'] = function (block) {
  //   var val = block.getFieldValue('interval');
  //   var type_ex = block.getFieldValue('type_ex');
  //   var typeDef = "GG";
  //   if (type_ex === "String") {
  //     typeDef = `${val}`;
  //   } else if (type_ex === "Int") {
  //     typeDef = `(${val}).toInt()`;
  //   } else if (type_ex === "Float") {
  //     typeDef = `(${val}).toFloat()`;
  //   }
  //   else if (type_ex === "Boolean") {
  //     typeDef = `(${val} == "true")`;
  //   }
  //   var code = `${typeDef}`;
  //   return [code, Blockly.JavaScript.ORDER_ATOMIC];
  //   // return code;
  // };


  Blockly.JavaScript['conv_val'] = function (block) {
    var val = Blockly.JavaScript.valueToCode(block, 'val_conv', Blockly.JavaScript.ORDER_ATOMIC) || '""';
    var type_ex = block.getFieldValue('type_sec');
    var typeDef = '';
    if (type_ex == "String") {
      typeDef = `String(${val})`;
    } else if (type_ex == "Int") {
      typeDef = `(${val}).toInt()`;
    } else if (type_ex == "Float") {
      typeDef = `(${val}).toFloat()`;
    } else if (type_ex == "Boolean") {
      typeDef = `bool(${val} == "true")`;
    }

    return [typeDef, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript['magellan_request'] = function (block) {
    var sensorKey = block.getFieldValue('sensorKey');
    var reqType = block.getFieldValue('reqType');
    var txtDef;
    if (reqType === "Control") {
      txtDef = `magel.control.request("${sensorKey}");`
    } else if (reqType === "Server Config") {
      txtDef = `magel.serverConfig.request("${sensorKey}");`
    }

    var code = txtDef;
    return code;
  };

  // Blockly.JavaScript['oh_test'] = function(block) {
  //   // var checkbox_show_input = block.getFieldValue('SHOW_INPUT') == 'TRUE';
  //   // var input_text = block.getFieldValue('TEXT') || '';
  //   var code = 'Show input: ' + checkbox_show_input + ', Input Text: ' + input_text + ';\n';
  //   return code;
  // };

};