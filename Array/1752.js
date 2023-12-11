// ============>Check if Array Is Sorted and Rotated<===================

var check = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }
  if (count > 1 || (count === 1 && nums[0] < nums[nums.length - 1])) {
    return false;
  }
  return true;
};
const nums = [3, 2, 5, 1, 4];
const result = check(nums);
console.log(result);