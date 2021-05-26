/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const arr = []
    let flag = -1
    let i = 0
    for (let j = 0; j < s.length; j++) {
        if (!arr[i]) {
            arr[i] = []
        }
        arr[i].push(s.charAt(j))
        if (i === 0 || i === numRows - 1) {
            flag *= -1
        }
        i += flag
    }
    let result = ''
    for (let k = 0; k < arr.length; k++) {
        result += arr[k].join('')
    }
    return result
};
// @lc code=end
convert('PAYPALISHIRING', 4)
