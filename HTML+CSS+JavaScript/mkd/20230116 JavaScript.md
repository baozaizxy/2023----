## 20230116 JavaScript

### JavaScript 箭头函数

ES6 中引入了箭头函数。箭头函数允许我们编写更短的函数

之前：

```js
hello = function() {
  return "Hello World!";
}
```

用了箭头函数之后：

```js
hello = () => {
  return "Hello World!";
}
```

如果函数只有一个语句，并且该语句返回一个值，则可以去掉括号和 `return` 关键字：

箭头函数默认返回值：

```js
hello = () => "Hello World!";
hello = (val) => "Hello " + val;    /*有参数传递到括号内*/
hello = val => "Hello " + val;      /*只有一个参数可以省括号*/
```

使用箭头函数没有对 `this` 的绑定。

在常规函数中，关键字 `this` 表示调用该函数的对象，可以是窗口、文档、按钮或其他任何东西。

对于箭头函数，`this` 关键字始终表示定义箭头函数的对象。

第一个例子使用常规函数，第二个例子使用箭头函数。

结果显示第一个例子返回两个不同的对象（window 和 button），第二个例子返回两次 window 对象，因为 window 对象是函数的“所有者”。

```js
// 常规函数：
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// window 对象调用该函数：
window.addEventListener("load", hello);

// button 对象调用该函数：
document.getElementById("btn").addEventListener("click", hello);
```

```js
// 箭头函数：
hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// window 对象调用该函数：
window.addEventListener("load", hello);

// button 对象调用该函数：
document.getElementById("btn").addEventListener("click", hello);
```

### JavaScript 类

ECMAScript 2015，也称 ES6，引入了 JavaScript 类。

JavaScript 类是 JavaScript 对象的模板。

### 语法

使用关键字 `class` 创建类。

始终添加名为 `constructor()` 的方法：

