## Class 类
#### 简介
```javascript
function Pho{
    constructor(a,b){
        //new+类型名的时候执行
        this.a=a;
        this.b=b;
    }
    add(){
        ....
    }
}
```
#### 类的静态成员
实例对象是实例对象，函数对象是函数对象，属性和方法是不通的↓
但是与原型对象是通的
```javascript
function Pho(){
    ......
}
Pho.name="233";
Pho.log=function(){
    ......
}

Pho.prototype.size=22;

let nk=new Pho();
nk.log;//报错
console.log(nk.name);//undefined

console.log(nk.size);//=>22
```
静态属性
```javascript
class Pho{
    static name="233";
    static change(){
        ......
    }
}
```
#### ES5实现继承
```javascript
function A(a,b){
    this.a=a;
    this.b=b;
}
A.prototype.log=function(){...}

function B(a,b,c,d){
    A.call(this,a,b);
    this.c=c;
    this.d=d;
}
```
#### ES6类的继承
```javascript
class A{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    log(){......}
}

class B extends A{
    constructor(a,b,c,d){
        super(a,b);//就是父类的constructor方法
        this.c=c;
        this.d=d;
    }
    anotherF(){......}
}
```
#### 子类对父类方法的重写
```javascript
class A{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    log(){......}
}

class B extends A{
    constructor(a,b,c,d){
        super(a,b);//就是父类的constructor方法
        this.c=c;
        this.d=d;
    }
    log(){......}
}
```
*子类调用父类方法可以通过super().call实现?*
#### Get & Set
get取值时被调用，返回值就是取出的值
```javascript
class A{
    get price(){
        console.log("read");
        return("love vezzzing!!");
    }
}
let s=new A();
console.log(s.price);
/*
=>"read"
=>"love vezzzing"
*/
```
set必须设置一个参数
```javascript
class A{
    set price(newVal){
        console.log("set");
    }
}
let s=new A();
s.price="2333";
/*
=>"set"
=>"love vezzzing"
*/
```
*Vezzzing 2022.1.5 于良渚 CAA 六号楼二楼自习室*
