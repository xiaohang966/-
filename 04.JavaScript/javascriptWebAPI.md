# WebAPI

###  DOM

- 文档对象模型(**document object model**), 它是一种 官方 封装好的方法，可以直接调用使用它

- 作用：
  - 修改网页的内容，样式，结构
  - **响应用户对网页的操作**



## 1.2 DOM树

> DOM树是一种 文档的结构，当一个网页被创建出来，并加载到浏览器中时，DOM就在幕后悄然而生了。它把编写的文档 转换称为一个文档对象，DOM是一种较为普遍的结构



#### 文档的组成

> 让页面的 html内容都转换成对象，方便js语句的操作，同时让浏览器方便存储，读取页面结构，也会更加清晰

- **文档**：一个页面就是一个文档，**DOM 中 使用 document表示**

- **元素**：**页面中的所有标签都是元素**，**DOM 中使用 element表示**

- **节点**：网页中的所有内容都是节点（标签，属性，文本，注释等），**DOM**

  **中使用node 表示**

​	**DOM的API分类**：获取元素、操作元素属性、事件、操作节点



# 1. 获取元素

## 操作页面元素的步骤

1. **获取需要操作的元素**
2. **操作元素的属性**



##  通过id获取元素

- `document,getElementByID('id')`

- **参数：**
  - **类型**：字符串
  - **值**：id属性值

```js
<div id='id'></div>

// 获取到的页面元素，是需要具体操作的，那么为了操作方便，都会给保存成 一个对象
var obj = document.getElementByid('id')
```



## 通过标签名获取元素

- `element.getElementsByTagName('标签名')`

- **参数**

  - **类型：**字符串
  - **值    ：**标签名

- **返回**

  - **类型**：**伪数组**
    - 由于是伪数组，所以不能使用数组的内置方法

  - **值**     ：符合要求的元素对象的集合

**注意：**

> > 1. 因为元素有多个 所以element + s
> >
> > 2. 获取数据不局限在document上，也可以是在具体哪个元素下
> > 3. 可以使用循环遍历去拿取所有数据

```js
// 普通获取标签名
var lis = document.getElementsByTagName('标签名')

// 获取指定内容中，指定的元素
var scpoce = ul.getElementsByTagName('标签名')

//遍历拿数据：伪数组
var index = elements.getElementByTagName('标签名')[index]

// 遍历伪数组拿数据
for(var i =0;i<elements.length;i++){
  console.log(i)
}
```



## 通过类名获取元素

- `element.getElementsByClassName(‘类名’)`

- **参数：** 
  - 类型：字符串
  - 值：class属性值

- **返回值：**
  - **类型：** **伪数组**

**注意：**

> 1. 因为元素有多个 所以element + s
>
> 2. 获取数据不局限在document上，也可以是在具体哪个元素下
> 3. 可以使用循环遍历去拿取所有数据

```javascript
// 获取指定元素
var lis = document.getElementByClassName('类名')

//指定元素下的，指定元素
var seconds = ul.getElementByClassName('类名')

//遍历：拿数据
```





##  获取body元素

> body 被获取的实话，它特殊的 它具有唯一性

- `document.body`
- **返回**
  - **类型：** 对象
- **值：** body元素

```js
// 获取 body元素
var body = document.body
```



##  获取元素 (css选择器方式)

> 优点，操作方便   缺点：**动态添加的元素 不能全局获取**

- **语法：** `element.querySelector('class')`
- **参数：** 
  - **类型：**字符串
  - **值 ：** CSS选择器
- **返回 ：**
  - 对象

```javascript
// 元素获取:符合要求的第一个元素
var ul = document.querySelector('ul')

// 可以获取指定内容中的元素
var li = ul.querySelector('li')

// 指定拥有这个 class 类名的 li 属性
var lis = ul.querySelector('.lis') 
```



##  获取符合css选择器的所有元素

- **语法**：`element.querySelectorAll('css选择器')`
- **参数**
  * 类型：字符串
- **返回**

  * **类型：伪数组**

