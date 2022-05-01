1、数组添加删除 头部或尾部（ push()、pop()、unshift()、shift() ）

var arr = [1,2,3,4,5];

push()
数组尾部添加一个或多个元素
并返回新的长度
arr.push(6)
alert(arr) 1,2,3,4,5,6 尾部添加一个元素

pop()
数组尾部删除元素
并返回数组的最后一个元素
arr.pop() alert(arr) 1,2,3,4 尾部删除一个元素并且返回
var a = arr.pop() alert(arr) 1,2,3 alert(a) 4,

unshift()
数组头部添加添加一个或更多元素，并返回新的长度
arr.unshift('w')
alert(arr) w,1,2,3 头部添加一个

shift()
数组头部删除数组的第一个元素从其中删除，
并返回第一个元素的值
arr.shift() alert(arr) 1,2,3 头部删除w
var b = arr.shift() alert(arr) 2,3, alert(b) 1

splice()
删除 插入 替换
删除 arr.splice(起点,长度)
可以删除任意数量的项，只需要指定2个参数：要删除的第一项的位置和要删除项的项数
arr.splice(起点,长度) 【如 arr.splice(0,2) 会删除数组中的前两项。】
var arr = [1,2,3,4,5] arr.splice(1,3)
从第1个元素后面，删除3个元素 alert(arr) 1,5
删除 2-4

添加 arr.splice(起点,长度为0,需要添加的元素)
可以向指定位置插入任意数量的项，只需要提供3个参数：插入起始位置、0（要删除的项数）和要插入的项。 如果要插入多个项，可以再传入第四、第五，一直任意多个项。
arr.splice(起点,长度为0,需要添加的元素)
arr.splice(2,0,”a”,”b”)会从位置2开始插入字符串“a”和”b”
 var arr = [1,2,3,4,5] arr.splice(1,0,'abc')
 从第一个元素后面，添加abc元素 alert(arr)
 1,abc,2,3,4,5 }//添加abc

替换 arr.splice(起点,长度为要替换的个数,替换后的元素)
即删除和插入数量相等项数的综合应用，可以指向指定位置插入任意数量的项，且同时删除任意数量的项，只需要指定3个指定参数：起始位置、要删除的项数和要插入的任意数量项。 插入的项数是不必与删除的项数相等。
arr.splice(起点,长度为要替换的个数,替换后的元素)
如splice(2,2,”a”,”b”) 会删除当前数组位置2的项，然后再从位置2开始插入字符串“a”和“b”。】
var arr = [1,2,3,4,5]
arr.splice(2,2,'a','b')//从第二个元素后面，添加a,b元素
alert(arr) 1,2,a,b,5

concat()
数组连接，输入数组，返回连接数组
用于连接两个或多个数组。该方法没有改变原有数组，
语法：string.concat(arr1,arr2...)
var a = [1,2,3]
var b = [4,5,6]
var arr = a.concat(b)
alert(arr) 1,2,3,4,5,6

join()
数组分隔 输入数组，返回字符串
方法用于把数组中的所有元素放入一个字符串。
join(separator)
var a = [1,2,3,4,5,6] a.join('-')
使用分隔符来分隔数组中的元素 alert(a.join('-'))
1-2-3-4-5-6
b.join('')
123456

slice()：
输入数组，一个数组的一段
slice(start, [end])   slice()如果不加任何参数，就是返回数组的拷贝
newArray = myArray.slice(0, -1)


toString()
相当于join(',')
var a = [1,2,3,4,5,6] a.toString();
"1,2,3,4,5,6"

二维数组的定义方法：
方式一：var arr = [[a,b,c,d],[a1,b1,c1,d1],[a2,b2,c2,d2]],
方式二:  var arr = new Array([a,b,c,d],[a1,b1,c1,d1],[a2,b2,c2,d2]),
