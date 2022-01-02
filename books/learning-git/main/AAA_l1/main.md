# GIT
*start at 2022.1.1*

入门篇

## git commit
```git
git commit
```
## git branch
git branch后需要切换分支(*git checkout branchName*)再进行git commit，不然仍然再原来的分支上提交
```git
git branch branchName
git checkout branchName
git commit
```
快捷方式
git checkout -b newBranchName
## git merge
将bug分支合并到主支
```git
git merge bugFix
```
把 main 分支合并到 bugFix
```git
git checkout bugFix
git merge main
```
* 创建新分支 bugFix
* 用 git checkout bugFix 命令切换到该分支
* 提交一次
* 用 git checkout main 切换回 main
* 再提交一次
* 用 git merge 把 bugFix 合并到 main

