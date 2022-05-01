可以回溯，也可以动态规划
动态规划的要领是，之后的状态，依靠之前的状态

动态规划
candidates=[1,2,4]
target = [6]

res
1 : 1
2 : 候选数字 1,2; 每个候选数字分别减去当前数字 1-2 = -1 (补上1的组合，得到0), 2-2 = 0
3 : 候选数字 1,2; 每个候选数字分别减去当前数字 1-3 = -2 (补上2的组合，得到0), 2-3 = -1（补上1的组合得到0）
4 : 候选数字 1,2,4; 每个候选数字分别减去当前数字 1-4 = -3 (补上3的组合，得到0)...
最终得到target的6的组合



回溯方法

var combinationSum = function(candidates, target) {
  const res = [];
  candidates.sort((a,b)=>{return a-b;});
  const dfs = (start, path, sum) => {
    if (sum >= target) {        // 爆掉了，不用继续选数了
      if (sum == target) {      // 加入解集
        res.push(path.slice()); // temp的拷贝
      }
      return;                   // 结束当前递归
    }
    //从start开始避免，重复，也就是res的结果一定是从小数的组合开始，逐渐变大
    //eg:candidates= [1,1,2] target = 5
    //从start开始，不从0开始，会使得结果为，11111，1112，122,从小数开始组合，避免重复
    //所以循环的过程 i = 0,dfs 调用4次，得到11111，回溯两次之后试验2，得到1112
    for (let i = start; i < candidates.length; i++) { // 枚举出选择，从start开始. 因为已经sort，前边的数比后边的小
      path.push(candidates[i]);          // 加入“部分解”
      dfs(i, path, sum + candidates[i]); // 往下继续选择，同时sum累加上当前数字
      path.pop();                        // 撤销选择
    }
  };
  dfs(0, [], 0);
  return res;
};


var combinationSum = function(candidates, target) {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        // 直接跳过
        dfs(target, combine, idx + 1);
        // 选择当前数
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }

    dfs(target, [], 0);
    return ans;
};







candidates = [1,3];
target = 5;
//0, 1, 2 ,3 ,4 ,5

var combinationSum = function(candidates, target) {

    res = [];

    //将candidates升序
    candidates.sort((a,b)=>{return a-b;});
    console.log(candidates);

    //初始化结果
    for(let i = 0; i < target + 1; i++){
        res[i] = [];
    }

    console.log(res);

    //开始动态规划
    for(let i = 0; i < target + 1; i++){
        let ind = 0;
        console.log("ININININ i = " + i);
        for(let j = 0; j < candidates.length + 1; j++){
          //找到所有比i小或者相等的的数字
          if(candidates[j]<=i){
       //     console.log("Find index candidates[j]= " + candidates[j]);
            ind = j;
            continue;
          }
        }

        console.log("ind = " + ind + " candi = " + candidates[ind]);

        for(let k = 0; k <= ind; k++){
            console.log(" k = " + k);
      //    console.log("candidates[k] = " + candidates[k]);
          if(candidates[k] - i == 0){
            res[i].push(candidates[k]);//找到一个组合
            console.log("res[i] = " + res[i]);
          }else if(candidates[k] - i < 0 ){

            let n = i - candidates[k];
         //   console.log(" n = " + n);
          //  console.log(" res[n].length = " + res[n].length);
            let arr = res[n];



          }

        }


    }

    return res[target];
};




//var arr = [1,2,3,[1,2,3,1,3,[1,2,3,6,4,[1,2,3,1]]],2];
function getDeep(arr){
  let a=1;
  function multiarr(arr){
    for (i=0;i<arr.length;i++){
      if(arr[i] instanceof Array){
        a++;
        arr = arr[i];
        multiarr(arr);
      }
    }
    return a;
  }
  return multiarr(arr);
}


console.log(combinationSum(candidates, target));
