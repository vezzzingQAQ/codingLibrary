## Symbol
#### 一种新的数据类型
1.值是唯一的，以解决命名冲突问题
2.不能与其他数据运算（包括比较，拼接）
3.symbol是一个动态值
##### 创建symbol
1.直接创建
```javascript
let s=Symbol();
console.log(s,typeof s);//=>Symbol() "symbol"
```
2.描述字符串创建
```javascript
let s=Symbol("描述字符串");//描述字符串就只是一个标识，类似注释，不代表内容
```
相同描述字符串创建的symbol值不等
```javascript
let s1=Symbol("vz");
let s2=Symbol("vz");
console.log(s1===s2);//=>false
```
3.for创建
```javascript
let s=Symbol.for("vez");
```
这里相同描述字符串创建的symbol值相等
```javascript
let s1=Symbol.for("vez");
let s2=Symbol.for("vez");
console.log(s1===s2);//=>true
```
##### JS数据类型 
###### USONB
* undefined
* string symbol
* object
* null
* boolean
##### 作用：表示独一无二的值
1.安全地给对象添加方法
*避免对象中已经存在同名地成员*
第一种方法
```javascript
let game={......};
let methods={
    up:Symbol(),
    down:Symbol(),
};
game[methods.up]=function(){......};
game[methods.down]=function(){......};
```
第二种方法
```javascript
let game{
    name:"wonderLand",
    //symbol是动态值，
    [Symbol("start")]:function(){......};
    [Symbol("quit")]:function(){......};
}
```
#### 内置的symbol值
##### 有点像重载😅
改变对象在特定场景下的表现
ex:
1.自己控制类型检测
*当其他对象调用instanceof运算符，判断是否为该对象的实例时，会调用这个方法*
```javascript
class Person{
    static [Symbol.hasInstance](param){
        console.log(param);
        console.log("23333");
    }
}
let o={};
console.log(o instanceof Person);//=>{} 23333
```
2.决定能否进行合并操作（concat）
```javascript
const ar1=[1,2,3];
const ar2=[4,5,6];
ar2[Symbol.isConcatSpreadable]=false;
console.log(ar1.concat(ar2));//=>[1,2,3,[1,2,3]]
```
*Vezzzing 2022.1.2 于良渚 CAA 六号楼二楼自习室*
