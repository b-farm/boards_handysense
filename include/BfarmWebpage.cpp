#include "BfarmWebpage.h"
#include <WiFi.h>

BfarmWebpage::BfarmWebpage(WebServer& server) : _server(server) {}

void BfarmWebpage::begin() {
  _prefs.begin("device_prefs", false);
  _server.on("/", HTTP_GET, [this]() { handleRoot(); });
  _server.on("/scan", HTTP_GET, [this]() { handleScan(); });
  _server.on("/save", HTTP_POST, [this]() { handleSave(); });
  _server.on("/status", HTTP_GET, [this]() { handleGetStatus(); });
  _server.on("/check_connect", HTTP_GET, [this]() { handleCheckConnect(); });

  _server.begin();
}

void BfarmWebpage::handleRoot() {
  Serial.println("(WEB) Client accessed Root page (/)");
  _server.send(200, "text/html", indexHtml);
}

void BfarmWebpage::handleGetStatus() {
  String savedSSID = _prefs.getString("wifi_ssid", "None");
  String json = "{\"ssid\":\"" + savedSSID + "\"}";
  _server.send(200, "application/json", json);
}

void BfarmWebpage::handleScan() {
  Serial.println("(WEB) Scan Requested. Scanning networks...");
  int n = WiFi.scanNetworks();
  Serial.print("(WEB) Scan Complete. Found: ");
  Serial.println(n);

  String json = "[";
  for (int i = 0; i < n; ++i) {
    if (i) json += ",";
    json += "{";
    json += "\"ssid\":\"" + WiFi.SSID(i) + "\",";
    json += "\"rssi\":" + String(WiFi.RSSI(i)) + ",";
    json += "\"secure\":" + String(WiFi.encryptionType(i) != WIFI_AUTH_OPEN ? "true" : "false");
    json += "}";
  }
  json += "]";
  _server.send(200, "application/json", json);
}

void BfarmWebpage::handleSave() {
  if (_server.hasArg("ssid") && _server.hasArg("pass")) {
    String ssid = _server.arg("ssid");
    String pass = _server.arg("pass");

    Serial.println("(WEB) Save Requested.");
    Serial.println("(WEB) SSID: " + ssid);
    Serial.println("(WEB) Pass: ********");

    _prefs.putString("wifi_ssid", ssid);
    _prefs.putString("wifi_pass", pass);
    
    Serial.println("(WEB) Switching to AP+STA mode to verify credentials...");
    WiFi.mode(WIFI_AP_STA);
    WiFi.begin(ssid.c_str(), pass.c_str());
    
    isTestingConnection = true;
    testStartTime = millis();

    _server.send(200, "application/json", "{\"status\":\"testing\"}");
  } else {
    Serial.println("(WEB) Save Error: Missing fields");
    _server.send(400, "application/json", "{\"status\":\"error\", \"message\":\"Missing fields\"}");
  }
}

void BfarmWebpage::handleCheckConnect() {
  if (!isTestingConnection) {
    _server.send(200, "application/json", "{\"status\":\"idle\"}");
    return;
  }

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("(WEB) Verification SUCCESS! Connected to router.");
    Serial.print("(WEB) New IP: ");
    Serial.println(WiFi.localIP());
    
    isTestingConnection = false;
    _server.send(200, "application/json", "{\"status\":\"connected\", \"ip\":\"" + WiFi.localIP().toString() + "\"}");
    
    Serial.println("(WEB) Sending Success response and Restarting...");
    delay(500);
    ESP.restart(); 
  } 
  else if (millis() - testStartTime > 15000) { 
    Serial.println("(WEB) Verification FAILED. Timeout/Wrong Password.");
    isTestingConnection = false;
    WiFi.disconnect(); 
    _server.send(200, "application/json", "{\"status\":\"failed\"}");
  } 
  else {
    _server.send(200, "application/json", "{\"status\":\"trying\"}");
  }
}

