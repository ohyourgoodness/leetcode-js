/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var prev = null;
    var current = head;
    var next = null;
        while (current != null) {/*判断条件要注意，因为是head赋值给了current*/
            next = current.next;
            current.next = prev; /*当前点往前指*/
            prev = current;
            current = next;
        }
        return prev;
        //最后返回的是prev,因为链表已经被反转了，所以结尾的节点是头节点
};

var reverseList = function(head) {
   let pre = null;
   let cur = null;
   let next = head;
   while(next){
     cur = next;
     next = cur.Node; /*当前点往后指*/
     prev = cur;
   }
   return cur;
};


递归方法
var reverseList = function(head) {
  function _reverse(head) {
    // 2. 从链表倒数第二个反向向前遍历
    // 2.1 倒数第二个节点的next的next置为当前节点
    // 2.2 倒数第三个节点的next的next置为当前节点
    // ...
    // 直到第一个节点
    if (head && head.next) {
      _reverse(head.next)
      head.next.next = head
      head.next = null
    } else { // 1. 找到链表尾巴，将其作为表头
        _reverse.head = head
    }
  }
  _reverse(head)
  return _reverse.head
};
