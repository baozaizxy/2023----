## 20230112JavaScript

### String.match()

match() 方法根据正则表达式在字符串中搜索匹配项，并将匹配项作为 Array 对象返回。

在字符串中搜索 "ain"：

```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g)    // 返回数组 [ain,ain,ain]
```

如果正则表达式不包含 g 修饰符（执行全局搜索），match() 方法将只返回字符串中的第一个匹配项。

对 "ain" 执行不区分大小写的全局搜索：

```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi)   // 返回数组 [ain,AIN,ain,ain]
```

### String.includes()

如果字符串包含指定值，`includes()` 方法返回 true。

```js
let text = "Hello world, welcome to the universe.";
text.includes("world")    // 返回 true
```

**语法**

```
string.includes(searchvalue, start)
```

| *searchvalue* | 必需。需要搜索的字符串。                            |
| ------------- | --------------------------------------------------- |
| *start*       | 可选。默认为 0. 开始搜索的位置。                    |
| 返回：        | 如果字符串包含该值则返回 `true`，否则返回 `false`。 |
| JS 版本：     | ES6 (2015)                                          |

### String.startsWith() & String.endsWith()

如果字符串以指定值开头，则 `startsWith()` 方法返回 `true`，否则返回 `false`

**语法**

```js
string.startsWith(searchvalue, start)
```

**参数值**

| 参数          | 描述                           |
| :------------ | :----------------------------- |
| *searchvalue* | 必需。需要搜索的值。           |
| *start*       | 可选。默认为 0。开始搜索的位置 |

### JavaScript 数字

**JavaScript 数值始终是 64 位的浮点数**

与许多其他编程语言不同，JavaScript 不会定义不同类型的数，比如整数、短的、长的、浮点的等等。

JavaScript 数值始终以双精度浮点数来存储

| 值(aka Fraction/Mantissa) | 指数              | 符号       |
| :------------------------ | :---------------- | :--------- |
| 52 bits(0 - 51)           | 11 bits (52 - 62) | 1 bit (63) |

### 精度

整数（不使用指数或科学计数法）会被精确到 15 位。

```js
var x = 999999999999999;   // x 将是 999999999999999
var y = 9999999999999999;  // y 将是 10000000000000000
```

小数的最大数是 17 位，但是浮点的算数并不总是 100% 精准：

```js
var x = 0.2 + 0.1;         // x 将是 0.30000000000000004
```

使用乘除法有助于解决上面的问题：

```js
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x 将是 0.3
```

### JavaScript 数字方法

### toString() 方法

`toString()` 以字符串返回数值。

所有数字方法可用于任意类型的数字（字面量、变量或表达式）：

```js
var x = 123;
x.toString();            // 从变量 x 返回 123
(123).toString();        // 从文本 123 返回 123
(100 + 23).toString();   // 从表达式 100 + 23 返回 123
```

### toExponential() 方法

`toExponential()` 返回字符串值，它包含已被四舍五入并使用指数计数法的数字。

参数定义小数点后的字符数：

```javascript
var x = 9.656;
x.toExponential(2);     // 返回 9.66e+0
x.toExponential(4);     // 返回 9.6560e+0
x.toExponential(6);     // 返回 9.656000e+0
```

### toFixed() 方法

`toFixed()` 返回字符串值，它包含了指定位数小数的数字

**非常适合用来处理金钱**

### toPrecision() 方法

`toPrecision()` 返回字符串值，它包含了指定长度的数字

### valueOf() 方法

`valueOf()` 以数值返回数值

### 把变量转换为数值

这三种 JavaScript 方法可用于将变量转换为数字：

| 方法         | 描述                         |
| :----------- | :--------------------------- |
| Number()     | 返回数字，由其参数转换而来。 |
| parseFloat() | 解析其参数并返回浮点数。     |
| parseInt()   | 解析其参数并返回整数。       |

如果无法转换数字，则返回 `NaN`

`Number()` 还可以把日期转换为数字：

```js
Number(new Date("2019-04-15"));    // 返回 1506729600000
```

上面的 `Number()` 方法返回 1970 年 1 月 1 日至今的毫秒数。

### 数组

### 创建数组

使用数组文本是创建 JavaScript 数组最简单的方法。

```js
var array-name = [item1, item2, ...];
```

### 使用 JavaScript 关键词 new

下面的例子也会创建数组，并为其赋值：

```js
var cars = new Array("Saab", "Volvo", "BMW");
```

以上两个例子效果完全一样。无需使用 `new Array()`。

出于简洁、可读性和执行速度的考虑，请使用第一种方法（数组文本方法）

### 改变数组元素

这条语句修改了 cars 中第一个元素的值：

```js
cars[0] = "Opel";
```

### 数组是对象

数组是一种特殊类型的对象。在 JavaScript 中对数组使用 `typeof` 运算符会返回 "object"。

但是，JavaScript 数组最好以数组来描述。

数组使用*数字*来访问其“元素”,对象使用*名称*来访问其“成员”

JavaScript 变量可以是对象。数组是特殊类型的对象。

正因如此，您可以在相同数组中存放不同类型的变量。

您可以在数组保存对象。您可以在数组中保存函数。你甚至可以在数组中保存数组

### length 属性

`length` 属性返回数组的长度（数组元素的数目）。

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;                       // fruits 的长度是 4
```

很多编程元素支持命名索引的数组。

具有命名索引的数组被称为关联数组（或散列）。

JavaScript *不支持*命名索引的数组。

在 JavaScript 中，数组只能使用*数字索引*

### 警告！

假如您使用命名索引，JavaScript 会把数组重定义为标准对象。

之后，所有数组的方法和属性将产生非正确结果。

### 实例：

```js
var person = [];
person["firstName"] = "Bill";
person["lastName"] = "Gates";
person["age"] = 62;
var x = person.length;         // person.length 将返回 0
var y = person[0];              // person[0] 将返回 undefined
```

### 数组和对象的区别

在 JavaScript 中，*数组*使用*数字索引*。

在 JavaScript 中，*对象*使用*命名索引*。

数组是特殊类型的对象，具有数字索引。

JavaScript 运算符 `typeof` 返回 "`object`"：

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];

typeof fruits;             // 返回 object
```

为了解决这个问题，ECMAScript 5 定义了新方法 `Array.isArray()`：

```js
Array.isArray(fruits);     // 返回 true
```

### 位移元素

位移与弹出等同，但处理首个元素而不是最后一个。

`shift()` 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // 从 fruits 删除第一个元素 "Banana"
```

`shift()` 方法返回被“位移出”的字符串：

`unshift()` 方法（在开头）向数组添加新元素，并“反向位移”旧元素：

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // 向 fruits 添加新元素 "Lemon"
```

`unshift()` 方法返回新数组的长度。

### 删除元素

既然 JavaScript 数组属于对象，其中的元素就可以使用 JavaScript `delete` 运算符来*删除*：

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];           // 把 fruits 中的首个元素改为 undefined
```

使用 `delete` 会在数组留下未定义的空洞。请使用 `pop()` 或 `shift()` 取而代之