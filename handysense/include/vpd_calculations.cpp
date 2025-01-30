#include "vpd_calculations.h"

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
