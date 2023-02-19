# Node.js

## hello node

### 1.命令行窗口(小黑屏)、CMD窗口、终端、shell

	- 开始菜单 --> 运行 --> CMD --> 回车
	- 常用的指令：
		dir 列出当前目录下的所有文件
		cd 目录名 进入到指定的目录
		md 目录名 创建一个文件夹
		rd 目录名 删除一个文件夹	
	
		- 目录
		. 表示当前目录
		.. 表示上一级目录
		
	- 环境变量（windows系统中变量）
		一般改用户变量 系统变量改错了会对系统使用产生不可预测的影响	
		path
			C:\work\jdk\jdk1.7.0_75/bin;
			%CATALINA_HOME%/bin;
			C:\work\soft\tools\AppServ\Apache24\bin;
			C:\work\soft\tools\AppServ\php5;
			C:\Users\lilichao\AppData\Local\Programs\Fiddler;
			C:\work\environment\Egret\Egret Wing 3\bin;
			C:\Users\lilichao\AppData\Roaming\npm;
			C:\Program Files\MongoDB\Server\3.2\bin;
			C:\Users\lilichao\Desktop\hello
			
		- 当我们在命令行窗口打开一个文件，或调用一个程序时，
			系统会首先在当前目录下寻找文件程序，如果找到了则直接打开
			如果没有找到则会依次到环境变量path的路径中寻找，直到找到为止
			如果没找到则报错


		- 所以我们可以将一些经常需要访问的程序和文件的路径添加到path中，
			这样我们就可以在任意位置来访问这些文件和程序了
			
		-进入D盘直接d:
### 2.进程和线程

​	进程
​		-进程为程序运行提供必备环境
​		-进程相当于工厂中的车间
​	线程
​		-计算机中最小计算单位 负责执行保存到进程中的程序
​	单线程
​	多线程

I/O (Input/Output)
	- I/O操作指的是对磁盘的读写操作
	

Node
	- Node是对ES标准一个实现，Node也是一个JS引擎
	- 通过Node可以使js代码在服务器端执行
	- Node仅仅对ES标准进行了实现，所以在Node中不包含DOM 和 BOM	
	- Node中可以使用所有的内建对象
		String Number Boolean Math Date RegExp Function Object Array
		而BOM和DOM都不能使用
			但是可以使用 console 也可以使用定时器（setTimeout() setInterval()）
			

	- Node可以在后台来编写服务器
		Node编写服务器都是单线程的服务器
		- 进程
			- 进程就是一个一个的工作计划（工厂中的车间）
	
		- 线程
			- 线程是计算机最小的运算单位（工厂中的工人）
					线程是干活的
					
		- 传统的服务器都是多线程的
			- 每进来一个请求，就创建一个线程去处理请求
			
		- Node的服务器单线程的
			- Node处理请求时是单线程，但是在后台拥有一个I/O线程池



​	VSCode 有nodemon 修改保存自动运行

## module

 - node是一款对ES标准实现的JS引擎

  通过node可以使js在服务器中运行

- node就是一款使用js编写的web服务器
- node底层是使用c++的编写的

- node的中js引擎使用的chrome的v8引擎
- 定义一个模块即创建一个JS文件

