BFS 构造队列 + 判断当前层奇（unshift）偶（push）选择插入方式

更易理解的
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // 设置一个信号量，用来控制左右
    if(root == null) return []
    let idx = 0;
    let stack = [root];
    let result = []
    while(stack.length > 0) {
        let layer = [];
        for(let i = 0, layerLen = stack.length; i < layerLen; i++) {
            // 方法一：
            if(idx % 2 == 0) {
                let node = stack.shift();
                layer.push(node.val);
                if(node.left) stack.push(node.left);
                if(node.right) stack.push(node.right);
            } else {
                let node = stack.pop();
                layer.push(node.val);
                if(node.right) stack.unshift(node.right)
                if(node.left) stack.unshift(node.left)
            }

            // 方法二：
            // let node = stack.shift();
            // layer[idx%2 == 0? 'push': 'unshift'](node.val);
            // if(node.left) stack.push(node.left);
            // if(node.right) stack.push(node.right);
        }
        idx++;
        result.push(layer)
    }
    return result
};

官方
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    /*
        BFS 构造队列 + 判断当前层奇偶调换顺序
    */
    if (!root) return []

    const queue = [[root, 0]], res = []

    while (queue.length) {
        const [node, lev] = queue.shift()

        // 初始化当前层
        if (!res[lev]) res[lev] = []

        // 奇数层 逆序 1 3 5 偶数层 正序 0 2 4
        lev & 1 ? res[lev].unshift(node.val) : res[lev].push(node.val)

        node.left && queue.push([node.left, lev + 1])
        node.right && queue.push([node.right, lev + 1])
    }

    return res
};

