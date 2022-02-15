/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var first = 0;
  var last = nums.length - 1;
  
  while(first <= last) {
    var middle = Math.floor((first + last) / 2);

    if (target === nums[middle]) {
      return middle
    } else if (nums[middle] < nums[last]) {
      if (nums[middle] < target && target <=nums[last]) {
        first = middle +1;
      } else {
        last = middle -1;
      }
    } else {
      if (nums[first] <= target && target < nums[middle]) {
        last = middle - 1;
      } else {
        first = middle + 1;
      }
    }
  }
  return -1;
};
// @lc code=end
console.log(search([4,5,6,7,0,1,2], 0))

