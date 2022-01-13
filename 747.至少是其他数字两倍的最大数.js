/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  if (nums.length === 1) {
    return 0
  }

  let max = 0;
  let mid = 0;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      mid = max;
      max = nums[i];
      index = i;
    } else if (nums[i] >= mid) {
      mid = nums[i];
    }
    console.log(nums[i], max, mid)
  }

  if (max >= mid * 2) {
    return index
  }

  return -1;
};
// @lc code=end

console.log(dominantIndex([0,0,3,2]))
