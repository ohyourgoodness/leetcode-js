JavaScript hasOwnProperty() 方法是 Object 的原型方法（也称实例方法），
它定义在 Object.prototype 对象之上，所有 Object 的实例对象都会继承 hasOwnProperty() 方法。

hasOwnProperty() 方法用来检测一个属性是否是对象的自有属性，而不是从原型链继承的。
如果该属性是自有属性，那么返回 true，否则返回 false。换句话说，hasOwnProperty()
方法不会检测对象的原型链，只会检测当前对象本身，只有当前对象本身存在该属性时才返回 true。

const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

给定一个只包括 ‘(’，’)’，’{’，’}’，’[’，’]’ 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
输入	输出
输入: “()”	输出: true
输入: “()[]{}”	输出: true
输入: “(]”	输出: false
输入: “([)]”	输出: false
输入: “{[]}”	输出: true


判断自身属性是否存在 hasOwnProperty
var o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');  // true
changeO();
o.hasOwnProperty('prop');  // false

注意map定义的时候用的是{},后续在使用的时候用的是[]
JS中有map方法，跟这个不一样，JS中的map方法是自己调用的

var isValid = function (s) {
    var map = { //只有左边一侧括号的字典
        "(": ")",
        "[": "]",
        "{": "}"
    } // 写一个字典，建立匹配规则
    var leftArr = []
    for (var ch of s){
        if (ch in map) leftArr.push(ch); //为左括号时，顺序保存
        else { //为右括号时，与数组末位匹配
            if(ch != map[leftArr.pop()]) return false;
        }
    }
    return !leftArr.length //防止全部为左括号
};


var isValid = function(s) {
    var map = {
        ")": "(",
        "]": "[",
        "}": "{"
    } // 写一个字典，建立对应关系
    var stack = []
    for(let key of s){
        if(!map.hasOwnProperty(key)){ //
            stack.push(key)
        }else{
            if(stack.pop() != map[key]){
                return false
            }
        }
    }
    return !stack.length;
};
