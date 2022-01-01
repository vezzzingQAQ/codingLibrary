# ECMAScript
### 入门

##### ECMA
European computer manufacturers association
##### ECMAScript
根据ECMA-262标准制定的语言

## let变量声明
#### 声明
```javascript
let a;
let b,c,d;
let e=100;
let f=521,g="2333";
```
#### 特性
1.不能重复声明
2.块级作用域
*作用域：全局,函数,eval*
```javascript
{
    let g="233";
}
console.log(g);//读取不到
```
3.不存在变量提升
```javascript
console.log(g);
var g="233";//->undefined
```
```javascript
console.log(g);
let g="233";//报错
```
4.不影响作用域链

## const变量声明
#### 声明
```javascript
const SM="Vezzzing";
```
#### 特征
1.一定要赋初始值
2.一般用全大写
3.常量的值不能修改
4.也是块级作用域
```javascript
{
    const G=9.8;
}
console.log(G);//读取不到
```
5.对数组和对象的元素修改，不算是对常量的修改，不会报错
```javascript
const TEAM=["VEZZZING","MEIIING"];
TEAM.push("TIZYYY");
```

## 变量的解构赋值
1.数组解构赋值
```javascript
const ta=["vezzzing","meiiing"];
let [vz,me]=ta;
console.log(vz);//->vezzzing
console.log(me);//->meiiing
```
2.对象解构赋值
```javascript
const fuc1={
    name:"2dfuc",
    fuc:"sin(x*y)",
    tostr:function(){
        console.log("sin(x*y)";
    }
};
let {name,fuc,tostr}=fuc1;//变量名和成员名须一致!!!
console.log(name);//->2dfuc
console.log(fuc);//->sin(x*y)
tostr();//->sin(x*y);
``` 

  
*Vezzzing 2022.1.1 于良渚 CAA 六号楼二楼自习室*
