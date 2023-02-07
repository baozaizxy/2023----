## 20230113 JavaScript

JavaScript 数组经常会包含对象：

```js
var cars = [
{type:"Volvo", year:2016},
{type:"Saab", year:2001},
{type:"BMW", year:2010}];
```

即使对象拥有不同数据类型的属性，`sort()` 方法仍可用于对数组进行排序。

解决方法是通过比较函数来对比属性值：

```js
cars.sort(function(a, b){return a.year - b.year});
```

### 数组迭代

**数组迭代方法对每个数组项进行操作。**

### Array.forEach()

`forEach()` 方法为每个数组元素调用一次函数（回调函数）

```js
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br"; 
}
```

**注释：**该函数接受 3 个参数：

- 项目值
- 项目索引
- 数组本身

### Array.map()

`map()` 方法通过对每个数组元素执行函数来创建新数组。

`map()` 方法不会对没有值的数组元素执行函数。

`map()` 方法不会更改原始数组。

```js
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
```

### Array.indexOf()

`indexOf()` 方法在数组中搜索元素值并返回其位置。

```js
array.indexOf(item, start)
```

| *item*  | 必需。要检索的项目。                                         |
| ------- | ------------------------------------------------------------ |
| *start* | 可选。从哪里开始搜索。负值将从结尾开始的给定位置开始，并搜索到结尾。 |

如果未找到项目，`Array.indexOf()` 返回 -1。

如果项目多次出现，则返回第一次出现的位置。

### const

用 `const` 声明的数组不能重新赋值：

```js
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```

### 数组不是常量

关键字 `const` 有一定误导性。

它不定义常量数组。它定义的是对数组的常量引用。

因此，我们仍然可以更改常量数组的元素

```js
// 您可以创建常量数组：
const cars = ["Saab", "Volvo", "BMW"];

// 您可以更改元素：
cars[0] = "Toyota";

// 您可以添加元素：
cars.push("Audi");
```

**JavaScript `const` 变量在声明时必须赋值**

不起作用：

```js
const cars;
cars = ["Saab", "Volvo", "BMW"];
```

用 `const` 声明的数组具有*块作用域*。在块中声明的数组与在块外声明的数组不同

用 `var` 声明的数组没有块作用域

### JavaScript 日期输出

默认情况下，JavaScript 将使用浏览器的时区并将日期显示为全文本字符串：

```js
Tue Apr 02 2019 09:01:19 GMT+0800 (中国标准时间)
```

### 创建 Date 对象

Date 对象由新的 `Date()` 构造函数创建。

有 4 种方法创建新的日期对象：

- new Date()
- new Date(year, month, day, hours, minutes, seconds, milliseconds)
- new Date(milliseconds)
- new Date(date string)

### JavaScript 数学

**JavaScript Math 对象允许您对数字执行数学任务。**

### Math 对象方法

| 方法             | 描述                                                     |
| :--------------- | :------------------------------------------------------- |
| abs(x)           | 返回 x 的绝对值                                          |
| acos(x)          | 返回 x 的反余弦值，以弧度计                              |
| asin(x)          | 返回 x 的反正弦值，以弧度计                              |
| atan(x)          | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。 |
| atan2(y,x)       | 返回从 x 轴到点 (x,y) 的角度                             |
| ceil(x)          | 对 x 进行上舍入                                          |
| cos(x)           | 返回 x 的余弦                                            |
| exp(x)           | 返回 Ex 的值                                             |
| floor(x)         | 对 x 进行下舍入                                          |
| log(x)           | 返回 x 的自然对数（底为e）                               |
| max(x,y,z,...,n) | 返回最高值                                               |
| min(x,y,z,...,n) | 返回最低值                                               |
| pow(x,y)         | 返回 x 的 y 次幂                                         |
| random()         | 返回 0 ~ 1 之间的随机数                                  |
| round(x)         | 把 x 四舍五入为最接近的整数                              |
| sin(x)           | 返回 x（x 以角度计）的正弦                               |
| sqrt(x)          | 返回 x 的平方根                                          |
| tan(x)           | 返回角的正切                                             |

### Math.random()

`Math.random()` 返回介于 0（包括） 与 1（不包括） 之间的随机数

`Math.random()` 与 `Math.floor()` 一起使用用于返回随机整数。

```js
Math.floor(Math.random() * 10);		// 返回 0 至 9 之间的数
Math.floor(Math.random() * 11);		// 返回 0 至 10 之间的数
Math.floor(Math.random() * 100);	// 返回 0 至 99 之间的数
Math.floor(Math.random() * 101);	// 返回 0 至 100 之间的数
Math.floor(Math.random() * 10) + 1;	// 返回 1 至 10 之间的数
```

### 一个适当的随机函数

正如你从上面的例子看到的，创建一个随机函数用于生成所有随机整数是一个好主意。

