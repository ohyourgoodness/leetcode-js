K 个一组翻转链表
关键在于建立头结点：在翻转子链表的时候，我们不仅需要子链表头节点 head，还需要有 head 的上一个节点 pre，以便翻转完后把子链表再接回 pre。
pre 要永远在head之前的节点

1、找到k个节点区间，用保存prehead.next = head; nex=tail.next 来保存区间的位置，后续还得接上去
2、


* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/

//反转k个长度的node,head,tail互换
//也同样需要记录首尾
 const myReverse = (head, tail) => {
   //eg：k=3的时候，现在要reverse 1,2,3 这3个node
   //也就是要把1接到3->next,
   //所以3->next是1的prev
   let prev = tail.next; //保存tail之后的节点，

   let cur = head;
   let nex ;
   while (prev !== tail) { //条件错过
       nex = cur.next;
       cur.next = prev;
       prev = cur;
       cur = nex;
   }

  //最终只是讲tail,head结点的链接方向改变，但是tail，head结点是没有变的
  return [tail, head];
}
var reverseKGroup = function(head, k) {
  //定义一个新的结点，prehead->next 记录最初的head之前的位置，
  //保证prehead->next就是最终链表的起点
  const prehead = new ListNode(0);
  prehead.next = head;

  //定义一个新的结点，pre->next 连接head,
  //这样当head tail反转之后，才能接到原来的链表上
  let pre = prehead；

  //目前pre->next和prehead->next都是head

  while (head) {
    //1、找到k区间
      let tail = pre;//错过，从pre位置开始去找到tail
      // 查看剩余部分长度是否大于等于 k
      // 当剩余链表长度 < k个长度，证明已经到达链表末尾，返回即可
      for (let i = 0; i < k; ++i) {
          tail = tail.next;
          if (!tail) {
              return prehead.next;
          }
      }

      //保存tail后边的结点，因为一会还要把k个反转的node接回去
      const nex = tail.next;
      //2、反转连标
      [head, tail] = myReverse(head, tail);

      //3、把子链表重新接回原链表
       pre.next = head;
       tail.next = nex

      //4、向后移动更新
       //向后移动k个区间
       //pre->next依然记录这新区间head的位置
       //head是新区间的位置
       pre = tail;
       head = tail.next;
   }
   return prehead.next;
};
