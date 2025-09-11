/*
    数组：
        数组是一种特殊的变量，它可以同时存储多个值。
        数组的每个元素都有一个唯一的索引，用于访问和操作该元素。
 */

// 对象创建数组
var arr = new Array(1,2,3,4,5);
console.log(arr);
// 数组的长度
console.log('数组的长度: ',arr.length);

// 字面量创建数组的定义
var arr = [1, 2, 3, 4, 5];
console.log(arr);

// 修改元素
arr[0] = 100;
console.log(arr);

// 末尾添加元素
arr_len = arr.length;
arr[arr_len] = 6;
console.log(arr);

// 头部添加元素
var my_array = [1, 2, 3, 4, '5'];
my_array.unshift('0');  // 在数组开头添加一个元素
console.log(my_array);

// 数组的删除
my_array.shift();  // 删除数组的第一个元素
console.log(my_array);

// 删除指定的元素
my_array.splice(2, 1);  // 删除从索引2开始的1个元素
console.log(my_array);

var my_array = [1, 2, 3, 4, '5'];

// splice(开始删除的索引, 删除的数据个数, 在删除的位置添加新的元素)
my_array.splice(1, 2, 'a', 'b', 'c');  // 从数组的第二个元素开始删除两个元素, 之后在第二个元素位置添加三个元素
console.log(my_array);