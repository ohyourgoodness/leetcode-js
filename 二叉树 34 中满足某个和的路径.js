路径更新： 将当前节点值 root.val 加入路径 path ；
目标值更新： tar = tar - root.val（即目标值 tar 从 sum 减至 00 ）；
路径记录： 当 ① root 为叶节点 且 ② 路径和等于目标值 ，则将此路径 path 加入 res 。
先序遍历： 递归左 / 右子节点。
路径恢复： 向上回溯前，需要将当前节点从路径 path 中删除，即执行 path.pop() 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


 res.push(tmp.slice()); 利用了数组的深拷贝，因为此题为递归操作，所以不应该改变数据的内容

 一、数组浅拷贝 一个改，另一个也改；
 ar arr1 = ["red","yellow","black"];
var arr2 = arr1;
arr2[1] = "green";
console.log("数组的原始值：" + arr1 ); red green black
console.log("数组的新值：" + arr2);  red green black

二、数组深拷贝方法
slice和concat这两个方法，仅适用于对不包含引用对象的一维数组的深拷贝
二维以上就不行啦
（1）js的slice方法
var arr1 = ["1","2","3"];
var arr2 = arr1.slice(0);
arr2[1] = "9";
console.log("数组的原始值：" + arr1 ); 1 2 3
console.log("数组的新值：" + arr2 );1 9 3

（2）js的concat方法

concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
var arr1 = ["1","2","3"];
var arr2 = arr1.concat();
arr2[1] = "9";
console.log("数组的原始值：" + arr1 ); 1 2 3
console.log("数组的新值：" + arr2 );1 9 3

二维以上用数组循环
var arr1 = [1,2,3];//原来数组
var arr2 = [];//新数组

function deepCopy(arry1, arry2){
　　var length = arry1.length;
　　for(var i = 0;i<length;i++){
　　　　arry2[i] = arry1[i];
　　}
}

deepCopy(arr1, arr2);
arr2[0] =5;
console.log(arr1); 1 2 3
console.log(arr2); 5 2 3



/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var res;//声明
var tmp;

function pathSum(root, target)
{
    res = [];//最终结果
    tmp = [];//暂存满足条件的路径
    if(!root)
        return res;
    find_path(root, target);
    return res;
}
function findpath(root,num){
    tmp.push(root.val);//将数据放入暂存数组
    if(root.val === num && root.left===null && root.right===null)
        res.push(tmp.slice());//将满足条件的列表存进最终结果列表，这里要用slice返回一个新数组
    else{
        if(root.left !== null)	//左节点
            findpath(root.left,num-root.val);//每次往下遍历时，都将之前的值放入数组，同时减去这个值
        if(root.right !== null)	//右节点
            findpath(root.right,num-root.val);

    }
   tmp.pop();//将数据弹出
}
