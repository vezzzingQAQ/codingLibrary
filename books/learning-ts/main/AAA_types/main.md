# 类型系统

## 强类型和弱类型  
### *2021.12.20*  
#### 区别:  
* 是否限制函数实参的类型
* 允许任意数据类型的 隐式 类型转换

区别是语法层面不允许还是函数在做的错误抛出
## 静态类型语言&动态类型语言
### *2021.12.20*  
#### 区别:  
能否在程序允许过程中更改变量类型


  

# JS类型系统特征
## 弱类型&动态类型
### *2021.12.20*  
  
JS没有编译环节【脚本语言】
静态类型语言需要在编译时做 **类型检查**

#### 弱类型的一些问题

* 运行阶段才能发现异常
ex:`obj.foo();//并没有foo方法`
* 函数传参类型不确定

#### 强类型优势

* 错误更早暴露
* 代码更智能,编码更准确
ex:根据对象类型提示拓展
* 重构更加牢靠

#### typeScript hello world
* tsc
```javascript
var hello = (name: string) => {
    console.log(`Hello ${name}`);
}
hello("typeScript");
```
* 手动传送门 : display.html


# TS配置
## tsc --init
### *2021.12.20*  

tsc编译所有，并且采用配置文件