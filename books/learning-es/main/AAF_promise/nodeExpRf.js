const fs=require("fs");
// fs.readFile("./nodeExp.js",(err1,data1)=>{
//     fs.readFile("./main.md",(err2,data2)=>{
//         fs.readFile("./main.html",(err3,data3)=>{
//             let result=data1+"\r\n"+data2+"\r\n"+data3;
//             console.log(result);
//         });
//     });
// });
const p=new Promise((resolve,reject)=>{
   fs.readFile("./main.md",(err,data)=>{
       resolve(data);
   }) 
});
p.then(value=>{
    return(new Promise((resolve,reject)=>{
        fs.readFile("./main.html",(err,data)=>{
            resolve([value,data]);
        });
    }));
}).then(value=>{
    return(new Promise((resolve,reject)=>{
        fs.readFile("./nodeExp.js",(err,data)=>{
            value.push(data);
            resolve(value);
        });
    }));
}).then(value=>{
    console.log(value.join("\r\n"));
})