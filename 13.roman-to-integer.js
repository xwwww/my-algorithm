/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = new Map([
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000]
  ])

  const array = s.split('')
  let result = 0
  for (let i = array.length - 1; i >= 0; i--) {
    if (map.has(array[i-1] + array[i] )) {
      result += map.get(array[i-1] + array[i] )
      i--
    } else {
      result += map.get(array[i])
    }
  }

  return result
};
// @lc code=end
console.log(romanToInt('IV'))