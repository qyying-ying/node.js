const fs = require('fs');

let arr = [{id:1,name:'tese'}]
// 文件路径 内容 回调
fs.appendFile('./test.txt', '\n'+JSON.stringify(arr), err =>{
    if(err){
        console.log(err);
        
    } else {
        console.log('完成写入')
        
    }
})