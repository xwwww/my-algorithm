/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s
    }

    const arr = []
    let max = ''

    for (let i = s.length -1 ; i >= 0; i --) {
        for (let j = i; j < s.length; j++) {
            if (i === j) {
                if (!arr[i]) {
                    arr[i] = []
                }
                arr[i][j] = true
            } else if (j === i + 1) {
                arr[i][j] = s.charAt(i) === s.charAt(j)
            } else {
                arr[i][j] = s.charAt(i) === s.charAt(j) && arr[i+1][j-1]
            }

            if (arr[i][j]) {
                if (j - i + 1 >= max.length) {
                    max = s.substr(i, j-i+1)
                }
            }
        }
    }

    console.log(max)
    return max
  
};
// @lc code=end
// console.log(longestPalindrome('feirfuerfherfr'))
