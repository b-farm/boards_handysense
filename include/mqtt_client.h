#ifndef MQTT_CLIENT_H
#define MQTT_CLIENT_H

#include <WiFi.h>
#include <Arduino.h>
#include "./utils/PubSubClient.h"

// External declarations (use `extern` for variables)
extern WiFiClient espClient;
extern PubSubClient nntclient;
// extern uint32_t previousMillisMQTT = 0;

extern const char* nest_mqtt_server;
extern const int nest_mqtt_port;
extern const char* nest_mqtt_user;
extern const char* nest_mqtt_password;
extern const char* nest_topic;

// Function declarations
void connectToMQTT();
void setupMQTT();
void publishMessage(const char* message);
void handleMQTT();

#endif // MQTT_CLIENT_H
