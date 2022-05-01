/**
 * @param {string} s
 * @return {string}
 */

var S = "2[ab2[c]d]";
function decodeString(S) {
     if (!S) {
        return '';
    }

    let stack = [];

    // 存字母前的数字，可能有多位
    let numstr = '';

    for (let s of S) {
        // 多位数字的处理
        if (Number.isInteger(+s)) {
            numstr = numstr + s;
            continue;
        }

        if (numstr) {
            stack.push(+numstr);//+的作用是，把str转化成int 相当于let n = parseInt(numstr);
            numstr = ''; // 注意置空
        }

        // 不是右括号直接入栈
        if (s != ']') {
            stack.push(s);
            continue;
        }

        // 遇到右括号，需要出栈，直到不等于左括号
        let str = ''; //slice(-1)表示字符串最后一个字符
        while (stack.length && stack.slice(-1) != '[') {
            let top = stack.pop();
            top = top + str;
            str = top;
        }
        // 删掉左括号
        stack.pop();

        // 取得数字
        let count = +stack.pop();

        // 字符拼接对应的次数
        let pushStr = str.repeat(count);

        stack.push(pushStr);
        console.log(stack);
        //2[abcc]
        //abccabcc
    }

    return stack.join('');
};

console.log(decodeString(S));








function decodeString(S) {
    if (!S) {
        return '';
    }
    let stack = [];
    let numstr = '';
    for (let s of S) {
        if (Number.isInteger(+s)) {
            numstr += s;
            continue;
        }
        if (numstr) {
            stack.push(+numstr);
            numstr = '';
        }
        if (s != ']') {
            stack.push(s);
            continue;
        }
        let str = '';
        while (stack.length && stack.slice(-1) != '[') {
            let top = stack.pop();
            top += str;
            str = top;
        }
        stack.pop();
        let count = +stack.pop();
        let pushStr = str.repeat(count);
        stack.push(pushStr);
    }
    return stack.join('');
}
