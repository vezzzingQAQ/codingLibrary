## ES8: 对象方法拓展
#### Object.keys 获取对象所有属性名
```javascript
const fusen={
    name:"vezzzing",
    age:19,
    location:["xland","xs","ks"]
}
console.log(Object.keys(fusen));//=>["name","age","location"]
```
#### Object.values 获取对象所有属性值
```javascript
const fusen={
    name:"vezzzing",
    age:19,
    location:["xland","xs","ks"]
}
console.log(Object.values(fusen));//=>["vezzzing",19,Array(3)]
```
#### Object.entries 以键值对数组的形式返回对象的属性名和属性值
可以很方便地创建[Map](../AAH/main.html)
```javascript
const fusen={
    name:"vezzzing",
    age:19,
    location:["xland","xs","ks"]
}
console.log(Object.entries(fusen));
/*
[
    ["name":"vezzzing"],
    [..,..]
    ...
]
*/
const m=new Map(Object.entries(fusen));
console.log(m);//{..:..}
console.log(m.get("name"));//=>"vezzzing"
```
#### Object.getOwnPropertyDescriptors 返回对象属性的描述对象
```javascript
const fusen={
    name:"vezzzing",
    age:19,
    location:["xland","xs","ks"]
}
console.log(Object.getOwnPropertyDescriptors(fusen));
```
*Vezzzing 2022.1.7 于良渚 CAA 六号楼二楼自习室*