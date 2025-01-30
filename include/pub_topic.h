
#include <Arduino.h>
#include <PubSubClientV2.h>
#include <NTPClient.h>
#include <WiFi.h>

WiFiClient NetpieespClient;
PubSubClientV2 Netpieclient(NetpieespClient);

void pub_topic(String topic_to_pub , int value_to_pub) {
  String _payload ;
  char topic_to_pub_data[400];
  _payload = "{\"data\": {\"" + (topic_to_pub) + "\":" + (value_to_pub)  + "}}";
  _payload.toCharArray(topic_to_pub_data, (_payload.length() + 1));
  Netpieclient.publish("@shadow/data/update", topic_to_pub_data);

}

