/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let len = s.length;
    let count = 0;
    for(let start = 0; start < len; start++){
         for(let end = start+1; end <= len; end++){
             if(isHuiwen(s.slice(start, end))){
                 count++;
             }
         }
    }
    return count;
};

function isHuiwen(str){
    for(let i = 0; i<str.length/2; i++){
        if(str.charAt(i) == str.charAt(str.length-i-1)){
            continue;
        }else{
            return false;
        }
    }
    return true;
}
