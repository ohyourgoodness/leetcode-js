Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
/**
 * @param {number} x
 * @return {number}
 */

先判断这个数是正数，还是负数
去掉末尾的所0
重要的函数
arr = Array.from(x.toString());
num = +arr.join("")*flag;

var reverse = function(x) {
    //判断是正数还是负数
    let flag = x<0 ? -1 : 1;
    x = x * flag;
    let arr = Array.from(x.toString());

    //remove all the 0 in the end
    for(let i = arr.length-1; i>=0; i--){
        if(arr[i] != 0){
            break;
        }
        arr.pop();
    }

    //反转
    for(let i = 0; i<arr.length/2; i++){
      let tmp = arr[i];
      arr[i] = arr[arr.length-i-1];
      arr[arr.length-i-1] = tmp;
    }

    //把数组变成数字
    let num = +arr.join("")*flag;

    if(num > Math.pow(2,31)-1 || num < (-1) *Math.pow(2,31)){
      return 0;
    }else{
      return num;
    }
};
