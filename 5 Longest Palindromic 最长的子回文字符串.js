
/**
 * @param {string} s
 * @return {string}
 */


let longestPalindrome = function(s) {
    for(k = s.length; k>0; k--){
        let j = k;
        let i = 0;
        while(j <= s.length){
            substr = s.substring(i,j);
            if(isPalindrome(substr)){
                return substr;
            }else{
                i++;
                j++;
            }
        }
    }

}

let isPalindrome = function(s) {
    let i = 0;
    let j = s.length-1;
   for(; i<=j ; i++, j--){
       if(s[i] != s[j]){
           return false;
       }
   }
   return true;
}


/**
 * @param {string} s
 * @return {string}
 */

var S = "aab";

var res = [];

function findAllHuiwen(S) {
  let path = [];
  let start = 0;
  let end = S.length - 1;
  return dfs(start, end, path, S);
};

function dfs(start, end, path, S){
  console.log("IN" + start + " " + end + " " + path + " " + S);
  if(start > end){
    return;
  }
  for(let i = 0; i < end; i++){
    let part = S.slice(start, i);
    console.log("Part = " + part);

    if(isHuiwen(part)){
     path.push(part);
     console.log("Path = " + path);
     dfs(i+1, end, path, S);
    }
  }
};


let isHuiwen = function(s) {
    let i = 0;
    let j = s.length-1;
   for(; i<=j ; i++, j--){
       if(s[i] != s[j]){
           return false;
       }
   }
   return true;
}

console.log(findAllHuiwen(S));


思路，以string的长度为开始的长度区间，逐渐缩短长度进行便利，例如

s=‘12345’ k=5 最大长度区间
第一次：查看“12345”是否符合Palindrome的要求， 一旦符合，就返回现在的substring
如果不符合，那么此时长度区间k=4
第二次：查看“1234” 和“2345”是否符合
第三次：查看“123”“234”“345”是否符合
…
K的作用是截取区间，i,j相当于区间的收尾，依次进行遍历，i++，j++，就是从区间“123”变成了“234”




/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param A string字符串
 * @return int整型
 */

function getLongestPalindrome( A ) {
    let len = 0;
    let i = 0;
    let j = i + 1;
    if(A.length == 0) return 0;
    if(A.length == 1) return 1;

    for( i = 0; i < A.length-1; i++){
        for(j = i + 1; j <= A.length; j++){
            let s = A.substring(i,j);
            if(isHuiwen(A.substring(i,j))){
               len = len > j-i ? len : j-i;
               }
        }
    }
    return len;
}

function isHuiwen(B){
    let i = 0;
    for( i = 0 ; i < B.length/2; i++){
        if(B.charAt(i) == B.charAt(B.length - i - 1)){
            continue;
        }else {
            return false;
        }
    }
    return true;
}
module.exports = {
    getLongestPalindrome : getLongestPalindrome
};
