const path = require('path');
// path.basename ()
// 返回'path'的最后一部分用于来获取路径中的文件名
// path.join()
// 路径拼接
// path.parse(path)
// 把一个路径转成一个对象

var filePath = 'F:/node.js/test.txt';
// console.log(path.basename (filePath));
// console.log(path.join('F:/n','./o','./d'));

console.log(path.parse(filePath));

