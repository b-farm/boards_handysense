/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
module.exports = function (Blockly) {
  "use strict";

  Blockly.JavaScript["WIFI_begin"] = function (block) {
    var text_ssid = block.getFieldValue("ssid");
    var text_password = block.getFieldValue("password");
    var code = `WiFi.begin("${text_ssid}","${text_password}");
            while(WiFi.status() != WL_CONNECTED){ 
            delay(500); 
        }\n`;
    return code;
  };

  Blockly.JavaScript["WIFI_begin_2"] = function (block) {
    var text_ssid = block.getFieldValue("ssid");
    var text_password = block.getFieldValue("password");
    var code = `#EXTINC #include <getchip.h>#END
          WiFi.begin("${text_ssid}","${text_password}");
          while(WiFi.status() != WL_CONNECTED){ 
          delay(500); 
          Serial.println((WiFi.localIP().toString()));}
          setup_chipid();
          #LOOP_EXT_CODE loop_chipid();#END\n`;
    return code;
  };

  // Blockly.JavaScript["WIFI_begin_3"] = function (block) {
  //   var text_ssid = block.getFieldValue("ssid");
  //   var text_password = block.getFieldValue("password");
  //   var argtype = block.getFieldValue("argtype");
  //   var argdetail = block.getFieldValue("argdetail");
  //   // var code += '#EXTINC#include "SHT31.h"#END\n';
  //   var code = `#EXTINC #include <getchip.h>#END\n
  //         #FUNCTION String argtype = "${argtype}";#END\n
  //         #FUNCTION String argdetail = "${argdetail}";#END\n
  //         WiFi.begin("${text_ssid}","${text_password}");
  //         while(WiFi.status() != WL_CONNECTED){
  //         delay(500);
  //         Serial.println((WiFi.localIP().toString()));}
  //         setup_chipid();
  //         #LOOP_EXT_CODE loop_chipid();#END\n`;
  //   this.$global.setting.argtypefill = argtype;
  //   this.$global.setting.argdetailfill = argdetail;
  //   return code;
  // };

  Blockly.JavaScript["WIFI_begin_3"] = function (block) {
    var text_ssid = block.getFieldValue("ssid");
    var text_password = block.getFieldValue("password");
    // var code += '#EXTINC#include "SHT31.h"#END\n';
    var code = `#EXTINC #include <getchip.h>#END\n
          WiFi.begin("${text_ssid}","${text_password}");
          while(WiFi.status() != WL_CONNECTED){
          delay(500);
          Serial.println((WiFi.localIP().toString()));}
          setup_chipid();
          #LOOP_EXT_CODE loop_chipid();#END\n`;
    return code;
  };

  Blockly.JavaScript["netpie_begin"] = function (block) {
    var text_mqtt_host = block.getFieldValue("MQTT_HOST");
    var text_mqtt_client_id = block.getFieldValue("CLIENT_ID");
    var text_mqtt_username = block.getFieldValue("MQTT_USERNAME");
    var text_mqtt_password = block.getFieldValue("MQTT_PASSWORD");
    var text_mqtt_port = block.getFieldValue("MQTT_PORT");
    // var code = `
    //     #EXTINC #include <pub_topic.h> #END\n
    //     #FUNCTION
    //     const char* Netpiemqtt_server     = "${text_mqtt_host}";
    //     const int   Netpiemqtt_port       = ${text_mqtt_port};
    //     const char* Netpiemqtt_username   = "${text_mqtt_username}";
    //     const char* Netpiemqtt_password   = "${text_mqtt_password}";
    //     const char* Netpiemqtt_Client     = "${text_mqtt_client_id}";     
    //     #END\n
    //     Netpieclient.setServer(Netpiemqtt_server,Netpiemqtt_port);
    //     `;
    var code = `
        #EXTINC #include <pub_topic.h> #END\n
        #EXTINC #include <mqtt_client.h> #END\n
        #FUNCTION
        const char* Netpiemqtt_server     = "${text_mqtt_host}";
        const int   Netpiemqtt_port       = ${text_mqtt_port};
        const char* Netpiemqtt_username   = "${text_mqtt_username}";
        const char* Netpiemqtt_password   = "${text_mqtt_password}";
        const char* Netpiemqtt_Client     = "${text_mqtt_client_id}";     
        #END\n
        setupMQTT();
        Netpieclient.setServer(Netpiemqtt_server,Netpiemqtt_port);
        `;
    return code;
  };

  Blockly.JavaScript["netpie_connect"] = function (block) {
    var code = `

        if (!Netpieclient.connected()) {
            while (!Netpieclient.connected()) {
                Serial.print("Attempting NETPIE2020 connection...");
                if (Netpieclient.connect(Netpiemqtt_Client, Netpiemqtt_username, Netpiemqtt_password)) {
                  Serial.println("NETPIE2020 connected");
                  Netpieclient.subscribe("@private/#");
                }
                else {
                  Serial.print("failed, rc=");
                  Serial.print( client.state());
                  Serial.println("try again in 5 seconds");
                  delay(5000);
                }
            }
        }
        Netpieclient.loop();
        delay(2000);
        `;
    return code;
  };

  const fs = require('fs');
  // const token_string = fs.readFileSync('./token.txt', 'utf8').trim();
  const email_string = fs.readFileSync('./email.txt', 'utf8').trim();

  Blockly.JavaScript["pub_topic"] = function (block) {
    var topic_to_pub = block.getFieldValue("topic_to_pub_netpie");
    var value_to_pub = Blockly.JavaScript.valueToCode(
      block,
      "value_to_pub_netpie",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    // var code = `
    //     #EXTINC #include <pub_topic.h> #END
    //     if (!((argtype == "-") || (argdetail == "#ต้นมะระ #เกษตรอินทรีย์ #ไฮโดรโปนิกส์"))) {
    //       pub_topic("${topic_to_pub}",${value_to_pub});
    //     } else {
    //       Serial.println("กรุณาใส่ชนิดเกษตรและรายละเอียดของคุณ");
    //     }
    //     `;
    var code = `
        #EXTINC #include <pub_topic.h> #END
        pub_topic("${topic_to_pub}",${value_to_pub});
        publishMessage((String("NETPIE > ${topic_to_pub} : ") + String(${value_to_pub}) + String(" > ") + String("${email_string} | ")).c_str());
        `;
    return code;
  };
  // handleMQTT();

  Blockly.JavaScript["payload"] = function (block) {
    var code = `(message).toInt()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript["netpie_topic"] = function (block) {
    var code = `topic`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript["text"] = function (block) {
    var text = block.getFieldValue("text_");
    var code = `${text}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript["callback_topic"] = function (block) {
    var name_topic = block.getFieldValue("topic_callback");
    var code = ` 
    ${name_topic}
    `;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript["callback_netpie"] = function (block) {
    var block_loopcallback = Blockly.JavaScript.statementToCode(
      block,
      "loop_callback"
    );
    var code = `
        #FUNCTION   
    
        void Netpiecallback(String topic,byte* payload,unsigned int length) {
          Serial.print("Message arrived [");
          Serial.print("Message arrived [");
          Serial.print(topic);
          Serial.print("] ");
          String message;
          for (int i = 0; i < length; i++) {
           message = message + (char)payload[i];
          }

          ${block_loopcallback}
        };
        #END
        `;
    return code;
  };

  Blockly.JavaScript["callback_setup"] = function (block) {
    var code = `
      Netpieclient.setCallback(Netpiecallback);
      `;
    return code;
  };
};
