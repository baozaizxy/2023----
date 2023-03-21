# 笔试面试题库

在HTML5中,有个很有用但常被忽略的特性,就是预先加载(prefetch),它的原理是: 
利用浏览器的空闲时间去先下载用户指定需要的内容,然后缓存起来,这样用户下次加载时,就直接从缓存中取出来,效率就快了.

**DNS prefetch
**我们知道，当我们访问一个网站如 www.amazon.com 时，需要将这个域名先转化为对应的 IP 地址，这是一个非常耗时的过程。
DNS prefetch 分析这个页面需要的资源所在的域名，浏览器空闲时提前将这些域名转化为 IP 地址，真正请求资源时就避免了上述这个过程的时间。

1、只要“||”前面为false，无论“||”后面是true还是false，结果都返回“||”后面的值。  

   2、只要“||”前面为true，无论“||”后面是true还是false，结果都返回“||”前面的值。  

   3、只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值;  

   4、只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值;

![image-20230216174010161](D:\appdata\Typora\typora-user-images\image-20230216174010161.png)

B （3）

当同一个HTML元素被多个样式定义时，以下样式中优先权最高的是

![img](https://uploadfiles.nowcoder.com/images/20201108/764488302_1604821148944_246CC4CE47CC845943FA0572D3432612)

树的相关术语

1. **结点的度**：一个节点的子树个数（说白了就是节点拥有的子分支数）
2. **结点的层次**：从根节点开始定义，根节点的层次为1，根的直接后继的层次为2，以此类推
3. **节点的层序编号**：将数中的结点按从上层到下层，同层从左到右的次序排成一个线性序列，把他们编成连续的自然数
4. **树的度**：树中所有结点的度的最大值
5. **同构**：对两棵树，通过对结点是当地重命名，就可以使两棵树完全相等，（对应结点相等，对应结点的相关关系也相等），则称为两棵树的同构
6. **祖先结点**：一个结点的祖先结点是指从根结点到该结点的路径上的所有结点
7. **子孙结点**：一个结点的直接后继和间接后继称为该节点的子孙结点
8. **前辈**：层号比该结点小的结点
9. **后辈**：层号比该结点大的结点

HTML5提供的API

 全屏API（Fullscreen API） 
页面可见性API（Page Visibility API） 
 getUserMedia API 访问摄像头和麦克风，而无需使用插件。 
电池API（Battery API） 
Link Prefetching 预加载网页内容，为浏览者提供一个平滑的浏览体验。 

应用缓存可以帮助你进行离线浏览

应用缓存可以帮助你指定哪些文件需要缓存，哪些不需要

我们需要指定”manifest”文件，“manifest”文件帮助你定义你的缓存如何工作

具有n个节点的折半查找树的高度为(log2  N)+1

HTML 5标签建议用小写 属性也建议用小写

Linux

mode是指文件访问方式. 

链接：https://www.nowcoder.com/questionTerminal/5856a8a7278e4ca690fc13c74d933e14
来源：牛客网



 r        只读 

​    r+       读/写 

​    rb+      读/写二进制文件 

​    w        只写,文件存在清空文件,文件不存在创建新文件 

​    w+       读/写,文件存在清空文件,文件不存在创建新文件 

​    a        追加,文件存在,只能追加数据,文件不存在则创建新文件 

​    a+       追加/可读 

​    wb       写二进制 

​    wb+      读/写二进制 

​    ab+      追加/读二进制 

​    wt+      读/写文本 

​    at+      追加/读文本

一般创建文件使用 touch

创建文件夹使用mkdir



微信小程序是通过路由进行跳转到单页面应用

JS Math.min无参时为infinity Math.max无参时返回-Infinity



iframe缺点：阻塞主页面onload事件	iframe和主页面共享连接池，浏览器对相同域的连接有限制，会影响页面的并行加载	用户体验差	搜索引擎的爬虫不能很好的处理iframe因此无法被一些搜索引擎搜索到



HTML5语义化

通俗来讲就是从代码上来展示页面的结构，而不是从最终视觉上来展示

优点：

易于阅读 样式丢失的时候页面能够呈现清晰的结构

有利于SEO 搜索引擎根据标签来确定权重

有利于开发和维护



H5新特性：

document.querySelector返回匹配指定选择器的第一个元素、

document.querySelectorAll返回NodeList伪数组



href和src

href（Hypertext Reference）超文本引用，用来建立当前元素和文档之间的连接。常用有link、[a标签](https://so.csdn.net/so/search?q=a标签&spm=1001.2101.3001.7020)等。当它引用资源时，浏览器会将其识别为CSS文档，并行下载资源并且不会停止对当前文档的处理。

src（Source）会将指向的资源下载并引用到当前的文档中，常用标签有script、img、ifram等。它会替换掉当前的元素。当浏览器解析src时，会暂停其他资源的下载和处理，直接将该资源下载、编译、执行完毕。



svg和Canvas

svg绘制出的每一个图形都是独立的DOM结点，绑定事件或者修饰的时候更加方便

svg输出的是矢量图形，后期可以自由修改参数放大缩小不会失真和锯齿，画布输出的是标量画布，像一张图片，会失真和锯齿



CSS动画的缺点：兼容性不好及在动画控制上不够灵活，无法加回调函数绑定事件之类的，可以用js的动画弥补这样的缺点



常见的meta标签：

charset/author/keywords/description/viewport/theme-color等



label标签的作用：用来定义表单件的控制关系，当点击标签时，浏览器会自动将焦点转移到和标签相关的表单控件上



常见的内联元素：

a/span/br/i/em/strong/label/q/var/code/cite

常见的内联块：

img/input



阻止a标签跳转的方式：

1、href:javascripy:;	2、return false	3、Event.preventDefault()	4、pointer-events:none(CSS)



title属性为设置该属性的元素提供建议性的、非本质的信息



设计模式：工厂模式、构造函数模式、观察者模式



NodeList对象是dom节点的集合。`document.querySelectorAll(selector)`和`Node.childNodes`返回的都是NodeList对象，看着很像数组，却没有数组的方法。