#include "BfarmWiFiManager.h"

BfarmWiFiManager::BfarmWiFiManager(const char* apName, const char* apPass) {
  _apName = apName;
  _apPass = apPass;
  _server = nullptr;
  _pageHandler = nullptr;
}

void BfarmWiFiManager::begin() {
  Serial.begin(115200);
  _prefs.begin("device_prefs", true);
  String ssid = _prefs.getString("wifi_ssid", "");
  String pass = _prefs.getString("wifi_pass", "");
  _prefs.end();

  Serial.println("   ESP32 BOOT INFO SYSTEM       ");
  Serial.println("Saved SSID  : " + (ssid == "" ? "No SSID Saved" : ssid));

  if (ssid != "") {
    Serial.print("Connecting to: ");
    Serial.println(ssid);
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid.c_str(), pass.c_str());
    
    unsigned long startAttempt = millis();
    bool connected = false;
    
    while (millis() - startAttempt < 15000) {
      if (WiFi.status() == WL_CONNECTED) {
        connected = true;
        break;
      }
      delay(500);
      Serial.print(".");
    }
    Serial.println();
    
    if (connected) {
      Serial.println("Success! Connected.");
      Serial.print("IP Address: ");
      Serial.println(WiFi.localIP());
    } else {
      Serial.println("Connection Failed (Timeout). Launching Config Portal...");
      runConfigPortal();
    }
  } else {
    Serial.println("No Credentials found. Launching Config Portal...");
    runConfigPortal();
  }
}

void BfarmWiFiManager::runConfigPortal() {
  Serial.println("Starting Configuration Mode");
  WiFi.disconnect();
  delay(100);
  WiFi.mode(WIFI_AP);

  IPAddress local_IP(192, 168, 0, 1);
  IPAddress gateway(192, 168, 0, 1);
  IPAddress subnet(255, 255, 255, 0);
  WiFi.softAPConfig(local_IP, gateway, subnet);
  WiFi.softAP(_apName, _apPass);

  if (_server) delete _server;
  _server = new WebServer(80);
  
  if (_pageHandler) delete _pageHandler;
  _pageHandler = new BfarmWebpage(*_server);
  _pageHandler->begin();

  Serial.printf("Config Portal Started. Connect to '%s'", _apName);
  Serial.println("");
  Serial.println("IP: 192.168.0.1");

  unsigned long startTime = millis();
  while (millis() - startTime < 180000) {
    _server->handleClient();
    delay(2);
  }
  Serial.println("\nTimeout reached (3 mins). Restarting device...");
  ESP.restart();
}

void BfarmWiFiManager::reconnect() {
  if (WiFi.status() == WL_CONNECTED) return;
  
  Serial.println("\nConnection lost. Trying to reconnect...");
  WiFi.reconnect();
  unsigned long startWifiWait = millis();
  
  while (WiFi.status() != WL_CONNECTED) {
    if (millis() - startWifiWait >= 10000) {
      Serial.println("\nReconnect timeout. Launching Config Portal...");
      runConfigPortal();
      return;
    }
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nReconnected successfully.");
}