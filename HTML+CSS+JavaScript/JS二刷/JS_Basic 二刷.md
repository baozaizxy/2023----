# JS_Basic 二刷

• JavaScript是一门解释型语言，所谓解释型值语言不需要被编

译为机器码在执行，而是直接执行。

• 由于少了编译这一步骤，所以解释型语言开发起来尤为轻松，

但是解释型语言运行较慢也是它的劣势。

JavaScript是一门面向对象的语言。

• Java也是一门面向对象的语言，但是与Java不同JavaScript是

基于原型的面向对象。

在函数内声明变量时，使用 `var` 和 `let` 很相似。

它们都有*函数作用域*：

```js
function myFunction() {
  var carName = "porsche";   // 函数作用域
}
function myFunction() {
  let carName = "porsche";   // 函数作用域
}
```

使用 JavaScript 的情况下，全局作用域是 JavaScript 环境。

在 HTML 中，全局作用域是 window 对象。

通过 `var` 关键词定义的全局变量属于 window 对象：

通过 `let` 关键词定义的全局变量不属于 window 对象

在相同的作用域，或在相同的块中，通过 `let` 重新声明一个 `var` 变量是不允许的：



```js
var x = 10;       // 允许
let x = 6;       // 不允许

{
  var x = 10;   // 允许
  let x = 6;   // 不允许
}
```

在相同的作用域，或在相同的块中，通过 `let` 重新声明一个 `let` 变量是不允许的：



```js
let x = 10;       // 允许
let x = 6;       // 不允许

{
  let x = 10;   // 允许
  let x = 6;   // 不允许
}
```

在相同的作用域，或在相同的块中，通过 `var` 重新声明一个 `let` 变量是不允许的：



```js
let x = 10;       // 允许
var x = 6;       // 不允许

{
  let x = 10;   // 允许
  var x = 6;   // 不允许
}
```

通过 `var` 声明的变量会*提升*(hoisting)到顶端

在声明 `let` 变量之前就使用它会导致 ReferenceError。

变量从块的开头一直处于“暂时死区”，直到声明为止



ES2015 引入了两个重要的 JavaScript 新关键词：`let` 和 `const`。

通过 `const` 定义的变量与 `let` 变量类似，但不能重新赋值

在*块作用域*内使用 `const` 声明的变量与 `let` 变量相似

JavaScript `const` 变量必须在声明时赋值

```js
const PI = 3.14159265359;
```

**不是真正的常数**

关键字 `const` 有一定的误导性。

它没有定义常量值。它定义了对值的常量引用。

因此，我们不能更改常量原始值，但我们可以更改常量对象的属性。

**常量对象可以更改**

您可以更改常量对象的属性：

```js
// 您可以创建 const 对象：
const car = {type:"porsche", model:"911", color:"Black"};

// 您可以更改属性：
car.color = "White";

// 您可以添加属性：
car.owner = "Bill";
```

数组同理 在创建时赋值 之后可以增添元素 可以更改元素 但是创建后无法再次赋值

运算符

