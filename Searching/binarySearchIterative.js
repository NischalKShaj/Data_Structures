// ========================> file to show binary search in an array in iterative way <============================

let binarySearchIterative = function (arr, value) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] > value) {
      end = middle - 1;
    } else if (arr[middle] < value) {
      start = middle + 1;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const value = 3;
const result = binarySearchIterative(arr, value);

if (result !== -1) {
  console.log(`The value is found at the index ${result}`);
} else {
  console.log("The value is not found");
}
