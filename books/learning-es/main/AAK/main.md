## 对象方法拓展
#### Object.is判断两个值是否完全相等
类似===但是NaN除外
```javascript
console.log(Object.is(120,120));//=>true
console.log(Object.is(NaN,NaN));//=>true
console.log(NaN===NaN);//=>false
```
#### Object.assign对象合并
```javascript
const config1={
    host:"localhost",
    port:"3306",
    name:"root",
    pass:"root"
}
const config2={
    host:"10.51.61.32",
    port:"4999",
    name:"vezzzing",
    pass:"12321"
}

console.log(Object.assign(config1,config2));//以第二个参数的对象属性的值会覆盖同名第一个参数对象的属性
/*
config1={
    host:"10.51.61.32",
    port:"4999",
    name:"vezzzing",
    pass:"12321"
}
*/
```
#### Object.setPrototypeOf设置原型对象
暂略
  
  
*Vezzzing 2022.1.6 于良渚 CAA 六号楼二楼自习室*