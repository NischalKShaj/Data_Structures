// program to find the middle index of an array

var findMiddleIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let leftSum = i==0?0:nums.slice(0,i).reduce((p, c) => p + c);
    let rightSum = i===nums.length-1?0:nums.slice(i+1).reduce((p, c) => p + c);
    console.log(rightSum,leftSum);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};
const nums = [2, 3, -1, 8, 4];
const result = findMiddleIndex(nums);
console.log(result);