```javascript
// 获取的符合要求的所有元素
var ps = document.querySelectorAll('p')

// 2. 获取所有选中的checkbox
var checks = document.querySelectorAll('.ck:checked');
```





##  操作元素属性

### 无兼容性方法

> 自己制定一个属性名字，跟data-id的语法设置差不多一样，
>
> 缺点：可以设置属性，但是不能获取，想获取可以使用 getAttribute 语法

- **写法:** `<p 自定义-自定义='自定义属性名'>`

```html
// 设置自定义语法名
  <div class='div1' data-index = '1'  index = '01' ></div>
```



###  操作元素自定义属性

>  H5 方法 但是不兼容 IE6,IE7，IE8，单是获取元素非常方便，但是针对动态创建的元素，它不会第一次就直接获取，需要二次获取才能操作

- **设置语法:** `<p data-自定义属性名 = '自定义属性值'></p>`
- 属性名不限制，可以随意设置 多个属性名用 `-` 连接 
  - `< p data-名称-名称='自定义属性值' >`
- **获取语法 :** `element。dataset.自定义属性名`
  - 多个属性名的使用驼峰代替连接符

```javascript
//设置自定义属性名
<div data-index = '1'   data-user-index = '01' id='div'  index='11'></div>
 
// 获取自定义属性名
 var datas = div.dataset
 // 多个属性名的自定义属性
 console.log(datas.userIndex);
```



### 获取元素属性(万能方法)

> 能够获取所有元素的属性，包括无兼容设置属性的自定义写法
>
> 获取的是属性， 如果想获取的是元素上的属性，需要先获取 **元素**

- **语法 :** `element.getAttribute('属性名')`
- **参数：** 
  - **类型**: 字符串
  - **值: ** 属性名
- **返回值 ： **
  - **值 :** 某个元素的某个属性值

> 无兼容性自定义属性名，设置之后不能获取，所以需要使用万能获取属性

```javascript
// class 自指定的属性名： 'divs'
<div class='div1' data-index = '1'  index = '01' ></div>

// 获取元素
var divs = document.getElementByClassName('divs')[0]
// 获取自定义属性值
var sn = getAttribute('class')
console.log('sn') // sn 代表 class的属性值
```



###  设置元素属性

> 在不确定页面的class 属性上 有什么东西的时候，可以使用这个增加一个自定义的属性，单独使用

- **语法:** `element.setAttriubute('属性名'，'属性值')`
- **参数：**`属性名，属性值`

```javascript
// 先获取元素
var div = document.getElementByClassName('div')[0]

// 设置一个自定义属性
div.setAttribute('index','01')
```



###  删除元素某个属性

- **语法：** `element.removerAttribute('属性名')`
- **参数：** 
  - 类型：字符串
  - 值：属性名

```javascript
// 获取元素
var div = document.getElementByClassName('div')[0]

// 删除属性名
div.removeAttribute('class')
```





# 2. 操作元素标准属性

- **操作元素属性步骤**：
  - ① 获取需要操作的元素
  -  ② 操作元素的属性
- **标准属性**：元素自带的属性 （可读可写）
- **获取语法**：`element.属性名`
- **设置语法**：`element.属性名 = ‘属性值’`

 操作元素内容

