/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }

    for (let j = 0; j < nums.length; j++) {
        if (map[target - nums[j]] >= 0 && map[target - nums[j]] !== j) {
            return [j, map[target - nums[j]]]
        }
    }
};
// @lc code=end