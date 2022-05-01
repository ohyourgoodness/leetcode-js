


官方
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }

    const dummy = {};
    dummy.next = head;

    let cur = dummy;
    
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            const x = cur.next.val;
            while (cur.next && cur.next.val === x) {
                cur.next = cur.next.next;//相当于去掉了cur.next
            }
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};
