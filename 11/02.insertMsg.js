// 引入文件模块
const fs = require('fs');
// 引入路径模块
const path = require('path')
// 优化：消除魔术数 优点是利于修改
const DATA_FILE = "message.json"
let filePath = path.join(__dirname,DATA_FILE)
const getMsg = () => {
    // function getMsg() {
    // 使用同步方式
    let rs = fs.readFileSync(filePath, 'utf8')
    // rs数据是string格式
    // json是一种特殊格式的字符串
    let arr = JSON.parse(rs)
    // console.log(typeof rs);
    // console.log(arr);
    // console.log(rs);
    return arr;
}



const addMsg = (name, content) => {
     // 思路 1.读文件
    let arr = getMsg ()
    console.log(arr);
    // 2. 用数组的append方法，添加一条记录
    let obj = {
        id: arr.length+1,
        "name":name,
        "content":content,
        dt:Date.now()
    }
    arr.push(obj)
    console.log(arr);
    
    // 3.把当前数组写回到文件中去
    // 同步 写文件 writefile
    fs.writeFileSync(filePath,JSON.stringify(arr))

    // console.log(arr); 
    return arr
    
}

let rs = addMsg("邱迎迎", "王帅帅")
console.log(rs)
 