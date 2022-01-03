## 注释
两种注释
```less
//这个注释不会在CSS中保留
/*这个注释在CSS中会保留*/
```
## 变量  
变量是块作用域的，一个 { } 是一个作用域，等作用域中的所有变量读取完毕后再赋值（延迟加载）
```less
@m:margin;
@selector:.warp;

@{selector}{//别忘了{}
    ...
}
```
#### &符
```less
    .inner{
        ...
        &:hover{//&代表自己
            background-color: @greenColor;
        }
    }

```
*Vezzzing 2022.1.3 于良渚 CAA 六号楼二楼自习室*
