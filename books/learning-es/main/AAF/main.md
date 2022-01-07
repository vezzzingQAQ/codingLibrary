## Promise
###### ES6提供的一种异步解决方案
语法上是一个构造函数，用来封装异步操作，可以返回成功或失败
#### 实例化
```javascript
const p=new Promise(function(resolve,reject){
    ...
    //读取数据
    ...
    resolve(data);//如果成功
    reject(err);//如果失败
});
p.then(function(value){
    //成功走这里
    console.log(value)
},function(reason){
    //失败走这里
    console.error(reason)
});
```
#### promise then的链式调用 => ex3
```javascript
p.then(function(value){

},function(reason){

}).then(...)
```
#### promise catch方法
*1.reject抛错方法*
```javascript
const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("error!");
    },1000);
});
```
*2.catch抛错方法*
```javascript
p.catch(function(reason){
    console.warn(reason);
})
```
#### 应用
1.node异步读取本地文件
*原始写法*
```javascript
//引入fs模块
const fs=require('fs');
//读取本地文件
fs.readFile("./main.md",(err,data)=>{
    if(err) throw(err);
    console.log(data.toString());
});
```
*promise封装*
```javascript
//引入fs模块
const fs=require('fs');
//读取本地文件
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
```
2.封装AJAX操作
*原始写法*
```javascript
const xhr=new XMLHttpRequest();
xhr.open("GET","http://wthrcdn.etouch.cn/weather_mini?city=萧山");
xhr.send();
xhr.onreadystatechange=()=>{
    if(xhr.readyState===4){
        //相应状态吗
        if(xhr.status>=200 && xhr.status<300){
            console.log(xhr.response);
        }else{
            console.error(xhr.status);
        }
    }
}
```
*promise写法*
```javascript
const p=new Promise((resolve,reject)=>{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","http://wthrcdn.etouch.cn/weather_mini?city=萧山");
    xhr.send();
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4){
            //相应状态吗
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response);
            }else{
                reject(xhr.status);
            }
        }
    }
});
p.then(function(value){
    console.log(value);
},function(reason){
    console.error(reason);
});
```
3.读取多个文件
*原始写法*
```javascript
const fs=require("fs");
fs.readFile("./nodeExp.js",(err1,data1)=>{
    fs.readFile("./main.md",(err2,data2)=>{
        fs.readFile("./main.html",(err3,data3)=>{
            let result=data1+"\r\n"+data2+"\r\n"+data3;
            console.log(result);
        });
    });
});
```
*promise写法*
```javascript
const fs=require("fs");
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
});
```
*Vezzzing 2022.1.3 于良渚 CAA 六号楼二楼自习室*