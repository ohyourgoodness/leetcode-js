无论深度优先还是广度优先
1、先把root放到stack或者queue当中
2、stack和queue的length是作为while的判断条件
3、

https://segmentfault.com/a/1190000016226334

前序遍历：- + a b c / d e
中序遍历：a + b * c - d / e
后序遍历：a b c + d e / -
广度遍历：- + / a * d e b c

1. js中的二叉树
上述二叉树(a+b*c)-d/e在js中可以用对象的形式表示出来：

var tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
}

先序遍历
let result = [];
let dfs = function (node) {
    if(node) {
        result.push(node.value);
        dfs(node.left);
        dfs(node.right);
    }
}

dfs(tree);
console.log(result);
// ["-", "+", "a", "*", "b", "c", "/", "d", "e"]

let dfs = function (nodes) {
    let result = [];
    let stack = [];
    stack.push(nodes);
    while(stack.length) { // 等同于 while(stack.length !== 0) 直到栈中的数据为空
        let node = stack.pop(); // 取的是栈中最后一个j
        result.push(node.value);
        if(node.right) stack.push(node.right); // 先压入右子树
        if(node.left) stack.push(node.left); // 后压入左子树
    }
    return result;
}
dfs(tree);


中序遍历
let result = [];
let dfs = function (node) {
     if(node) {
        dfs(node.left);
        result.push(node.value); // 直到该结点无左子树 将该结点存入结果数组 接下来并开始遍历右子树
        dfs(node.right);
    }
}

dfs(tree);
console.log(result);
//  ["a", "+", "b", "*", "c", "-", "d", "/", "e"]

function dfs(node) {
    let result = [];
    let stack = [];
    while(stack.length || node) { // 是 || 不是 &&
        if(node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            result.push(node.value);
            //node.right && stack.push(node.right);
            node = node.right; // 如果没有右子树 会再次向栈中取一个结点即双亲结点
        }
    }
    return result;
}

dfs(tree);
// ["a", "+", "b", "*", "c", "-", "d", "/", "e"]

后序遍历
result = [];
function dfs(node) {
    if(node) {
        dfs(node.left);
        dfs(node.right);
        result.push(node.value);
    }
}
dfs(tree);
console.log(result);
// ["a", "b", "c", "*", "+", "d", "e", "/", "-"]

function dfs(node) {
    let result = [];
    let stack = [];
    stack.push(node);
    while(stack.length) {
        // 不能用node.touched !== 'left' 标记‘left’做判断，
        // 因为回溯到该结点时，遍历右子树已经完成，该结点标记被更改为‘right’ 若用标记‘left’判断该if语句会一直生效导致死循环
        if(node.left && !node.touched) { // 不要写成if(node.left && node.touched !== 'left')
            // 遍历结点左子树时，对该结点做 ‘left’标记；为了子结点回溯到该（双亲）结点时，便不再访问左子树
            node.touched = 'left';
            node = node.left;
            stack.push(node);
            continue;
        }
        if(node.right && node.touched !== 'right') { // 右子树同上
            node.touched = 'right';
            node = node.right;
            stack.push(node);
            continue;
        }
        node = stack.pop(); // 该结点无左右子树时，从栈中取出一个结点，访问(并清理标记)
        node.touched && delete node.touched; // 可以不清理不影响结果 只是第二次对同一颗树再执行该后序遍历方法时，结果就会出错啦因为你对这棵树做的标记还留在这棵树上
        result.push(node.value);
        node = stack.length ? stack[stack.length - 1] : null;
        //node = stack.pop(); 这时当前结点不再从栈中取（弹出），而是不改变栈数据直接访问栈中最后一个结点
        //如果这时当前结点去栈中取（弹出）会导致回溯时当该结点左右子树都被标记过时 当前结点又变成从栈中取会漏掉对结点的访问（存入结果数组中）
    }
    return result; // 返回值
}

dfs(tree);


let result = [];
let stack = [tree]; // 先将要遍历的树压入栈
let count = 0; // 用来记录执行到第一层
let bfs = function () {
    let node = stack[count];
    if(node) {
        result.push(node.value);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
        count++;
        bfs();
    }
}
dfc();
console.log(result);
//  ["-", "+", "/", "a", "*", "d", "e", "b", "c"]





BFS 广度优先遍历
最简单的方法
function bfs (node) {
    let result = []; //一个存遍历结果
    let queue = []; //BFS用队列，先进后出，
    queue.push(node); //压入根节点
    while(queue.length) { //以队列是否为空作为判断条件
        node = queue.shift(); //先进后出
        result.push(node.value); // 不要忘记访问
        // console.log(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
}
bfs(tree);
//  ["-", "+", "/", "a", "*", "d", "e", "b", "c"]



function bfs(node) {
    let result = [];
    let queue = [];
    queue.push(node);
    let pointer = 0;
    while(pointer < queue.length) {
        let node = queue[pointer++]; // // 这里不使用 shift 方法（复杂度高），用一个指针代替
        result.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
}

bfs(tree);
// ["-", "+", "/", "a", "*", "d", "e", "b", "c"]