- node的特点：
  1.非阻塞、异步的I/O
  2.事件和回调函数
  3.单线程（主线程单线程，后台I/O线程池）
  4.跨平台

	- 模块化
		- ES5中没有原生支持模块化，我们只能通过script标签引入js文件来实现模块化
		- 在node中为了对模块管理，引入了CommonJS规范
			
			- 模块的引用
				- 使用 require()函数来引入一个模块
				- 可以通过传递一个文件的路径作为参数 如果使用相对路径 以.或者..开头
				- 例子：
					var 变量 = require("模块的标识");
					获取引入模块的返回值 函数会返回一个对象
				
			- 模块的定义
				- 在node中一个js文件就是一个模块
				- 默认情况下在js文件中编写的内容，都是运行在一个独立的函数中，
					外部的模块无法访问
				- 导出变量和函数（向外部暴露变量和方法）
					- 使用 exports 只能通过.的形式向外暴露
						- 例子：
							exports.属性 = 属性值;
							exports.方法 = 函数;
						
					- 使用module.exports 既可以通过.的形式，也可以直接赋值
						- 例子：
							module.exports.属性 = 属性值;
							module.exports.方法 = 函数;
							module.exports = {};
			
			- 模块的标识
				- 模块的标识就是模块的名字或路径
				- 模块分为两大类
					- 核心模块
						- 由node引擎提供的模块
					- 文件模块
						- 由用户自己创建的模块

					我们node通过模块的标识来寻找模块的
					对于核心模块（npm中下载的模块），直接使用模块的名字对其进行引入
						var fs = require("fs");
						var express = require("express");
						
					对于自定义的文件模块，需要通过文件的路径来对模块进行引入
						路径可以是绝对路径，如果是相对路径必须以./或 ../开头
						var router = require("./router");

			在node中有一个全局变量global 它的作用域和网页中的window相似
			在全局中创建的变量和函数都会作为global的属性和方法保存

			当node在执行模块中的代码时，它会在代码的最顶部添加如下代码
				function(exports, require, module, __filename, __dirname){
			在代码的最底部，添加如下代码
				}
			实际上模块中的代码都是包装在一个函数中执行的，并且在执行时，同时传递了五个参数

​						
​		- npm的命令
​			- npm -v 查看npm的版本
​			- npm version 查看所有模块的版本
​			- npm search 包名 搜索包
​			- npm install / i 包名 安装包
​			- npm remove / r 包名 删除包
​			- npm install 包名 --save 安装包并添加到依赖中 *****
​			- npm install 下载当前项目所依赖的包
​			- npm install 包名 -g 全局安装包（全局安装的包一般都是一些工具）

- 包结构 
	本质就是压缩文件 解压以后还原为目录
	符合规范的目录 应包括如下文件
		- package.json 描述文件（必须有）
		- bin 可执行二进制文件
		- lib js代码
		- doc 文档
		- test 单元测试

	- package.json	
			- 它是一个json格式的文件，在它里面保存了包各种相关的信息
				name 包名
				version 版本
				dependencies 依赖（分为开发依赖和生产依赖）
				main 包的主要的文件
				bin 可执行文件
				keywords 关键字（意味着包可以被查询到）
	
- npm（Node Package Manager node的包管理器）
		- 通过npm可以对node中的包进行上传、下载、搜索等操作
		- npm会在安装完node以后，自动安装
		- npm的常用指令
			npm -v 查看npm的版本
			npm version 查看所有模块的版本
			npm search 包名
			npm init 初始化项目（创建package.json）
			npm i/install 包名 安装指定的包
			npm i/install 包名 --save 安装指定的包并将其添加为依赖
			npm i/install 包名 -g 全局安装（一般都是一些工具）
			npm i/install 安装当前项目所依赖的包（因此git下载项目无需理睬node_module，上传也无需上传node_module）
			npm s/search 包名 搜索包	
			npm r/remove 包名 删除一个包

- 通过npm下载的包都放在了node_module文件夹中
			

