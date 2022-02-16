---
layout: post
title: Web 学习笔记
tags: 
- Web
- JQUERY
- javascript
- html
date: 2022-02-14
categories: Web
---

# HTML
&emsp;&emsp;一个html页面由众多元素(element)嵌套组成，每个元素可以有很多属性(attributes)。比如一个超链接元素`a`：
```
<a href="/" class="brand" rel="start">
    <span class="logo-line-before"><i></i></span>
    <span class="title site-title">My blog</span>
    <span class="logo-line-after"><i></i></span>
</a>
```
<!--more-->
其内嵌套了三个`span`单行内联元素。
元素的class是全局属性，即每个element都可以使用，超文本引用(href)则只有部分element可以使用，可参考[W3C-html教程](https://www.w3school.com.cn/html/index.asp)和[HTML 参考手册](https://www.w3school.com.cn/tags/html_ref_html_browsersupport.asp)。

&emsp;&emsp;html的标准目前由[WHATWG](https://whatwg.org/)发布，标准内容请见 [HTML-live-standard](https://whatwg-cn.github.io/html/)。

## [加载 Web page](https://whatwg-cn.github.io/html/#browsers)
### [browsering contexts](https://html.spec.whatwg.org/#windows)
&emsp;&emsp;浏览交互环境中，将HTML文档(Document)对象呈现于用户面前。*context本意为交汇*

## 属性
[微数据itemscope、itemtype、itemprop](http://www.qietu.com/html5-itemscope-itemtype-itemprop/)
用于Web DOM 标记和搜索引擎优化（SEO）



# CSS(搞个在线执行代码框)
## 小知识点
[css3中-moz、-ms、-webkit,-o](https://www.cnblogs.com/fps2tao/p/9075132.html)
## 效果


- [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter) CSS属性将模糊或颜色偏移等图形效果应用于元素,`filter：alpha（opacity=0）`是`opacity=0`的IE8以下兼容写法。
- perspective 指定观察视角z轴高度。
- [动画特效](https://zhuanlan.zhihu.com/p/350607485)
animation-name属性指定应用的一系列动画，每个名称代表一个由@keyframes定义的动画序列。animation 不受transition控制，是和它完全独立的。rotateY的参数是绝对坐标，不是移动量，rotateY(0deg);是回到原地。

- [float](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) ：指定一个元素应沿其容器的左侧或右侧放置
如果有多个这样的元素，则会按行，从左或右排列
- [元素的居中](https://www.cnblogs.com/fengyuexuan/p/11243874.html)
```
position: relative;
/* top: 50%; */
left: 25%;
/* float: left; */
/* width: auto; */
width: 50%;
```
position 的 left 和 top 是相对于父容器的空间位置，如果为relative则会和其他元素分享空间，为absolute则不会。width同样是相对于父容器的空间。
### ul子元素li排列
ul子元素li默认都是block,所以垂直分布的，要使其水平分布，可以指定li分布为 float:right || left 或 `$('ul').css("display", "flex")` 使ul元素自由分布，这时候它会根据元素空间自由排布。如果要改回来只要
`$('ul').css("display", "block")`。list-style-type 则用于显示特效，比如下划线或前缀黑点。
例子：
```
<nav class="animated">
    <ul>
        <ul>
            <li><a href="/">主页</a></li>
            <li>
                <form class="search" action="//google.com/search" method="get" accept-charset="utf-8">
                    <label>Search</label>
                    <input type="search" id="search" name="q" autocomplete="off" maxlength="20" placeholder="">
                    <input type="hidden" name="q" value="site:">
                </form>
            
            </li>
        </ul>
    </ul>
</nav>
```
```
    header nav>ul {
        display: flex;
    }
```
这里只是nav的直系ul获得了flex属性
```
    header nav ul {
        display: flex;
    }
```
所有子ul都获得flex属性
### nested `<a>`
```
<a>
hi,
<object>
<a>I am</a></object>
Monstor
</a>

```
by `<object>` tag, all your nested `<a>`are treated like in a `iframe` and will not cut the wrapper `<a>`.





# [ECMA Standard](https://tc39.es/ecma262/#sec-intro)
## [Agents](https://tc39.es/ecma262/#sec-agents)
&emsp;&emsp;     

# JQUERY
&emsp;&emsp;[JQUERY 介绍](http://www.ruanyifeng.com/blog/2011/07/jquery_fundamentals.html)
&emsp;&emsp;[jQuery Basics](http://jqfundamentals.com/chapter/jquery-basics)
&emsp;&emsp;[教程](https://www.liaoxuefeng.com/wiki/1022910821149312/1023022609723552)

//`$`  空格代表子节点 ，逗号代表或，点代表类，
var a = `$`('.red.green'); 代表同级元素class与
var a = `$`('.nav-center .links.show-links') 带表不同级元素的与
$('.nav-center,.links.show-links')逗号代表多选，但部分非全面版本的JQuery不支持，可能只会输出最先找到的元素。






# JavaScript

## HTTP 通信
[Fetch](https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)

## 原理
[浏览器中Javascript的加载和执行](https://www.cnblogs.com/tesky0125/p/4619554.html)

## 应用
### [操作剪切板](https://www.ruanyifeng.com/blog/2021/01/clipboard-api.html)
### [浏览器中嵌入自己写的Javascript脚本](https://www.cnblogs.com/joy0309/p/9531767.html)


## Javascript 对象
[Javascript 对象机制](https://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html) 里讲的很清楚，一下是我的总结。
### 封装
js 因为没有类(class)，所以通过构造函数统一生成对象，通过给构造函数一个原型(prototype)属性，分离私有和共用数据和方法，并利用isPrototypeOf()辨别原型，用hasOwnProperty()或in识别属性。在构造函数内，利用this关联一个对象，孰通过 new 方法调该构造函数，这使孰具有了`constructor`属性。可见，js的对象封装完全依赖构造函数及其原型，构造函数相当于js的class，prototype则是该伪类的原型对象。
### 继承
#### 通过构造函数继承
通过call 或 apply 方法，将子对象通过this引用传递给父对象,如
```
function Father(hobby,gender){
    this.hobby = hobby
    this.gender = gender
}
function Son(hobby,gender,age="1"){
    Father.call(this,hobby,gender)
    this.age = age
}
console.log(new Son("travel","male").hobby);
// expected output: "travel"
```
也可通过 prototype 属性继承，但要注意修改构造函数：
```
function Father(hobby,gender){
    this.hobby = hobby
    this.gender = gender
}
function Son(age){
    this.age = age
}
console.log(Son.prototype.constructor.name)
// 对象调用Father构造函数，则constructor属性为Father
Son.prototype = new Father("smoke", "male")
console.log(Son.prototype.constructor.name)
// 将Son的构造函数改回来
Son.prototype.constructor = Son
console.log(Son.prototype.constructor.name)
console.log(new Son("15").hobby);
```
如果只想继承构造函数的prototype，也可用如下方式：
```
function Father(hobby,gender){
    this.hobby = hobby
    this.gender = gender
}
Father.prototype.species = "human";
function Son(age){
    this.age = age
}
//js中万物皆可操作如对象，连函数也不例外
Son.extend = function(Parent) {
    const F = function(){
        console.log("fuck")
    };
    // js 对象复制的是引用，改一个就是该一双
    F.prototype = Parent.prototype;
    console.log(F.prototype.constructor.name)
  	// F原型的构造函数不再是F，但这不影响F函数本身的执行
    this.prototype = new F();
    console.log(this.prototype.constructor.name)
    this.prototype.constructor = this;
    // 在子对象上打开一条通道，可以直接调用父对象的方法
    this.uber = Parent.prototype;
}
Son.extend(Father);
console.log(new Son("15").species);
```
#### 通过对象复制继承
利用原型对象，直接创建新构造函数：
```
let Chinese = {
    language: 'Chinese',
    "skin-color": "yellow",
    nation: "China",
    hi: function () { console.log("cao") }
};
function fork (o) {
    function F () { }
    F.prototype = o;
    return new F();
}
let me = fork(Chinese)
for (let i in me) {
    console.log(i + ":" + typeof i)
}
// hi is a string?
me.hi()
// function doesnt include?
console.log(typeof me.constructor)
```
利用递归调用，逐个复制子对象，避免子数组和对象只拷贝地址：
```
let Doctor = {
    profession: "Math",
    subLanguage: "English",
    Majors: [
        "Category",
        "topology",
        [
            "number theory",
            "set theory",
        ],
        {
            teach: "Trigonometry",
            counse: "Probability and Statistics",
        },
    ],
    hobby: ["math", "juggle"]
}
let me = {
    age: "200"
}
function deepCopy (obj) {
    for (let k in obj) {
        //Array 是对象类型
        if (typeof obj[k] !== 'object') {
            this[k] = obj[k]
        } else {
            this[k] = obj[k].constructor === Array ? [] : {};
            deepCopy.call(this[k], obj[k])
        }
    }
}
function deepShow (obj, num = 0) {
    let keys = Object.keys(obj || {})
    let lastKey = keys[keys.length - 1]
    for (let k in obj) {
        //Array 是对象类型
        let v = obj[k]
        let indent = "    ".repeat(num)
        if (typeof v !== 'object') {
            console.log(indent + k + ": " + v + ",")
        } else {
            let comma = ","
            if (num == 0 && k === lastKey) comma = ";\n" + obj.constructor.name + "\n"
            num++;
            console.log(indent + k + ":")
            // Array 对象构造器 为 Array
            if (v.constructor === Array) {
                console.log(indent + "[")
                deepShow(v, num)
                console.log(indent + "]" + comma)
                num--;
            } else {
                console.log(indent + "{")
                deepShow(v, num)
                console.log(indent + "}" + comma)
                num--;
            }
        }
    }
}
deepCopy.call(me, Doctor)
deepShow(me)
let you = new deepCopy(Doctor)
deepShow(you)
```






## RegExp
&emsp;&emsp;[JavaScript RegExp ref](https://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)




