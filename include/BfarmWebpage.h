#ifndef BFARM_WEBPAGE_H
#define BFARM_WEBPAGE_H

#include <WebServer.h>
#include <Preferences.h>

class BfarmWebpage {
public:
  BfarmWebpage(WebServer& server);
  void begin();

private:
  WebServer& _server;
  Preferences _prefs;
  
  // Variables for connection testing
  bool isTestingConnection = false;
  unsigned long testStartTime = 0;

  // HTML Content
  static const char* indexHtml;

  // Handlers
  void handleRoot();      
  void handleScan();      
  void handleSave();      
  void handleGetStatus(); 
  void handleCheckConnect();
};

#endif