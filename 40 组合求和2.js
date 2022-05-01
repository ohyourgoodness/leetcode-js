回溯的过程其实是每一层都在做选择，比如说 candidates = [1,1,2], target = 4;
每一层都是1，1，2，可以有无数层，进行回溯的条件就是，sum>=target
第一层：1，1，2
第二层：1，1，2
第三层：1，1，2
第四层：1，1，2
...
从上往下以此选择。
for 枚举出选项时，加入下面判断，从而忽略掉同一层重复的选项，避免产生重复的组合。
同一层的处理: 比如[1,2,2,2,5]，选了第一个 1 和第一个 2，变成 [1,2]，它的下一选项也是 2，跳过它，
因为如果选它，就还是 [1,2],在该层的选择就重复，但是在下一层的选择时，是可以重复的。
不同层的处处理: 该题目要求candidates的元素不可重复，那么下一层选择时候，从第i+1作为start开始选择，避免第i个数重复选择


const combinationSum2 = (candidates, target) => {
  candidates.sort((a,b) => a - b ); // 升序排序
  const res = [];

  const dfs = (start, temp, sum) => { // start是索引 当前选择范围的第一个
    if (sum >= target) {        // 爆掉了，不用继续选了
      if (sum == target) {      // 满足条件，加入解集
        res.push(temp.slice()); // temp是引用，所指向的内存后续还要操作，所以拷贝一份
      }
      return;                   // 结束当前递归
    }
    for (let i = start; i < candidates.length; i++) {             // 枚举出当前的选择
      if (i - 1 >= start && candidates[i - 1] == candidates[i]) { // 当前选项和左邻选项一样，跳过
        continue;
      }
      temp.push(candidates[i]);              // 作出选择

      //当前选择的数字不能和下一个选择的数字重复，给子递归传i+1，避免与当前选的i重复。
      dfs(i + 1, temp, sum + candidates[i]); // 基于该选择，继续选择，递归
      temp.pop();               // 上面的递归结束，撤销选择，回到选择前的状态，切入另一分支
    }
  };

  dfs(0, [], 0);
  return res;
};


test case可以过，但是提交过不了，莫名其妙

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let res = [];
var combinationSum2 = function(candidates, target) {
    let used = [], path = [];
    let value = 0;
    candidates.sort((a,b) => {return a-b;});
    let deep = 0;
    dfs(candidates, target, path, value, used, deep);
    return res;
};

function isexisted(path, res){
  for(let i = 0; i < res.length; i++){
    if(path.toString() == res[i].toString()){
      return true;
    }
  }
  return false;
}

function dfs(candidates, target, path, value, used, deep){

    if(value - target > 0){ return; }
    if(value - target == 0){
      let arr = Array.from(path);
      arr.sort((a,b) => {return a-b;});
      if(isexisted(arr,res)){
        return;
      }else{
        res.push(arr);
        return;
      }
    }

    for(let i = 0; i < candidates.length; i++){
        if(used[i] == true) continue;
        used[i] = true;
        path.push(candidates[i]);
        value = value + candidates[i];
        deep = deep + 1;

        dfs(candidates, target, path, value, used, deep);

        deep = deep - 1;
        value = value - candidates[i];
        used[i] = false;
        path.pop();
        //避免无谓的循环
        if(value + candidates[i] > target) break;
    }
}


自己写的解法：
let res = [];
var combinationSum2 = function(candidates, target) {
  let path = [], used =[];
  let startIndex = 0;
  let sum = 0;

  candidates.sort((a,b)=>{return a-b;});

  dfs(candidates, target, sum, startIndex, path, used);
  return res;
}

function dfs(candidates, target, sum, startIndex, path, used){

    if (sum > target) { // 这个条件其实可以省略
        return;
    }

    if (sum == target) {
        res.push(Array.from(path));
        return;
    }


   for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
    // used[i - 1] == true，说明同一树支candidates[i - 1]使用过
    // used[i - 1] == false，说明同一树层candidates[i - 1]使用过
    // 要对同一树层使用过的元素进行跳过
    if (i > 0 && candidates[i] == candidates[i - 1] && used[i - 1] == false) {
        continue;
    }
    sum += candidates[i];
    path.push(candidates[i]);
    used[i] = true;
    dfs(candidates, target, sum, i + 1, path, used); // 和39.组合总和的区别1：这里是i+1，每个数字在每个组合中只能使用一次
    used[i] = false;
    sum -= candidates[i];
    path.pop();
   }
}


官方
var combinationSum2 = function(candidates, target) {
    const res = []; path = [], len = candidates.length;
    candidates.sort();
    backtracking(0, 0);
    return res;
    function backtracking(sum, i) {
        if (sum > target) return;
        if (sum === target) {
            res.push(Array.from(path));
            return;
        }
        let f = -1;
        for(let j = i; j < len; j++) {
            const n = candidates[j];
            if(n > target - sum || n === f) continue;
            path.push(n);
            sum += n;
            f = n;
            backtracking(sum, j + 1);
            path.pop();
            sum -= n;
        }
    }
};