// --- Frontend Code ---
const char* BfarmWebpage::indexHtml = R"rawliteral(
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>B-Farm WiFi Manager</title>
  <style>
    :root {
      --primary: #3CB371;
      --primary-hover: #2E8B57;
      --bg-gradient: linear-gradient(135deg, #69BE53 0%, #32A281 100%);
      --card-bg: rgba(255, 255, 255, 0.96);
      --text: #1f2937;
      --text-light: #6b7280;
    }
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body { 
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg-gradient); 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      padding: 20px; 
      color: var(--text);
    }

    .container { 
      background: var(--card-bg); 
      width: 100%; 
      max-width: 400px; 
      border-radius: 20px; 
      padding: 32px; 
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); 
      position: relative; 
      backdrop-filter: blur(10px);
    }
    
    h2 { 
      text-align: center; 
      color: #333; 
      margin-bottom: 24px; 
      font-weight: 800;
      font-size: 1.6rem;
      letter-spacing: -0.5px;
    }
    
    label { 
      display: block; 
      margin: 16px 0 6px; 
      font-weight: 600; 
      font-size: 0.9rem; 
      color: #4b5563;
    }

    .password-container {
      position: relative;
    }

    .toggle-password {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #6b7280;
      font-size: 0.9rem;
      user-select: none;
      background: none;
      border: none;
      padding: 0;
      margin: 0;
    }

    .toggle-password:hover {
      color: var(--primary);
    }
    
    input { 
      width: 100%; 
      padding: 12px 16px; 
      border: 2px solid #e5e7eb; 
      border-radius: 12px; 
      font-size: 1rem;
      transition: all 0.3s ease;
      background: #f9fafb;
    }

    input:focus {
      outline: none;
      border-color: var(--primary);
      background: white;
      box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
    }
    
    button { 
      width: 100%; 
      padding: 14px; 
      border: none; 
      border-radius: 12px; 
      font-weight: 700; 
      font-size: 1rem;
      cursor: pointer; 
      margin-top: 24px; 
      transition: all 0.2s ease;
      letter-spacing: 0.5px;
    }

    .btn-scan { 
      background: white; 
      color: var(--primary); 
      border: 2px solid var(--primary);
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    
    .btn-scan svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
      transition: transform 0.3s;
    }
    
    .btn-scan:hover { 
      background: #eef2ff; 
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
    }

    .btn-scan.scanning {
      background: #f3f4f6;
      border-color: #d1d5db;
      color: #6b7280;
      cursor: wait;
    }
    
    .btn-scan.scanning svg {
      animation: pulse 1s infinite;
    }

    @keyframes pulse {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    .btn-save { 
      background: var(--primary); 
      color: white; 
      box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.3);
      text-transform: uppercase;
    }
    .btn-save:hover { 
      background: var(--primary-hover); 
      transform: translateY(-2px);
      box-shadow: 0 6px 12px -1px rgba(99, 102, 241, 0.4);
    }
    .btn-save:active { transform: translateY(0); }

    #wifi-list { 
      display: none; 
      margin-top: 15px; 
      border: 1px solid #e5e7eb; 
      border-radius: 12px; 
      max-height: 200px; 
      overflow-y: auto; 
      background: white;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .wifi-item { 
      padding: 12px 16px; 
      border-bottom: 1px solid #f3f4f6; 
      cursor: pointer; 
      display: flex; 
      justify-content: space-between; 
      align-items: center;
      transition: background 0.2s;
    }
    .wifi-item:hover { background: #eff6ff; }
    .wifi-item:last-child { border-bottom: none; }
    .wifi-item span { font-weight: 600; color: #374151; }
    .wifi-item small { color: #9ca3af; }

    .overlay { 
      position: absolute; 
      top: 0; left: 0; right: 0; bottom: 0; 
      background: rgba(255,255,255,0.98); 
      border-radius: 20px; 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      justify-content: center; 
      opacity: 0; 
      pointer-events: none; 
      transition: opacity 0.3s ease; 
      z-index: 10;
      padding: 32px;
    }
    .overlay.active { opacity: 1; pointer-events: all; }
    
    .spinner { 
      width: 50px; 
      height: 50px; 
      border: 5px solid #e5e7eb; 
      border-top-color: var(--primary); 
      border-radius: 50%; 
      animation: spin 1s linear infinite; 
      margin-bottom: 24px; 
    }
    @keyframes spin { 100% { transform: rotate(360deg); } }
    
    .msg-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
    }

    .msg-box h3 { margin: 10px 0 5px; color: #111; font-size: 1.25rem; }
    .msg-box p { color: #666; font-size: 1rem; }
    .error-text { color: #ef4444 !important; }
    .success-text { color: #10b981 !important; }
    
    .icon-large { font-size: 64px; margin-bottom: 16px; display: block; line-height: 1; }
    .icon-success { color: #10b981; }
    .icon-error { color: #ef4444; }

  </style>
</head>
<body>

  <div class="container">
    <div id="overlay" class="overlay">
      <div id="loading-ui">
        <div class="spinner"></div>
        <h3>Verifying Connection...</h3>
        <p>Please wait while we test the WiFi.</p>
      </div>
      
      <div id="success-ui" class="msg-box" style="display:none;">
        <span class="icon-large icon-success">✓</span>
        <h3 class="success-text">Connected!</h3>
        <p>Credentials correct. Rebooting...</p>
      </div>

      <div id="error-ui" class="msg-box" style="display:none;">
        <span class="icon-large icon-error">✕</span>
        <h3 class="error-text">Connection Failed</h3>
        <p>Could not connect. Check password.</p>
        <button onclick="closeOverlay()" style="background:#ef4444; color:white; margin-top:20px;">Try Again</button>
      </div>
    </div>

    <h2>B-Farm WiFi Manager Setup</h2>
    
    <button type="button" class="btn-scan" onclick="scanWifi()">
        <svg viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.36-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
        </svg>
      <span>Scan for Networks</span>
    </button>
    <div id="wifi-list"></div>

    <form id="config-form" onsubmit="handleFormSubmit(event)">
      <label>SSID</label>
      <input type="text" id="ssid" name="ssid" required placeholder="Select or type SSID">
      
      <label>Password</label>
      <div class="password-container">
        <input type="password" id="pass" name="pass" placeholder="Enter WiFi Password">
        <span class="toggle-password" onclick="togglePassword()">Show</span>
      </div>

      <button type="submit" class="btn-save">Connect</button>
    </form>
  </div>

<script>
  function scanWifi() {
    const list = document.getElementById('wifi-list');
    const btn = document.querySelector('.btn-scan');
    const btnText = btn.querySelector('span');
    
    list.style.display = 'none';
    btnText.innerText = "Scanning...";
    btn.classList.add('scanning');
    btn.disabled = true;
    
    fetch('/scan').then(res => res.json()).then(data => {
      list.innerHTML = '';
      btnText.innerText = "Scan for Networks";
      btn.classList.remove('scanning');
      btn.disabled = false;
      
      list.style.display = 'block';
      data.forEach(net => {
        const div = document.createElement('div');
        div.className = 'wifi-item';
        div.innerHTML = `<span>${net.ssid}</span> <small>${net.rssi} dBm</small>`;
        div.onclick = () => { document.getElementById('ssid').value = net.ssid; list.style.display='none'; };
        list.appendChild(div);
      });
    })
    .catch(err => {
      btnText.innerText = "Scan Failed";
      btn.classList.remove('scanning');
      btn.disabled = false;
    });
  }

  function togglePassword() {
    const passInput = document.getElementById('pass');
    const toggleBtn = document.querySelector('.toggle-password');
    if (passInput.type === 'password') {
      passInput.type = 'text';
      toggleBtn.textContent = 'Hide';
    } else {
      passInput.type = 'password';
      toggleBtn.textContent = 'Show';
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const overlay = document.getElementById('overlay');
    const loading = document.getElementById('loading-ui');
    const success = document.getElementById('success-ui');
    const error = document.getElementById('error-ui');
    
    overlay.classList.add('active');
    loading.style.display = 'block';
    success.style.display = 'none';
    error.style.display = 'none';

    const formData = new FormData(document.getElementById('config-form'));
    const params = new URLSearchParams(formData);

    fetch('/save', { method: 'POST', body: params })
      .then(res => res.json())
      .then(data => {
        if(data.status === 'testing') {
          pollStatus();
        }
      });
  }

  function pollStatus() {
    const interval = setInterval(() => {
      fetch('/check_connect')
        .then(res => res.json())
        .then(data => {
          if (data.status === 'connected') {
            clearInterval(interval);
            document.getElementById('loading-ui').style.display = 'none';
            document.getElementById('success-ui').style.display = 'block';
          } else if (data.status === 'failed') {
            clearInterval(interval);
            document.getElementById('loading-ui').style.display = 'none';
            document.getElementById('error-ui').style.display = 'block';
          }
        })
        .catch(err => {
        });
    }, 1000);
  }

  function closeOverlay() {
    document.getElementById('overlay').classList.remove('active');
  }
</script>
</body>
</html>
)rawliteral";