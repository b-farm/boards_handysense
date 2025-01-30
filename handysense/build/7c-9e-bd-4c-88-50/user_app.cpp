#include <HandySense.h>
#include <Arduino.h>
#include <WiFi.h>
#include <Wire.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include "time.h"

#include <getchip.h>
#include <pub_topic.h>

Number iii;

String argtype = "การปศุสัตว์";
String argdetail = "#test";
const char* Netpiemqtt_server     = "broker.netpie.io";
          const int   Netpiemqtt_port       = 1883;
          const char* Netpiemqtt_username   = "y1tMNpVXBMRbQn67bUkAKEAomjv9ZiGL";
          const char* Netpiemqtt_password   = "mt2ys1hUN8drWemLNh4EMv5D5oNLB3Bk";
          const char* Netpiemqtt_Client     = "4d987347-8bf7-4021-9dae-2bb1c789adec";

void setup()
{
  
  Serial.begin(115200);
  

            

            

            WiFi.begin("nammonnnt","1212312121");
            while(WiFi.status() != WL_CONNECTED){
            delay(500);
            Serial.println((WiFi.localIP().toString()));}
            setup_chipid();
            

          

          

          Netpieclient.setServer(Netpiemqtt_server,Netpiemqtt_port);


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
          iii = 0;
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
          if (!((argtype == "-") || (argdetail == "#ต้นมะระ #เกษตรอินทรีย์ #ไฮโดรโปนิกส์"))) {
            pub_topic("test",iii);
          } else {
            Serial.println("กรุณาใส่ชนิดเกษตรและรายละเอียดของคุณ");
          }
          iii = iii + 1;
  Serial.println(iii);

  loop_chipid();
}
