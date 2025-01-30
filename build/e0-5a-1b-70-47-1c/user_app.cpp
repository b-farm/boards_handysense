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
#include "SHT31.h"
#include <TridentTD_LineNotify.h>

int Min;
int Max;
int value_led0;
MCP23008 MCP (0x24);
SHT31 sht;

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

              if ((topic) == String("@private/min_temp")) {
      Min = ((message).toInt());
      Serial.println(Min);
    }
    if ((topic) == String("@private/max_temp")) {
      Max = ((message).toInt());
      Serial.println(Max);
    }
    if ((topic) == String("@private/led0")) {
      value_led0 = ((message).toInt());
      Serial.println(value_led0);
    }

          };

void setup()
{
  Wire.begin();
Wire.setClock(10000);
MCP.begin();
MCP.pinMode8(0x00);
sht.begin(0x44);
LINE.setToken(String("I3qMYWXm7qlIekWerLNym0mnQk9tdmD0WfTIYu4Ho6b"));
  Serial.begin(115200);
  WiFi.begin("upwsmartwifi","aaaaaaai");
              while(WiFi.status() != WL_CONNECTED){
              delay(500);
          }

          
          
          Netpieclient.setServer(Netpiemqtt_server,Netpiemqtt_port);


        Netpieclient.setCallback(Netpiecallback);
        
  
  

  
  
  
  
  LED_WIFI = 26;
  LED_SERVER = 27;

                  setPin_Relay(32,33,25,26);
                  setPin_ErrorSensor(19,18,5);

                  type_RTC = 0;
}
void loop()
{
    sht.read();
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
          pub_topic("temperature",(sht.getTemperature()));if ((sht.getTemperature()) >= Max) {
    digitalWrite(const_relay_pin[0], LOW);
            LINE.notify(String("เปิดด้วยเซนเซอร์วัดอุณหภูมิ"));
        } else if ((sht.getTemperature()) <= Min) {
    digitalWrite(const_relay_pin[0], HIGH);
            LINE.notify(String("ปิดด้วยเซนเซอร์วัดอุณหภูมิ"));
        }
  if (value_led0 == 0) {
    Serial.println(String("ONNNN"));
    digitalWrite(const_relay_pin[1], HIGH);
            LINE.notify(String("เปิดด้วยสวิต"));
        } else if (value_led0 == 2) {
    Serial.println(String("OFFFF"));
    digitalWrite(const_relay_pin[1], LOW);
            LINE.notify(String("ปิดด้วยสวิต"));
        }
  Serial.print(String("Temp: "));
  Serial.println((sht.getTemperature()));
  Serial.print(String("Hamid: "));
  Serial.println((sht.getHumidity()));

  
}
