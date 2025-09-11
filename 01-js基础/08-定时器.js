/*
定时器就是在一段特定的时间后执行某段程序代码。

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

function run_test(){
    console.log("这是一个测试函数");
}

/* setTimeout: 延迟执行一次 */
setTimeout(run_test, 3000);  // timeout: 单位是毫秒

function run_test(){
    console.log("这是一个测试函数");
}

/* setInterval: 周期性执行 */
setInterval(run_test, 2000);
set