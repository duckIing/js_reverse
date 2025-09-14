/*
变量作用域就是变量的使用范围，变量分为：
● 局部变量：在函数内使用的变量，只能在函数内部使用
● 全局变量：在函数外部使用的变量，在整个页面都可以使用

变量的生命周期
● JavaScript变量生命周期在它声明时初始化
● 局部变量在函数执行完毕后销毁
● 全局变量在页面关闭后销毁

声明变量类型
在JavaScript中，声明变量使用的关键字是var、let和const
● var：是旧版本的JavaScript中用来声明变量的关键字，它可以在任何作用域内声明变量，包括函数内部和块级作用域外
● let：是ES6引入的新关键字，用来声明块级作用域变量，即变量的作用域被限定在声明它的代码块中
● const：也是ES6引入的新关键字，用来声明块级作用域的常量，即一旦声明，其值就不能改变

声明提升:
    var：存在声明提升。
    let：不存在声明提升（存在暂时性死区）
*/

// 全局变量
var a = 10;
function test() {
    console.log(a);
}
test()

// 局部变量
function test2() {
    var b = 20;
    console.log(b);
}
test2()
// console.log(b); // ReferenceError: b is not defined

// let vs. var
function testVar() {
    if (true) {
        var x = 10; // x 具有函数作用域
        console.log(x); // 10
    }
    console.log(x); // 10，即使在 if 块外部也可以访问
}
testVar();
// console.log(x); // ReferenceError: x is not defined (在全局作用域无法访问)

function testLet() {
    if (true) {
    let y = 20; // y 具有块级作用域
    console.log(y); // 20
    }
    // console.log(y); // ReferenceError: y is not defined，块级作用域之外无法访问 y
}
testLet();


// 声明上提
// var：存在声明上提。
// let：不存在声明上提（存在暂时性死区）
function testDeclare() {
    console.log(a); // undefined
    var a = 10;
    console.log(a); // 10
}
testDeclare();

function testDeclare2() {
    // console.log(a); // ReferenceError: a is not defined
    let a = 10;
    console.log(a); // 10
}
testDeclare2();


