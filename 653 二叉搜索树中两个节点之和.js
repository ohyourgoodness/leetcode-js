请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，
第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，
其他行以此类推。
每个结点的数字只出现一次

一边遍历，一边建立set，也就是建立哈希表，一边比较
const findTarget = (root, k) => {
    const set = new Set();
    const search = root => {
        // 如果找到节点空，找不到
        if (!root) return false;
        // set中有需要的值，直接返回true
        if (set.has(k - root.val)) return true;//寻找值
        // 没有的话，登记一下
        set.add(root.val);//建立set
        // 左右子树继续找，任意一个找到即可
        return search(root.left) || search(root.right);//递归遍历
    };
    return search(root);
};

set是js中的一种常用数据结构


/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let queue = [root]
    let map = new Set()
    while(queue.length) {
        let node = queue.shift()
        if(map.has(k-node.val)) {
            return true
        } else {
            map.add(node.val)
        }
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return false
};

