示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]


官方：

var levelOrder = function(root) {
    const ret = [];
    if (!root) {
        return ret;
    }

    const q = [];
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }

    return ret;
};


var levelOrder = function (root) {
    let res = [];
    if (root === null) return res;
    let queue = [root];
    while (queue.length) {
        let level = [];
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let t = queue.shift();
            level.push(t.val);
            if (t.left) queue.push(t.left);
            if (t.right) queue.push(t.right);
        }
        res.push(level);
    }
    return res;
};

