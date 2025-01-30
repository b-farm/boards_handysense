#include <HandySense.h>
#include <Arduino.h>
#include <WiFi.h>
#include <Wire.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include "time.h"

#include "AiEsp32RotaryEncoder.h"
#include "BFarmEvent.h"

void SwingUp();
int Current_position;
Number angle_vel;
int angle;
int m_direction;
Number state;
Number EnablePendulum;
int SwingUp2;
Number test123;
Number angle_old;
Number Motor_Speed;
Number Motor_Max_Swing;
int SwingPendulum;
int motor_PWM;
int angle_PWM;
Number pos_count;
int pos_t1;
int pos_t2;
int pos_t3;
int position_PWM;
Number position_Int;
int Position_KP;
int position_KI;
int position_KD;
Boolean temp;
Number target_position;
Number Pen_Swing;
AiEsp32RotaryEncoder rotaryEncoder1 = AiEsp32RotaryEncoder( 36, 39, 13, -1, 1 );
// begin Encoder1
long PosEncoder1;
void IRAM_ATTR readEncoder1_ISR() {
rotaryEncoder1.readEncoder_ISR(); }
// end 1
AiEsp32RotaryEncoder rotaryEncoder2 = AiEsp32RotaryEncoder( 34, 35, 15, -1, 1 );
// begin Encoder2
long PosEncoder2;
void IRAM_ATTR readEncoder2_ISR() {
rotaryEncoder2.readEncoder_ISR(); }
// end 2
// Start Motor1 PWM Function
int motor1_write_pwm(int value1_input) {
int value1_dir = 0;
if (value1_input > 0) value1_dir=0; else value1_dir= 1;
ledcWrite( 1, fabs(value1_input) );
digitalWrite( 23, value1_dir );
return value1_dir; }
// End. Motor1 PWM
//Start PID2 Program
long currentTime2,previousTime2,elapsedTime2;
double PID_out2,error2,cumError2,rateError2,lastError2;
int compute_PID2(int value_input, int value_setpoint) {
currentTime2 = millis();
//get current time
elapsedTime2 = (double)(currentTime2 - previousTime2);
//compute time elapsed from previous computation
error2 = value_setpoint - value_input; // determine error
cumError2 += error2 * elapsedTime2; // compute integral
rateError2 = (error2 - lastError2) / elapsedTime2; // compute derivative
double out = (2000 * error2)/10 + (0 * cumError2)/10 + (2000 * rateError2)/10; //PID output
lastError2 = error2; //remember current error
previousTime2 = currentTime2;  //remember current time
PID_out2 = out; //remember current time
return round(PID_out2); }//remember current time
// End PID Program
//Start PID1 Program
long currentTime1,previousTime1,elapsedTime1;
double PID_out1,error1,cumError1,rateError1,lastError1;
int compute_PID1(int value_input, int value_setpoint) {
currentTime1 = millis();
elapsedTime1 = (double)(currentTime1 - previousTime1);
//error1 = value_setpoint - value_input; // determine error
error1 = ((value_setpoint - value_input) * 0.8) + ((0 - value_input) * 0.2) ; // error with 1st order
cumError1 += error1 * elapsedTime1; // compute integral
rateError1 = (error1 - lastError1) / elapsedTime1; // compute derivative
double out = (500 * error1)/1000 + (0 * cumError1)/100 + (5000 * rateError1)/100; //PID output
lastError1 = error1; //remember current error
previousTime1 = currentTime1;  //remember current time
PID_out1 = out; //remember current time
return round(PID_out1); }//remember current time
// End PID1 Program
BFarmEvent bfarmevt;

void SwingUp(){
          if (state == 0) {
    m_direction = (motor1_write_pwm(Motor_Speed));
    state = state + 1;
  } else if (state == 1) {
    if (Current_position > Motor_Max_Swing) {
      m_direction = (motor1_write_pwm(0));
      if (angle_vel > 0) {
        state = state + 1;
      }
    }
  } else if (state == 2) {
    if (angle_vel < 0) {
      m_direction = (motor1_write_pwm((-1 * Motor_Speed)));
      state = state + 1;
    }
  } else if (state == 3) {
    if (Current_position < -1 * Motor_Max_Swing) {
      m_direction = (motor1_write_pwm(0));
      if (angle_vel < 0) {
        state = state + 1;
      }
    }
  } else if (state == 4) {
    if (angle_vel > 0) {
      m_direction = (motor1_write_pwm(Motor_Speed));
      state = state + 1;
    }
  } else if (state == 5) {
    if (Current_position > Motor_Max_Swing) {
      m_direction = (motor1_write_pwm(0));
      state = state + 1;
    }
  } else if (state == 6) {
    if (angle_vel < 0) {
      m_direction = (motor1_write_pwm((-1 * Motor_Speed)));
      state = state + 1;
    }
  } else {
    if ((Current_position < 0) || ((angle >= 1300) && (angle <= 1100))) {
      m_direction = (motor1_write_pwm(0));
      state = 0;
      SwingPendulum = 0;
      EnablePendulum = 1;
    }
  }

          return;

}

