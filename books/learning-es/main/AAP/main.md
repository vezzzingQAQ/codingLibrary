## ES9：对象拓展运算符
#### 对象扩展【rest】
以前的写法
```javascript
function connect({host,port,username}){
    console.log(host);
    console.log(port);
    console.log(username);
}
connect({
    host:"127.0.0.1",
    port:3306,
    username:"root",
})//=>127.0.0.1,3306,root
```
对象扩展
```javascript
function connect({host,port,...user}){
```
```javascript
function connect({host,port,...user}){
    console.log(host);
    console.log(port);
    console.log(user);
}
//剩余参数会存到user对象里面
```
#### 对象展开【...对象】
```javascript
const s1={
    q:"123",
    b:2,
}
...s1//=>q:"123",b:2
```
##### 用处
将多个对象的属性合并为一个对象

*Vezzzing 2022.1.8 于萧山 家*