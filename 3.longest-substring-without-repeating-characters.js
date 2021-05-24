/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let tmp = ''
    const arr = []
    if (s.length <= 1) {
        return s.length
    }
    for (let i = 0; i < s.length; i++) {
        tmp += s.charAt(i)
        console.log(s.charAt(i), s.charAt(i+1), tmp.indexOf(s.charAt(i+1)))
        let index = tmp.indexOf(s.charAt(i+1))
        if (s.charAt(i+1) && s.charAt(i) === s.charAt(i+1) || index > -1) {
            arr.push(tmp)
            tmp = tmp.slice(index+1)
        }
    }
    console.log(arr)
    let max = 0
    for (let j = 0; j < arr.length; j ++) {
        max = Math.max(arr[j].length, max)
    }

    return max
};
// @lc code=end
console.log(lengthOfLongestSubstring('pwwkbe'))