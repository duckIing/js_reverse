/*
json是JavaScript Object Notation的首字母缩写，翻译过来就是JavaScript对象表示法，
这里说的json就是类似于JavaScript对象的字符串，它同时是一种数据格式，
目前这种数据格式比较流行，逐渐替换掉了传统的xml数据格式。
*/

/*
注意事项：
1. json中的key与value需要使用双引号，不能用单引号
2. 最后一组key / value不能加逗号
*/

var json_data = {
    "name": "admin",
    "age": 29,
    "hobby": ["reading", "travel", "photography"],
    "school": {
        "name": "Merrimack College",
        "location": "North Andover, MA"
    }
}
console.log(json_data);


// json数据格式转为JavaScript对象
var json = '{"name": "admin", "age": 123}'
var json_obj = JSON.parse(json)  // 将字符串转为对象

console.log(typeof json_obj);

console.log(json_obj)
console.log(json_obj.name)  // 访问对象属性, 类似python中的字典

console.log('-'.repeat(30))

var json_str = JSON.stringify(json_obj) // 将对象转为字符串
console.log(typeof json_str)
console.log(json_str)  // 转为字符串后没有多余的空格(后期爬虫会遇到这个问题)