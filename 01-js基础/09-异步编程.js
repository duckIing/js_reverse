/*
异步代码是指不按照代码的顺序执行，而是在某个事件触发之后才会执行。
也就是说，异步代码不会阻塞代码的执行，可以在等待某些操作完成的同时继续执行其他代码。 

异步代码的应用主要是在一些需要等待操作结果的复杂操作中，比如网络请求、文件读写等。
这些操作需要等待一定时间才能获取结果，如果使用同步代码来实现，就会导致代码的执行被阻塞。
*/

// 异步示例
// 1. 同步代码示例

// console.log('===== 同步代码示例 =====');
// console.log('第一行');
// console.log('第二行');
// console.log('第三行');

//----------------------------------------------------------------

// /*(异步代码示例（使用定时器）*/
// console.log('\n===== 异步代码示例 =====');
// console.log('开始');

// /*setTimeout的基本使用*/
// function printMessage() {
//   console.log('我是2秒后才执行的代码');
// }

// setTimeout(printMessage, 2000);  // 2000表示2000毫秒，也就是2秒
// console.log('结束');

//----------------------------------------------------------------

// 多个定时器的执行顺序
/*
执行代码后观察代码结果：
1. 同步代码会立即执行
2. setTimeout中的代码会延迟执行
3. 程序不会等待setTimeout，会继续执行后面的代码
*/

// console.log('\n===== 多个定时器示例 =====');
// console.log('开始执行');

// function print_1() {
//     console.log('第一个定时器：等待1秒');
// }

// function print_2() {
//     console.log('第二个定时器：等待2秒');
// }

// setTimeout(print_1, 1000);  // 1秒后执行
// setTimeout(print_2, 2000);  // 2秒后执行

// console.log('结束执行');

//----------------------------------------------------------------

// 回调地狱（不要学习这种代码编写风格）
// 让AI去分析一些，有些网站会把机密写到回调地狱里面。
// console.log('\n=== 回调地狱示例 ===');
// setTimeout(() => {
//     console.log('第一层');
//     setTimeout(() => {
//         console.log('第二层');
//         setTimeout(() => {
//             console.log('第三层');
//         }, 1000);
//     }, 1000);
// }, 1000);


//----------------------------------------------------------------


/*
Promise是一种异步代码实现方式，它可以更好地处理异步操作的结果。
在JavaScript中，Promise对象代表了一个异步操作的最终完成或失败状态，并提供了相应的方法处理异步操作的结果
一个 Promise 必然处于以下几种状态之一：
    待定（pending）：初始状态，既没有被兑现，也没有被拒绝。
    已兑现（fulfilled）：意味着操作成功完成。
    已拒绝（rejected）：意味着操作失败。

  new Promise(function (resolve, reject) {
      // 要做的事情...
  });

  promise 主要用于网络请求。

resolve和reject是Promise构造函数中传递的两个回调函数参数，用于控制Promise的状态。
1. resolve
  a. 用于将Promise的状态从pending（进行中）变为fulfilled（成功）
  b. 调用resolve时，可以传递一个值，这个值会作为then方法中回调函数的参数

2. reject
  a. 用于将Promise的状态从pending（进行中）变为rejected（失败）
  b. 调用reject时，可以传递一个错误信息，这个信息作为catch方法中回调函数的参数
*/

//----------------------------------------------------------------

// // Promise 基本使用
// function simplePromise() {
//   var promise = new Promise(function(resolve, reject) {
//     var success = true; // 模拟异步操作
//     if (success) {
//         resolve('操作成功...');
//     } else {
//         reject('操作失败...');
//     }
//   });
//   return promise;
// }

// var obj = simplePromise()
// obj.then(function (result) {
//     console.log(result);  // 回调 resolve
// }).catch(function (error) {
//     console.log(error);  // 回调 reject
// }).finally(function () {
//     console.log('finally');
// })

//----------------------------------------------------------------

// // 带延迟的 promise 示例
// function delayPromise() {
//   var promise = new Promise(function (resolve, reject) {
//     console.log('开始执行');

//     // 模拟延迟
//     setTimeout(() => {
//       resolve('操作成功...');
//     }, 2000);

//   });
//   return promise;
// }

// // 调用 delayPromise 函数
// delayPromise().then(function (result) {
//     console.log(result);  // 2秒后输出: 操作成功...
// }).catch(function (error) {
//     console.log(error);  // 4秒后输出: 操作失败...
// });

// console.log('调用 delayPromise 函数之后');


//----------------------------------------------------------------

// promise 链式调用




