let sort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (j = i + 1; j < arr.length; j++) {
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
const arr = [16, 7, 4, 7, 4, 2];
const result = sort(arr);
console.log(result);
