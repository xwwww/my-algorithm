/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const map = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ])
  console.log(map)
  let result = []
  while(num) {
    for (let key of map.keys()) {
      console.log(key, map.get(key), num)
      if (num >= key) {
        result.push(map.get(key))
        
        num = num - key

        break
      }
    }
  }

  return result.join('')

};
// @lc code=end
console.log(intToRoman(20))