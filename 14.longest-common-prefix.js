/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) {
    return 0
  }
  let result = strs[0]

  for (let i = 1; i < strs.length; i++) {
    let str = strs[i]
    if (!str) {
      result = ''
    }
    while(str) {
      if (!str.startsWith(result)) {
        result = result.slice(0, result.length - 1)
      } else {
        break
      }
    }
  }

  return result
};
// @lc code=end
console.log(longestCommonPrefix(["flower","fkow"]))