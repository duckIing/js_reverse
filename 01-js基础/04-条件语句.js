/*
比较运算符：
    等于：==（类型转换后比较）
    不等于：!=
    严格等于：=== （类型相同，值也相同）
    严格不等于：!==
    大于：>
    小于：<
    大于等于：>=
    小于等于：<=

三目运算：
    语法：条件 ? 表达式1 : 表达式2
    说明：如果条件为 true，则返回表达式1的值，否则返回表达式2的值
    注意：三目运算有返回值。

逻辑运算符：
    与：&&
    或：||
    非：!
    说明：
        与：多个条件都为 true，才为 true
        或：多个条件有一个为 true，就为 true
        非： true 变 false，false 变 true

switch 语句：
    语法：
        switch (表达式) {
            case 常量1:
                语句1;
                break;
            case 常量2:
                语句2;
                break;
            ...
            default:
                语句n;
        }
    说明：
        表达式：可以是变量或常量
        case 常量：常量可以是数字、字符串、布尔值
        break：用于跳出 switch 语句
        default：如果没有 case 匹配，执行 default 语句
*/

// 判断素数
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// 注意类型转换
var num_1 = 1;
var num_2 = '1';

// == 默认将数据类型转换为相同类型再比较
if (num_1 == num_2){
    console.log("1 == '1' , 类型转换后相等");
} else {
    console.log("不相等");
}


// === 不进行数据类型转换, 直接比较
if (num_1 === num_2){
    console.log("相等");
} else {
    console.log("不相等");
}


// 多条件判断
var age = 25;
var hasLicense = true;
var hasCar = false;

if (age >= 18 && hasLicense) {
    if (hasCar) {
        console.log("你可以合法驾驶自己的车。");
    } else {
        console.log("你可以合法驾驶，但你需要一辆车。");
    }
} else if (age >= 18 && !hasLicense) {
    console.log("你需要先考取驾照才能驾驶。");
} else {
    console.log("你还未成年，不能驾驶。");
}


// 三目运算
var age = 18;
var result = age >= 18 ? "成年人" : "未成年人";
console.log(result); // 成年人


// 逻辑运算符
var a = 10;
var b = 20;
var c = 30;
// 与
console.log(a < b && b < c); // true
// 或
console.log(a < b || b > c); // true
// 非
console.log(!(a < b)); // false


// switch 语句
var day = 3;
switch (day) {
    case 1:
        console.log("星期一");
        break;
    case 2:
        console.log("星期二");
        break;
    case 3:
        console.log("星期三");
        break;
    default:
        console.log("其他");
}
// 输出：星期三