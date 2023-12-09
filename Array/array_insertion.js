// ========================>file to show the insertion of element at a position <=========================

// using push
let arr = [1, 23, 3, 4, 5, 6];
arr.push(7); // adds the element at the end of the array

// using unshift()
let arr1 = [1, 2, 3, 4, 5, 6];
arr.unshift(0); //adds the element at the begining of the array

// using splice()
let arr2 = [1, 2, 3, 4, 5];
arr.splice(1, 0, 7); //add the element at the specified position  1 is the index 7 is the number and 0 shows how many numbers should be removed
