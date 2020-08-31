# git

> 管理代码工具

- 什么是“版本控制”？版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。



# 基本使用

## 初始化仓库

在某一个合适的文件夹（建议新建一个空的文件夹，例如：d:/learngit）下，打开git bash，运行如下命令：

`git init`

此时，会多出一个隐藏的文件夹.git。



## 跟踪修改

把当前用户的修改添加到git的仓库中去

- **涉及如下三种命令格式：** 
  - 添加单个文件：`git add yourfilename1.txt`
  - 添加多个文件使用空格隔开。 `git add yourfilename1.txt yourfilename2.txx `
  - **如果修改的文件很多，可以一次添加全部的文件。`git add .`  注意add后面有一个空格，再接上.**

   **最常用**：`git add .`

## 提交修改

初次提交，要登记 

> 第一次使用commit时，会需要你提供一个“身份信息”。这容易理解：我们需要记录下来本次的修改是由谁提供的，无论是论功行赏，或者是秋后算帐都需要要一个名单嘛。

```js
git config --global user.email "you@example.com"  
// 邮箱的添加

git config --global user.name "yourname"
// 用户名登录

```

- **当然 ，这个信息也是可以修改的，具体做法是：**
  - `git config --global --unset user.name yourname`
  - `git config --global --unset user.email yourname@example.com`

- 此时重新设置信息。



## 提交修改

> 将上面的修改(add的文件)，提交到仓库中。

```js
格式：
  git commit -m "内容"
// 引号中放注释
```

### 小结使用过程

```bash
# 初始化项目
git init

# 保存代码到暂存区
git add . 

# 上传代码 
git commit -m "注释"

# 保存和上传 可以使用合写方式
git commit -a-m "注释"
```



> 对一个文件的修改而言，每到了一个关键的节点（例如完成了某个小功能部分后），就可以向版本库中提交一次。



# 版本穿梭

> 每次 commit 提交时 就相当于提交不同的版本

```js
可以通过 git log 来查看提交日志 

或者是git log --oneline  (常用)
// 只显示版本号
```

- **注意**，如果提交的记录非常长，一屏可能显示不全：

- **需要通过回车来翻页**
- **键入`q`可以退出**



## 回退版本

>  如果希望回退到某一个版本，只需要记下它的提交id，再通过git reset 命令来回滚

```js
// 命令： git reset --hard commitID

// 示例：git reset --hard 53b3430

// 在回到之前的版本号，就不能看见当前的版本，需要怎么处理看到此时的版本
 - 通过git reflog命令来查看全部的历史记录

 - 找到你要回去的版本commitID

 - 再通过git reset --hard commitID来进行版本穿梭
```

**注意：**

- 复制commitID时，只需要复制前几位（具体几位，并不确定），而不需要复制一个完整的commitID
- 通过鼠标右键进行复制和粘贴操作。
- **如果回到了版本2，则再次运行git log，将看不到版本3的commitID**
- **可以通过git reflog命令来查看全部的历史记录，然后找到你要回去的版本commitID，再通过git reset --hard commitID来进行版本穿梭。**



# 文件的四种状态

> 每一个文件都不外乎这两种类型：已跟踪或未跟踪。

```js
// 通过git status 命令来查看状态。
```



# 分支操作

> git 使用时，主分支的代码是没有错误的，要想在不修改主分支代码的情况下，那么就需要使用 子分支的概念

- 创建新分支

  进行：文件修改，新建文件

- 切换分支

- 合并分支

```bash
# 操作步骤

# 列出所有本地分支
$ git branch 

# 新建一个分支
$ git branch <分支名称>

# 切换到指定分支
$ git checkout <分支名称>

# 新建分支并切换到该分支 （相当于同时进行前面两步操作）
$ git checkout -b <分支名称>

#删除分支 
$ git branch -d <分支名称>

```



### *分支的工作原理

图示。

如下两个命令可以图形化查看git commit的过程

- git log --graph
- gitk



## 合并分支

格式：`git merge 分支名`

把指定的分支名中的代码**合并到当前的分支**上来。



# 分支中的冲突

> 一般情况下，git会自动帮我们去合并分支，而不会产生冲突。但有些意外的情况，它无法帮助我们合并。一个典型的会产生冲突的场景是：

- **模拟冲突场景：**
  1. a分支修改文件1并commit
  2. b分支也修改文件1并commit。

> 恰好这两个修改`都是修改了同一个地方`（例如：都是修改了某个函数的函数名），则此时，就会出现冲突了。



- **解决冲突的基本步骤：**

  1. 打开有冲突的文件。

  2. 根据实际情况手动修改（注意去掉冲突时自动加入的特殊符号）

  3. 保存修改，并提交

     **git commit -a -m ""**



# github

> git是一个版本管理工具，
>
> github 它是作为 git 的远程仓库使用 ，能让不同人员在不同地点 开发项目

`git控制代码版本，github 它能提供一个免费的开源的 代码管理工具`



## **基本操作**

### **1.登陆github，创建仓库**

- 初始化项目  `git init`
- 保存代码  `git add.`
- 上传代码  `git commit -m "注释"`
- 关联仓库 `git 远程仓库地址`
- 上传代码 `git pash origin master`



### **2.克隆项目**

>使用  git bash 下载 github 上的项目代码

- **在电脑的某个文件夹下，通过git clone到本地。**

- **git clone命令会创建一个文件夹**

  - **git clone命令只需要在第一次时使用**

  **注：**  **在本地下载 github 上的代码 使用 `git clone` 之后需要重启 git bash**

  

此时正常在本地正常编辑代码(修改代码，新建文件等), 提交到仓库

1. git add .  保存
2. git commit -m "注释"

推送代码到远程 github 

**git push**



# 命令使用频率

- clone在没有项目的时候进行一次
- 一天中各种`add` 和 `commit`
- 离开电脑是，进行一 push操作(离开电脑时使用)





# git常用操作

```cmd
// 初始化
git init 

// 上传到仓库
git add .

// 上传到本地
git commit -m "备注"

// 上传到线上仓库
git push

// 更新，同一个项目频繁执行

. gitkeep 占位文件
- git默认不上传空的文件，但还想上传这个文件，就使用这个

git checkout -b 分支名
-快速创建一个分支并直接切换进去
```

