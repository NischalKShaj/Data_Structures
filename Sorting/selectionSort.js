// ===========================> file to show selection sort <==========================

let selectionSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
};
const arr = [6, 4, 7, 1];
const result = selectionSort(arr);
console.log(result);
