
快慢指针
	快指针先跑到第n节点。
	之后，慢指针从头节点，与快指针同时走。
	快指针走到尾部，慢指针指向了倒数第n个节点

	两个重要操作
	1、遍历list
	slow = slow.next;
	2、去掉slow.next 的这结点
	slow.next = slow.next.next;//去掉了第N个结点

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var current = { val: '', next: head }
    var fast = current
    var slow = current

    for (let i = 1; i <= n + 1; i++) {
        fast = fast.next;
    }
    while (fast != null) {
        fast = fast.next;
        slow = slow.next;//是在遍历
    }
    slow.next = slow.next.next;//去掉了第N个结点
    return current.next;
}
