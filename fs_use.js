// 核心模块步骤
// 1. 引入模块
// 格式 常量 = require（‘核心模块名’）
// 2.使用模块的api

const fs = require('fs');
// 前fs 常量名 后fs模块名字
console.log(fs);


fs.readFile('01.js','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });