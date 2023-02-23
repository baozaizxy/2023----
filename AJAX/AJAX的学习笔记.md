# AJAX的学习笔记

## 第一章： 原生Ajax

### 1.1 Ajax简介

- Ajax全称为Asynchronous Javascript And XML，即异步JS和XML
- 通过Ajax可以在浏览器中向服务器发送异步请求，最大的优势：**无刷新获取数据**
- AJAX不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式

### 1.2 XML简介

- XML：可扩展标记语言
- XML：被设计用来传输和存储数据
- XML和HTML类似，不同点：HTML中都是预定义标签，XML中没有预定义标签，全是自定义标签，用来表示一些数据
- 现在已被JSON取代

### 1.3 AJAX 的特点

#### 1.3.1 AJAX的优点

1. 可以无刷新页面与服务端进行通信
2. 允许你根据用户事件（eg:鼠标键盘事件、表单事件、文档事件等）来更新部分页面内容

#### 1.3.2 AJAX 的缺点

1. 没有浏览历史，不能回退
2. 存在跨域问题（同源）
3. SEO不友好（爬虫获取不到信息）

数据是AJAX向服务端发送请求 服务端返回数据 由JS动态创建的 

### 1.4 AJAX 的使用

#### 1.4.1 核心对象

HTTP

**请求报文**

行  POST/GET  url地址 HTTP版本

头  HOST：atguigu.com
    Cookie: name=guigu
    Content-type: application/x-www-form-urlencoded 
    User-Agent: chrome 83

空行

体 Get请求 请求体为空
     POST请求 请求体可以不为空
      username=admin&password=admin

**响应报文**

行  HTTP/1.1 200 OK  协议版本号一般无意义 需要的是状态码和状态字符串

​      404找不到
​      403被禁止
​      401未授权
​      500内部错误

​      303跳转（此时响应体为空）

2开头ok 3开头重载 4开头访问失败 5开头后端问题
头  Content-Type: text/html;charset=utf-8
    Content-length: 2048
    Content-encoding: gzip(压缩方式)
空行
体   

```html
<html>

    <head>
    </head>

​    <body>

            <h1>郑欣悦</h1>

​     </body>
​ </html>
```

![image-20230221193213825](D:\appdata\Typora\typora-user-images\image-20230221193213825.png)

对请求url参数的解析

![image-20230221193404779](D:\appdata\Typora\typora-user-images\image-20230221193404779.png)

对响应体解析之后的查看页面

**Express 服务端框架**

基于node.js平台

**nodemon工具能在文件修改时够帮助重启应用**

## 第二章 jQuery中的AJAX

### 2.1 get请求

```
$.get(url, [data], [callback], [type])
url: 请求的URL地址
data: 请求携带的参数
callbac: 载入成功时回调函数
type：设置返回内容格式，xml、html、script、json、text、_default
```

## 第三章： 跨域

### 3.1 同源策略

同源策略（Same-Origin Policy）最早由 Netscape 公司提出，是浏览器的一种安全策略。

同源：协议、域名、端口号 必须完全相同

违背同源策略就是跨域

### 3.2 如何解决跨域

#### 3.2.1 JSONP

1. JSONP是什么

   JSONP (JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持get请求

2. JSONP 怎么工作的？

   在网页有一些标签天生具有跨域能力，比如：img, link, iframe, script

   JSONP就是利用**script**标签的src属性的跨域能力来发送请求的，它不受同源策略限制

3. JSONP的使用

   - 动态的创建一个script标签

   ```
   var script = document.createElement("script");
   ```

   - 设置script的src，设置回调函数

   ```
   script.src = "http://locallhost:3000/textAJAX?callback=abc"
   ```

### 3.2.2 CORS

推荐阅读：

- http://www.ruanyifeng.com/blog/2016/04/cors.html
- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS

1. CORS是什么？

   CORS (Cross-Origin Resource Sharing), 跨域资源共享。CORS 是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和 post 等请求。跨域资源共享标准新增了一组 HTTP 首部字段（响应头），允许服务器声明哪些源站通过浏览器有权限访问哪些资源

2. CORS怎么工作的？

   CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。

3. CORS 的使用

   主要是服务端的设置：

   ```
   rounter.get("/testAJAX",function(req, res){
   
   })
   ```

同源策略：协议名、主机名、端口号一致

出现跨域问题时：请求成功发送给服务器 服务器返回数据给浏览器 但是浏览器进行拦截 没有最终返回给用户



JSONP应用不广泛的原因：
1、要前后端配合使用

2、只能用于get请求

服务器之间传数据不用AJAX 

有浏览器——》才有window——》才有xhr才有fetch

两台服务器交互用的是http