这个 JavaScript 函数始终返回介于 `min`（包括）和 `max`（不包括）之间的随机数：

```js
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
```

**JavaScript 布尔（逻辑）代表两个值之一：`true` 或 `false`**

## 所有具有“真实”值的即为 True

```js
100

3.14

-15

"Hello"

"false"

7 + 1 + 3.14

5 < 6 
```

### 所有不具有“真实”值的即为 False

*0（零）*的布尔值为 *false*

*-0 （负零）*的布尔值为 *false*

*""（空值）*的布尔值为 *false*

*undefined* 的布尔值是 *false*

*null* 的布尔值是 *false*

*false* 的布尔值（正如您猜到的）是 *false*

*NaN* 的布尔值是 *false*

### 布尔可以是对象

通常 JavaScript 布尔是由字面量创建的原始值：

```js
var x = false
```

但是布尔也可以通过关键词 `new` 作为对象来定义：

```js
var y = new Boolean(false)
```

```js
var x = false;
var y = new Boolean(false);

// typeof x 返回 boolean
// typeof y 返回 object
```

| 运算符 | 描述                   |
| ------ | ---------------------- |
| ==     | 等于                   |
| ===    | 值相等并且类型相等     |
| ！=    | 不相等                 |
| ！==   | 值不相等或者类型不相等 |

| 运算符 | 描述 | 例子                          |
| :----- | :--- | :---------------------------- |
| &&     | 与   | (x < 10 && y > 1) 为 true     |
| \|\|   | 或   | (x == 5 \|\| y == 5) 为 false |
| !      | 非   | !(x == y) 为 true             |

### 条件（三元）运算符

JavaScript 也包含了可基于某些条件向变量赋值的条件运算符。

### 语法

```js
variablename = (condition) ? value1:value2
```

### 比较不同的类型

比较不同类型的数据也许会出现不可预料的结果。

如果将字符串与数字进行比较，那么在做比较时 JavaScript 会把字符串转换为数值。空字符串将被转换为 0。非数值字符串将被转换为始终为 `false` 的 `NaN`

为了确保正确的结果，在比较值前应该把变量转换为合适的类型：

```js
age = Number(age);
if (isNaN(age)) {
    voteable = "输入错误";
} else {
    voteable = (age < 18) ? "太年轻" : "足够成熟";
} 
```

getDay() 方法返回 0 至 6 之间的周名数字（weekday number）。

(Sunday=0, Monday=1, Tuesday=2 ..)

### break 关键词

如果 JavaScript 遇到 `break` 关键词，它会跳出 switch 代码块。

此举将停止代码块中更多代码的执行以及 case 测试。

如果找到匹配，并完成任务，则随机中断执行（break）。无需更多测试。

`break` 能够节省大量执行时间，因为它会“忽略” switch 代码块中的其他代码的执行。

不必中断 switch 代码块中的最后一个 case。代码块在此处会自然结束。

### default 关键词

`default` 关键词规定不存在 case 匹配时所运行的代码

如果 `default` 不是 switch 代码块中最后一个 case，请记得用 break 结束默认 case

有时您会需要不同的 case 来使用相同的代码

### 不同类型的循环

JavaScript 支持不同类型的循环：

- `for` - 多次遍历代码块
- `for/in` - 遍历对象属性
- `while` - 当指定条件为 true 时循环一段代码块
- `do/while` - 当指定条件为 true 时循环一段代码块

### For In 循环

JavaScript `for in` 语句循环遍历对象的属性：

```js
for (key in object) {
  // code block to be executed
}
```

### Continue 语句

`continue 语句`中断（循环中）的一个迭代，如果发生指定的条件。然后继续循环中的下一个迭代。

本例跳过值 3 ：

```js
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "数字是 " + i + "<br>";
} 
```

`break` 和 `continue` 语句是仅有的可“跳出”代码块的 JavaScript 语句。

### 语法：

```
break labelname;

continue labelname;
```

`continue` 语句（不论有无标签引用）只能用于*跳过一个迭代*。

`break` 语句，如果没有标签引用，只能用于*跳出一个循环或一个 switch*。

如果有标签引用，则 `break` 语句可用于*跳出任意代码块*：

```js
var  cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
    text += cars[0] + "<br>"; 
    text += cars[1] + "<br>"; 
    text += cars[2] + "<br>"; 
    break list;
    text += cars[3] + "<br>"; 
    text += cars[4] + "<br>"; 
    text += cars[5] + "<br>"; 
}
```

**注意**：

- NaN 的数据类型是数字
- 数组的数据类型是对象
- 日期的数据类型是对象
- null 的数据类型是 object
- 未定义变量的数据类型为 *undefined* *
- 未赋值的变量的数据类型也是 *undefined* *

无法使用 `typeof` 来确定 JavaScript 对象是否是数组（或日期