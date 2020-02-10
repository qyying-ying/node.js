
// 引入文件模块
const fs = require('fs');
// 引入路径模块
const path = require('path')
// 优化：消除魔术数 优点是利于修改
const DATA_FILE = "message.json"
let filePath = path.join(__dirname,DATA_FILE)

// 箭头函数
const getMsg = ()=> {
// function getMsg() {
// 使用同步方式
let rs = fs.readFileSync(filePath,'utf8')
// rs数据是string格式
// json是一种特殊格式的字符串
let arr = JSON.parse(rs)
// console.log(typeof rs);
// console.log(arr);
// console.log(rs);
return arr;
}

let rs = getMsg()
console.log(rs)
