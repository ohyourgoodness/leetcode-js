/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param proot TreeNode类
 * @param k int整型
 * @return int整型
 */
function KthNode( proot ,  k ) {
    let arr = [];
    if(!proot || k == 0) return -1;
    dfs(proot, k, arr);
    if(arr.length < k) return -1;
    return arr[0];
    // write code here
}

function dfs(root, k, arr){
    if(!root) return;
    if(arr.length < k){
        arr.push(root.val);
        arr.sort((a,b)=>{return b-a;});
    }else{
        if(arr[0]>root.val){
            arr.shift();
            arr.push(root.val);
            arr.sort((a,b)=>{return b-a;});
        }
    }

    dfs(root.left, k, arr);
    dfs(root.right, k, arr);
}

module.exports = {
    KthNode : KthNode
};