```js
class ClassName {
  constructor() { ... }
}
```

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
```

JavaScript 类*不是*对象。

它只是 JavaScript 对象的*模板*。

### 使用类

如果您有一个类，那么您可以使用该类来创建对象：

```js
let myCar1 = new Car("Ford", 2014);
```

在创建新对象时会自动调用 constructor 方法。

### Constructor 方法

构造方法是一种特殊的方法：

- 它必须拥有确切名称的“构造函数”
- 创建新对象时自动执行
- 用于初始化对象属性
- 如果未定义构造函数方法，JavaScript 会添加空的构造函数方法。

### JavaScript JSON

**JSON 是存储和传输数据的格式。**

**JSON 经常在数据从服务器发送到网页时使用。**

### 什么是 JSON？

- JSON 指的是 **J**ava**S**cript **O**bject **N**otation
- JSON 是轻量级的数据交换格式
- JSON 独立于语言 *****
- JSON 是“自描述的”且易于理解

\* JSON 的语法是来自 JavaScript 对象符号的语法，但 JSON 格式是纯文本。读取和生成 JSON 数据的代码可以在任何编程语言编写的。

JSON 格式在语法上与创建 JavaScript 对象的代码相同。

由于这种相似性，JavaScript 程序可以很容易地将 JSON 数据转换成本地的 JavaScript 对象。

JSON 实例

```js
{
"employees":[
    {"firstName":"Bill", "lastName":"Gates"}, 
    {"firstName":"Steve", "lastName":"Jobs"},
    {"firstName":"Alan", "lastName":"Turing"}
]
}
```

### JSON 语法规则

- 数据是名称/值对
- 数据由逗号分隔
- 花括号保存对象
- 方括号保存数组

JSON 数据的书写方式是名称/值对，类似 JavaScript 对象属性

### 把 JSON 文本转换为 JavaScript 对象

JSON 的通常用法是从 web 服务器读取数据，然后在网页中显示数据。

为了简单起见，可以使用字符串作为输入演示。

首先，创建包含 JSON 语法的 JavaScript 字符串：

```json
var text = '{ "employees" : [' +
'{ "firstName":"Bill" , "lastName":"Gates" },' +
'{ "firstName":"Steve" , "lastName":"Jobs" },' +
'{ "firstName":"Alan" , "lastName":"Turing" } ]}';
```

然后，使用 JavaScript 的内建函数 JSON.parse() 来把这个字符串转换为 JavaScript 对象：

```js
var obj = JSON.parse(text);
```

最后，在的页面中使用这个新的 JavaScript 对象

### JavaScript 调试

代码中也许包含了语法错误，或者逻辑错误，这些都难以诊断。

通常，如果 JavaScript 代码包含错误，也不会发生任何事情。不会有错误消息，并且不会有任何可供查找错误的指示信息。

### JavaScript 调试器

查找编程代码中的错误被称为代码调试。

调试并不简单。但幸运地是，所有现代浏览器都有内置的调试器。

内置的调试器可打开或关闭，强制将错误报告给用户。

通过调试器，也可以设置断点（代码执行被中断的位置），并在代码执行时检查变量。

通常通过 F12 键启动浏览器中的调试器，然后在调试器菜单中选择“控制台”。

**console.log() 方法**

### 设置断点

在调试窗口中，您可在 JavaScript 代码中设置断点。

在每个断点中，JavaScript 将停止执行，以使您能够检查 JavaScript 的值。

在检查值之后，可以恢复代码执行。

### debugger 关键词

*debugger* 关键词会停止 JavaScript 的执行，并调用（如果有）调试函数。

这与在调试器中设置断点的功能是一样的。

如果调试器不可用，`debugger` 语句没有效果。

如果调试器已打开，此代码会在执行第三行之前停止运行。

```js
var x = 15 * 5;
debugger;
document.getElementbyId("demo").innerHTML = x; 
```

### JavaScript 样式指南

代码约定(Coding conventions)指的是*编程的样式指导方针*。这些原则大体上包括：

- 变量和函数的命名和声明规则
- 使用空格、缩进和注释的规则
- 编程习惯和准则

代码约定*确保质量*：

- 改善代码可读性
- 提升代码可维护性

**变量名**

在 W3School，我们对标识符名称（变量和函数）使用了*驼峰式大小写*。

所有名称以*字母*开头。

**运算符周围的空格**

请始终在运算符（ = + - * / ）周围以及逗号之后添加空格

**代码缩进**

请始终使用对代码块缩进使用 4 个空格

不要对缩进使用制表符。不同的编辑器对 tab 的解释也不尽相同。

始终以分号结束单条语句

针对复杂语句（compound）的通用规则：

- 请在第一行的结尾处写开括号
- 请在开括号前使用一个空格
- 请在新行上写闭括号，不带前导空格
- **请不要以分号来结束复杂语句?**

**对象规则**

针对对象定义的通用规则：

- 把开括号与对象名放在同一行
- 在每个属性与其值之间使用冒号加一个空格
- 不要在最后一个属性值对后面写逗号
- 请在新行上写闭括号，不带前导空格
- 请始终以分号结束对象定义

```js
var person = {
    firstName: "Bill",
    lastName: "Gates",
    age: 19,
    eyeColor:  "blue"
};
```

可以对短对象在一行中进行压缩，只在属性之间使用空格，就像这样：

```js
var person = {firstName:"Bill", lastName:"Gates", age:50, eyeColor:"blue"};
```

为了提高可读性，请避免每行的长度超过 80 个字符。

### 驼峰大小写（camelCase）：

JavaScript 本身、jQuery 以及其他 JavaScript 库使用驼峰大小写。

JavaScript 命名请不要以 $ 符号开头。此举会引起 JavaScript 库名称冲突。

### 在 HTML 中加载 JavaScript

使用简单的语法来加载外部脚本（type 属性不是必需的）：

```js
<script src="myscript.js"></script>
```

请始终使用小写文件名（如果可能）

### JavaScript 最佳实践

**避免全局变量、`new`、`===`、`eval()`**

全局变量和函数可被其他脚本覆盖。

请使用局部变量替代，并学习如何使用闭包

局部变量*必须*通过 *var* 关键词来声明，否则它们将变成全局变量。

严格模式不允许未声明的变量。

在您声明变量时对其进行初始化是个好习惯。

这么做的好处是：

- 更整洁的代码
- 在单独的位置来初始化变量
- 避免未定义值

### 请勿使用 new Object()

- 请使用 {} 来代替 new Object()
- 请使用 "" 来代替 new String()
- 请使用 0 来代替 new Number()
- 请使用 false 来代替 new Boolean()
- 请使用 [] 来代替 new Array()
- 请使用 /()/ 来代替 new RegExp()
- 请使用 function (){}来代替 new Function()

```js
var x1 = {};           // 新对象
var x2 = "";           // 新的原始字符串值
var x3 = 0;            // 新的原始数值
var x4 = false;        // 新的原始布尔值
var x5 = [];           // 新的数组对象
var x6 = /()/;         // 新的正则表达式
var x7 = function(){}; // 新的函数对象
```

请意识到数值会被意外转换为字符串或 `NaN`（Not a Number）

### 使用 Parameter Defaults

如果调用函数时缺少一个参数，那么这个缺失参数的值会被设置为 `undefined`。

`undefined` 值会破坏您的代码。为参数设置默认值是一个好习惯。

```js
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }
}
```

用 default 来结束 switch

`eval()` 函数用于将文本作为代码来允许。在几乎所有情况下，都没有必要使用它。

因为允许任意代码运行，它同时也意味着安全问题。

### JavaScript 常见错误

**意外使用赋值运算符**

**期望松散的比较**

**令人困惑的加法和级联**

*加法*用于加*数值*。

*级联（Concatenation）*用于加*字符串*。

**令人误解的浮点**

JavaScript 中的数字均保存为 64 位的*浮点数（Floats）*。

所有编程语言，包括 JavaScript，都存在处理浮点值的困难：

```js
var x = 0.1;
var y = 0.2;
var z = x + y             // z 中的结果并不是 0.3
```

为了解决上面的问题，请使用乘除运算：

```js
var z = (x * 10 + y * 10) / 10;       // z 中的结果将是 0.3
```

**对 JavaScript 字符串换行**

JavaScript 允许您把一条语句换行为两行  但是，在字符串中间来换行是不对的

如果必须在字符串中换行，则必须使用反斜杠：

```js
var x = "Hello \
World!";
```

**错位的分号**

因为一个错误的分号，此代码块无论 x 的值如何都会执行：

```js
if (x == 19);
{
     // code block
}
```

JavaScript 会在行末关闭 `return` 语句，因为它本身就是一条完整的语句。

所以，绝不要对 `return` 语句进行换行。

### 通过命名索引来访问数组

很多编程语言支持带有命名索引的数组。

带有命名索引的数组被称为关联数组（或散列）。

JavaScript *不支持*带有命名索引的数组。

在 JavaScript 中，*数组*使用*数字索引*

在 JavaScript 中，*对象*使用*命名索引*。

如果您使用命名索引，那么在访问数组时，JavaScript 会将数组重新定义为标准对象。

在自动重定义之后，数组方法或属性将产生未定义或非正确的结果

```js
var person = [];
person["firstName"] = "Bill";
person["lastName"] = "Gates";
person["age"] = 46;
var x = person.length;         // person.length 将返回 0
var y = person[0];              // person[0] 将返回 undefined
```

### 用逗号来结束定义

对象和数组定义中的尾随逗号在 ECMAScript 5 中是合法的。

### 对象实例：

```js
person = {firstName:"Bill", lastName:"Gates", age:62,}
```

### 数组实例：

```js
points = [35, 450, 2, 7, 30, 16,];
```

JSON 不允许尾随逗号。

### JSON:

```json
person = {firstName:"Bill", lastName:"Gates", age:62}
```

### JSON:

```json
points = [35, 450, 2, 7, 30, 16];
```

### 期望块级范围

JavaScript *不会*为每个代码块创建新的作用域。

很多编程语言都是如此，但是 JavaScript *并非如此*。

认为这段代码会返回 `undefined`，是新的 JavaScript 开发者的常见错误：

```js
for (var i = 0; i < 10; i++) {
  // 代码块
}
return i;
```

在测试非 null 之前，必须先测试未定义：

```js
if (typeof myObj !== "undefined" && myObj !== null)
```

因为无法测试对象是否为 `null`，因为如果对象未定义，将抛出错误：

```js
if (myObj === null)  //不正确的
```

### JavaScript 性能

**减少循环中的活动**

编程经常会用到循环。

循环每迭代一次，循环中的每条语句，包括 `for` 语句，都会被执行。

能够放在循环之外的语句或赋值会使循环运行得更快。

差的代码：

```js
var i;
for (i = 0; i < arr.length; i++) {
```

更好的代码：

```js
var i;
var l = arr.length;
for (i = 0; i < l; i++) {
```

**减少 DOM 访问**

与其他 JavaScript 相比，访问 HTML DOM 非常缓慢。

假如您期望访问某个 DOM 元素若干次，那么只访问一次，并把它作为本地变量来使用

**缩减 DOM 规模**

请尽量保持 HTML DOM 中较少的元素数量。

这么做总是会提高页面加载，并加快渲染（页面显示），尤其是在较小的设备上

**避免不必要的变量**

**延迟 JavaScript 加载**

请把脚本放在页面底部，使浏览器首先加载页面。

脚本在下载时，浏览器不会启动任何其他的下载。此外所有解析和渲染活动都可能会被阻塞。

HTTP 规范定义浏览器不应该并行下载超过两种要素。

一个选项是在 script 标签中使用 `defer="true"`。defer 属性规定了脚本应该在页面完成解析后执行，但它只适用于外部脚本。

如果可能，您可以在页面完成加载后，通过代码向页面添加脚本：

```js
<script>
window.onload = downScripts;

function downScripts() {
    var element = document.createElement("script");
    element.src = "myScript.js";
    document.body.appendChild(element);
}
</script>
```