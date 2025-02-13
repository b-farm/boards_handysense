#include "Statistics.h"
#include <Arduino.h>

double Statistics::max(double* arr, int size) {
    if (size <= 0) return 0; // Return 0 for empty array (or handle error)
    
    double maxVal = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

double Statistics::min(double* arr, int size) {
    if (size <= 0) return 0; // Return 0 for empty array (or handle error)

    double minVal = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}

double Statistics::median(double* arr, int size) {
    if (size <= 0) return 0; // Return 0 for empty array (or handle error)

    // Copy the array to avoid sorting the original one
    double* sortedArr = new double[size]; // Change int to double
    for (int i = 0; i < size; i++) {
        sortedArr[i] = arr[i];
    }

    // Sort the array using a simple bubble sort (inefficient for large arrays)
    for (int i = 0; i < size - 1; i++) {
        for (int j = i + 1; j < size; j++) {
            if (sortedArr[i] > sortedArr[j]) {
                double temp = sortedArr[i];
                sortedArr[i] = sortedArr[j];
                sortedArr[j] = temp;
            }
        }
    }

    double med; // Change float to double for consistency
    if (size % 2 == 0) {
        med = (sortedArr[size / 2 - 1] + sortedArr[size / 2]) / 2.0;
    } else {
        med = sortedArr[size / 2];
    }

    delete[] sortedArr; // Free allocated memory
    return med;
}

double Statistics::average(double* arr, int size) {
    if (size <= 0) return 0; // Handle empty array
    double sum = 0.0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum / size; // Calculate average
}