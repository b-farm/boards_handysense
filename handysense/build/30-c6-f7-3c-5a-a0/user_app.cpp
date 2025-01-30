#include <HandySense.h>
#include <Arduino.h>
#include <WiFi.h>
#include <Wire.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include "time.h"

#include <pub_topic.h>
#include "MCP23008.h"
#include <Wire.h>

int Min;
int Max;
MCP23008 MCP (0x24);

const char* Netpiemqtt_server     = "broker.netpie.io";
          const int   Netpiemqtt_port       = 1883;
          const char* Netpiemqtt_username   = "5EUQNwae5DXsfzo8QSEsJwknRftjjLRX";
          const char* Netpiemqtt_password   = "gwziAwHksRproq49YCcm8thfHPD2ZqvP";
          const char* Netpiemqtt_Client     = "fdfa9f65-20f2-4955-a50f-86e77d04d531";
void Netpiecallback(String topic,byte* payload,unsigned int length) {
            Serial.print("Message arrived [");
            Serial.print("Message arrived [");
            Serial.print(topic);
            Serial.print("] ");
            String message;
            for (int i = 0; i < length; i++) {
             message = message + (char)payload[i];
            }

              if ((topic) == String("@private/min_humidity")) {
      Min = ((message).toInt());
      Serial.println(Min);
    }
    if ((topic) == String("@private/max_humidity")) {
      Max = ((message).toInt());
      Serial.println(Max);
    }

          };

void setup()
{
  Wire.begin();
Wire.setClock(10000);
MCP.begin();
MCP.pinMode8(0x00);
  Serial.begin(115200);
  WiFi.begin("iPhone Tom","12345678");
              while(WiFi.status() != WL_CONNECTED){
              delay(500);
          }

          
          
          Netpieclient.setServer(Netpiemqtt_server,Netpiemqtt_port);


        Netpieclient.setCallback(Netpiecallback);
        Min = 0;
  Max = 0;
  
  
  

  
  
  
  
  LED_WIFI = 26;
  LED_SERVER = 27;

                  setPin_Relay(32,33,25,26);
                  setPin_ErrorSensor(19,18,5);

                  type_RTC = 0;
}
void loop()
{
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
          Serial.println(Min);
  Serial.println(Max);
          pub_topic("Min",Min);
          pub_topic("Max",Max);if (Min > Max) {
    digitalWrite(const_relay_pin[0], HIGH);MCP.digitalWrite(0, HIGH);Serial.println(String("BBBBBBBBBB"));
  }
  if (Min < Max) {
    digitalWrite(const_relay_pin[0], LOW);MCP.digitalWrite(0, LOW);Serial.println(String("AAAAAAAAA"));
  }

  
}
