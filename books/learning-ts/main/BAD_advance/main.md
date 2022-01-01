# TS高级语法
  
### *2022.1.1*  

## 1.接口inderface  
一种规范，约定对象的结构
可以约定一个类中有那些成员，是什么类型
  
接口定义
```typescript
interface Post{
    title:string;
    content:string;
    index:number;
}
```
使用接口规范传入函数的类
```typescript
function printPost(post:Post){
    console.log(post.index);
    console.log(post.title);
    console.log(post.content);
}
```
可选成员
```typescript
interface Post{
    title:string;
    subTitle?:string;
    content:string;
    index:number;
}
```
只读成员
```typescript
interface Post{
    title:string;
    content:string;
    readonly summary:string;
    index:number;
}
```
动态成员
```typescript
interface Post{
    [prop:string]:string;//键值类型
}
const ca:Post={};
ca.foo="233";
ca.bae="2333";
```

## 2.类class
入门
```typescript
class Person{
    //必须现声明
    name:string;
    age:number;//要么这里赋值，要么构造函数中赋值
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    say(msg:string):void{
        console.log(msg);
    }
}
```
访问修饰符
```typescript
class Person{
    //必须现声明
    public name:string;//默认就是public
    private age:number;//private只有类内部访问
    protected gender:boolean;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    say(msg:string):void{
        console.log(msg);
    }
}
class Student extends Person{
    constructor(name:string,age:number){
        super(name,age);
        console.log(gender);//可以访问
    }
}
```
只读属性
```typescript
class Person{
    //必须现声明
    public name:string;//默认就是public
    private age:number;//private只有类内部访问
    protected readonly gender:boolean;//只读属性，只能赋值不能修改
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    say(msg:string):void{
        console.log(msg);
    }
}
class Student extends Person{
    constructor(name:string,age:number){
        super(name,age);
        console.log(gender);//可以访问
    }
}
```
类与接口
不同的类之间，有公共的特征
*ex:都有一个方法，但是实现的方法不一样*
```typescript
interface EatAndRun{
    eat(food:string):void;
    run(distance:number):void;
}
class Person implements EatAndRun{
    eat(...)...
    ...
    run(...)...
    ...
}
class Dog implements EadAndRun{
    eat(...)...
    ...
    run(...)...
    ...
}
```
多接口继承
```typescript
interface Eat{
    eat(food:string):void;
}
interface Run{
    run(distance:number):void;
}
class Person implements Eat,Run{
    eat(...)...
    ...
    run(...)...
    ...
}
```
## 3.抽象类abstractClass
也可以约束子类中必须有某些成员，但是可以包含实现（相比接口）
```typescript
abstract class Animal{
    eat(food:string):void{
        console.log(food);
    }
    //抽象方法，子类必须实现
    abstract run(distance:number):void;
}
```
抽象类不能实例化，只能继承
```typescript
class Dog extends Animal{
    run(...)...//可以用vscode自带的快速创建
}
```
## 4.泛型
声明时不指定类型，调用时指定类型
```typescript
function createArray<T>(length:number,value:T):T[]{
    const arr=Array<T>(length).fill(value);
    return(arr);
}
const res=createArray<string>(3,'foo');
```
## 5.类型声明
引入第三方库（非TS)时使用
```typescript
import {camelCase} from 'loadsh'

declare function camelCase(input:string):string;

const res=camelCase("hello typed");
```
安装第三方库的类型声明模块
.d.ts
