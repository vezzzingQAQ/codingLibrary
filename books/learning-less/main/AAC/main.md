## less 计算
```less
.ine{
    display: block;
    height: 100px;
    width: (100+100px);//只要一边有单位
    background-color: pink;
}
```
## less实现居中对齐
文件结构：
supportLess
---alignCenter.less
style.less
###### alignCenter.less
```less
.ac(@width,@height,@bg){
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin:auto;
    width: @width;
    height: @height;
    background-color: @bg;
}
```
###### style.less
```less
@import url(./supportLess/alignCenter.less);
*{
    margin: 0;
    padding: 0;
}
body{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.wrap{
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid black;
    margin: calc(50vh - 150px) auto;
    .inner{
        padding: 5px;
        color: white;
        &:nth-child(1){
            .ac(50px,200px,rgba(255, 182, 193, 0.411));
        }
        &:nth-child(2){
            .ac(200px,50px,rgba(173, 216, 230, 0.404));
        }
    }
}
```
*Vezzzing 2022.1.3 于良渚 CAA 三号楼一楼103教室*
