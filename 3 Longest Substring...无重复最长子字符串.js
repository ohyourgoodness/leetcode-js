
//一般解法
var lengthOfLongestSubstring = function(s) {
  var start = 0, maxLen = 0;
  var map = new Map();

  for(var i = 0; i < s.length; i++) {
      var ch = s[i];

      if(map.get(ch) >= start) start = map.get(ch) + 1;
      map.set(ch, i);

      if(i - start + 1 > maxLen) maxLen = i - start + 1;
  }

  return maxLen;
};


//返回所有的最长子字符串
/**
 * @param {string} s
 * @return {number}
 */

s = ""
s = "a"
s = "ab"
s = "aba"
s = "abc"
s = "abca"
s = "abcabcdef"
s = "aabcaa"
s = "aaabcabdcaaaefg"
var lengthOfLongestSubstring = function(s) {
  var start = 0; //记录当前最长子字符串起点
  var maxLen = 0;//记录当前最长子字符串长度
  var map = new Map();//保存每一个字符和其index组成的obj pair
  var sub = '';//保存当前最长子字符串
  var subArr = []; //若存在多个相同的最长子字符串，则全部保存
  var subArrMax = [];
  var flag = 0;

  if(n.length === 0) return -1;

  let num = n[ 0 ];
  if(n.lenght === 1) return 0;

  let curMax= 0;
  let lenMax = 0;
  let indexMax = 0;
  let subArr = new Array(0,0)
  let curVal = 0;

  for(let i = 1; i < n.length; i++) {
        let nex = n[ i ];
        if(nex = num + 1){
  	curMax++;
         }else{
       subArr.push(i - lenMax);
    }
}

  //遍历整个字符串，时间复杂度o(n)

  for(var i = 0; i < s.length; i++) {
      var ch = s[i];

      //1、判断无重复字符串的起点
      //若在map中存在当前的ch字符，即ch字符存在重复，
      //那么需要把start(当前最长子字符串起点)更新到之前重复的ch的位置的下一位
      //来作为新的最长子字符的起点。

      if(map.get(ch) >= start) {
        //记录重复类型
        //1为首尾相同字符的重复，比如说，abca,
        //那么最长子字符串将有两种情况 abc,bca都是正确答案
        //0为相同字符出现在相邻位置，abcc，那么正确答案只有abc
        flag = (start + 1 == map.get(ch)) ? 1 : 0 ;
        start = map.get(ch) + 1;

      }

      //2、更新每一个无重复字符串的index
      //更新当前字符ch最新的index，覆盖之前的index
      //使得map中每一个字符的index都是最接近字符串尾部的
      map.set(ch, i);

      //3、更新最长子字符串的长度，并保存现阶段最长的子字符串
      //计算当前ch字符的位置和最长子字符串起点start的长度
      //比较当前长度和maxLen
      //若当前长度更长，证明找到了更长的子字符串，将该子字符串保存在sub中
      if(i - start + 1 >= maxLen) {

          maxLen = i - start + 1;
          sub = s.slice(start, start+maxLen);
          subArr.push(sub);

          //处理多个相同长度最长子字符串的情况。
          //例如，s=abca,最长子字符串可以为 abc,bca
          if(flag == 1){
            sub = s.slice(start+1, start+maxLen+1);
            subArr.push(sub);
          }
      }
      flag = 0;
    }
     //把不符合最长子字符串的其他字符串删除
     subArr.forEach((element) =>{
          if((element.length) == maxLen)
              subArrMax.push(element);
     })
  return subArrMax;
};


console.log(lengthOfLongestSubstring(s));

代码优化
/**
 * @param {string} s
 * @return {number}
 */

s = ""
s = "a"
s = "ab"
s = "aba"
s = "abc"
s = "abca"
s = "abcabcdef"
s = "aabcaa"
s = "aaabcabdcaaaefg"

var lengthOfLongestSubstring = function(s) {

  var start = 0; //记录当前最长子字符串起点
  var maxLen = 0;//记录当前最长子字符串长度
  var map = new Map();//保存每一个字符和其index组成的obj pair
  var sub = '';//保存当前最长子字符串
  var subArr = []; //若存在多个相同的最长子字符串，则全部保存
  var subArrMax = [];
  var flag = 0;
  var end = [];


  //遍历整个字符串，时间复杂度o(n)

  for(var i = 0; i < s.length; i++) {
      var ch = s[i];

      //1、判断无重复字符串的起点
      //若在map中存在当前的ch字符，即ch字符存在重复，
      //那么需要把start(当前最长子字符串起点)更新到之前重复的ch的位置的下一位
      //来作为新的最长子字符的起点。

      if(map.get(ch) >= start) {
        //记录重复类型
        //1为首尾相同字符的重复，比如说，abca,
        //那么最长子字符串将有两种情况 abc,bca都是正确答案
        //0为相同字符出现在相邻位置，abcc，那么正确答案只有abc
        flag = (start + 1 == map.get(ch)) ? 1 : 0 ;
        start = map.get(ch) + 1;

      }

      //2、更新每一个无重复字符串的index
      //更新当前字符ch最新的index，覆盖之前的index
      //使得map中每一个字符的index都是最接近字符串尾部的
      map.set(ch, i);

      //3、更新最长子字符串的长度，并保存现阶段最长的子字符串
      //计算当前ch字符的位置和最长子字符串起点start的长度
      //比较当前长度和maxLen
      //若当前长度更长，证明找到了更长的子字符串，将该子字符串保存在sub中
      if(i - start + 1 >= maxLen) {

          maxLen = i - start + 1;
          sub = s.slice(start, start+maxLen);

           //若之前所储存的字符串，长度小于maxLen
           //那么就发现了新的最长字符串，把之前的字符串都删除
           if(subArr.length >= 1 ){
              end = subArr[subArr.length-1];
              if(end.length < maxLen){
                subArr = [];
              }
           }

           //把新的字符串储存进去
           subArr.push(sub);

          //处理多个相同长度最长子字符串的情况。
          //例如，s=abca,最长子字符串可以为 abc,bca
          if(flag == 1){
            sub = s.slice(start+1, start+maxLen+1);
            subArr.push(sub);
          }
      }
      flag = 0;
    }

  return subArr;
};

console.log(lengthOfLongestSubstring(s));