文件系统（File System）
	- Buffer（缓冲区）
		- Buffer和数组的结构的非常类似，数组不能存储二进制文件，Buffer是专门用来存储二进制数据的
		- 使用Buffer不需要引入模块，直接使用即可
		- Buffer中存储的都是二进制数据， 但是在显示时都是以16进制的形式显示
			范围从00 - ff
			一个0/一个1 成为一位（bit）
			8 bit = 1 byte(字节)（数据传输的最小单位）
			1024byte = 1 kb
			1024kb = 1mb(兆字节)
			1024mb = 1GB
			1024GB = 1TB
		- Buffer的属性
			-buf.length
				占用内存的大小（字节为单位）（字母占一个字节 utf-8汉字占三个字节 unicode汉字占两个字节）
			-str.length
				字符串的长度
		- Buffer的方法
			- Buffer.from(字符串)
				- 将一个字符串中内容保存到一个buffer中
			- buf.toString(n)
				- 将buffer转换为一个字符串 n代表为n进制
			- Buffer.alloc(size)
				- 创建一个指定大小的buffer对象
			- Buffer.allocUnsafe(size)
				- 创建一个指定大小的buffer对象，可以包含敏感数据（相比于alloc，在使用时不清空数据）
		- Buffer的大小一旦确定， 则不能修改， Buffer实际上是对底层内存的直接操作
	总结：Buffer缓存区，服务器用来存储数据发送数据的
		 buffer数据指定的大小区域不可改变
		 buffer具体看API文档
		 buf.tostring指定进制转换为字符串 方便查看存储的原始内容 
				
				
	- fs模块（file system）
		- 简单来说通过node来操作系统中文件
		- 该模块提供了一些标准文件访问API来打开、读取、写入文件，以及与其交互
		- 在Node通过fs模块来对系统中的文件进行操作，fs模块是node中已经继承好了，不需要在使用npm下载，直接引入即可
		- 引入fs
			var fs = require("fs");
		- fs模块中的大部分操作都提供了两种方法，同步方法和异步方法
			同步方法带sync（阻塞程序的执行，即除非操作完成，否则不会向下执行代码）
				- 只要有返回值肯定是同步方法， 因为意味着要等程序执行结束返回后继续执行
			异步方法没有sync（不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回）
				- 异步调用的方法， 结果都是通过回调函数的参数返回的
				- 回调函数两个参数
					- err 错误对象， 没有错误则为null
					- fd 文件的描述符


​			
		- 写入文件
			1.同步写入
			2.异步写入
			3.简单写入
			4.流式写入
			
		- 读取文件
			1.同步读取
			2.异步读取
			3.简单读取
			4.流式读取
			
		- 方法
			- 打开文件
				fs.open(path, flags[, mode], callback)
				fs.openSync(path, flags[, mode])
				- path 要打开文件的路径
				- flag 打开文件要做的操作的类型
					r 只读的
					w 可写的
				- mode 设置文件的操作权限， 一般不传
			返回值
				-该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
				
			- 读写文件
				fs.write(fd, string[, position[, encoding]], callback)
				fs.writeSync(fd, string[, position[, encoding]])
				- fd 文件的描述符， 传递要写入的文件的描述符
				- string 要写入的内容
				- position 写入的起始位置
				- encoding 写入的编码， 默认uft-8
				
				fs.read(fd, buffer, offset, length, position, callback)
				fs.readSync(fd, buffer, offset, length, position)
				
			- 关闭文件
				fs.close(fd,callback)
				fs.closeSync(fd);
				
			- 简单文件读取和写入（不用打开和关闭文件）
				fs.writeFile(file, data[, options], callback)
				fs.writeFileSync(file, data[, options])
					- file 要操作的文件的路径
					- data 要写入的数据
					- options 选项， 可以对写入进行一些设置
					  encoding  mode(<integer>默认=0o666)  flag（<string>默认='w')
					- callback 当写入完成以后执行的函数
				
				fs.readFile(path[, options], callback)
					- function(err,data){
						if (err) throw err;
						console.log(data);//data 为读取的文件中的数据， 会返回一个buffer
					}
				fs.readFileSync(path[, options])
				
		同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
			- 流式文件读取和写入
				- 流式读取和写入适用于一些比较大的文件
				  读会自己开关 写要手动关闭ws.end();
						- 写
						var fs = require("fs");
						ws = fs.createWriteStream(path[, options]);
							- path 文件路径
							- options {encoding:"",mode:"",flag:""}
						ws.once("open"(或者"close"),function(){
							//监听流的open和close事件来监听流的打开和关闭
						});
						ws.write("text");
						ws.end();
	
						- 读
						如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，他会自动开始读取数据
						var fs = require("fs");
						rs = fs.createReadStream(path[, options]);
						re.on("data", function(data){
							console.log(data);
							//多次读取 因此不能用once 要用on
						});
	
						rs.once("close",function () {
						console.log("可读流关闭了~~");
						//数据读取完毕，关闭可写流
						ws.end();
						});
	
						- rs.pipe(ws); //pipe可以将可读流中的内容，直接输出到可写流中
arguments	
​JSON文件不能写注释
​16进制数0x开头
​			
​			
​			
​		
​		
​					
​			
​			
​			
​			
​			
​		
​		
​		
​	
​	
​	
​	
​		
​			
​		