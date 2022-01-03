## 生成器
###### ES6提供的一种异步解决方案，语法和行为与传统函数完全不同
其实就是一个特殊的函数，用来进行异步编程  

声明
```javascript
function* gen(){
    ......
}
```
使用
```javascript
function* gen(){
    console.log(2333);
}
let iterator=gen();
iterator.next();//=>2333
```
可以使用yield语句
*可以看成函数语句的分隔符*
```javascript
function* gen(){
    console.log("1");
    yield "233";
    console.log("2");
    yield "vez";
    console.log("3");
    yield "mei";
    console.log("4");
}
let iterator=gen();
iterator.next();//=>1
iterator.next();//=>2
iterator.next();//=>3
iterator.next();//=>4
```
既然是迭代器对象，可以用for..of遍历
```javascript
function* gen(){
    yield "233";
    yield "vez";
    yield "mei";
}
for(let v of gen()){
    console.log(v);
}
/*
=>233
=>vez
=>mei
*/
```
#### 生成器函数的参数传递
```javascript
function* gen(){
    yield 111;
    yield 222;
    yield 333;
}
let iterator=gen();
console.lofg(iterator.next();//=>1
```
next方法中传入实参
```javascript
function* gen(arg){
    console.log(arg);
    let one=yield 111;
    console.log(one);
    let two=yield 222;
    console.log(two);
    yield 333;
}
let iterator=gen("AAA");
console.log(iterator.next());//=>AAA
console.log(iterator.next("BBB"));//=>one<-BBB
//作为上一个yield语句的整体返回结果
```
#### 应用
异步编程：JS是单线程的
##### 1.解决回调地狱
*需求：1秒后在console输出111，2秒后输出222，3秒后输出333*
ES6以前的写法：计时器套娃
```javascript
setTimeout(()=>{//回调地狱
    console.log(111);
    setTimeout(()=>{
        console.log(222);
        setTimeout(()=>{
            console.log(333);
        },3000);
    },2000);
},1000);
```
生成器函数简化
```javascript
function one(){
    setTimeout(()=>{
        console.log(111);
        iterator.next();
    },1000);
}
function two(){
    setTimeout(()=>{
        console.log(222);
        iterator.next();
    },2000);
}
function three(){
    setTimeout(()=>{
        console.log(333);
        iterator.next();
    },3000);
}
function* gen(){
    yield one();
    yield two();
    yield three();
}
var iterator=gen();
iterator.next();
```
##### 2.按顺序获取信息
*需求：依次获取用户，订单，商品数据*
因为订单数据依赖于用户数据必须有先后顺序
```javascript
function getUsers(){
    setTimeout(()=>{
        let data="userdata";
        iterator.next(data);
    });
}
function getOrders(){
    setTimeout(()=>{
        let data="orderdata";
        iterator.next(data);
    });
}
function getGoods(){
    setTimeout(()=>{
        let data="gooddata";
        iterator.next(data);
    });
}
function* gen(){
    let users=yield getUsers();
    let orders=yield getOrders();
    let goods=yield getGoods();
}
var iterator=gen();
iterator.next();
```
*Vezzzing 2022.1.3 于良渚 CAA 六号楼二楼自习室*
