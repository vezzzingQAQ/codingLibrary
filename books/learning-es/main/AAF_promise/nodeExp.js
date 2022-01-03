//引入fs模块
const fs=require('fs');
//读取本地文件
// fs.readFile("./main.md",(err,data)=>{
//     if(err) throw(err);
//     console.log(data.toString());
// });
const p=new Promise(function(resolve,reject){
    fs.readFile("./main.md",(err,data)=>{
        if(err) reject(err);//改变promise状态为失败
        resolve(data);//改变promise状态为成功
    });
});
p.then(function(value){
    console.log(value.toString());
},function(reason){
    console.log("读取失败");
});