#include <WiFi.h>
#include <time.h>
#include <HTTPClient.h>
uint32_t chipId = 0;
uint32_t previousMillis = 0;
const char *serverName = "https://bfarm-api.vercel.app/macid";

void setup_chipid(const char *message)
{
    const long gmtOffset_sec = 7 * 3600;
    const int daylightOffset_sec = 0;
    configTime(gmtOffset_sec, daylightOffset_sec, "pool.ntp.org");

    struct tm timeinfo;
    if (!getLocalTime(&timeinfo))
    {
        Serial.println("Failed to obtain time");
        return;
    }
    Serial.println(&timeinfo, "Current time: %Y-%m-%d-%H-%M-%S");
    char timeString[64];
    strftime(timeString, sizeof(timeString), "%Y-%m-%d-%H-%M-%S", &timeinfo);
    Serial.println(timeString);

    HTTPClient http;

    http.begin(serverName);
    http.addHeader("Content-Type", "application/json");

    for (int i = 0; i < 17; i = i + 8)
    {
        chipId |= ((ESP.getEfuseMac() >> (40 - i)) & 0xff) << i;
    }
    String jsonData = "{\"chip_id\": \"" + String(chipId) + "\", \"time\": \"" + String(timeString) + "\", \"email\": \"" + String(message) + "\"}";
    int httpResponseCode = http.POST(jsonData);
    if (httpResponseCode > 0)
    {
        String response = http.getString();
        Serial.println(httpResponseCode);
        Serial.println(response);
    }
    else
    {
        Serial.print("Error on sending POST: ");
        Serial.println(httpResponseCode);
    }
    http.end();
}

void loop_chipid(const char *message)
{
    const long interval = 3600000; // Interval at which to print timestamp (1 hour in milliseconds)

    unsigned long currentMillis = millis();

    if (currentMillis - previousMillis >= interval)
    {
        previousMillis = currentMillis;

        const long gmtOffset_sec = 7 * 3600;
        const int daylightOffset_sec = 0;
        configTime(gmtOffset_sec, daylightOffset_sec, "pool.ntp.org");
        struct tm timeinfo;
        if (getLocalTime(&timeinfo))
        {
            char timeString[64];
            strftime(timeString, sizeof(timeString), "%Y-%m-%d-%H-%M-%S", &timeinfo);
            Serial.println(timeString);

            HTTPClient http;

            http.begin(serverName);
            http.addHeader("Content-Type", "application/json");

            for (int i = 0; i < 17; i = i + 8)
            {
                chipId |= ((ESP.getEfuseMac() >> (40 - i)) & 0xff) << i;
            }
            String jsonData = "{\"chip_id\": \"" + String(chipId) + "\", \"time\": \"" + String(timeString) + "\", \"email\": \"" + String(message) + "\"}";
            int httpResponseCode = http.POST(jsonData);
            if (httpResponseCode > 0)
            {
                String response = http.getString();
                Serial.println(httpResponseCode);
                Serial.println(response);
            }
            else
            {
                Serial.print("Error on sending POST: ");
                Serial.println(httpResponseCode);
            }
            http.end();
        }
    }
}

void get_chipid(const char *message)
{
    const long gmtOffset_sec = 7 * 3600;
    const int daylightOffset_sec = 0;
    configTime(gmtOffset_sec, daylightOffset_sec, "pool.ntp.org");
    struct tm timeinfo;
    if (getLocalTime(&timeinfo))
    {
        char timeString[64];
        strftime(timeString, sizeof(timeString), "%Y-%m-%d-%H-%M-%S", &timeinfo);
        Serial.println(timeString);

        HTTPClient http;

        http.begin(serverName);
        http.addHeader("Content-Type", "application/json");

        for (int i = 0; i < 17; i = i + 8)
        {
            chipId |= ((ESP.getEfuseMac() >> (40 - i)) & 0xff) << i;
        }
        String jsonData = "{\"chip_id\": \"" + String(chipId) + "\", \"time\": \"" + String(timeString) + "\", \"email\": \"" + String(message) + "\"}";
        int httpResponseCode = http.POST(jsonData);
        if (httpResponseCode > 0)
        {
            String response = http.getString();
            Serial.println(httpResponseCode);
            Serial.println(response);
        }
        else
        {
            Serial.print("Error on sending POST: ");
            Serial.println(httpResponseCode);
        }
        http.end();
    }
}
