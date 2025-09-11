/*
JavaScript可以分为三个部分：ECMAScript标准、DOM、BOM

ECMAScript标准
即JS的基本语法，JavaScript的核心，描述了语言的基本语法和数据类型，ECMAScript是一套标准，定义了一种语言的标准与具体实现无关

DOM
即文档对象模型（Document Object Model），用于操作页面元素，DOM可以把HTML看做是文档树，通过DOM提供的API可以对树上的节点进行操作。

BOM
即浏览器对象模型（Browser Object Model），用于操作浏览器，比如：弹出框、控制浏览器跳转、获取分辨率等
*/

/*
document 对象其实是 window 对象下的一个子对象，它操作的是HTML文档里所有的内容。
事实上，浏览器每次打开一个窗口，就会为这个窗口生成一个window对象，并且会为这个窗口内部的页面（即HTML文档）自动生成一个document对象，然后我们就可以通过document对象来操作页面中所有的元素。

由于window对象是包括document对象的，所以我们可以简单的把BOM和DOM的关系理解成：BOM 包含 DOM。
只不过对于文档操作来说，我们一般不把它看成是BOM的一部分，而是看成独立的，也就是DOM。
*/

// console.log(window)  在node环境中运行会报错, 因为node没有window对象(浏览器环境中的全局对象)

console.log(global);  // node环境中的全局对象

/*
* 在window对象中比较重要的几个方法
*   1.document: 文档对象, 用于操作HTML元素
*   2.navigator: 导航对象, 用于获取浏览器信息
*   3.location: 位置对象, 用于获取当前页面的URL信息
*   3.frames: 框架对象, 用于操作框架和查询框架
*   4.history: 历史对象, 用于操作浏览器的历史记录
*   5.screen: 屏幕对象, 用于获取屏幕信息
*
* 以上几个对象需要在浏览器控制台执行
* */