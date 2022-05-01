var swapPairs = function(head) {
    let keephead={} //用来保存head
    keephead.next = head;
    let pre = keephead; //pre也同时指向head
    while(pre.next&& pre.next.next){//pre.next 和 pre.next.next是要被交换的
       let a = pre.next;
       let b = pre.next.next;
       let c = pre.next.next.next;
       pre.next = b;
       b.next = a;
       a.next = c;
       pre = pre.next.next;
    }
    return keephead.next;
};
1的位置是head
0  1 2 3
pre a b c
上述操作之后为 0 2 1 3


其他答案
var swapPairs = function(head) {
    let node={}
    node.next = head;
    let current = node
    while(current.next&&current.next.next){//cur.next 和 cur.next.next是要被交换的
        var a = current.next
        var b = a.next
        current.next = b //以下三步为交换指向
        a.next = b.next
        b.next = a
        current = current.next.next //向后跳两位
    }
    return node.next
};


var swapPairs = function(head) {
  let prev = {};
  const root = prev;//保存head
  prev.next = head;
  while (prev.next && prev.next.next) {//pre.next 和 pre.next.next是要被交换的
    let a = prev.next;
    let b = a.next;//相当于cur = head
    let c = a.next.next;//保存这2个之后的结点
    prev.next = b;
    b.next = a;
    a.next = c;
    prev = a;
  }
  return root.next;
};
1的位置是head
0  1 2 3
pre a b c
上述操作之后为 0 2 1 3
