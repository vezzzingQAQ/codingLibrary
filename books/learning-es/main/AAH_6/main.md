## Map 
> 类似于对象，也是键值对的集合，但是键的范围不限于字符串
> 实现了iterator接口，可以用拓展运算符和for..in遍历

属性和方法

> size
> set 增加新元素
> get
> has
> clear

#### 声明
```javascript
let m=new Map();
```
#### 操作
```javascript
//添加元素
m.set("name":"vez");
m.set("change":function(){
    console.log("change");
});
let key={
    place:xland
}
m.set(key,[1,3,2]);
//获取长度
console.log(m.size);
//删除元素
m.delete("name");
//获取
console.log(m.get("change"));
console.log(m.get(key));
//清空
m.clear();
//遍历
for(let v of m){
    console.log(v);
}
/*
["name","vez"],
......
*/
```
*Vezzzing 2022.1.4 于良渚 CAA 六号楼二楼自习室*
