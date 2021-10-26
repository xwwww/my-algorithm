/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
  let size = nums.length;
  nums = nums.sort((a, b) => a - b)

  // 保证有正有负
  if (nums[0] <= 0 && nums[size - 1] >= 0) {
    for (let i = 0; i < size; i++) {
      if (nums[i] > 0) {
        break
      }
      let first = i +1;
      let last = size -1; 
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue
      }
      
      while (first < last) {
        let sum = nums[i] + nums[first] + nums[last]
        if (sum === 0) {
          result.push([nums[i], nums[first], nums[last]])
          while(first < last && nums[first] === nums[first +1]) {
            first ++
          }
          while(first < last && nums[last] === nums[last - 1]) {
            last --
          }
          first ++
          last --
        } else if (sum < 0) {
          first ++
        } else {
          last --
        }
      }
    } 
  }

  return result
};
// @lc code=end
console.log(threeSum([-1,0,1,2,-1,-4]))
