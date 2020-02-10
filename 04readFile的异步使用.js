const fs = require('fs');


fs.readFile('01.js','utf8', function(err, data) {
        // 回调函数，自动调用
        // 如果有错误，则错误信息会保存在第一个参数中
        // 如果没有错误，则信息会保存在第二个参数中
    if (err) {
        // 在读的过程，发生了错别
        throw err;
    }
    else {
        // 整个读取有错误
        // 如果不设置utf8 会读出Buffer格式的内容（一段编码）
        // buffer转字符串，直接使用toString（）方法
        console.log(data);
        // console.log(data.toString());
        
    }
 });