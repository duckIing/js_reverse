/*
函数的定义和使用:
与Python一致，函数就是一段可以被重复利用的代码段，在JavaScript中使用function关键字声明函数。

定义存在形式参数并有返回值的函数
1. 定义函数时，函数如果有参数，则参数可以放在小括号中。如果函数需要返回结果，则可以使用return返回
2. JavaScript函数可以不定义形式参数也能接收到调用时传递过来的值，可使用arguments完成接收，功能类似python中的*args
*/

// 函数的定义和调用
function f() {
    console.log("xxxxx");
};


// 函数的参数
function fun1(a, b) {
    console.log(a);
    console.log(b);
};

fun1(1,2)

// 函数的返回值
function sum(a, b) {
    return a + b;
};

var mysum = sum(10,20)
console.log(mysum);

// 函数的嵌套
var inner_func;
!function () {
    function _inner() {
        console.log("hello world");
    }
    inner_func = _inner;
}();
inner_func();

// 自执行的函数
!function () {
    console.log("hello world");
}()


// 匿名函数
var f = function () {
    console.log("hello world 匿名函数");
}
f()

// 箭头函数
var f = () => {
    console.log("hello world 箭头函数");
}
f()

setTimeout(() => {console.log("hello world 箭头函数")},1000);
