/**
	Created by Yurii Salimov, February, 2018.
	Released into the public domain.
*/

#include "NTC_Thermistor.h"
#include <MCP3424.h>
MCP3424 analog3424(6);
NTC_Thermistor::NTC_Thermistor(
	const double vpp,
	const int pin,
	const double referenceResistance,
	const double nominalResistance,
	const double nominalTemperatureCelsius,
	const double bValue,
	const int adcResolution
) {
	this->vpp = vpp;
	pinMode(this->pin = pin, INPUT);
	this->referenceResistance = referenceResistance;
	this->nominalResistance = nominalResistance;
	this->nominalTemperature = celsiusToKelvins(nominalTemperatureCelsius);
	this->bValue = bValue;
	this->adcResolution = max(adcResolution, 0);
}

/**
	Reads and returns a temperature in Celsius.
	Reads the temperature in Kelvin,
	converts in Celsius and return it.

	@return temperature in Celsius.
*/
double NTC_Thermistor::readCelsius() {
	return kelvinsToCelsius(readKelvin());
//    return readVoltage();
}

/**
	Returns a temperature in Fahrenheit.
	Reads a temperature in Kelvin,
	converts in Fahrenheit and return it.

	@return temperature in Fahrenheit.
*/
double NTC_Thermistor::readFahrenheit() {
	return kelvinsToFahrenheit(readKelvin());
}

/**
	Returns a temperature in Kelvin.
	Reads the thermistor resistance,
	converts in Kelvin and return it.

	@return temperature in Kelvin.
*/
double NTC_Thermistor::readKelvin() {
	return resistanceToKelvins(readResistance());
}

inline double NTC_Thermistor::resistanceToKelvins(const double resistance) {
	const double inverseKelvin = 1.0 / this->nominalTemperature +
		log(resistance / this->nominalResistance) / this->bValue;
	return (1.0 / inverseKelvin);
}

inline double NTC_Thermistor::readResistance() {
	double resis ;
	double R_NCT ;
	double v;
	v = readVoltage();
	resis = v * this->referenceResistance / (this->vpp -v ) ;
	R_NCT = (1000+1500)* resis / ((1000+1500)-resis) ; // convert resistance r equivalent to r ntc   resis= rtc//(1500+1000) ohm
//	return this->referenceResistance / (this->adcResolution / readVoltage() - 1);
    return R_NCT;
}

inline double NTC_Thermistor::readVoltage() {
	float buffer = 0,voltage; 
	analog3424.Configuration(this->pin, 16, 0, 1);
 	analog3424.NewConversion();
	voltage = 2.5*analog3424.Measure()/1000000; // convert voltage at input pin to voltage at NTC for Handsense Pro board
	return voltage;
}

inline double NTC_Thermistor::celsiusToKelvins(const double celsius) {
	return (celsius + 273.15);
}

inline double NTC_Thermistor::kelvinsToCelsius(const double kelvins) {
	return (kelvins - 273.15);
}

inline double NTC_Thermistor::celsiusToFahrenheit(const double celsius) {
	return (celsius * 1.8 + 32);
}

/**
	Kelvin to Fahrenheit conversion:
	F = (K - 273.15) * 1.8 + 32
	Where C = (K - 273.15) is Kelvins To Celsius conversion.
	Then F = C * 1.8 + 32 is Celsius to Fahrenheit conversion.
	=> Kelvin convert to Celsius, then Celsius to Fahrenheit.
*/
inline double NTC_Thermistor::kelvinsToFahrenheit(const double kelvins) {
	return celsiusToFahrenheit(kelvinsToCelsius(kelvins));
}
