/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */


解决方法：
1、找到方法去判断两个树是一模一样的，前提是root1可以比root2大
2、递归遍历左右子树，看哪里是一样的


function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(pRoot1 == null || pRoot2 == null) return false;
    return isSameIn(pRoot1, pRoot2);
}

function isSameIn(root1,root2) {
    return isSame(root1, root2) ||
           root1 &&  (isSameIn(root1.left,root2) || isSameIn(root1.right,root2));
}

function isSame( root1, root2){
        if(root2 == null) return true; //因为root1比root2大，所以可以为true
        if(root1 == null) return false;
        return root1.val == root2.val
            && isSame(root1.left, root2.left)
            && isSame(root1.right, root2.right);
    }


module.exports = {
    HasSubtree : HasSubtree
};

