## 20230111JavaScript

### 请不要把字符串、数值和布尔值声明为对象！

如果通过关键词 "new" 来声明 JavaScript 变量，则该变量会被创建为对象：

```javascript
var x = new String();        // 把 x 声明为 String 对象
var y = new Number();        // 把 y 声明为 Number 对象
var z = new Boolean();       //	把 z 声明为 Boolean 对象
```

请避免字符串、数值或逻辑对象。他们会增加代码的复杂性并降低执行速度。

### JS事件

通常，当事件发生时，用户会希望做某件事。

JavaScript 允许您在事件被侦测到时执行代码。

*通过 JavaScript 代码*，HTML 允许您向 HTML 元素添加事件处理程序。

使用单引号：

```javascript
<element event='一些 JavaScript'>
```

使用双引号：

```javascript
<element event="一些 JavaScript">
```

JavaScript 代码通常有很多行。事件属性调用函数更为常见：

```javascript
<button onclick="displayDate()">现在的时间是？</button>
```

### 常见的 HTML 事件

下面是一些常见的 HTML 事件：

| 事件        | 描述                         |
| :---------- | :--------------------------- |
| onchange    | HTML 元素已被改变            |
| onclick     | 用户点击了 HTML 元素         |
| onmouseover | 用户把鼠标移动到 HTML 元素上 |
| onmouseout  | 用户把鼠标移开 HTML 元素     |
| onkeydown   | 用户按下键盘按键             |
| onload      | 浏览器已经完成页面加载       |

**JavaScript 字符串用于存储和操作文本。**

### 字符串长度

内建属性 `length` 可返回字符串的*长度*：

```javascript
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
```

### 特殊字符

反斜杠转义字符把特殊字符转换为字符串字符：

| 代码 | 结果 | 描述   |
| :--- | :--- | :----- |
| \'   | '    | 单引号 |
| \"   | "    | 双引号 |
| \\   | \    | 反斜杠 |

序列 `\"` 在字符串中插入双引号：

```javascript
var x = "中国是瓷器的故乡，因此 china 与\"China（中国）\"同名。"
```

其他六个 JavaScript 中有效的转义序列：

| 代码 | 结果       |
| :--- | :--------- |
| \b   | 退格键     |
| \f   | 换页       |
| \n   | 新行       |
| \r   | 回车       |
| \t   | 水平制表符 |
| \v   | 垂直制表符 |

这六个转义字符最初设计用于控制打字机、电传打字机和传真机。它们在 HTML 中没有任何意义。

### 长代码行换行

为了最佳可读性， 程序员们通常会避免每行代码超过 80 个字符串。

如果某条 JavaScript 语句不适合一整行，那么最佳换行位置是某个运算符之后：

```javascript
document.getElementById("demo").innerHTML =
"Hello Kitty.";
```

也可以*在字符串中*换行，通过一个反斜杠即可：

```javascript
document.getElementById("demo").innerHTML = "Hello \
Kitty!";
```

