// =====================> file to find the value in array using recursion in binary search <=======================

let binarySearchRecursive = function (arr, value, start, end) {
  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] > value) {
      return binarySearchRecursive(arr, value, start, middle - 1);
    } else if (arr[middle] < value) {
      return binarySearchRecursive(arr, value, middle + 1, end);
    }
  }
  return -1;
};
const arr = [1, 2, 3, 4, 5, 6, 7];
const value = 10;
const result = binarySearchRecursive(arr, value, 0, arr.length - 1);

if (result !== -1) {
  console.log(`The value is found at the index ${result}`);
} else {
  console.log("The value is not found");
}
