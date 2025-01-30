#ifndef _HEATERCONTROL_H
#define _HEATERCONTROL_H

#include <ModbusRTUMaster.h>


class HeaterControl {
  public:
    HeaterControl();
    void init();
    void setOffMode();
    void setFixMode(unsigned int percent);
    void setSaturationMode(float actualTemp, float offThreshold, float onThreshold);
    void setPIDMode(float actualTemp, float settingTemp, float gainP, float gainI, float gainD);
    void readStatus();
    unsigned int getRunningMode();
    unsigned int getRunningPercent();

  private:
    struct {
      unsigned int mode;
      unsigned int percent;
      float actualTemp, settingTemp;
      float offThreshold, onThreshold;
      float gainP, gainI, gainD;
    } setting, running;

  protected:
    uint16_t holdingRegisters[6];
    uint16_t inputRegisters[20];
};

extern HeaterControl heaterControl;
extern ModbusRTUMaster modbus;

#endif /* _HEATERCONTROL_H */
