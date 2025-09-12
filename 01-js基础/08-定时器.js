/*
定时器就是在一段特定的时间后执行某段程序代码。

在爬虫中，定时器非常重要，和无线debuger有关系。

定时器的使用
  JavaScript定时器有两种创建方式:
    1. setTimeout(func[, delay, params_1, params_2, ...]) ：以指定的时间间隔（以毫秒计）调用一次函数的定时器
    2. setInterval(func[, delay, params_1, params_2, ...])：以指定的时间间隔（以毫秒计）重复调用一个函数的定时器

  setTimeout函数的参数说明:
    ● 第一个参数func：表示定时器要执行的函数名
    ● 第二个参数delay：表示时间间隔，默认是0，单位是毫秒
    ● 第三个参数params：表示定时器执行函数的第一个参数，一次类推传入多个执行函数对应的参数

  setInterval函数的参数说明
    ● 第一个参数func：表示定时器要执行的函数名
    ● 第二个参数delay：表示时间间隔，默认是0，单位是毫秒
    ● 第三个参数params：表示定时器执行函数的第一个参数，一次类推传入多个执行函数对应的参数

  清除定时器
    JavaScript清除定时器分别是：
      ● clearTimeout(timeoutID)：清除只执行一次的定时器（setTimeout函数）
      ● clearInterval(timeoutID)：清除反复执行的定时器（setInterval函数）
*/

// // 测试 setTimeout
// function run_test1(){
//     console.log("这是一个测试函数1");
// }
// console.log('run...1')
// /* setTimeout: 延迟执行一次 */
// setTimeout(run_test1, 2000);  // timeout: 单位是毫秒

// // 观察顺序
// console.log('run...2')


// // 测试 setInterval
// function run_test2(){
//     console.log("这是一个测试函数2");
// }

// /* setInterval: 周期性执行 */
// setInterval(run_test2, 1000);

// // 观察顺序
// console.log('run...3')



//////////////////////////////////////////////////////////////////////////////////////


/*
清除定时器
JavaScript清除定时器分别是：
  ● clearTimeout(timeoutID)：清除只执行一次的定时器（setTimeout函数）
  ● clearInterval(timeoutID)：清除反复执行的定时器（setInterval函数）
*/

// function test() {
//   console.log("这是一个测试函数");
// };

// /* setTimeout: 延迟执行一次 */
// let timeoutID = setTimeout(test, 1000);

// /* 清除定时器 */
// clearTimeout(timeoutID);

// function test_func() {
//   console.log("这是一个测试函数 setInterval");
// };

// /* setInterval: 周期性执行 */
// let intervalID = setInterval(test_func, 1000);

// /* 5.1秒后，清除定时器 intervalID  */
// setTimeout(() => {
//     clearInterval(intervalID);
// }, 5100);

// 下面是错误写法
// setTimeout(clearInterval(intervalID), 5100); // 错误写法，会立即执行 clearInterval(intervalID)，传递的是 函数执行结果

//////////////////////////////////////////////////////////////////////////////////////

// 结束定时器的另一种写法：方法置空
function run_test(){
    console.log("这是一个测试函数");
}

// 将原有的 setInterval 方法指向为自定义的函数
setInterval = function () {
    // console.log(arguments[0]); // 注意：arguments 是收集的参数
    arguments[0]();
}

setInterval(run_test) // run_test 传入后，会被 arguments 收集起来