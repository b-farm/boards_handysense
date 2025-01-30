#include "mqtt_client.h"

// Define the variables
// WiFiClient espClient;
PubSubClient nntclient(espClient);

const char *nest_mqtt_server = "192.168.119.27";
const int nest_mqtt_port = 1883;
const char *nest_mqtt_user = "naste_mqtt";
const char *nest_mqtt_password = "1234";
const char *nest_topic = "nnt";

uint32_t previousMillisMQTT = 0;     // Timestamp of the last message
const uint32_t intervalMQTT = 60000; // 1 minute interval

void connectToMQTT()
{
    if (!nntclient.connected())
    {
        // Serial.print("Connecting to MQTT...");
        if (nntclient.connect("ESP32Client", nest_mqtt_user, nest_mqtt_password))
        {
            Serial.println("nnt cn");
        }
        else
        {
            Serial.println("nnt!?");
            // Serial.print("server ");
            // Serial.print(nest_mqtt_server);
            // Serial.print(" Failed with error code: ");
            // Serial.println(nntclient.state());
        }
    }
}

void setupMQTT()
{
    nntclient.setServer(nest_mqtt_server, nest_mqtt_port);
    nntclient.setSocketTimeout(2);
    connectToMQTT();
}

void publishMessage(const char *message)
{
    uint32_t currentMillis = millis(); // Get current time
    if (currentMillis - previousMillisMQTT < intervalMQTT)
    {
        // Serial.println("Publish skipped: Less than 1 minute since last message.");
        return; // Skip publishing
    }
    else
    {
        previousMillisMQTT = currentMillis; // Update the last message timestamp
    }

    if (!nntclient.connected())
    {
        Serial.println("nnt!?");
        connectToMQTT();
        if (nntclient.connected())
        {
            Serial.print("nnt: ");
            Serial.println(message);
            if (nntclient.publish(nest_topic, message))
            {
                Serial.println("nnt ok");
                // previousMillisMQTT = currentMillis; // Update the last message timestamp
            }
            else
            {
                Serial.println("nnt ng");
            }
        }
    }
    else
    {
        Serial.print("nnt: ");
        Serial.println(message);
        if (nntclient.publish(nest_topic, message))
        {
            Serial.println("nnt ok");
            // previousMillisMQTT = currentMillis; // Update the last message timestamp
        }
        else
        {
            Serial.println("nnt ng");
        }
    }
}

void handleMQTT()
{
    if (!nntclient.connected())
    {
        connectToMQTT();
    }
    // nntclient.loop();
}
