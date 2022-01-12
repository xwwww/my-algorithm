/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  function dfs(index, nextIndex) {
    if (nextIndex === num.length) {
      return true
    }

    let result = false

    for(let i = index + 1; i < num.length; i++) {
      let item1 = num.slice(index, i);
      if (item1.length > 1 && item1[0] == '0') {
        continue
      }

      for (let j = i +1; j < num.length; j++) {
        let item2 = num.slice(i, j);
        if (item2.length > 1 && item2[0] == '0') {
          continue
        }

        for (let k = j + 1; k <= num.length; k++) {
          let item3 = num.slice(j, k);
          if (item3.length > 1 && item3[0] == '0') {
            continue
          }
          console.log(item1, item2, item3)
          if (parseInt(item1) + parseInt(item2) === parseInt(item3)) {
            result = result || dfs(i, k)
          }
        }
      }
    }
    console.log(index, result)
    return result
  }

  return dfs(0, 0);
};
// @lc code=end

console.log(isAdditiveNumber('199100199'))