* **普通元素内容设置**（div 、p、span、a.....）
  * `element.innerHTML = '内容' `**识别标签、空格  经常使用**`
  * `element.innerText = '内容'`   
* **表单元素**   (input、textarea)
  * `element.value = '内容'`

## 操作元素样式

* 操作style属性，修改行内样式，**优先级高**

  * `element.style = 'css属性名1:属性值；css属性名2：属性值'`

  * `element.style.css属性名 = '属性值'`  **设置单个样式 **   如果样式用-连接 则需要用驼峰方式设置

  * **案例：开关灯**（先两个按钮，再一个按钮）

    ```
    1. 创建button元素，按钮内容为'关灯'
    2. 给按钮添加点击事件
    3. 在事件处理程序中，判断当前button内容是否是'关灯'
       1> 是，将button内容修改成'开灯',修改body背景色为黑色
       2> 否，将button内容修改成'关灯',修改body背景色为白色
    ```

* 操作class属性，修改样式

  * `element.className = '类名1  类名2  类名3 '`  **设置多个样式**  **会刷新元素的class属性**

    * **案例**：**搜索历史提示**

    ```
    1. 还原案例样式，在style中创建两个class属性分别为.show{display:block}.hide{display:none}
    2. input获得焦点时，让提示信息元素的class属性为'show'
    3. input失去焦点时，让提示信息元素的class属性为'hide'
    ```

  * `element.classList`   **设置多个样式**

    * 添加类 `element.classList.add('类名1','类名2','类名3')`
    * 移除类 `element.classList.remove('类名1','类名2','类名3')`
    * 切换类 `element.classList.toggle('类名')`  :元素存在该属性删除该属性，不存在该属性添加该属性        


## 操作元素常用属性

* `element.src = '属性值'`

* `element.disabled = true/false ： 是否可以被选择`  

* `element.checked = true/false 复选框的状态值`

* **案例：切换图片**

  ```html
  1. 创建一个按钮元素，内容为切换图片，创建一个img元素，地址为'images/01.jpg'
  2. 第一次点击按钮，将图片地址切换为'images/02.jpg'，并将按钮设置为不可点击
  ```

* **案例**：**全选反选案例**

  ```
  1. 点击全选按钮，将其他复选框状态修改成全选按钮的状态
  2. 点击某个复选框按钮，控制全选按钮状态
     1> 当其他复选框选中个数和其他复选框总个数相同，全选按钮状态为true
     2> 当其他复选框选中个数和其他复选框总个数不相同，全选按钮状态为true
  ```



# 3.DOM 事件流

> 事件发生时会在元素节点之间按照特定的顺序传播，这个传播的过程就是 `DOM事件流`

- **DOM事件流三阶段 : **

  当一个DOM 事件被触发时，它不是在触发的 对象上只触发一次的，而是经历了三个阶段

  - **第一阶段：**开始从文档的根节点流向目标对象 （**捕获阶段**）	
    - **特点： **`在这个阶段时，触发某个子元素的事件的时候，其所有父元素上绑定的相同类型的事件都会被触发`，**且先执行父级事件**

  - **第二阶段：**此时目标对象的事件被触发 **(目标阶段)** 

  - **第二阶段：**目标事件再这个阶段已经执行完毕，会把执行结果回溯到 根节点上**（冒泡阶段）**

**注意：**

- **冒泡事件 ：** 
  - 目标对象执行事件的时候回，如果其父级对象上，有相同的事件，那么就会被被触发，被先于目标事件进行执行

## 捕获事件和冒泡事件

> 由于DOM事件触发时只能监听事件传播的一个阶段，**要么是捕获阶段**，**要么是冒泡阶段**，因此将DOM事件分成两个大类，**捕获事件**和**冒泡事件**

### 捕获事件 

- `addEventListener('事件类型',函数名/,boolean)` 给元素绑定事件
  - 第三个参数：
    - true，该事件就是捕获事件
    - false（不写默认就是false），该事件是冒泡事件

```js
// 演示
grandfather.addEventListener('click',function(){
  // 3. 添加事件处理程序
    console.log('我是添加了捕获事件的爷爷');
  })
   // 2. 添加捕获类型的点击事件
   father.addEventListener('click',function(){
  // 3. 添加事件处理程序
    console.log('我是添加了捕获事件的爸爸');
  })
   // 2. 添加捕获类型的点击事件
   son.addEventListener('click',function(){
  // 3. 添加事件处理程序
    console.log('我是添加了捕获事件的儿子');
  })
```



### 冒泡事件

-  `element.on+事件类型 = 函数名/匿名函数`给元素绑定的事件，都是冒泡事件

```javascript
  // 冒泡
  btn.onclick = function(){
    // 3. 添加事件处理程序
      var str = ul.innerHTML ;
      str+='<li>我是新的li元素</li>';
      ul.innerHTML = str;

    }

    // 把事件委托给ul
    ul.onclick = function(){
      console.log(event.target);
      console.log('我是li元素');
      
    }
