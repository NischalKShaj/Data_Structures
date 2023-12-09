// ========================>This file shows how to initialize and declare an array <==============================//

// using literals
let arr = [];
let arr1 = [1, 2, 3, 4, 4];

// using array contructor
let arr2 = new Array();
let arr3 = new Array(1, 2, 3, 4, 5);
let arr5 = new Array(5); // shows the length of the array

// using Array.from()
let arr4 = Array.from("Hello"); // used to create array using the iterables like string, map, set...

//using Array.of()
let arr6 = Array.of(1, 2, 3, 4); // A set of elements to include in the new array object, and creating an array using specific value

// taking user values from the user
const readline = require("readline-sync");

let length = readline.questionInt("Enter the length of the array");
let arr7 = [];
console.log("Enter the values in the array");
for (let i = 0; i < length; i++) {
  let newArray = readline.question();
  arr7.push(newArray);
}
console.log(arr7);
