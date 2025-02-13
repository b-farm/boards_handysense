#ifndef STATISTICS_H
#define STATISTICS_H

class Statistics {
public:
    static double max(double* arr, int size);
    static double min(double* arr, int size);
    static double median(double* arr, int size);
    static double average(double* arr, int size);
};

#endif // STATISTICS_H
