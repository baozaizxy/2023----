## 20230115 JavaScript

**`break` 语句“跳出”循环。**

**`continue` 语句“跳过”循环中的一个迭代**

如需标记 JavaScript 语句，请将标签名和冒号置于语句之前：

```js
label:
statements
```

`break` 和 `continue` 语句是仅有的可“跳出”代码块的 JavaScript 语句。

```
break labelname;

continue labelname;
```

`continue` 语句（不论有无标签引用）只能用于*跳过一个迭代*。

`break` 语句，如果没有标签引用，只能用于*跳出一个循环或一个 switch*。

如果有标签引用，则 `break` 语句可用于*跳出任意代码块*：

## JavaScript typeof

在 JavaScript 中有 5 种不同的可以包含值的数据类型：

- `string`
- `number`
- `boolean`
- `object`
- `function`

有 6 种类型的对象：

- `Object`
- `Date`
- `Array`
- `String`
- `Number`
- `Boolean`

以及 2 种不能包含值的数据类型：

- `null`
- `undefined`

```js
typeof NaN                    // 返回 "number"
typeof myCar                  // 返回 "undefined" *
typeof null                   // 返回 "object"
```

- 数组的数据类型是对象
- 日期的数据类型是对象

### constructor 属性

`constructor` 属性返回所有 JavaScript 变量的构造函数。

### 空值

空值与 `undefined` 无关。

空字符串既有合法值又有类型。

```js
let car = "";    // 值是 ""，类型是 "string"
```

可以通过将对象设置为 `null` 来清空对象

```js
let person = {firstName:"Bill", lastName:"Gates", age:19, eyeColor:"blue"};
person = null;    // 现在值为 null，但类型仍然是对象
```

还可以通过将对象设置为 `undefined` 来清空对象：

```js
let person = {firstName:"Bill", lastName:"Gates", age:19, eyeColor:"blue"};
person = undefined;   // 现在值和类型都是未定义
```

### undefined 与 null 的区别

`undefined` 和 `null` 值相等但类型不同：

```js
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
```

**`Number()` 转换数值，`String()` 转换字符串，`Boolean()` 转换布尔值**

### 把数值转换为字符串

全局方法 `String()` 能够把数字转换为字符串。

它可用于任意类型的数字、文字、变量或表达式：

```js
String(x)         // 从数值变量 x 返回字符串
x.toString()      //数字方法 toString() 同理
```

| 方法            | 描述                                                   |
| :-------------- | :----------------------------------------------------- |
| toExponential() | 返回字符串，对数字进行舍入，并使用指数计数法来写。     |
| toFixed()       | 返回字符串，对数字进行舍入，并使用指定位数的小数来写。 |
| toPrecision()   | 返回字符串，把数字写为指定的长度。                     |

### 把字符串转换为数值

全局方法 `Number()` 可把字符串转换为数字。

包含数字的字符串（比如 "3.14"）转换为数字（比如 3.14）。

空的字符串转换为 0。

其他字符串将转换为 `NaN`（Not a number，不是数字）。

```js
Number("3.14")    // 返回 3.14
Number(" ")       // 返回 0
Number("")        // 返回 0
Number("99 88")   // 返回 NaN
```

| 方法         | 描述                     |
| :----------- | :----------------------- |
| parseFloat() | 解析字符串并返回浮点数。 |
| parseInt()   | 解析字符串并返回整数。   |

全局方法 `Number()` 也可把布尔转换为数字。

```js
Number(false)     // 返回 0
Number(true)      // 返回 1
```

把日期转换为数字。

```js
d = new Date();
Number(d)          "demo3">// 返回 1673749216683
```

日期方法 `getTime()` 同理。

```js
d = new Date();
d.getTime()        "demo4">// 返回 1673749216683
```

### 自动类型转换

如果 JavaScript 尝试操作一种“错误”的数据类型，它会试图将该值转换为“正确”的类型。

```js
5 + null    // 返回 5         因为 null 被转换为 0
"5" + null  // 返回 "5null"   因为 null 被转换为  "null"
"5" + 2     // 返回 52        因为 2 被转换为 "2"
"5" - 2     // 返回 3         因为 "5" 被转换为 5
"5" * "2"   // 返回 10        因为 "5" 和 "2" 被转换为 5 和 2
```

### 自动字符串转换

JavaScript 自动调用变量的 `toString()` 函数，当您试图“输出”对象或变量时：

```js
document.getElementById("demo").innerHTML = myVar;

// 如果 myVar = {name:"Fjohn"}  // toString 转换为 "[object Object]"
// 如果 myVar = [1,2,3,4]       // toString 转换为 "1,2,3,4"
// 如果 myVar = new Date()      // toString 转换为 "Sun Jan 15 2023 10:20:16 GMT+0800 (中国标准时间)"
```

数字和布尔也会被转换，但并不明显：

```js
// 如果 myVar = 123             // toString 转换为 "123"
// 如果 myVar = true            // toString 转换为 "true"
// 如果 myVar = false           // toString 转换为 "false"
```

### JavaScript 位运算符

