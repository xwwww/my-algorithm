/*
 * @lc app=leetcode.cn id=688 lang=javascript
 *
 * [688] “马”在棋盘上的概率
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
  let dirs = [
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1]
  ]

  let map = new Map()

  const dp = (i, j, k) => {
    if (i < 0 || i >= n || j < 0 || j >= n) {
      return 0
    }

    if (k === 0) {
      return 1
    }

    let p = 0
    let key = `${i}-${j}-${k}`
    
    if (map.has(key)) {
     return map.get(key)
    }

    for (let dir of dirs) {
      p += dp(i + dir[0], j + dir[1], k-1) / 8
    }
    
    map.set(key, p)

    return p
  }

  return dp(row, column, k)

};
// @lc code=end

console.log(knightProbability(3, 2, 0, 0 ))

