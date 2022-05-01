In this solution, rev and orig are both strings,
so addition is working to append the values to the strings
instead of evaluating them. orig += current.val will add the
current value to the end of whatever the string is at the time,
whereas rev = current.val + rev is taking the current value and
adding whatever the string is at the time after it. Doing this is building the list as a string forwards (orig) and backwards (rev). If it is a palindrome, it will equate to the same string at the end.

I think it makes a little more sense what is happening on
non-palindromes. so if the input is [1,2,2,3], each loop would
look like:

orig = "1", "12", "122", "1223"
rev = "1", "21", "221", "3221"

转化成字符转比较问题。

var isPalindrome = function(head) {
    let current = head;
    let orig = "";
    let rev = "";
    while (current) {
        orig += current.val;
        rev = current.val + rev
        current = current.next
    }

    return orig === rev
};



解法二
通过 快、慢指针找链表中点，然后反转链表，比较两个链表两侧是否相等，
来判断是否是回文链表
/**
  *
  */
var isPalindrome = function(head) {
    // 反转 slower 链表
    let right = reverse(findCenter(head));
    let left = head;
    // 开始比较
    while (right != null) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.next;
        right = right.next;
    }
    return true;
}

function reverse(head) {
    let prev = null, cur = head, nxt = head;
    while (cur != null) {
        nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }
    return prev;
}
