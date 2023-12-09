// ====================> file to show the deletion of the array <=========================================

// using pop()

let arr = [1, 2, 3, 4, 5];
arr.pop(); // this deletes the value from the end

// using shift()
let arr2 = [1, 2, 3, 4, 5];
arr.shift(); //this deletes the value from the begining

// using splice()
let arr3 = [1, 2, 3, 4, 5];
arr.splice(1, 2); // this removes the number of the elements specified from the specific index that is from index 1 to 2 elements

// using delete
let arr4 = [1, 2, 3, 4, 5];
delete arr4[3]; //this removes the element from the specific index
