// find the elements in the array which meet up the given sum value

let addition = function (arr, sum) {
  let array = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        array.push(arr[i], arr[j]);
      }
    }
  }
  return array;
};
const arr = [6, 5, 4, 3, 9, 8, 0];
const sum = 10;
const result = addition(arr, sum);
console.log(result);

// solving the same question with less time complexity
let add = function (arra, sums) {
  let set = new Set();
  for (let i = 0; i < arra.length; i++) {
    let diff = sums - arra[i];
    if (set.has(diff)) {
      return [diff, arra[i]];
    }
    set.add(arra[i]);
  }
};
 
const arra = [6, 5, 4, 3, 8, 9, 0];
const sums = 10;
const output = add(arra, sums);
console.log(output);
