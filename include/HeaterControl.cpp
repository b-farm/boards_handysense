#include "HeaterControl.h"

ModbusRTUMaster modbus(Serial2);
HeaterControl heaterControl;

HeaterControl::HeaterControl() {
  init();
}

void HeaterControl::init() {
  setting.mode = 0;
  setting.percent = 0;
  setting.actualTemp = setting.settingTemp = 0.0;
  setting.offThreshold = setting.onThreshold = 0.0;
  setting.gainP = setting.gainI = setting.gainD = 0.0;

  running.mode = 0;
  running.percent = 0;
  running.actualTemp = running.settingTemp = 0.0;
  running.offThreshold = running.onThreshold = 0.0;
  running.gainP = running.gainI = running.gainD = 0.0;

  Serial.println("HeaterControl module initialized ...");
}

void HeaterControl::setOffMode() {
  setting.mode = 0;

  holdingRegisters[0] = setting.mode;
  modbus.writeMultipleHoldingRegisters(1, 0, holdingRegisters, 1);
}

void HeaterControl::setFixMode(unsigned int percent) {
  setting.mode = 1;
  this->setting.percent = percent < 100 ? percent : 100;

  holdingRegisters[0] = setting.mode;
  holdingRegisters[1] = this->setting.percent;
  modbus.writeMultipleHoldingRegisters(1, 0, holdingRegisters, 2);
}

void HeaterControl::setSaturationMode(float actualTemp, float offThreshold, float onThreshold) {
  setting.mode = 2;
  this->setting.actualTemp = actualTemp;
  this->setting.offThreshold = offThreshold;
  this->setting.onThreshold = onThreshold;

  holdingRegisters[0] = setting.mode;
  holdingRegisters[1] = (unsigned int) (this->setting.actualTemp * 100);
  holdingRegisters[2] = (unsigned int) (this->setting.offThreshold * 100);
  holdingRegisters[3] = (unsigned int) (this->setting.onThreshold * 100);
  modbus.writeMultipleHoldingRegisters(1, 0, holdingRegisters, 4);
}

void HeaterControl::setPIDMode(float actualTemp, float settingTemp, float gainP, float gainI, float gainD) {
  setting.mode = 3;
  this->setting.actualTemp = actualTemp;
  this->setting.settingTemp = settingTemp;
  this->setting.gainP = gainP;
  this->setting.gainI = gainI;
  this->setting.gainD = gainD;

  holdingRegisters[0] = setting.mode;
  holdingRegisters[1] = (unsigned int) (this->setting.actualTemp * 100);
  holdingRegisters[2] = (unsigned int) (this->setting.settingTemp * 100);
  holdingRegisters[3] = (unsigned int) (this->setting.gainP * 100);
  holdingRegisters[4] = (unsigned int) (this->setting.gainI * 100);
  holdingRegisters[5] = (unsigned int) (this->setting.gainD * 100);
  modbus.writeMultipleHoldingRegisters(1, 0, holdingRegisters, 6);
}

void HeaterControl::readStatus() {
  modbus.readInputRegisters(1, 0, inputRegisters, 13);
  running.mode = inputRegisters[0];
  running.percent = inputRegisters[2];

  if (running.mode > 3) running.mode = 99;
  if (running.percent > 100) running.percent = 100;
}

unsigned int HeaterControl::getRunningMode() {
  return running.mode;
}

unsigned int HeaterControl::getRunningPercent() {
  return running.percent;
}
