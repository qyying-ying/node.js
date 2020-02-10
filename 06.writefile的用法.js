// const fs = require('fs');
// // 文件路径 内容 回调
// fs.writeFile('./test.txt', '我是jessie', err =>{
//     if(err){
//         console.log(err);
        
//     }
// });

const fs = require('fs');
let arr = [{id:1,name:'tese'}]
// 文件路径 内容 回调
fs.writeFile('./test.txt', JSON.stringify(arr), err =>{
    if(err){
        console.log(err);
        
    }
});
