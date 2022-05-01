/**
 * @param {number[]} nums
 * @return {number[][]}
 */

本全排列的方法回溯时
把所有的数据都进行递归，并没有narrow down的过程
利用used作为flag来确定，某个元素是否被使用过

自己写的
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
   let used = [], res = [], path = [];
   let depth = nums.length;

   dfs(res, depth, path,  nums, used);//可以简化，用nums.length代替depth
   return res;

};


function dfs(res, depth, path, nums, used){
    if(depth == path.length){
        res.push(Array.from(path));
        path = [];
        return;
    }

    for(let i = 0; i<nums.length; i++){
        if(used[i]) continue;

        used[i] = true;
        path.push(nums[i]);

        dfs(res, depth, path, nums, used);
        path.pop();
        used[i] = false;
    }

};


另一种实现方法：
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [], path = [], flag = [];
        dfs(res, path, nums, flag);
    return res;
};

function dfs(res, path, nums, flag){
    if(path.length == nums.length){
        res.push(Array.from(path));
        path = [];
        return;
    }

    for(let i = 0; i < nums.length; i++){
       let exist = 0;
       for(let j = 0 ; j < flag.length; j++){
          if(flag[j] == i){
            exist = 1;
            break;
          }
       }

      if(exist == 1) continue;

        flag.push(i);
        path.push(nums[i]);
        dfs(res, path, nums, flag);
        path.pop();
        flag.pop();
    }
};




官方的
var permute = function(nums) {
    const res = [], path = [], used = [];

    backtracking(nums, nums.length, used);
    return res;
    //把所有的数字都传递，把数组长度传递，用于全排列是否标记用过元素 used，res,Path
    function backtracking(n, len, used) {
        //判断结束条件，当前路径中的深度用光，在数据表达上就是路径的长度==用光所有的元素
        if(path.length === len) {
            res.push(Array.from(path));//用Array.from对path进行拷贝
            return;
        }

        //循环的条件，长度是len
        for (let i = 0; i < len; i++ ) {
            if(used[i]) continue;

            path.push(n[i]);
            used[i] = true; // 同支
            backtracking(n, len, used);//回溯过程
            //反向操作
            path.pop();
            used[i] = false;
        }
    }

};
