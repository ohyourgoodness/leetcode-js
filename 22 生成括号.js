/**
 * @param {number} n
 * @return {string[]}
 */

 Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

二叉树遍历问题，需要剪枝，也就是有选择性地遍历
l,r代表左右括号剩余的数量，规律为
左括号剩余的数量个数一定是 <= 右边括号剩余个数的，因为永远都是先有左括号，再有有括号
所以一旦做括号剩余个数比右括号多，就证明已经此路不通

var generateParenthesis = function(n) {

  const res = [];

  function go(l, r, s) {
    if (l > r) return;  //剪枝的过程

    if (l === 0 && r === 0) {
      res.push(s); //保存路径
      return; //都要return，原因就是回溯
    }

    if (l > 0) go(l - 1, r, s + '('); //遍历
    if (r > 0) go(l, r - 1, s + ')'); //遍历
  }

  go(n, n, '');
  return res;


};
