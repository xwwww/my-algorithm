/*
 * @lc app=leetcode.cn id=838 lang=javascript
 *
 * [838] 推多米诺
 */

// @lc code=start
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  let arr = [];
  let tmp = '';
  for (let char of dominoes) {
    if (char === '.') {
      arr.push('.');
    } else if (char === 'R') {
      tmp += (arr[0] || '').repeat(arr.length);
      arr = ['R']
    } else {
      if (arr[0] === 'R') {
        let countPoint = arr.length - 1;
        let countHalf = Math.floor(countPoint / 2);
        tmp += 'R'.repeat(countHalf + 1)
        tmp += '.'.repeat(countPoint & 1)
        tmp += 'L'.repeat(countHalf + 1)
        arr.length = 0
      } else {
        tmp += 'L'.repeat(arr.length + 1)
        arr.length = 0
      }
    }
  }

  tmp += arr[0] === 'R' ? 'R'.repeat(arr.length) : arr.join('')
	return tmp

};
// @lc code=end
console.log(pushDominoes("L.R...LR..L.."))