| 运算符 | 名称         | 描述                                                     |
| :----- | :----------- | :------------------------------------------------------- |
| &      | AND          | 如果两位都是 1 则设置每位为 1                            |
| \|     | OR           | 如果两位之一为 1 则设置每位为 1                          |
| ^      | XOR          | 如果两位只有一位为 1 则设置每位为 1                      |
| ~      | NOT          | 反转所有位                                               |
| <<     | 零填充左位移 | 通过从右推入零向左位移，并使最左边的位脱落。             |
| >>     | 有符号右位移 | 通过从左推入最左位的拷贝来向右位移，并使最右边的位脱落。 |
| >>>    | 零填充右位移 | 通过从左推入零来向右位移，并使最右边的位脱落。           |

### JavaScript 使用 32 位按位运算数

JavaScript 将数字存储为 64 位浮点数，但所有按位运算都以 32 位二进制数执行。

在执行位运算之前，JavaScript 将数字转换为 32 位有符号整数。

执行按位操作后，结果将转换回 64 位 JavaScript 数。

### JavaScript 正则表达式

**正则表达式是构成搜索模式的字符序列。**

**该搜索模式可用于文本搜索和文本替换操作**

### 什么是正则表达式？

正则表达式是构成*搜索模式（search pattern）*的字符序列。

当您搜索文本中的数据时，您可使用搜索模式来描述您搜索的内容。

正则表达式可以是单字符，或者更复杂的模式。

正则表达式可用于执行所有类型的*文本搜索*和*文本替换*操作。

```js
/pattern/modifiers;
```

```js
var patt = /w3school/i;
```

### 正则表达式修饰符

*修饰符*可用于大小写不敏感的更全局的搜素：

| 修饰符 | 描述                                                     |
| :----- | :------------------------------------------------------- |
| i      | 执行对大小写不敏感的匹配。                               |
| g      | 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。 |
| m      | 执行多行匹配。                                           |

### 正则表达式模式

*括号*用于查找一定范围的字符串：

| 表达式 | 描述                       |
| :----- | :------------------------- |
| [abc]  | 查找方括号之间的任何字符。 |
| [0-9]  | 查找任何从 0 至 9 的数字。 |
| (x\|y) | 查找由 \| 分隔的任何选项。 |

*元字符（Metacharacter）*是拥有特殊含义的字符：

| 元字符 | 描述                                        |
| :----- | :------------------------------------------ |
| \d     | 查找数字。                                  |
| \s     | 查找空白字符。                              |
| \b     | 匹配单词边界。                              |
| \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。 |

*Quantifiers* 定义量词：

| 量词 | 描述                                |
| :--- | :---------------------------------- |
| n+   | 匹配任何包含至少一个 n 的字符串。   |
| n*   | 匹配任何包含零个或多个 n 的字符串。 |
| n?   | 匹配任何包含零个或一个 n 的字符串。 |

### 使用 test()

`test()` 是一个正则表达式方法。

它通过模式来搜索字符串，然后根据结果返回 true 或 false。

下面的例子搜索字符串中的字符 "e"：

```
var patt = /e/;
patt.test("The best things in life are free!"); 
```

由于字符串中有一个 "e"，以上代码的输出将是：

```
true
```

上面的两行可缩短为一行：

```
/e/.test("The best things in life are free!");
```

### 使用 exec()

`exec()` 方法是一个正则表达式方法。

它通过指定的模式（pattern）搜索字符串，并返回已找到的文本。

如果未找到匹配，则返回 null。

下面的例子搜索字符串中的字符 "e"：

```
/e/.exec("The best things in life are free!");
```

### JavaScript 错误 - Throw 和 Try to Catch

**`try` 语句使您能够测试代码块中的错误。**

**`catch` 语句允许您处理错误。**

**`throw` 语句允许您创建自定义错误。**

**`finally` 使您能够执行代码，在 try 和 catch 之后，无论结果如何。**

### JavaScript try 和 catch

`try` 语句允许您定义一个代码块，以便在执行时检测错误。

`catch` 语句允许你定义一个要执行的代码块，如果 try 代码块中发生错误。

JavaScript 语句 `try` 和 `catch` 成对出现：

```js
try {
     供测试的代码块
}
 catch(err) {
     处理错误的代码块
} 
```

当发生错误时，JavaScript 通常会停止并产生错误消息。

技术术语是这样描述的：*JavaScript 将抛出异常（抛出错误）*。

JavaScript 实际上会创建带有两个属性的 *Error 对象*：`name` 和 `message`。

```js
try { 
        if(x == "") throw "空的";
         if(isNaN(x)) throw "不是数字";
         x = Number(x);
        if(x < 5) throw  "太小";
        if(x > 10) throw "太大";
    }
    catch(err) {
        message.innerHTML = "输入是 " + err;
    }
```

以上代码仅仅是一个例子。

现代浏览器通常会结合 JavaScript 与内置的 HTML 验证，通过使用在 HTML 属性中定义的预定义的验证规则：

```html
<input id="demo" type="number" min="5" max="10" step="1">
```

### finally 语句

