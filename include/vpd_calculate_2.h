#ifndef VPD_CALCULATE_2_H
#define VPD_CALCULATE_2_H

#include <math.h>

double vpd_result(double ta, double ha, double tl);
double vpd_air(double ta, double ha);
double vpd_leaf(double tl);
double vpd_heatindex(double t, double h);
double vpd_wbgt(double heatindex);

#endif // VPD_CALCULATIONS_H
