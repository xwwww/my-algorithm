/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b)

  let min = 0

  let size = nums.length

  for (let i = 0; i < size; i++) {
    let first = i + 1
    let last = size -1
  }
};
// @lc code=end