```



## 冒泡事件的影响

> 由于事件冒泡阶段具有点击某个子元素，其父元素上绑定的点击事件也会触发的特点，有时候我们需要利用这个特性，有的时候要避开这个特性

### 利用 ：事件委托

- **解决问题**
  - 同时给100个`li`元素添加点击事件：遍历添加事件消耗性能多
  - 给动态生成的元素添加事件 ：由于事件是先绑定的，如果动态添加元素，就需要每添加一个，就绑定一次事件  消耗性能多

- **原理**：为了给子元素添加事件，可以将事件委托给父级，就是把事件绑定在父级身上，只需要绑定一次，在触发子元素的时候，由于冒泡就会触发父级元素的事件

```javascript
// 事件委托
    var btn = document.querySelector('button');
    // 2. 添加点击事件
    btn.onclick = function(){
    // 3. 添加事件处理程序
      var str = ul.innerHTML ;
      str+='<li>我是新的li元素</li>';
      ul.innerHTML = str;

    }

    // 把事件委托给ul
    ul.onclick = function(){
      console.log(event.target);
      console.log('我是li元素');
      
```



### 避开 :  阻止事件冒泡

- **造成影响**：父级子级绑定相同事件，但是在点击子级的时候，不希望父级的事件触发，但是由于事件冒泡

  会触发父级的事件

- **阻止冒泡语法**：`event.stopPropagation();`  坡绕P给深


```javascript
// 阻止冒泡
grandfather.onclick = function(){
  // 3. 添加事件处理程序
  console.log('我是爷爷');

}
// 2. 绑定点击事件
father.onclick = function(){
  // 3. 添加事件处理程序
  console.log('我是爸爸');
  event.stopPropagation();

}
// 2. 绑定点击事件
son.onclick = function(evt){
  // 3. 添加事件处理程序
  console.log('我是儿子');
  //console.log(event);
  console.log(evt);
}
```



# 4.事件高级

> 事件是一种 函数 function 的一种使用方法， 指的是操作用户在 做指定的行动的时候，做出的一系列的反应



## 书写事件的两种方法

- **注册事件：别称 DOM0级事件**
  - **语法：** `ele.on+事件类型 = 函数/匿名函数(就是function)`
  - **特点：**同类型事件只能绑定一次，多次绑定只有最后一次绑定有效
  - 事件可以完成之后，可以在其他的作用上 进行二次使用：` btn.onclick()`



- **注册事件：别称DOM 2级事件**
  - **语法：**`ele.addEventListener('事件类型',匿名函数/函数名)`
  - **特点：** 元素绑定事件，可以**多次**绑定同类型事件，执行顺序从上到下



## 解除事件绑定的两种方法

- **DOM0级事件的解除方法**
  - **语法：** `ele.on+事件类型=null`
  - 只要是DOM0级事件 就可以直接解除



- **DOM2级事件的解除**
  - **语法：** `ele.removerEventListener('事件类型',函数名)`



## 事件类型(常用)

> 相当于封装好的方法，按照指定的格式去使用，用特定的`函数类型`
>
> 然后在 `function` 中写上对应代码，就可以完成指定事情。

- 事件的使用范围，以及如何的使用

- **鼠标事件**
  - **点击事件：**`click`
  - **双击事件：**`dblclick`



# 5.事件对象

> 事件发生后，跟事件相关的大部分信息数据的集合都放到一个对象中

- event 对象
  - 当事件发生的时候，会自动生成的一个对象
  - 只能在事件中使用
  - 拥有很多的属性和方法

- 在事件中 `e = event` 

```js
eventTarget.onclick = function(e) {
// 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt 
} 
eventTarget.addEventListener('click', function(event) {
// 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt 
}
```



## 事件对象常用属性

- `e.target:` 触发事件的元素 

- `e.stopPropagation():` 阻止默认行为
- `e.preventDefault：` 阻止默认行为
  - 