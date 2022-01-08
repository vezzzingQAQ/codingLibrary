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
#### 1.整型
|数据类型|占用空间|取值范围|
|----|----|----|
|short|2bit|-2^15^~2^15^-1|
|int|4bit|-2^31^~2^31^-1|
|long|4bit【windows】|-2^31^~2^31^-1|
|long long|8bit|-2^63^~2^63^-1|

*long long 中间有空格！*
short < int <= long <= long long  

#### 2.浮点型
|数据类型|占用空间|取值范围|
|----|----|----|
|float|4bit|7位有效数字|
|double|8bit|15-16位有效数字|
*有效数字**小数点前后**都算*
创建：
```c++
float f1 = 3.14f;//如果不写f的话，程序会先转为double再转回float，效率低
double d1 = 3.14;
```
默认情况下，控制台输出小数只输出六位  

科学计数法表示小数：
```c++
float f2 = 3e2f;
float f3 = 3e-2f;
```
#### 3.字符型
|数据类型|占用空间|取值范围|
|----|----|----|
|char|1bit|存储ASCII码|
创建：
```c++
char ch = 'a';
```
一定用单引号，只能一个字符

查看字符的ASCII码：
```c++
cout << (int)ch << endl;  
```
强制转换为整型  
ASCII CODE : a-97;A-65
##### 转义字符
表示一些不能显示出来的ASCII字符
###### 1.\n 换行
```c++
cout << "hw\n";
```
###### 2.\\\\ 反斜杠
###### 3.\t 制表符
```c++
cout << "aaa\thelloworld" <<endl; //=>aaa     helloworld
cout << "aaaa\thelloworld" <<endl;//=>aaaa    helloworld
```
默认一格是8个字符
#### 4.字符串
##### 1.C风格字符串
```c++
char 变量名[] = "字符串变量";
```
双引号&中括号
##### 2.C++风格字符串
```c++
string 变量名 = "字符串变量";
```
***
## ==sizeof== 关键字
**语法**：
```c++
sizeof(数据类型/变量);
```
*Vezzzing 2022.1.8于 萧山 家*