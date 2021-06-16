/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var max = 0

  var i = 0, j = height.length - 1

  while (i < j) {
    var area = Math.min(height[i], height[j]) * (j - i)
    
    max = Math.max(max, area)

    if (height[i] > height[j]) {
      j --
    } else {
      i ++
    }
  }
  return max
};
// @lc code=end
console.log(maxArea([1,2,1, 8, 4, 5, 15]))