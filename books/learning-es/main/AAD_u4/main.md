## 迭代器
主要供for..of循环使用
具有 <kbd>iterator接口</kbd>[就是对象里面一个symbol.iterator属性] 的数据【可以用for..of遍历】
* Array
* Arguments
* Set
* Map
* String
* TypedArray
* NodeList
#### 简单使用
1.for..of循环（保存的是数组的值）
```javascript
const nameList=["vezzzing","meiiing","kata"];
for(let v of nameList){
    console.log(v);
}
/*
=>vezzzing
=>meiiing
=>kata
*/
```
2.迭代器iterator
```javascript
const nameList=["vezzzing","meiiing","kata"];
let iterator=nameList[Symbol.iterator]();//创建iterator对象
//从第一个元素开始指向
console.log(iterator.next());//=>{value:"vezzzing",done:false}
console.log(iterator.next());//=>{value:"meiiing",done:false}
console.log(iterator.next());//=>{value:"kata",done:false}
console.log(iterator.next());//=>{value:undefined,done:true}
```
#### 应用
##### 自定义遍历数据
1.OOP返回stus的数据
*原始方法*
```javascript
const cla={
    name:"cla1",
    stus:[
        "vezzzing",
        "meiiing",
        "kata",
    ]
}
cla.stus.forEach();
```
*OOP方法* 自己实现迭代器及其next()方法
```javascript
const cla={
    name:"cla1",
    stus:[
        "vezzzing",
        "meiiing",
        "kata",
    ];
    [Symbol.iterator](){
        let index=0;
        return {
            next:()=>{
                if(value<this.stus.length){
                    const result={value:this.stus[index],done:false};
                    index++;//别忘了下标自增
                    return result
                }else{
                    return {value:undefined,done:true}
                }
            }
        }
    }
}
for(let v of cla){
    console.log(v);
}
```
*Vezzzing 2022.1.2 于良渚 CAA 六号楼二楼自习室*
