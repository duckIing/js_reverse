/*
现实生活中，万物皆对象。
对象是一个具体的事物，看得见摸得着的实物。
例如，一本书、一辆汽车、一个人可以是对象，一个数据库、一张网页、一个与远程服务器的连按也可以是对象。

在JavaScript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串、数值、数组、函数等。

对象是由属性和方法组成的：
    ● 属性：事物的特征，在对象中用属性来表示（常用名词）
    ● 方法：事物的行为，在对象中用方法来表示（常用动词）

创建对象的三种方式
    ● 利用字面量创建对象
    ● 利用new Object创建对象
    ● 利用构造函数创建对象

类的使用
    ● 在生活中，类一些具有相似属性和行为的事物抽象出来的概念，比如：人类、球类、汽车类；
    ● 在JavaScript中，类是模板，是用于创建实例对象的模板；相当于实例的原型（prototype）
*/

// 字面量创建对象
var obj_1 = {
    "name": "admin-1", 
    "age": 12,
    "print_info": function () {
        console.log(this.name, this.age);  // this: 类似python中的self, 指向当前对象
    }
};
console.log(obj_1);
console.log(obj_1.name)
obj_1.print_info();
console.log('-'.repeat(20));

// 利用new Object创建对象
var obj_2 = Object();
obj_2.name = "admin-2";
obj_2.run_function = function () {
    console.log("obj_2的函数被执行...");
}
console.log(obj_2.name);
obj_2.run_function();
console.log('-'.repeat(20));

// 利用构造函数创建对象
// 构造函数：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，
// 它总与 new 运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。
// js看起来和函数定义差不多。
function Person() {
    this.name = "admin-3";
    this.age = 13;
    this.print_info = function () {
        console.log(this.name, this.age);
    }
}
var p1 = new Person();
console.log(p1);
console.log(p1.name);
p1.print_info();
console.log('-'.repeat(20));

/*
    class 类名 {
        // 构造方法，用于声明实例属性
        constructor() {
            ...
            };
    }
    1. class：ES6中提供了class关键字，用来创建类
    2. 类名：一般为名词，采用首字母大写表示，如Person、Car等等
    3. {...}：类体放在一对大括号中， 我们可以在大括号内定义类的成员，比如构造函数、静态方法等等
    4. constructor(){...}：每个类都会包含的一个类的构造函数，用来实例化一个由class创建的对象
*/
class Person2 {
    // 构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    // 私有方法: 使用 # 定义私有方法或者私有属性
    #private_func() {
        console.log("这是一个私有方法");
    };

    // 静态方法
    static static_func() {
        console.log("这是一个静态方法");
    }

    // 实例方法: 无需使用 function 关键字
    print_info() {
        console.log(`my name is ${this.name}, age is ${this.age}`)
    };

    // 在内部调用私有方法
    run_private_function() {
        this.#private_func();
    }
}

// 实例化
var obj = new Person2("admin-4", 14);
console.log(obj.name);
// obj.private_func();  私有方法与python一致, 无法在外部调用


Person2.static_func();  // 调用静态方法必须使用类名(静态方法是属于类的而不是对象的)
obj.print_info();
obj.run_private_function();