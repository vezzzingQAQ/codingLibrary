## 注释
```c++
//单行注释
/*多行注释*/
```
***
## 变量
**作用**：给一段指定的内存空间命名，方便操作这段内存【相对地址编号】
**创建**：数据类型 变量名 = 变量初始值;
```c++
int a = 10;
```
```c++
# include <iostream>
using namespace std;

int main()
{
	int a = 10;
	cout << "a="<< a << endl;
	system("pause");
	return 0;
}
```
***
## 常量
**作用**：记录程序中不让修改的值
定义常量的两种方式
> 1.**#define** 宏常量
通常在文件上方定义，表示常量
```c++
#define Day 7
```

> 2.**const**定义
变量前加const修饰

```c++
# include <iostream>
#define Day 7
using namespace std;

int main()
{
	int a = 10;
	cout << Day<< endl;
	system("pause");
	return 0;
}
```
***
## 关键字【标识符】
略
***
## 标识符命名规则
略
***
## 数据类型
给变量分配合适的内存空间
#### 整型
|数据类型|占用空间|取值范围|
|----|----|----|
|short|2bit|-2^15^~2^15^-1|
|int|4bit|-2^31^~2^31^-1|
|long|4bit【windows】|-2^31^~2^31^-1|
|long long|8bit|-2^63^~2^63^-1|

*long long 中间有空格！*

*Vezzzing 2022.1.7于良渚CAA六号楼二楼自习室*