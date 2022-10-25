// Bubble sort algoritham in C++

#include <iostream>
using namespace std;

void bubbleSort(int array[], int size) {

  for (int step = 0; step < size; ++step) {
      
    for (int i = 0; i < size - step; ++i) {

      if (array[i] > array[i + 1]) {

        int temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
}

void printArray(int array[], int size) {
  for (int i = 0; i < size; ++i) {
    cout << "  " << array[i];
  }
  cout << "\n";
}

int main() {
  int data[] = {5, 75, 33, 21, -4};
  
  int size = sizeof(data) / sizeof(data[0]);
  
  bubbleSort(data, size);
  
  cout << "Sorted Data in Ascending Order:\n";  
  printArray(data, size);
}