// =======================> file to show the linear search in an array <=============================

let linearSearch = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return false;
};
const arr = [1, 2, 3, 4, 5, 6];
const value = 7;
const result = linearSearch(arr, value);

if (result !== false) {
  console.log(`result found at index ${result}`);
} else {
  console.log("result not found ");
}
