/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  let num = 0, y = 0
  let pre = x;
  while(pre) {
    num = pre % 10
    y = y * 10 + num 
    pre = (pre - num) / 10
  }

  return x === y
};
// @lc code=end
