#include "vpd_calculate_2.h"
#include <math.h>

double vpd_result(double ta, double ha, double tl)
{
    return (vpd_leaf(tl) - vpd_air(ta, ha));
}

double vpd_air(double ta, double ha)
{
    return (2.716 * (19.017 - (5327 / (ta + 273.15))) * (ha));
}

double vpd_leaf(double tl)
{
    return (2.716 * (19.017 - (5327 / (tl + 273.15))));
}

double vpd_heatindex(double t, double h)
{
    return ((0.555555) * (-42.379 + (2.04901523 * (32 + 1.8 * t)) + (10.14333127 * h) - (0.22475541 * (32 + 1.8 * t) * h) - (0.00683783 * pow((32 + 1.8 * t), 2)) - (0.05481717 * pow(h, 2)) + (0.00122874 * pow((32 + 1.8 * t), 2) * h) + (0.00085282 * (32 + 1.8 * t) * pow(h, 2)) - (0.00000199 * pow((32 + 1.8 * t), 2) * pow(h, 2)) - 32));
}

double vpd_wbgt(double heatindex)
{
    return 0.3629 * (heatindex) + 14.7053;
}