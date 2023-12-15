// =====>Remove One Element to Make the Array Strictly Increasing <=====================

var canBeIncreasing = function (nums) {
  let cnt = 0;
  for (let i = 1; i < nums.length && cnt < 2; i++) {
    if (nums[i - 1] >= nums[i]) {
      cnt++;
      if (i > 1 && nums[i - 2] >= nums[i]) {
        nums[i] = nums[i - 1];
      }
    }
  }

  return cnt < 2;
};
const nums = [1, 2, 10, 3, 4];
const result = canBeIncreasing(nums);
console.log(result);
