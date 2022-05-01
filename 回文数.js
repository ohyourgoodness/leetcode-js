
let x = 123321;
let x = 12321;
/*
无论是单数个还是偶数个序列，
都从 Math.floor(arr.length/2) 开始判断
*/


var isPalindrome = function(x){
  if(x<0){
    return false;
  }
  let arr = x.toString().slice('');
  let flag = true;
  for(let i = 0; i<Math.floor(arr.length/2); i++){
    if(arr[i] != arr[arr.length-1-i]){
      flag = false;
      break;
    }
  }
  return flag;
}

console.log(isPalindrome(x));
