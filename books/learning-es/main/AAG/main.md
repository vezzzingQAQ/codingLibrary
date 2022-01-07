## Set 集合
可以用for..of遍历
属性和方法：
size
add
delete
has
#### 声明
```javascript
let s=new Set();
let s2=new Set([3,2,1,2,1]);//接收一个可迭代数据（一般是数组）,会自动去重
```
#### 操作
```javascript
console.log(s2.size);
s2.add(4);
s2.delete(2);
console.log(s2.has(2));
//遍历
for(let v of s2){
    console.log(v);
}
```
## 应用
#### 1.数组去重
```javascript
let arr=[1,2,3,4,5,6,6,5,4];

let result=[...new Set(arr)];
```
#### 2.交集
```javascript
let arr1=[1,4,2,3,2,1];
let arr2=[1,4,2,7,3,9];

let result=[...new Set(arr1)].filter(item=>{
    let s2=new Set(arr2);
    if(s2.has(item)){
        return true;
    }else{
        return false;
    }
})
```
简写
```javascript
let arr1=[1,4,2,3,2,1];
let arr2=[1,4,2,7,3,9];

let result=[...new Set(arr1)].filter(item=>new Set(arr2).has(item));
```
#### 3.并集
```javascript
let arr1=[1,4,2,3,2,1];
let arr2=[1,4,2,7,3,9];

let union=[...new Set([...arr1,...arr2])];
```
#### 4.差集
1和2求差集：1里面有，2里没有
```javascript
//并集取反
let result=[...new Set(arr1)].filter(item=>!(new Set(arr2).has(item)));
```
*Vezzzing 2022.1.4 于良渚 CAA 六号楼二楼自习室*
