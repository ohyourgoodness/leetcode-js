/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回表达式的值
 * @param s string字符串 待计算的表达式
 * @return int整型
 */

function solve( s ){
    let stack = [],i = 0,sign='+',num=0;
    while(i < s.length){
        if(s[i]=='('){
            let flag= 1, start = i+1;
            while(flag>0){
                i++;
                if(s[i]==')') flag--;
                if(s[i]=='(') flag++;
            }
            num = solve(s.slice(start,i));
            i--;
        }else if(s[i]>='0'&&s[i]<='9'){
            num = num*10 + Number(s[i]);
        }
        if((s[i]<'0'|| s[i]>'9') || i==s.length-1){
            if(sign=='*') stack.push(Number(stack.pop())*num);
            if(sign=='+') stack.push(Number(num));
            if(sign=='-') stack.push(Number(num)*-1);
            if(sign=='/') stack.push(Number(stack.pop())/num);
            sign = s[i];
            num = 0;
        }
        i++;
    }
    return stack.reduce((total,n)=>{return total+n},0);
}


module.exports = {
    solve : solve
};
