// ==============> file  to show bubble sorting <==============

let bubbleSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
const arr = [3, 1, 5, 5, 7, 3, 8, 3, 64, 67, 3, 8, 2, 5];
const result = bubbleSort(arr);
console.log(result);
