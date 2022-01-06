## 模块化
  
#### 模块化的好处
* 防止命名冲突
* 代码复用
* 高维护性

#### ES6模块化
export & import

export指定接口
import引入文件

##### 快速入门
模块文件
```javascript
export let name="vezzzing";

export function log(){
    console.log("2333");
}
```
引用文件
前端页面引入
```html
<script type="module">
    import * as m1 from "./m1.js";
    console.log(m1);//=>name,log...
</script>
```
#### 数据暴露语法
##### 分别暴露
```javascript
export let name="vezzzing";
export function log(){
    console.log("2333");
}
```
##### 统一暴露
```javascript
let name="vezzzing";
function log(){
    ......
}

export{name,log};
```
##### 默认暴露
```javascript
export default{
    name:"233",
    log:function(){
        ......
    }
}
//引用
import * as m3 from "....";
m3.default.log();
```
#### 模块引入
##### 通用导入
```javascript
import * as m1 from "./.....";
```
##### 解构赋值
可以直接使用name,log变量
```javascript
import {name,log} from "./.....";
import {name as name2,add} from "./.....";//使用别名，避免命名冲突
``` 
对于默认暴露
```javascript
import {default as m3} from "./.....";
```
##### 简便形式
只针对默认暴露
```javascript
import m3 from "./.....";
```
  
#### 模块化常用架构
> app.js
> ....js
> ....js
> ....js

app.js【入口文件】
```javascript
import * as m1 from "./m1.js";
import * as m2 from "./m2.js";
import * as m3 from "./m3.js";
......
```
前端页面引入
```html
<script src="./...app.js" type="module"></script>
```
#### browserify 打包
```javascript
npm browserify dist/../../app.js -o dist/.../../bundle.js
```
*Vezzzing 2022.1.6 于良渚 CAA 六号楼二楼自习室*