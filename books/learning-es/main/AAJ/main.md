## 数值拓展
##### Number.EPSILON表示最小精度
比如说小于最小精度就认为等于
```javascript
function equal(a,b){
    if(Math.abs(a-b)<Number.EPSILON){
        return(true);
    }else{
        return(false);
    }
}
console.log(0.1+0.2===0.3);//=>false
console.log(equal(0.1+0.2,0.3));//=>true
```
##### 二进制 & 八进制 （十六进制）
```javascript
let b=0b1010;
let o=0o777;
let x=0xfff;
```
##### Number.isFinite()
检测是否为有限数
```javascript
console.log(Number.isFinite(100/0));//=>false
```
##### Number.isNaN()
检测是否时NaN
```javascript
console.log(Number.isNaN(123));//=>false
```
##### Number.parseInt() & Number.parseFloat
字符串转数字
```javascript
console.log(Number.parseInt("233dsdsd"));//=>233
console.log(Number.parseFloat("23.1sd"));//=>23.1
```
*Vezzzing 2022.1.5 于良渚 CAA 六号楼二楼自习室*
##### Number.isInteger

##### Math.trunc()
将数值小数部分抹掉
##### Math.sign()
判断正数负数零
->1/0/-1
*Vezzzing 2022.1.5 于良渚 CAA 六号楼二楼自习室*