// ========>to move all the 6 to the end of the array<=================
let moveToEnd = function (arr, value) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      newArr.push(arr[i]);
    }
  }
  return newArr.concat(Array(arr.length - newArr.length).fill(value));
};
const arr = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
const value = 6;
const result = moveToEnd(arr, value);
console.log(result);
