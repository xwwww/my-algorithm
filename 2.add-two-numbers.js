/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1 || !l2) {
        return
    }

    let node = new ListNode(0)
    let carry = 0

    let tmp1 = l1
    let tmp2 = l2
    let tmp = node

    while(tmp1 || tmp2) {
        let val1 = tmp1 && tmp1.val || 0
        let val2 = tmp2 && tmp2.val || 0
        let sum = val1 + val2 + carry
        carry = sum >= 10 ? 1 : 0
        let newNode = new ListNode(sum % 10)
        tmp.next = newNode
        tmp = tmp.next

        if (tmp1) {
            tmp1 = tmp1.next
        }

        if (tmp2) {
            tmp2 = tmp2.next
        }
    }

    if (carry > 0) {
        tmp.next = new ListNode(carry)
    } 
    return node.next
};
// @lc code=end
