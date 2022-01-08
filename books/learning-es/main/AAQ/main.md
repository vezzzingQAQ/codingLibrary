## ES9：正则拓展
#### 命名捕获分组
原始正则表达式写法
```javascript
let str="<a href='www.vezzzing.com'>vezzzing!!</a>"
//提取URL和标签文本
const reg=/<a href='(.*)'>(.*)<\/a>/
const result=reg.exec(str);//返回一个数组[整个str,第一个小括号匹配到的东西,第二个小括号匹配到的东西]
console.log(result[1]);
console.log(result[2]);
```
命名捕获
```javascript
/....?<name>../
```
```javascript
let str="<a href='www.vezzzing.com'>vezzzing!!</a>"
//提取URL和标签文本
const reg=/<a href='(?<url>.*)'>(?<text>.*)<\/a>/
const result=reg.exec(str);//返回一个数组[整个str,第一个小括号匹配到的东西,第二个小括号匹配到的东西]
console.log(result.groups.url);
```
#### 正向断言
根据后边的内容是啥判断是否是结果 
```javascript
let str="123k2333l";
const reg=/\d+(?=l)/;
const result=reg.exec(str);
console.log(result);//=>2333
```
#### 反向断言
根据前面的内容是啥判断是否是结果 
```javascript
let str="123k2333l";
const reg=/(?<=k)\d+/;
const result=reg.exec(str);
console.log(result);//=>2333
```
#### dotAll模式
正则中，点代表除了换行符以外的任意单个字符  

不用这个的话很多情况下换行符\s很难受
```javascript
let str=
`
<ul>
    <li>
        <a>233</a>
        <p>2021.1.2</p>
    </li>
</ul>
<ul>
    <li>
        <a>2113</a>
        <p>2022.1.3</p>
    </li>
</ul>
`
const reg=/<li>.*?<a>(.?)<\/a>.*?<p>(.*?)<\/p>/gs//全局【g】&dotAll【s】

let result;
let data=[];
while(result=reg.exec(str)){
    data.push({title:result[1],time:result[2]});
}
data//=>233,2021.1.2 ,2113,2022.1.3
```
*Vezzzing 2022.1.8 于萧山 家*