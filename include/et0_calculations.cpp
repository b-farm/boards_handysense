#include "et0_calculations.h"
#include <math.h>

double et0(double ra, double tc, double td)
{
    return (0.0023 * ra * (tc + 17.8) * sqrt(td));
}