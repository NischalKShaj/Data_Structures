// ============>Relative Sort Array <===================

var relativeSortArray = function (arr1, arr2) {
  //   arr1.sort((a, b) => a - b);
  let arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] == arr1[j]) {
        arr3.push(arr1[j]);
        arr1.splice(j, 1);
        j--;
      }
    }
  }
  arr1.sort((a, b) => a - b);
  return [...arr3, ...arr1];
};
const arr1 = [28, 6, 22, 8, 44, 17];
const arr2 = [22, 28, 8, 6];
const result = relativeSortArray(arr1, arr2);
console.log(result);
