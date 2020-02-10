const fs = require('fs');

console.log(1);

try {
    let rs = fs.readFileSync('./01.js','utf8')
    console.log(rs);
}
catch (err) {
    console.log("有错误：");

    console.log(err);


}
console.log(3);
