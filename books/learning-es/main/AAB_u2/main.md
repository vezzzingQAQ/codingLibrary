## 模板字符串
会了，略
## 简化对象写法
1.允许在大括号里面直接写入变量和函数，简化书写
```javascript
let name="vezzzing";
let log=function(){
    console.log("vez");
}
const v={
    name,
    log,
}
/*
等效于
const v={
    name:name,
    log:log,
}
*/
```
2.允许省略function
```javascript
const v{
    afun(...){
        ....
    }
}
```

## 箭头函数
```javascript
let add=(a,b)=>{
    return(a+b);
}
console.log(add(1,2));
```
#### 与普通函数声明区别
1.this是静态的，this始终指向函数声明时所在作用域下的this的值
```javascript
function getName(){
    console.log(this.name);
}
let getName2=()=>{
    console.log(this.name);
}

window.name="vezzzing";
const cda={
    name:"233";
}

//直接调用
getName();//->vezzzing 全局作用域默认指向window
getName2();//->vezzzing 全局作用域默认指向window

//call改变this
getName.call(cda);//->233 
getName2.call(cda);//->vezzzing
```
2.不能作为构造函数实例化对象
3.不能在函数体中使用arguments变量
4.箭头函数简写
*1省略小括号，当形参有且只有一个时*
```javascript
let add=n=>{
    return n+n;
}
```
*2省略花括号和return语句，当函数体只有一行语句时*
```javascript
let pow=n=>n*n;
```

#### 应用
1.点击DIV两秒后改变颜色
*this转换*
原来的写法
```javascript
let ad=document.getElementById("ad");
ad.addEventListener("click",function(){
    let _this=this;
    setTimeout(function(){
        _this.style.background="rgb(0,255,0)";
    },2000);
})
```
箭头函数
```javascript
let ad=document.getElementById("ad");
ad.addEventListener("click",function(){
    setTimeout(()=>{
        this.style.background="rgb(0,255,0)";
    })
},2000);
```