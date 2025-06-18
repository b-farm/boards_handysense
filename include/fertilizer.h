Preferences preferences;

int ADC0_value=0;
int ADC1_value=0;
int ADC2_value=0;
int ADC3_value=0;
extern int calPH4=900;
extern int calPH7=1300;
extern int calPH10=1800;
extern int calEC0=40;
extern int calEC1413=800;
extern int calEC5000=2000;
extern float calTemp=25.;
extern float PH_value=0.;
extern int EC_value=0;
extern float Temp_value=0.;

extern int PHthresh_min=600;
extern int PHthresh_max=610;
extern int ECthresh_min=1400;

extern int PHtimer_value=30;
extern int PHdura_value=10;

extern int ECtimer_value=10;
extern int ECdura_value=5;

float temp_offset = 1;

extern int total_acid=0;
extern int total_fer=0;
float Tempcompute(int ADC_value)
{

  float vin = (float)(ADC_value/1000.);
  Temp_value = (float)((-16.813*pow(vin,3)) + (72.24*pow(vin,2)) - (125.87*vin) + 90.715)+temp_offset;
  return (Temp_value);
}

float PHcompute(int ADC_value)
{
  if (ADC_value<=calPH7)
  {
    PH_value=(float)(7.0-((calPH7-ADC_value)*(3.)/(calPH7-calPH4)));
  }
  else if (ADC_value>calPH7)
  {
    PH_value=(float)(7.0+((ADC_value-calPH7)*(3.)/(calPH10-calPH7)));
  }
  if (PH_value<0)
  {
    PH_value=0;
  }
  return ((float)(PH_value));
}

float ECcompute2(int ADC_value,int adc_temp)
{
  float temp=Tempcompute(adc_temp);
  int comp_adc_ec1413= (int)(17.113*temp - 396.21);
  int comp_adc_ec5000= (int)(3.6332*temp - 90.052);
  int comp_calEC1413=calEC1413 + comp_adc_ec1413;
  int comp_calEC5000=calEC5000 + comp_adc_ec5000;


  EC_value=(int)((ADC_value-calEC0)*(1413)/(comp_calEC1413-calEC0)) ;
 
  if (EC_value<0)
  {
    EC_value=0;
  }
  return (EC_value);
}

float ECcompute(int ADC_value, float temp) {
  float dif_caltemp = 25 - calTemp;
  int comp_adc_ec1413 = (int)(17.416 * (temp + dif_caltemp) - 430.02);

  int comp_calEC1413 = calEC1413 + comp_adc_ec1413;

  float EC = 0;
  EC = (int)((ADC_value - calEC0) * (1413) / (comp_calEC1413 - calEC0));

  if (EC < 0) {
    EC = 0;
  }
  return (EC);
}


void print_config(void)
{
  char data[200];
 	sprintf(data,"Config:calTemp:%.2f calPH4:%04d calPH7:%04d calPH10:%04d calEC0:%04d calEC1413:%04d PHlower:%04d PHupper:%04d EClower:%04d PHdur:%04d ECdur:%04d",calTemp,calPH4,calPH7,calPH10,calEC0,calEC1413,PHthresh_min,PHthresh_max,ECthresh_min,PHdura_value,ECdura_value);
  Serial.println(data);
}

void load_preferences(void)
{
  //preferences.begin("credentials", false);
  if (preferences.getInt("calPH4")>0)
  {
    calTemp = preferences.getFloat("calTemp");
    calPH4=preferences.getInt("calPH4");
    calPH7=preferences.getInt("calPH7"); 
    calPH10=preferences.getInt("calPH10"); 
    calEC0=preferences.getInt("calEC0"); 
    calEC1413=preferences.getInt("calEC1413");
    calEC5000=preferences.getInt("calEC5000");  
    PHthresh_min=preferences.getInt("PHthresh_min"); 
    PHthresh_max=preferences.getInt("PHthresh_max"); 
    ECthresh_min=preferences.getInt("ECthresh_min"); 
    PHtimer_value=preferences.getInt("PHtimer_value"); 
    PHdura_value=preferences.getInt("PHdura_value");
    ECtimer_value=preferences.getInt("ECtimer_value"); 
    ECdura_value=preferences.getInt("ECdura_value");
  }
  else  //load default
  {
    preferences.putFloat("calTemp", calTemp);
    preferences.putInt("calPH4", calPH4);
    preferences.putInt("calPH7", calPH7); 
    preferences.putInt("calPH10", calPH10); 
    preferences.putInt("calEC0", calEC0); 
    preferences.putInt("calEC1413", calEC1413); 
    preferences.putInt("calEC5000", calEC5000); 
    preferences.putInt("PHthresh_min", PHthresh_min); 
    preferences.putInt("PHthresh_max", PHthresh_max); 
    preferences.putInt("ECthresh_min", ECthresh_min); 
    preferences.putInt("PHtimer_value", PHtimer_value); 
    preferences.putInt("PHdura_value", PHdura_value);
    preferences.putInt("ECtimer_value", ECtimer_value); 
    preferences.putInt("ECdura_value", ECdura_value);
  }
}

void clear_preferences(void)
{
  int icalPH4=900;
  int icalPH7=1300;
  int icalPH10=1800;
  int icalEC0=40;
  int icalEC1413=800;
  int icalEC5000=2000;

  int iPHthresh_min=600;
  int iPHthresh_max=610;
  int iECthresh_min=1400;

  int iPHtimer_value=30;
  int iPHdura_value=10;

  int iECtimer_value=10;
  int iECdura_value=5;

  float icalTemp=25.;

  //preferences.begin("credentials", false);
  preferences.putFloat("calTemp", icalTemp);
  preferences.putInt("calPH4", icalPH4);
  preferences.putInt("calPH7", icalPH7); 
  preferences.putInt("calPH10", icalPH10); 
  preferences.putInt("calEC0", icalEC0); 
  preferences.putInt("calEC1413", icalEC1413); 
  preferences.putInt("calEC5000", icalEC5000); 
  preferences.putInt("PHthresh_min", iPHthresh_min); 
  preferences.putInt("PHthresh_max", iPHthresh_max); 
  preferences.putInt("ECthresh_min", iECthresh_min); 
  preferences.putInt("PHtimer_value", iPHtimer_value); 
  preferences.putInt("PHdura_value", iPHdura_value);
  preferences.putInt("ECtimer_value", iECtimer_value); 
  preferences.putInt("ECdura_value", iECdura_value);
}

void set_preferences(void)
{
  //preferences.begin("credentials", false);
  preferences.putFloat("calTemp", calTemp);
  preferences.putInt("calPH4", calPH4);
  preferences.putInt("calPH7", calPH7); 
  preferences.putInt("calPH10", calPH10); 
  preferences.putInt("calEC0", calEC0); 
  preferences.putInt("calEC1413", calEC1413); 
  preferences.putInt("calEC5000", calEC5000); 
  preferences.putInt("PHthresh_min", PHthresh_min); 
  preferences.putInt("PHthresh_max", PHthresh_max); 
  preferences.putInt("ECthresh_min", ECthresh_min); 
  preferences.putInt("PHtimer_value", PHtimer_value); 
  preferences.putInt("PHdura_value", PHdura_value);
  preferences.putInt("ECtimer_value", ECtimer_value); 
  preferences.putInt("ECdura_value", ECdura_value);
}

