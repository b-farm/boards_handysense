#ifndef BFARM_WIFI_MANAGER_H
#define BFARM_WIFI_MANAGER_H

#include <WiFi.h>
#include <WebServer.h>
#include <Preferences.h>
#include "BfarmWebpage.h"

class BfarmWiFiManager {
public:
  BfarmWiFiManager(const char* apName, const char* apPass);
  void begin();
  void reconnect();

private:
  Preferences _prefs;
  WebServer* _server;
  BfarmWebpage* _pageHandler;

  const char* _apName;
  const char* _apPass;

  void runConfigPortal();
};

#endif