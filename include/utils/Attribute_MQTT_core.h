/*
library version: v2.5.3
Author:Worawit Sayned (POC Device Magellan team)      
Create Date: 25 April 2022. 
Modified: 3 may 2023.
Released for private usage.
*/
#ifndef ATTRIBUTE_CORE_H
#define ATTRIBUTE_CORE_H
#include <Arduino.h>
#include <Client.h>
#include "./PubSubClient.h"
// #include "PubSubClientV2.h"
#include "ArduinoJson.h"
// #include "./ArduinoJson-v6.18.3.h"
#include "./FileSystem.h"
#include "./manageConfigOTAFile.h"
#include "./manageCredentialFile.h"
#include "./utility.h"
#ifdef ESP32
  #include "SPIFFS.h"
  #include "FS.h"
#elif defined ESP8266
  #include "LittleFS.h"
  #include "FS.h"
#endif

#define _major_ver 1
#define _feature_ver 1
#define _enhance_ver 0
#define lib_ver "v"+String(_major_ver) +"."+ String(_feature_ver)+"."+String(_enhance_ver)
class Attribute_MQTT_core
{
public:
    static String statusActivateCode;
    static boolean isBypassAutoUpdate;
    static boolean usingCheckUpdate;
    static boolean checkFirmwareUptodate;
    static boolean isFirmwareUptodate;
    static boolean flagAutoOTA;
    static unsigned long prv_cb_timeout_millis;
    static unsigned int timeout_req_download_fw;
    static boolean checkTimeout_request_download_fw;
    static boolean remind_Event_GET_FW_infoOTA;
    static boolean triggerRemainOTA;
    static boolean triggerRemainSub;
    static boolean remain_ota_fw_info_match;
    static String valid_remain_fw_name;
    static unsigned int valid_remain_fw_size;
    static boolean flag_remain_ota;
    static boolean ctrl_regis_key;
    static boolean ctrl_regis_pta;
    static boolean ctrl_regis_json;
    static boolean conf_regis_key;
    static boolean conf_regis_pta;
    static boolean conf_regis_json;
    static boolean resp_regis;
    static boolean ctrl_jsonOBJ;
    static boolean conf_jsonOBJ;
    static boolean using_Checksum;
    static boolean useAdvanceCallback;
    static String ext_Token;
    static String ext_EndPoint;
    static Client *ClientNET;
    static PubSubClient *mqtt_client; //MQTT Client
    static unsigned int fw_count_chunk;
    static unsigned int fw_total_size;
    static unsigned int chunk_size;
    static unsigned int default_chunk_size;
    static unsigned int totalChunk;
    static unsigned int current_chunk;
    static unsigned int current_size;
    static size_t incomingChunkSize;
    static size_t calculate_chunkSize;
    static boolean inProcessOTA;
    static boolean startReqDownloadOTA;
    static String sensorJSON_str;
    static String clientConfigJSON_str;
    static StaticJsonDocument<512> docClientConf;
    static DynamicJsonDocument *adjDoc;
    static DynamicJsonDocument *docSensor;
    //1.1.0
    static boolean checkUpdate_inside;
    static unsigned int delayCheckUpdate_inside;
    static unsigned int delayRequest_download;
    static size_t buffer_JSON_bufferSize;
    static size_t max_payload_report;
    static int matchMsgId_cb;
    static int matchMsgId_send;
    static int maxRetransmit;
    static unsigned int durationRetransmit;
    // @attention 0 = not register cb, 1 register json, 2 register plaintext, 3 register both
    static boolean isMatchMsgId;
    static boolean reqRetransmit;
};
extern Attribute_MQTT_core attr;
#endif