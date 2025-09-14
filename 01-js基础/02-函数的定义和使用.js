/*
函数的定义和使用:
与Python一致，函数就是一段可以被重复利用的代码段，在JavaScript中使用function关键字声明函数。

定义存在形式参数并有返回值的函数
1. 定义函数时，函数如果有参数，则参数可以放在小括号中。如果函数需要返回结果，则可以使用return返回
2. JavaScript函数可以不定义形式参数也能接收到调用时传递过来的值，可使用arguments完成接收，功能类似python中的*args
*/

// 函数的定义和调用
function f() {
    console.log("xxxxx");  // ; 可见可不加，严谨就加。
};
f()

console.log("----------------------------------------------------------------1");

// 函数的参数
function fun1(a, b) {
    console.log(a);
    console.log(b);
};

fun1(1,2)

console.log("----------------------------------------------------------------2");


// 函数的返回值
function sum(a, b) {
    return a + b;
};

var mysum = sum(10,20)
console.log(mysum);

console.log("----------------------------------------------------------------3");


// 返回多个值的情况
function fun2(a, b) {
    return 888,999,111;
}

var res = fun2(1,2)
console.log(res); // 111
// 说明: 函数只能返回一个值，返回多个值时，以最后一个值为准。

console.log("----------------------------------------------------------------4");


// 向没有形式参数的函数传递参数
function fun3() {
    console.log("fun3")
    console.log(arguments); // arguments 是一个类数组对象, 函数调用时的参数保存在 arguments
    // python 中的 **args ==> [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
};
fun3(1,2,3,4,5); // 注意如果这里不加 ; ，会和下面的自执行函数冲突

console.log("----------------------------------------------------------------5");


/*
自执行函数:
    定义: 定义时立即执行的函数，也被称之为立即调用的函数表达式（IIFE）
    作用: 避免全局变量的污染

在爬虫中，非常重要，在 debugger 无限调试模式中，有些网站会实现无法调试的功能，白屏啥的，无线debug等。
*/

// 自执行函数-1
(function () {console.log("自执行函数 1：hello world")}) ();

console.log("----------------------------------------------------------------6");


// 自执行的函数-2
!function () {
    console.log("自执行函数 2：hello world");
}()

console.log("----------------------------------------------------------------7");


// 自执行函数模拟装饰器
var inner_func;
!function () {
    function _inner() {
        console.log("内部函数：hello world");
    }
    inner_func = _inner;
}();
inner_func();

console.log("----------------------------------------------------------------8");


// 匿名函数
var f = function () {
    console.log("hello world 匿名函数");
}
f()

console.log("----------------------------------------------------------------9");


// 箭头函数
var f = () => {
    console.log("hello world 箭头函数");
}
f()

setTimeout(() => {console.log("hello world 箭头函数")},1000);

console.log("----------------------------------------------------------------10");
