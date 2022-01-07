## 模板字符串
会了，略
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
## 函数参数默认值
```javascript
function add(a,b,c=10){
    ...
}
add(1,2);
```
1.具有默认值的参数一般位置靠后
2.与解构赋值结合
```javascript
//NB厉害
function connect({host="127.0.0.1",username,password,port}){
    console.log(host);
}
connect({
    host:"localhost",
    username"root",
    password:"122",
    port:"3306",
});
```
## rest参数
```javascript
function date(...args){
    console.log(args);
}
date("1","2","3");//=>["1","2","3"]
```
1.rest参数必须放在最后

## 扩展运算符
将数组转化为逗号分隔的参数序列
可以用于数组传参
```javascript
const num=[1,2,3];
function log(){
    console.log(arguments);
}
log(...num);//=>[1,2,3];
```
#### 应用
1.数组合并
```javascript
const num1=[1,2,3];
const num2=[3,4,5];
const numtotal=[...num1,...num2];
```
2.数组克隆
```javascript
const num=[1,2,3];
const num2=[...num];
```
3.将伪数组转为正真的数组
arguments也可以用，但是最好直接rest
```javascript
const divs=document.querySelectorAll("div");
cosnt divsArr=[...divs];
```

*Vezzzing 2022.1.2 于良渚 CAA 六号楼二楼自习室*