`\` 方法并不是 ECMAScript (JavaScript) 标准。

某些浏览器也不允许 `\` 字符之后的空格。

对长字符串换行的最安全做法（但是有点慢）是使用字符串加法：

```javascript
document.getElementById("demo").innerHTML = "Hello" + 
"Kitty!";
```

不能通过反斜杠对代码行进行换行：

```javascript
document.getElementById("demo").innerHTML = \ 
"Hello Kitty!";
```

`new` 关键字使代码复杂化。也可能产生一些意想不到的结果：

当使用 `==` 相等运算符时，相等字符串是相等的

当使用 `===` 运算符时，相等字符串是不相等的，因为 `===` 运算符需要类型和值同时相等。

JavaScript 对象无法进行对比，比较两个 JavaScript 将始终返回 `false`

### JavaScript 字符串方法

**字符串方法帮助您处理字符串**

### 查找字符串中的字符串

`indexOf()` 方法返回字符串中指定文本*首次*出现的索引（位置）：

```javascript
var str = "The full name of China is the People's Republic of China.";
var pos = str.indexOf("China");
```

JavaScript 从零计算位置。

0 是字符串中的第一个位置，1 是第二个，2 是第三个 ...

`lastIndexOf()` 方法返回指定文本在字符串中*最后*一次出现的索引：

```javascript
var str = "The full name of China is the People's Republic of China.";
var pos = str.lastIndexOf("China");
```

如果未找到文本， `indexOf()` 和 `lastIndexOf()` 均返回 -1。

两种方法都接受作为检索起始位置的第二个参数。

### 检索字符串中的字符串

`search()` 方法搜索特定值的字符串，并返回匹配的位置：

```javascript
var str = "The full name of China is the People's Republic of China.";
var pos = str.search("locate");
```

### slice() 方法

`slice()` 提取字符串的某个部分并在新字符串中返回被提取的部分。

该方法设置两个参数：起始索引（开始位置），终止索引（结束位置）。

如果某个参数为负，则从字符串的结尾开始计数。

如果省略第二个参数，则该方法将裁剪字符串的剩余部分或者从结尾计数

### substring() 方法

`substring()` 类似于 `slice()`。

不同之处在于 `substring()` 无法接受负的索引。

如果省略第二个参数，则该 `substring()` 将裁剪字符串的剩余部分。

### substr() 方法

`substr()` 类似于 `slice()`。

不同之处在于第二个参数规定被提取部分的*长度*。

如果省略第二个参数，则该 substr() 将裁剪字符串的剩余部分。

如果首个参数为负，则从字符串的结尾计算位置。

第二个参数不能为负，因为它定义的是长度。

### 替换字符串内容

`replace()` 方法用另一个值替换在字符串中指定的值：

```javascript
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3School");
```

`replace()` 方法不会改变调用它的字符串。它返回的是新字符串。

默认地，`replace()` *只替换首个匹配*：

`replace()` 对大小写敏感

如需执行大小写不敏感的替换，请使用正则表达式 `/i`（大小写不敏感）：

```javascript
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3School");
```

请注意正则表达式不带引号。

如需替换所有匹配，请使用正则表达式的 `g` 标志（用于全局搜索）

### 转换为大写和小写

通过 `toUpperCase()` 把字符串转换为大写：

```javascript
var text1 = "Hello World!";       // 字符串
var text2 = text1.toUpperCase();  // text2 是被转换为大写的 text1
```

通过 `toLowerCase()` 把字符串转换为小写

## concat() 方法

`concat()` 连接两个或多个字符串：

```javascript
var text1 = "Hello";
var text2 = "World";
text3 = text1.concat(" ",text2);
```

`concat()` 方法可用于代替加运算符。下面两行是等效的：

```javascript
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ","World!");
```

所有字符串方法都会返回新字符串。它们不会修改原始字符串。

正式地说：字符串是不可变的：字符串不能更改，只能替换。

### 警告！！

JavaScript 的加法和级联（concatenation）都使用 + 运算符。

数字用加法。字符串用级联。

### 数字字符串

JavaScript 字符串可以拥有数字内容：

```javascript
var x = 100;         // x 是数字

var y = "100";       // y 是字符串
```

在所有数字运算中，JavaScript 会尝试将字符串转换为数字：

该例如此运行：(减乘除都如此)

```javascript
var x = "100";
var y = "10";
var z = x / y;       // z 将是 10
```

JavaScript 用 + 运算符对字符串进行了级联

### NaN - 非数值

`NaN` 属于 JavaScript 保留词，指示某个数不是合法数。

尝试用一个非数字字符串进行除法会得到 NaN（Not a Number）：

```js
var x = 100 / "Apple";  // x 将是 NaN（Not a Number）
```

不过，假如字符串包含数值，则结果将是数

可使用全局 JavaScript 函数 `isNaN()` 来确定某个值是否是数：

```js
var x = 100 / "Apple";
isNaN(x);               // 返回 true，因为 x 不是数
```

要小心 `NaN`。假如您在数学运算中使用了 `NaN`，则结果也将是 `NaN`

结果也许是串连接(string)

```markdown
NaN 是数，typeof NaN 返回 number
```

JavaScript 会把前缀为 `0x` 的数值常量解释为十六进制

绝不要用前导零写数字（比如 07）。

一些 JavaScript 版本会把带有前导零的数解释为八进制。

默认地，Javascript 把数显示为十进制小数。

但是您能够使用 `toString()` 方法把数输出为十六进制、八进制或二进制。

```javascript
var myNumber = 128;
myNumber.toString(16);     // 返回 80
myNumber.toString(8);      // 返回 200
myNumber.toString(2);      // 返回 10000000
```

### Infinity

`Infinity` （或 `-Infinity`）是 JavaScript 在计算数时超出最大可能数范围时返回的值

```markdown
Infinity` 是数：`typeOf Infinity` 返回 `number
```