| %      | 取模（余数）                                              |
| ------ | --------------------------------------------------------- |
| ****** | 幂（[ES2016](https://www.w3school.com.cn/js/js_es6.asp)） |

可使用 JavaScript 的 `typeof` 来确定 JavaScript 变量的类型

**空值**

空值与 `undefined` 不是一回事。

空的字符串变量既有值也有类型

**Null**

在 JavaScript 中，`null` 是 "nothing"。它被看做不存在的事物。

不幸的是，在 JavaScript 中，`null` 的数据类型是对象。

您可以把 `null` 在 JavaScript 中是对象理解为一个 bug。它本应是 `null`。

您可以通过设置值为 `null` 清空对象：

```js
var person = null;           // 值是 null，但是类型仍然是对象
```

**Undefined 与 Null 的区别**

`Undefined` 与 `null` 的值相等，但类型不相等：

```js
typeof undefined              // undefined
typeof null                   // object
null === undefined            // false
null == undefined             // true
```

`typeof` 运算符可返回以下原始类型之一：

- string
- number
- boolean
- undefined

`typeof` 运算符可返回以下两种类型之一：

- function
- object

`typeof` 运算符把对象、数组或 `null` 返回 `object`。

`typeof` 运算符不会把函数返回 `object`。



```js
typeof {name:'Bill', age:62} // 返回 "object"
typeof [1,2,3,4]             // 返回 "object" (并非 "array"，参见下面的注释)
typeof null                  // 返回 "object"
typeof function myFunc(){}   // 返回 "function"
```

`typeof` 运算符把数组返回为 "`object`"，因为在 JavaScript 中数组即对象。

对象能够以两种方式访问属性：

```
objectName.propertyName
```

或者

```js
objectName["propertyName"]
```

​       \* 如果要使用特殊的属性名，不能采用.的方式来操作

​       \*  需要使用另一种方式：

​       \*    语法：对象["属性名"] = 属性值

​       \*  读取时也需要采用这种方式

​       \* 使用[]这种形式去操作属性，更加的灵活, 在[]中可以直接传递一个变量，这样变量值是多少就会读取那个属性

​    JS对象的属性值，可以是任意的数据类型,甚至也可以是一个对象

in 运算符：

通过该运算符可以检查一个对象中是否含有指定属性 返回值时true false

语法： "属性名" in 对象

在对象原型中检测到也会返回true 

因此可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性

使用该方法只有当对象自身中含有属性时，才会返回true

​      `console.log(mc.hasOwnProperty("age"));`

`var obj = {};`

/*

​       \* 使用对象字面量，可以在创建对象时，直接指定对象中的属性

​       \* 语法：{属性名:属性值,属性名:属性值....}

​       \*  对象字面量的属性名可以加引号也可以不加，建议不加,

​       \*  如果要使用一些特殊的名字，则必须加引号

​       \* 

​       \* 属性名和属性值是一组一组的名值对结构，

​       \*  名和值之间使用:连接，多个名值对之间使用,隔开

​       \*  如果一个属性之后没有其他的属性了，就不要写,

​       */

\- 使用typeof检查一个函数对象时，会返回function

函数的形参就相当于在函数内部声明了变量但是并不赋值

调用函数时解析器不会检查实参的类型,所以要注意，是否有可能会接收到非法的参数，如果有可能则需要对参数进行类型的检查

函数的实参可以是任意的数据类型

调用函数时，解析器也不会检查实参的数量，多余实参不会被赋值，如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined

如果return语句后不跟任何值就相当于返回一个undefined，

 如果函数中不写return，则也会返回undefined

返回值可以是任意数据类型 可以是一个对象 也可以是一个函数

###### 立即执行函数

```js
			//函数对象()
			/*
			 * 立即执行函数(自调用)
			 * 	函数定义完，立即被调用，这种函数叫做立即执行函数
			 * 	立即执行函数往往只会执行一次
			 */
			(function(){
				alert("我是一个匿名函数~~~");
			})();

			(function(a,b){
				console.log("a = "+a);
				console.log("b = "+b);
			})(123,456);
```

枚举对象中的属性 使用for ... in 语句

```js
for(var 变量 in 对象){}
//for...in语句 对象中有几个属性，循环体就会执行几次,每次执行时，会将对象中的一个属性的名字赋值给变量
for(var n in obj){
	console.log("属性名:"+n);
				
	console.log("属性值:"+obj[n]);
}
```

**在JS中一共有两种作用域：**

 1.全局作用域

- 直接编写在script标签中的JS代码，都在全局作用域

- 全局作用域在页面打开时创建，在页面关闭时销毁
- 在全局作用域中有一个全局对象window，它代表的是一个浏览器的窗口，它由浏览器创建我们可以直接使用

- 在全局作用域中：

     创建的变量都会作为window对象的属性保存

  ​	创建的函数都会作为window对象的方法保存

- 全局作用域中的变量都是全局变量，

   在页面的任意的部分都可以访问的到

2.函数作用域

- 调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁

- 每调用一次函数就会创建一个新的函数作用域，他们之间是互相独立的

- 在函数作用域中可以访问到全局作用域的变量

    在全局作用域中无法访问到函数作用域的变量

- 当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用

    如果没有则向上一级作用域中寻找，直到找到全局作用域，

     如果全局作用域中依然没有找到，则会报错ReferenceError

- 在函数中要访问全局变量可以使用window对象

在函数中，不适用var声明的变量都会成为全局变量,定义形参就相当于在函数作用域中声明了变量

**不要把字符串、数值和布尔值声明为对象！**

如果通过关键词 "new" 来声明 JavaScript 变量，则该变量会被创建为对象：

```js
var x = new String();        // 把 x 声明为 String 对象
var y = new Number();        // 把 y 声明为 Number 对象
var z = new Boolean();       //	把 z 声明为 Boolean 对象
```

将其他数值转换为字符串有三种方式：toString()、String()、拼串。

NaN，即非数值（Not a Number）是一个特殊的数值，JS中当对数值进行计算时没有结果返回，则返回NaN

• 有三个函数可以把非数值转换为数值：Number()、parseInt()

和parseFloat()。

• Number()可以用来转换任意类型的数据，而后两者只能用于

转换字符串。

• 从语义上看null表示的是一个空的对象。所以使用typeof检查

null会返回一个Object。

• undefined值实际上是由null值衍生出来的，所以如果比较

undefined和null是否相等，会返回true；

• 非使用符号 ! 表示，与使用 && 表示，或使用 || 表示。

| 运算符 | 说明   | 短路规则                 |
| ------ | ------ | ------------------------ |
| ！     | 逻辑非 | 无                       |
| &&     | 逻辑与 | 若左值为假，则不运算右值 |
| \|\|   | 逻辑或 | 若左值为真，则不运算右值 |

![image-20230225135300483](D:\appdata\Typora\typora-user-images\image-20230225135300483.png)

![image-20230225140300543](D:\appdata\Typora\typora-user-images\image-20230225140300543.png)

数组、函数 都是对象

解析器即浏览器

根据函数的**调用方式**不同，this会指向不同对象

1.以函数的形式调用时，this永远都是window

  2.以方法的形式调用时，this就是调用方法的那个对象

其实函数就是window的方法

工厂模式就是利用构造函数批量生成对象Object,再在函数体内对对象属性进行赋值

构造函数可以直接在构造函数内生成目的对象 如：Person对象

构造函数时用函数声明对象，要先声明函数 再创建对象，不要同时进行

```js
 Object对象.__proto__==null
 //属性会返回undefined
```

当我们直接在页面中打印一个对象时，事件上是输出的对象的toString()方法的返回值,这个方法在原型Object中

\- 在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁， 我们不需要也不能进行垃圾回收的操作，我们需要做的只是要将不再使用的对象设置null即可

对象分为：内建对象 宿主对象 自定义对象

如果读取对象中没有的属性，不会报错而是会返回undefined

 删除对象的属性  语法：delete 对象.属性名

​      `delete obj.name;`

对象的分类：

1.内建对象

-  由ES标准中定义的对象，在任何的ES的实现中都可以使用

- 比如：Math String Number Boolean Function Object....

 2.宿主对象

- 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象

- 比如 BOM DOM

  3.自定义对象

- 由开发人员自己创建的对象

当比较两个基本数据类型的值时，就是比较值。

而比较两个引用数据类型时，它是比较的对象的内存地址，

​	如果两个对象是一摸一样的，但是地址不同，它也会返回false

​       函数的声明提前

- 使用函数声明形式创建的函数 function 函数(){}

     它会在所有的代码执行之前就被创建，所以我们可以在函数声明前来调用函数

    使用函数表达式创建的函数，不会被声明提前，所以不能在声明前调用  

```js
			//函数声明，会被提前创建
			function fun(){
				console.log("我是一个fun函数");
			}
			
			//函数表达式，不会被提前创建
			var fun2 = function(){
				console.log("我是fun2函数");
			};
```

数组的存储性能比普通对象要好，在开发中我们经常使用数组来存储一些数据

使用typeof检查一个数组时，会返回object

如果读取不存在的索引，他不会报错而是返回undefined

```js
new Array(element0, element1, /* … ,*/ elementN)
new Array(arrayLength)
```

数组中的元素可以是任何数据类型 也可以是对象 函数 数组

数组的方法

push() 返回值是数组的新长度

pop() 删除数组的最后一个元素,并将被删除的元素作为返回值返回

unshift() 向数组开头添加一个或多个元素，并返回新的数组长度

shift() 可以删除数组的第一个元素，并将被删除的元素作为返回值返回

forEach() 

该方法需要一个函数作为参数

- 像这种函数，由我们创建但是不由我们调用的，我们称为回调函数

- 数组中有几个元素函数就会执行几次，每次执行时，浏览器会将遍历到的元素

   以实参的形式传递进来，我们可以来定义形参，来读取这些内容

- 浏览器会在回调函数中传递三个参数：

   第一个参数，就是当前正在遍历的元素

   第二个参数，就是当前正在遍历的元素的索引

   第三个参数，就是正在遍历的数组

**Slice和Splice很重要**

 **slice**()

- 可以用来从数组提取指定元素

- 该方法不会改变元素数组，而是将截取到的元素封装到一个新数组中返回

- 参数

  1.截取开始的位置的索引,包含开始索引

   2.截取结束的位置的索引,不包含结束索引

- 第二个参数可以省略不写,此时会截取从开始索引往后的所有元素

- 索引可以传递一个负值，如果传递一个负值，则从后往前计算

  -1 倒数第一个

   -2 倒数第二个

**splice**()

- 可以用于删除数组中的指定元素

- 使用splice()会影响到原数组，会将指定元素从原数组中删除

  并将被删除的元素作为返回值返回

- 参数：

  第一个，表示开始位置的索引

   第二个，表示删除的数量

  第三个及以后。。

  可以传递一些新的元素，这些元素将会自动插入到开始位置索引前边

# typeof 和 instanceof 的取别

构造函数也可以检查 如Array.isArray(x);

数组的方法：[Array - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

函数的两个方法：

**call()和apply()**

- 这两个方法都是函数对象的方法，需要通过函数对象来调用

- 当对函数调用call()和apply()都会调用函数执行

- 在调用call()和apply()可以将一个对象指定为第一个参数

   此时这个对象将会成为函数执行时的this

- call()方法可以将实参在对象之后依次传递

- apply()方法需要将实参封装到一个数组中统一传递

- this的情况：

   1.以函数形式调用时，this永远都是window

   2.以方法的形式调用时，this是调用方法的对象

   3.以构造函数的形式调用时，this是新创建的那个对象

   4.使用call和apply调用时，this是指定的那个对象



在调用函数时，浏览器每次都会传递进两个隐含的参数：

 1.函数的上下文对象 this

 2.封装实参的对象 arguments

- arguments是一个类数组对象,它也可以通过索引来操作数据，也可以获取长度

- 在调用函数时，我们所传递的实参都会在arguments中保存

- arguments.length可以用来获取实参的长度

- 我们即使不定义形参，也可以通过arguments来使用实参，

   只不过比较麻烦

    arguments[0] 表示第一个实参

    arguments[1] 表示第二个实参 。。。

- 它里边有一个属性叫做callee，

     这个属性对应一个函数对象，就是当前正在指向的函数的对象

  ​	 打印这个属性甚至会打印出注释

  ​	arguments.callee == fun

  

Math.ceil()

- 可以对一个数进行向上取整，小数位只有有值就自动进1

Math.floor()

- 可以对一个数进行向下取整，小数部分会被舍掉

Math.round()

- 可以对一个数进行四舍五入取整

​       

 方法和属性之能添加给对象，不能添加给基本数据类型

​        添加进去后不会报错 会undefined

 当我们对一些基本数据类型的值去调用属性和方法时，

 浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法

  调用完以后，在将其转换为基本数据类型



数组是对象 因此可以直接有方法 string调用方法先通过包装类转换成object 调用后再转回来

string 方法：[String - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)



- 正则表达式用于定义一些字符串的规则，

     计算机可以根据正则表达式，来检查一个字符串是否符合规则，

     获取将字符串中符合规则的内容提取出来

​       \* 语法：

​       \*  var 变量 = new RegExp("正则表达式","匹配模式");

​       \*  使用typeof检查正则对象，会返回object

​       \*  对象除了函数是function 其他都是object

​       \*  var reg = new RegExp("a"); 这个正则表达式可以来检查一个字符串中是否含有a

​       \* 在构造函数中可以传递一个匹配模式作为第二个参数，

​       \*    可以是 

​       \*      i 忽略大小写 

​       \*      g 全局匹配模式

​       \* 正则表达式的方法：

​       \*  test()

​       \*  - 使用这个方法可以用来检查一个字符串是否符合正则表达式的规则，

​       \*    如果符合则返回true，否则返回false

​       

如果在正则表达式中同时使用^ $则要求字符串必须完全符合正则表达式



```js
			//去除开头的空格
			str = str.replace(/^\s*/, "");
			//去除结尾的空格
			str = str.replace(/\s*$/, "");
			// '/^\s*|\s*$/g '匹配开头和结尾的空格
			str = str.replace(/^\s*|\s*$/g,"");
```

**script写在head和body的区别**

写在head

​       \* 浏览器在加载一个页面时，是按照自上向下的顺序加载的，

​       \*  读取到一行就运行一行,如果将script标签写到页面的上边，

​       \*  在代码执行时，页面还没有加载，页面没有加载DOM对象也没有加载

​       \*  会导致无法获取到DOM对象

将js代码编写到页面的下部就是为了，可以在页面加载完毕以后再执行js代码



这类绑定事件触发的函数可以写在head中

​       \* onload事件会在整个页面加载完成之后才触发

​       \* 为window绑定一个onload事件

​       \*    该事件对应的响应函数将会在页面加载完成之后执行，

​       \*    这样可以确保我们的代码执行时所有的DOM对象已经加载完毕了

**DOM文档对象模型**

JS中通过DOM来对HTML文档进行操作。只要理解了DOM就可以随心所欲的操作WEB页面。

D：文档表示的就是整个的HTML网页文档

O：对象表示将网页中的每一个部分都转换为了一个对象。

M：使用模型来表示对象之间的关系，这样方便我们获取对象

**节点Node**，是构成我们网页的最基本的组成部分，网页中的每一个部分都可以称为是一个节点

虽然都是节点，但是实际上他们的具体类型是不同的。

比如：标签我们称为元素节点、属性称为属性节点、文本称为文本节点、文档称为文档节点。

节点的类型不同，属性和方法也都不尽相同

常用节点分为四类

– **文档节点**document：整个HTML文档

– **元素节点**element：HTML文档中的HTML标签

– **属性节点**attr：元素的属性

– **文本节点**text：HTML标签中的文本内容

![image-20230226152604626](D:\appdata\Typora\typora-user-images\image-20230226152604626.png)

• 文档节点document，代表的是整个HTML文档，网页中的所有节点都是它的子节点。

• document对象作为window对象的属性存在的，我们不用获取可以直接使用

**全选练习**

```js
//主动点击#checkedAllBox
		/*
		 * 全选/全不选 多选框
		 * 	- 当它选中时，其余的也选中，当它取消时其余的也取消
		 * 
		 * 在事件的响应函数中，响应函数是给谁绑定的this就是谁
		 */
		//为checkedAllBox绑定单击响应函数
		checkedAllBox.onclick = function(){
			
			//alert(this === checkedAllBox);
			
			//设置多选框的选中状态
			for(var i=0; i <items.length ; i++){
				items[i].checked = this.checked;
			}
			
		};
//全选框根据用户数据的响应
/*
		 * 如果四个多选框全都选中，则checkedAllBox也应该选中
		 * 如果四个多选框没都选中，则checkedAllBox也不应该选中
		 */
		
		//为四个多选框分别绑定点击响应函数
		for(var i=0 ; i<items.length ; i++){
			items[i].onclick = function(){
				
				//将checkedAllBox设置为选中状态
				checkedAllBox.checked = true;
				
				for(var j=0 ; j<items.length ; j++){
					//判断四个多选框是否全选
					//只要有一个没选中则就不是全选
					if(!items[j].checked){
						//一旦进入判断，则证明不是全选状态
						//将checkedAllBox设置为没选中状态
						checkedAllBox.checked = false;
						//一旦进入判断，则已经得出结果，不用再继续执行循环
						break;
					}	
				}		
			};
		}
```

**Confirm()**

用于弹出一个带有确认和取消按钮的提示框需要一个字符串作为参数，该字符串将会作为提示文字显示出来

 如果用户点击确认则会返回true，如果点击取消则返回false



点击超链接以后，超链接会跳转页面，这个是超链接的默认行为，但是此时我们不希望出现默认行为，可以通过在响应函数的最后return false来取消默认行为

或者

```js
a.href = "javascript:;";
```



```js
//设置tr中的内容
// 此除操作DOM为js表达式 因此字符串<td>要加引号 而操作符+和变量name不需要
tr.innerHTML = "<td>"+name+"</td>"+
	"<td>"+email+"</td>"+
	"<td>"+salary+"</td>"+
	"<td><a href='javascript:;'>Delete</a></td>";	
```



for循环会在页面加载完成之后立即执行， 而响应函数会在超链接被点击时才执行，当响应函数执行时，for循环早已执行完毕

因此在for循环内执行单机响应函数时一定要用this来获取对象 因为索引值已经变成了最后一个



**DOM修改CSS**

但是如果在样式中写了!important，则此时样式会有最高的优先级，即使通过JS也不能覆盖该样式，此时将会导致JS修改样式失效，所以尽量不要为样式添加!important



load 事件在整个页面及所有依赖资源如样式表和图片都已完成加载时触发。

  window.onload = function(){}和VUE中的mounted{}有异曲同工之妙



注意：如果CSS的样式名中含有-， 这种名称在JS中是不合法的比如background-color 需要将这种样式名修改为驼峰命名法， 去掉-，然后将-后的字母大写



 我们通过style属性设置、读取的样式都是内联样式， 而内联样式有较高的优先级，所以通过JS修改的样式往往会立即显示



getComputedStyle()这个方法来获取元素当前的样式 不一定是内联

  这个方法是window的方法，可以直接使用

 需要两个参数

  第一个：要获取样式的元素

 第二个：可以传递一个伪元素，一般都传null

 该方法会返回一个对象，对象中封装了当前元素对应的样式

 可以通过对象.样式名来读取样式

 如果获取的样式没有设置，则会获取到真实的值，而不是默认值

比如：没有设置width，它不会获取到auto，而是一个长度

通过currentStyle和getComputedStyle()读取到的样式都是只读的，

不能修改，如果要修改必须通过style属性（所以非内联样式还是不能修改 但是可以通过内联样式覆盖 如果样式表中加了！important 就没办法修改了）



对象['属性名'] = 属性值；//属性名可以是变量 因此这种方法更灵活



只有window的属性和方法可以省略window.



alert(box1.getComputedStyle); 没有 表明window的方法没有传给box1

window和box1啥关系？是他爷爷 和原型不是一回事 原型链有继承关系 父子关系没有继承关系







​	clientWidth		clientHeight

- 这两个属性可以获取元素的可见宽度和高度

- 这些属性都是不带px的，返回都是一个数字，可以直接进行计算

- 会获取元素宽度和高度，包括内容区和内边距

- 这些属性都是只读的，不能修改

  

  offsetWidth	offsetHeight

- 获取元素的整个的宽度和高度，包括内容区、内边距和边框



​		offsetParent

- **可以用来获取当前元素的定位父元素**

- 会获取到离当前元素最近的开启了定位的祖先元素

  ​    如果所有的祖先元素都没有开启定位，则返回body

​      

​	offsetLeft

- 当前元素相对于其定位父元素的水平偏移量

  offsetTop

- 当前元素相对于其定位父元素的垂直偏移量



​	scrollWidth	scrollHeight

- 可以获取元素整个滚动区域的宽度和高度



​	scrollLeft

- 可以获取水平滚动条滚动的距离

  scrollTop

- 可以获取垂直滚动条滚动的距离







```js
                      /*
                     * 当垂直滚动条滚动到底时使表单项可用
                     * onscroll
                     * 	- 该事件会在元素的滚动条滚动时触发
                     */
                    info.onscroll = function(){
					
					//检查垂直滚动条是否滚动到底
					if(info.scrollHeight - info.scrollTop == info.clientHeight){
						//滚动条滚动到底，使表单项可用
						/*
						 * disabled属性可以设置一个元素是否禁用，
						 * 	如果设置为true，则元素禁用
						 * 	如果设置为false，则元素可用
						 */
						inputs[0].disabled = false;
						inputs[1].disabled = false;
					}
					
```

​     

DOM Event 是对象都可以用的

**onmousemove**

- 该事件将会在鼠标在元素中移动时被触发

 事件对象

不定义形参也会传进来 但是要用的话肯定要有形参才能拿到

 想要获取事件相关信息或者对事件进行相关操作 就找事件对象event

- 当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数,

  ​    在事件对象中封装了当前事件相关的一切信息，比如：鼠标的坐标  键盘哪个按键被按下  鼠标滚轮滚动的方向......



**clientX、cilentY**可以获取鼠标指针的水平、垂直坐标（是数值没有单位）客户区坐标位置

鼠标事件都是在浏览器视口中的特定位置发生的。这个位置信息保存在事件对象的clientX和clientY属性中



**pageX和pageY**可以获取鼠标相对于当前页面的坐标

因此坐标是从页面本身而非视口的左边和顶边计算的。在没有滚动的情况下，clientX和cilentY与pageX和pageY是相等的



**screenX，screenY**

相对于整个电脑屏幕的位置。通过事件对象中的screenX和screenY属性就可以获得相关的属性信息



div的偏移量，是相对于整个页面的

```js
					//获取滚动条滚动的距离
					/*
					 * chrome认为浏览器的滚动条是body的，可以通过body.scrollTop来获取
					 * 火狐等浏览器认为浏览器的滚动条是html的，
					 */
var st = document.body.scrollTop || document.documentElement.scrollTop;
var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
/*现在已全部认为scroll为html的*/
```



###### 冒泡

事件的冒泡（Bubble）

- 所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发

- 在开发中大部分情况冒泡都是有用的,如果不希望发生事件冒泡可以通过事件对象来取消冒泡



可以将事件对象的cancelBubble设置为true，即可取消冒泡

###### 事件的委派

逐个绑定事件不仅麻烦而且这些操作只能为已有的超链接设置事件，而新添加的超链接必须重新绑定

我们希望，只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的，我们可以尝试将其绑定给元素的共同的祖先元素

- 指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件。

- 事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能

target：event中的target表示的触发事件的对象

```js
				//为ul绑定一个单击响应函数 ul下的li子元素被点击时都可以使用该函数
				u1.onclick = function(event){
					event = event || window.event;
					
					/*
					 * target
					 * 	- event中的target表示的触发事件的对象
					 */
					//alert(event.target);
					
					//如果触发事件的对象是我们期望的元素，则执行否则不执行
					if(event.target.className == "link"){
						alert("我是ul的单击响应函数");
					}
					
				};
```



使用 对象.事件 = 函数 的形式绑定响应函数，它只能同时为一个元素的一个事件绑定一个响应函数，不能绑定多个，如果绑定了多个，则后边会覆盖掉前边的



addEventListener()

- 通过这个方法也可以为元素绑定响应函数

- 参数：

  1.事件的字符串，不要on

  2.回调函数，当事件触发时该函数会被调用

  3.是否在捕获阶段触发事件，需要一个布尔值，一般都传false



使用addEventListener()可以同时为一个元素的相同事件同时绑定多个响应函数，这样当事件被触发时，响应函数将会按照函数的绑定顺序执行



\- W3C综合了两个公司的方案，将事件传播分成了三个阶段

 1.捕获阶段

- 在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件

 2.目标阶段

- 事件捕获到目标元素，捕获结束开始在目标元素上触发事件

 3.冒泡阶段

- 事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件



###### 拖拽

拖拽的流程

1.当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown

2.当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove

3.当鼠标松开时，被拖拽元素固定在当前位置  onmouseup

```js
			 /*
			 * 提取一个专门用来设置拖拽的函数
			 * 参数：开启拖拽的元素
			 */
			function drag(obj){
				/*//获取obj
				var box1 = document.getElementById("box1");
				*/
				//为box1绑定一个鼠标按下事件
				//当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown
				obj.onmousedown = function(event){
					//div的偏移量 鼠标.clentX - 元素.offsetLeft
					//div的偏移量 鼠标.clentY - 元素.offsetTop
					// 此处未考虑滚动条
					var ol = event.clientX - box1.offsetLeft;
					var ot = event.clientY - box1.offsetTop;
					
					
					//为document绑定一个onmousemove事件
					document.onmousemove = function(event){
						//当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
						//获取鼠标的坐标
						var left = event.clientX - ol;
						var top = event.clientY - ot;
						
						//修改box1的位置
						box1.style.left = left+"px";
						box1.style.top = top+"px";
						
					};
					
					//为document绑定一个鼠标松开事件
					document.onmouseup = function(){
						//当鼠标松开时，被拖拽元素固定在当前位置	onmouseup
						//取消document的onmousemove事件
						document.onmousemove = null;
						//取消document的onmouseup事件
						//不然在其他地方点击松开时还会触发up？
						document.onmouseup = null;
					};
                    /*
					 * 当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，
					 * 	此时会导致拖拽功能的异常，这个是浏览器提供的默认行为，
					 * 	如果不希望发生这个行为，则可以通过return false来取消默认行为
					 */
					return false;
				};
            }
```



###### 滚轮事件

onmousewheel鼠标滚轮滚动的事件，会在滚轮滚动时触发，但是火狐不支持该属性



 在火狐中需要使用 DOMMouseScroll 来绑定滚动事件，注意该事件需要通过addEventListener()函数来绑定



event.wheelDelta 可以获取鼠标滚轮滚动的方向，在火狐中使用event.detail来获取滚动的方向，这两个值我们不看大小，只看正负



当滚轮滚动时，如果浏览器有滚动条，滚动条会随之滚动，这是浏览器的默认行为，如果不希望发生，则可以取消默认行为

使用addEventListener()方法绑定响应函数，取消默认行为时不能使用return false,需要使用event来取消默认行为event.preventDefault();



###### 键盘事件

onkeydown

- 按键被按下

- 对于onkeydown来说如果一直按着某个按键不松手，则事件会一直触发

- 当onkeydown连续触发时，第一次和第二次之间会间隔稍微长一点，其他的会非常的快，这种设计是为了防止误操作的发生。
- 如果在onkeydown中取消了默认行为，则输入的内容，不会出现在文本框中

onkeyup

- 按键被松开，键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document



可以通过keyCode来获取按键的编码，通过它可以判断哪个按键被按下

 除了keyCode，事件对象中还提供了几个属性

altKey ctrlKey shiftKey

- 这个三个用来判断alt ctrl 和 shift是否被按下，如果按下则返回true，否则返回false

##### BOM

- 浏览器对象模型

- BOM可以使我们通过JS来操作浏览器

- 在BOM中为我们提供了一组对象，用来完成对浏览器的操作

- BOM对象

  **Window**

- 代表的是整个浏览器的窗口，同时window也是网页中的全局对象

​        **Navigator**

- 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器

    **Location**

- 代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面

   **History**

- 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录， 由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效

  **Screen**

- 代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息

​     

 这些BOM对象在浏览器中都是作为全局对象window对象的属性保存的，可以通过window对象来使用，也可以直接使用



###### Navigator

​       \*  - 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器

​       \*  - 由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了

​       \*  - 一般我们只会使用**userAgent**用户代理来判断浏览器的信息，

​       \*    userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，

​       \*    不同的浏览器会有不同的userAgent

###### History

length

- 属性，可以获取到当成访问的链接数量

back()

- 可以用来回退到上一个页面，作用和浏览器的回退按钮一样

forward()

- 可以跳转下一个页面，作用和浏览器的前进按钮一样

go()

- 可以用来跳转到指定的页面

- 它需要一个整数作为参数

​           \*    1:表示向前跳转一个页面 相当于forward()

​           \*    2:表示向前跳转两个页面

​           \*    -1:表示向后跳转一个页面

​           \*    -2:表示向后跳转两个页面



###### Location

如果直接打印location，则可以获取到地址栏的信息（当前页面的完整路径）

如果直接将location属性修改为一个完整的路径，或相对路径, 则我们页面会自动跳转到该路径，并且会生成相应的历史记录

assign()

- 用来跳转到其他的页面，作用和直接修改location一样

reload()

- 用于重新加载当前页面，作用和刷新按钮一样

- 如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面

replace()

- 可以使用一个新的页面替换当前页面，调用完毕也会跳转页面，不会生成历史记录，不能使用回退按钮回退





###### 定时器

setInterval()

- 定时调用

- 可以将一个函数，每隔一段时间执行一次

- 参数：

  1.回调函数，该函数会每隔一段时间被调用一次

   2.每次调用间隔的时间，单位是毫秒

- 返回值：

  返回一个Number类型的数据	这个数字用来作为定时器的唯一标识



clearInterval()可以用来关闭一个定时器

方法中**需要一个定时器的标识作为参数**，这样将关闭标识对应的定时器

```js

					var timer;
					//在开启定时器之前，需要将当前元素上的其他定时器关闭
					//否则每点击一次都会触发新的定时器
					clearInterval(timer);
					//不直接var timer = setInterval(....)是为了在关闭时也可以使用
					timer = setInterval(function(){
						//使索引自增
						index++;
						//判断索引是否超过最大索引
						/*if(index >= imgArr.length){
							//则将index设置为0
							index = 0;
						}*/
						index %= imgArr.length;
						//修改img1的src属性
						img1.src = imgArr[index];
						
					},1000);
					//不写timer没有办法控制定时器的开关
```



onkeydown控制速度有问题 因此用定时器来解决

因为不是依靠监测键盘事件来触发函数 因此不会导致卡顿

触发函数是onload以后的定时器 键盘只是负责提供方向和速度



**延时调用**

```js
			var timer = setTimeout(function(){
				console.log(num++);
			},3000);
			//使用clearTimeout()来关闭一个延时调用
			clearTimeout(timer);
```

延时调用一个函数不马上执行，而是隔一段时间以后在执行，而且只会执行一次

延时调用和定时调用的区别，定时调用会执行多次，而延时调用只会执行一次

延时调用和定时调用实际上是可以互相代替的，在开发中可以根据自己需要去选择

###### 类的操作

通过style属性来修改元素的样式，每修改一个样式，浏览器就需要重新渲染一次页面，这样的执行的性能是比较差的，而且这种形式当我们要修改多个样式时，也不太方便



我们可以通过修改元素的class属性来间接的修改样式， 这样一来，我们只需要修改一次，即可同时修改多个样式，浏览器只需要重新渲染页面一次，性能比较好，并且这种方式，可以使表现和行为进一步的分离



```js
			/*
			 * 判断一个元素中是否含有指定的class属性值
			 * 	如果有该class，则返回true，没有则返回false
			 * 	
			 */
			function hasClass(obj , cn){
				
				//判断obj中有没有cn class
				//创建一个正则表达式
				//var reg = /\bb2\b/;
				// 在字符串中 // 才是 /
				var reg = new RegExp("\\b"+cn+"\\b");
				
				return reg.test(obj.className);
				
			}
			/*
			 * toggleClass可以用来切换一个类
			 * 	如果元素中具有该类，则删除
			 * 	如果元素中没有该类，则添加
			 */
			function toggleClass(obj , cn){
				
				//判断obj中是否含有cn
				if(hasClass(obj , cn)){
					//有，则删除
					removeClass(obj , cn);
				}else{
					//没有，则添加
					addClass(obj , cn);
				}
				
			}
```

###### 二级菜单

我们的每一个菜单都是一个div，当div具有collapsed这个类时，div就是折叠的状态，当div没有这个类是，div就是展开的状态