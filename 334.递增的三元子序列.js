/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let a = Number.MAX_SAFE_INTEGER;
  let b = Number.MAX_SAFE_INTEGER;

  for (let i =0; i < nums.length; i++) {
    if (nums[i] <= a) {
      a = nums[i];
    } else if (nums[i] <= b) {
      b = nums[i];
    } else {
      return true;
    }
  }

  return false
};
// @lc code=end

