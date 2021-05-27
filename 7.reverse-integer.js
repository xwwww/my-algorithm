/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = 0
   
    while (x) {
        num = num * 10 + x % 10
        x = x >= 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
        if (num > 2147483647 || num < -2147483648) { // 32 位长度
            return 0
        }
    }
    
    return num
};
// @lc code=end
