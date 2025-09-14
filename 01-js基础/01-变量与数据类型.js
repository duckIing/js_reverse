/*
五种基本数据类型:
1. number 数字类型
2. string 字符串类型
3. boolean 布尔类型（true或false）
4. undefined 类型：变量声明未初始化，它的值就是 undefined
5. null 类型：表示空对象，如果定义的变量将来准备保存对象，可以将变量初始化为 null，在页面上获取不到对象，返回的值就是 null

object 复合类型:
是一种特殊的复杂数据类型，也被称之为引用类型。数组、函数和JavaScript对象都属于复合类型

symbol 类型:
ES6 新增的一种数据类型，符号类型，符号类型的实例是唯一且不可改变的

变量命名规范:
1. 区分大小写
2. 第一个字符必须是字母、下划线（_）或者美元符号（$）
3. 其他字符可以是字母、下划线、美元符或数字

var     -->     声明一个变量
const   -->     声明一个常量
let     -->     es6, 声明一个变量

在爬虫中，var 和 let 没有啥区别，不关注
做逆向基本都是var为主，只求逆向的代码可以在本地运行。
*/

// 变量
var aaa = 100;
aaa = 200;

const BB = 100;
// BB = 200; // 报错: Assignment to constant variable.

// number
var a = 10;
console.log(a);

// 字符串
var str_data="hello world";
console.log(str_data);

// 布尔
var bool_data=true;
console.log(bool_data);

// undefined
var und_data;
console.log(und_data);

// null
var null_data=null;
console.log(null_data);

// object
var obj_data={
    name:"张三",
    age:18,
    sex:"男"
}
console.log(obj_data);

// symbol
var sym_data=Symbol("sym");
console.log(sym_data);

// 检测数据类型
console.log(typeof a);
console.log(typeof str_data);
console.log(typeof bool_data);
console.log(typeof und_data);
console.log(typeof null_data); // null 类型是 object
console.log(typeof obj_data);
console.log(typeof sym_data);

// 数组
var arr_data=[1,2,3,4,5];
console.log(arr_data);

// 函数
function fun_data(){
    console.log("hello world");
}

// 连续声明变量
var a=1, b=2, c=3
console.log(a,b,c)