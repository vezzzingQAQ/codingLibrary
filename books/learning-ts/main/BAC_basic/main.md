# TS数据类型
  
### *2021.12.20,2022.1.1*  
#### 概述
```javascript
const a:string="foo";
const b:number=100;
const c:boolean=true;

const e:void=undefined;//用于没有返回值的函数

const f:undefined=undefiend;
const g:null=null;
```

#### 1.object类型
```typescript
const foo:object=function//{}//[];并不单单指普通对象
//这样限制对象类型限制【也可以用接口】
const obj:{foo:number,bar:string};
obj={foo:123,bar:"string"};
```

#### 2.array数组类型
```typescript
const arr1:Array<number>=[1,2,3];//纯数字组成的数组
const arr2:number[]=[1,2,3];//纯数字组成的数组
```

#### 3.tuple元组类型
```typescript
const tuple:[number,string]=[18,"str"];
//访问元组
const age=tuple[0];
const [age,name]=tuple;//数组解构
```

#### 4.enum枚举类型
原生JS实现枚举
```typescript
const Status={
    DRAFT:0,
    PUBLISHED:1,
    UNPUBLISHED:2
}
```
ts枚举
```typescript
enum Status{
    DRAFT=0,
    PUBLISHED=1,
    UNPUBLISHED=2
}
//使用
Status.DRAFT;
//根据索引访问枚举的名字
Status[0];
```
枚举会影响编译结果，编译为双向键值对对象↑

常量枚举
```typescript
const enum Status{
    DRAFT=0,
    PUBLISHED=1,
    UNPUBLISHED=2
}
//编译过程中会被移除
Status[0];
```

#### 5.function函数类型
1.函数声明
```typescript
function fuc1(a:number,b:number):string{
    return("func1");
}
//调用时参数数量必须一致
function fuc1(a:number,b?:number):string{
    return("func1");
}
//指定可选参数F1
function fuc1(a:number,b:number=10):string{
    return("func1");
}
//指定可选参数F2
function fuc1(a:number,b:number,...rest:number[]):string{
    return("func1");
}
//接收任意数量参数
```
2.函数表达式
```typescript
const FUNC2=function(a:number,b:number):string{
    return("func2");
}
const FUNC3:(a:number,b:number)=>string=function(a:number,b:number):string{
    return("func2");
}
```

#### 6.any任意参数
```typescript
function stringify(value:any){
    return JSON.stringify(value);
}
```

## 隐式类型推断
```typescript
let age=18;
age="233"//报错
```

## 类型断言
告诉TS某个结果应该是某个类型
```typescript
const nums=[110,120,221,222];
const res=nums.find(i=>i>0);//这句话TS认为可能返回number或者undefined
const squre=nums*nums;//因此这句会报错
const num1=res as number//断言F1
const num2=<number>res;//断言F2
```
