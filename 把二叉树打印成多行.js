/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    // write code here
    if(pRoot===null){return []}
    let resArr=[]
    let quene = [pRoot]
    while(quene.length){
       let len = quene.length //每一次while循环打印某一层的节点，所以要先记录下此时队列的长度，之后子节点入队会变
       let temp=[]
       for(let i=0;i<len;i++){  //打印某一层的节点，只需要按照记录的长度打印队列的前len个节点
           let node = quene.shift()
           temp.push(node.val)
           if(node.left){quene.push(node.left)}
           if(node.right){quene.push(node.right)}
       }
       resArr.push(temp)
    }
    return resArr
}
module.exports = {
    Print : Print
};
