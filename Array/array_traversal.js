// ======================> file to show the array traversal <==================================

// using for loop
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// using for of loop
let arr1 = [1, 2, 3, 4, 4];
for (let i of arr) {
  console.log(arr1[i]);
}

// using for each loop
let arr2 = [1, 2, 3, 4, 5];
arr.forEach((value) => {
  console.log(value);
});

// using map
let arr3 = [1, 2, 3, 4, 5];
arr3.map((value) => {
  console.log(value);
});