`finally` 语句允许您在 try 和 catch 之后执行代码，无论结果：

```js
try {
     // 供测试的代码块
}
 catch(err) {
     // 处理错误的代码块
} 
finally {
     // 无论结果如何都执行的代码块
}
```

### Error 对象属性

| 属性    | 描述                             |
| :------ | :------------------------------- |
| name    | 设置或返回错误名                 |
| message | 设置或返回错误消息（一条字符串） |

### Error Name Values

error 的 name 属性可返回六个不同的值：

| 错误名         | 描述                          |
| :------------- | :---------------------------- |
| EvalError      | 已在 eval() 函数中发生的错误  |
| RangeError     | 已发生超出数字范围的错误      |
| ReferenceError | 已发生非法引用                |
| SyntaxError    | 已发生语法错误                |
| TypeError      | 已发生类型错误                |
| URIError       | 在 encodeURI() 中已发生的错误 |

### 自动全局

如果您为尚未声明的变量赋值，此变量会自动成为*全局*变量。

这段代码将声明一个全局变量 carName，即使在函数内进行了赋值。

```js
myFunction();


// 此处的代码能够使用 carName 变量

function myFunction() {
    carName = "porsche";
}
```

所有现代浏览器都支持以“严格模式”运行 JavaScript。

在“严格模式”中不会自动创建全局变量。

### HTML 中的全局变量

通过 JavaScript，全局作用域形成了完整的 JavaScript 环境。

在 HTML 中，全局作用域是 window。所有全局变量均属于 window 对象。

```js
var carName = "porsche";

// 此处的代码能够使用 window.carName
```

### JavaScript Hoisting

**提升（Hoisting）是 JavaScript 将声明移至顶部的默认行为**

在 JavaScript 中，可以在使用变量之后对其进行声明。

换句话说，可以在声明变量之前使用它。

用 `let` 或 `const` 声明的变量和常量不会被提升！

JavaScript 只提升声明，而非初始化。

### JavaScript 严格模式

**`"use strict";` 定义 JavaScript 代码应该以“严格模式”执行**

在脚本开头进行声明，拥有全局作用域（脚本中的所有代码均以严格模式来执行）

在函数中声明严格模式，拥有局部作用域（只有函数中的代码以严格模式执行）

## 严格模式中不允许的事项

在不声明变量的情况下使用变量，是不允许的

在不声明对象的情况下使用对象也是不允许的

删除变量（或对象）是不允许的：

```js
"use strict";
var x = 3.14;
delete x;                // 这将引发错误
```

删除函数是不允许的

重复参数名是不允许的

八进制数值文本是不允许的

转义字符是不允许的

写入只读属性是不允许的

删除不可删除的属性是不允许的

字符串 "eval" "arguments" 不可用作变量

`with` 语句是不允许的：

```js
"use strict";
with (Math){x = cos(2)}; // 这将引发错误
```

处于安全考虑，不允许 `eval()` 在其被调用的作用域中创建变量：

```js
"use strict";
eval ("var x = 2");
alert (x);               // 这将引发错误
```

### JavaScript this 关键词

## this 是什么？

JavaScript `this` 关键词指的是它所属的对象。

它拥有不同的值，具体取决于它的使用位置：

- 在方法中，`this` 指的是所有者对象。
- 单独的情况下，`this` 指的是全局对象。
- 在函数中，`this` 指的是全局对象。
- 在函数中，严格模式下，`this` 是 undefined。
- 在事件中，`this` 指的是接收事件的元素。

像 `call()` 和 `apply()` 这样的方法可以将 this 引用到任何对象。

### 单独的 this

在单独使用时，拥有者是全局对象，因此 `this` 指的是全局对象。

在浏览器窗口中，全局对象是 `[object Window]`：

```js
var x = this;
```

### 函数中的 this（默认）

在 JavaScript 函数中，函数的拥有者默认绑定 `this`。

因此，在函数中，`this` 指的是全局对象 `[object Window]`。

JavaScript 严格模式不允许默认绑定。

因此，在函数中使用时，在严格模式下，`this` 是未定义的（`undefined`）

### 事件处理程序中的 this

在 HTML 事件处理程序中，`this` 指的是接收此事件的 HTML 元素：

```js
<button onclick="this.style.display='none'">
  点击来删除我！
</button>
```

### 对象方法绑定

在此例中，`this` 是 person 对象（person 对象是该函数的“拥有者”）：

```js
var person = {
  firstName  : "Bill",
  lastName   : "Gates",
  id         : 678,
  myFunction : function() {
    return this;
  }
};
```

### 显式函数绑定(Question)

`call()` 和 `apply()` 方法是预定义的 JavaScript 方法。

它们都可以用于将另一个对象作为参数调用对象方法。

您可以在本教程后面阅读有关 `call()` 和 `apply()` 的更多内容。

在下面的例子中，当使用 person2 作为参数调用 person1.fullName 时，`this` 将引用 person2，即使它是 person1 的方法：

```js
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"Bill",
  lastName: "Gates",
}
person1.fullName.call(person2);  // 会返回 "Bill Gates"
```