void setup()
{
  // begin Encoder1
rotaryEncoder1.begin();
rotaryEncoder1.setup(readEncoder1_ISR);
rotaryEncoder1.disableAcceleration();
rotaryEncoder1.setBoundaries(-100000, 100000, false);
// end 1
// begin Encoder2
rotaryEncoder2.begin();
rotaryEncoder2.setup(readEncoder2_ISR);
rotaryEncoder2.setAcceleration(0);
//rotaryEncoder2.disableAcceleration();
rotaryEncoder2.setBoundaries(0, 2400, true);
// end 2
// Start Motor1 PWM
ledcSetup( 1, 1000, 10 );
ledcAttachPin(19, 1);
pinMode(19, OUTPUT);
pinMode(23, OUTPUT);
// End. Motor1 PWM
  test123 = 0;
  Serial.begin(115200);

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        


      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

    pinMode(18,OUTPUT);
  EnablePendulum = 0;
  target_position = 0;
  Motor_Speed = 1023;
  Motor_Max_Swing = 11000;
  Pen_Swing = 1000;
  state = 0;
bfarmevt.attach("MyJob2",BFarmEventType::EVERY,
  [](){
      Current_position = (rotaryEncoder1.readEncoder());
  angle = (rotaryEncoder2.readEncoder());
  angle_vel = angle - angle_old;
  angle_old = angle;
  if ((Current_position < -22000) || (Current_position > 22000)) {
    EnablePendulum = 0;
  } else {
    if ((angle >= 1000) && (angle <= 1400)) {
      angle_PWM = (compute_PID2(angle, 1200));
    } else {
      angle_PWM = 0;
      EnablePendulum = 0;
    }
    if (pos_count > 4) {
      position_PWM = (compute_PID1(Current_position, 0));
      pos_count = 0;
    }
  }
  pos_count = pos_count + 1;
  motor_PWM = angle_PWM - position_PWM;
  if (motor_PWM < -1023) {
    position_Int = -1023;
  }
  if (motor_PWM > 1023) {
    position_Int = 1023;
  }
  if (EnablePendulum == 1) {
    m_direction = (motor1_write_pwm(motor_PWM));
  } else if (SwingPendulum == 1) {
    SwingUp();
  } else {
    m_direction = (motor1_write_pwm(0));
  }
  if (temp) {
    digitalWrite(18,1);
    temp = !temp;
  } else {
    digitalWrite(18,0);
    temp = !temp;
  }

  },5);
}
void loop()
{
  /**
 * Describe this function...
 */
  if (EnablePendulum == 0) {
    if ((angle >= 1180) && (angle <= 1220)) {
      EnablePendulum = 1;
      SwingPendulum = 0;
    }
  }
  if (digitalRead(0) == 0) {
    SwingUp2 = SwingUp2 + 1;
  } else {
    if (SwingUp2 > 3) {
      EnablePendulum = 0;
      SwingUp2 = 0;
      SwingPendulum = 1;
    } else {
      SwingUp2 = 0;
    }
  }
  Serial.println(((String("")+String(EnablePendulum)+String("  : M{{ ")+String(motor_PWM)+String(" }} III A[ ")+String(angle)+String(" ] => {  ")+String(angle_PWM)+String(" } III P[ ")+String(Current_position)+String(" ] (")+String(pos_count)+String(") : ")+String(pos_t1)+String("  //  ")+String(pos_t2)+String("  //  ")+String(pos_t3)+String(" => p{ ")+String(position_PWM)+String(" } ")+String(SwingPendulum)+String(state)+String(":")+String(angle_vel))));
angle_vel > 0;
0;

  
}
