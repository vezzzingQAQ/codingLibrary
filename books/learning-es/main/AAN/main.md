## ES8: async & await
###### 可以让异步代码像同步代码一样
### async
返回值为promise对象
promise对象的结果由async的函数执行返回值决定
#### 初识
*只要返回值不是一个promise类型的对象，则返回值就是一个成功的promise对象*
```javascript
async function func(){
    return("vezzzing");
}
const result=fn();
console.log(result);//=>Promise{.....}状态：成功，值：vezzzing
```
*若有报错则返回失败的promise对象*
```javascript
async function func(){
    throw new Error("error");
}
const result=fn();
console.log(result);//=>Promise{.....}状态：失败，值：error
```
*返回的结果如果是promise对象，如果promise成功，则返回成功的promise对象，而且成功的值就是返回的promise对象的成功的值*
```javascript
async function func(){
    return new Promise((resolve,reject)=>{
        resolve("成功的数据");
    })
}
```
*返回的结果如果是promise对象，如果promise失败，则返回失败的promise对象，而且失败的值就是返回的promise对象的失败的值*
```javascript
async function func(){
    return new Promise((resolve,reject)=>{
        reject("获取失败");
    })
}
```
外部调用
```javascript
async function func(){
    return new Promise((resolve,reject)=>{
        reject("获取失败");
    })
}
const result=fn();
result.then(value=>{
    console.log(value);
},reason=>{
    console.log(reason);
});//=>获取失败
```
### await
必须写在async函数中
右边一般放一个promise对象
返回值是右边promise对象成功的值
如果await的promise对象失败则抛错，用try...catch处理  
### 
成功的调用
```javascript
//创建promise对象
const p=new Promise((resolve,reject)=>{
    resolve("成功的值");
})
async function func(){
    let result=await p;
    console.log(result);//=>成功的值
}
```
失败的调用
```javascript
//创建promise对象
const p=new Promise((resolve,reject)=>{
    reject("ERROR");
})
async function func(){
    try{
        let result=await p;
        console.log(result);
    }catch(e){
        console.log(e);
    }
}
```
### await & async 结合使用
读取本地多个文件
```javascript
const fs=require("fs");
function read1(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./..",(err,data)=>{
            if(err) reject(err);
            resolve(data);
        });
    });
}
function read2(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./..",(err,data)=>{
            if(err) reject(err);
            resolve(data);
        });
    });
}
function read3(){
    return new Promise((resolve,reject)=>{
        fs.readFile("./..",(err,data)=>{
            if(err) reject(err);
            resolve(data);
        });
    });
}

async function main(){
    let result1=await read1();
    let result2=await read2();
    let result3=await read3();
    console.log(result1,result2,result3);
}

main();
```
[promise打开多个本地文件](../AAF/main.html)
###
发送AJAX请求，返回结果是promise对象
*原始写法*
```javascript
function sendAJAX(url){
    return new Promise((resolve,reject)=>{
        const x=new XMLHttpRequest();
        x.open("GET",url);
        x.send();
        x.onreadystatechange=function(){
            if(x.readyState===4){
                if(x.status>=200 && x.status<300){
                    resolve(x.response);
                }else{
                    reject(x.status);
                }
            }
        }
    });
}
sendAJAX("http://wthrcdn.etouch.cn/weather_mini?city=萧山").then(value=>{
    console.log(value);
},reason=>{
    console.warn(reason);
});
```
*await&& async*
```javascript
function sendAJAX(url){
    return new Promise((resolve,reject)=>{
        const x=new XMLHttpRequest();
        x.open("GET",url);
        x.send();
        x.onreadystatechange=function(){
            if(x.readyState===4){
                if(x.status>=200 && x.status<300){
                    resolve(x.response);
                }else{
                    reject(x.status);
                }
            }
        }
    });
}

async function main(){
    let result1=await sendAJAX("http://wthrcdn.etouch.cn/weather_mini?city=萧山");
    let result2=await sendAJAX("http://wthrcdn.etouch.cn/weather_mini?city=余杭");
    console.log(result1);
    console.log(result2);
}

main();
```
*Vezzzing 2022.1.7 于良渚 CAA 六号楼二楼自习室*