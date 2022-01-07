## MixIn 混合
有点类似函数
```less
.center(@width,@height,@color){
    ...
}
.center(@width:200px,100px,rgba(0, 225, 255, 0.451));
```
```less
//定义一个混合【mixIn】-以点开头
//代参数的混合不会被编译到CSS中
.center(@width,@height,@color){
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    border: 2px solid rgba(0,0,0,0.2);
    color: rgb(0, 0, 0);
    width: @width;
    height: @height;
    background-color: @color;
    line-height: 100px;
    text-align: center;
}
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: rgb(255, 255, 255);
    .warp{
        position: relative;
        display: block;
        width: 300px;
        height: 300px;
        border: 3px solid rgba(0, 0, 0, 0.281);
        border-radius: 10px;
        margin: 100px auto;
        .inner1{
            .center(100px,200px,rgba(255, 192, 203, 0.445));
        }
        .inner2{
            //命名参数@...:
            .center(@width:200px,100px,rgba(0, 225, 255, 0.451));
        }
    }
}

```
## 引入第三方less库
```less
@import url(...)
```
style.less:
```less
//引用第三方less库
@import url(triangle.less);
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    .warp{
        position: relative;
        #t1{
            .triangle(L,pink,50vh)
        }
    }
}
```
triangle.less:
###### （匹配模式）
```less
//定义混合
.triangle(@_,@color,@width){//@_表示任意参数都会调用【所以这个函数在调用triangle时就会被调用】
    width: 0px;
    height: 0px;
    border-style: solid;
}
.triangle(L,@color,@width){//:匹配模式【此处决定三角形朝向】
    border-width: @width;
    border-color: transparent transparent transparent @color;
}
.triangle(R,@color,@width){//:匹配模式【此处决定三角形朝向】
    border-width: @width;
    border-color: transparent @color transparent transparent;
}
.triangle(T,@color,@width){//:匹配模式【此处决定三角形朝向】
    border-width: @width;
    border-color: @color transparent transparent transparent;
}
.triangle(B,@color,@width){//:匹配模式【此处决定三角形朝向】
    border-width: @width;
    border-color: transparent transparent @color transparent;
}
```
*Vezzzing 2022.1.3 于良渚 CAA 六号楼二楼自习室*
