/*
Ajax（Asynchronous JavaScript and XML）是一种通信方式。它允许浏览器与服务器进行异步通信，而无需刷新整个网页。
Ajax通信特点
1. 异步通信：Ajax通过异步方式与服务器交换数据，用户可以在不刷新页面的情况下与服务器交互
2. 数据传输：Ajax可以发送和接收多种格式的数据，比如json、xml、html或纯文本
3. 核心模块：Ajax的核心是XMLHttpRequest对象（或现代浏览器中的fetch API），它用于发送HTTP请求和接收响应

XMLHttpRequest 比较复杂，jQuery 对其进行了封装，我们开发网站一般都是用 jQuery.
*/

/*
Ajax参数说明
1. url：请求地址
2. type：设置请求方式，默认是GET，常用的还有POST
3. dataType：设置返回的数据格式，常用的是json格式
4. data：设置发送给服务器的数据，没有参数不需要设置
5. success：设置请求成功后的回调函数
6. error：设置请求失败后的回调函数
7. async：设置是否异步，默认值是true，表示异步，一般不用写
8. 同步和异步说明
  ○ 同步是一个ajax请求完成另外一个才可以请求，需要等待上一个ajax请求完成，好比单线程同步
  ○ 异步是多个ajax同时请求，不需要等待其它ajax请求完成， 类似协程异步
*/