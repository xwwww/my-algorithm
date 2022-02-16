/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length -1;
  let result = [-1, -1];

  if (nums.length === 0) {
    return result;
  }

  while(left < right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] >= target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  if (nums[right] !== target) {
    return result;
  }

  result[0] = right;

  left = right;

  right = nums.length - 1;

  while(left < right) {
    let middle = Math.ceil((left + right) / 2);

    if (nums[middle] <= target) {
      left = middle;
    } else {
      right = middle - 1;
    }
  }

  result[1] = right;

  return result;
};
// @lc code=end

console.log(searchRange([5,6,7,8, 8, 10], 8))