/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var max = 2147483647;
  var min = -2147483648;
  if (dividend == 0) {
    return 0;
}
if (dividend == min && divisor == -1) {
  return max;
}
if (dividend == min && divisor == 1) {
  return min;
}
var negative;
negative = (dividend ^ divisor) < 0;
var tmp = Math.abs(dividend);
var d= Math.abs(divisor);
var result = 0;
for (var i = 31; i >= 0;i--) {
  console.log(tmp, i, tmp >> i)
  if ((tmp>>i) >= d) {
    result += 1<<i;
    tmp -= d<<i;
  }
}

console.log(result)
return negative ? -result : result;
};
// @lc code=end
divide(-2147483648, 2)

