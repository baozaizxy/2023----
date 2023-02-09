## 20230110

JavaScript以分号结束语句不是必须的&会忽略多个空格

- | 关键词        | 描述                                              |
  | :------------ | :------------------------------------------------ |
  | break         | 终止 switch 或循环。                              |
  | continue      | 跳出循环并在顶端开始。                            |
  | debugger      | 停止执行 JavaScript，并调用调试函数（如果可用）。 |
  | do ... while  | 执行语句块，并在条件为真时重复代码块。            |
  | for           | 标记需被执行的语句块，只要条件为真。              |
  | function      | 声明函数。                                        |
  | if ... else   | 标记需被执行的语句块，根据某个条件。              |
  | return        | 退出函数。                                        |
  | switch        | 标记需被执行的语句块，根据不同的情况。            |
  | try ... catch | 对语句块实现错误处理。                            |
  | var           | 声明变量。                                        |

JavaScript两种值：混合值（字面量literal）和变量值

混合值数值有无小数点均可

标识符用于命名变量（以及关键词、函数和标签），首字符必须是字母、下划线（_）或者美元符（$）

JavaScript大小写敏感

JavaScript 程序员倾向于使用以小写字母开头的驼峰大小写firstName

所有 JavaScript *变量*必须以*唯一的名称*的*标识*。这些唯一的名称称为*标识符*。

构造变量名称（唯一标识符）的通用规则是：

- 名称可包含字母、数字、下划线和美元符号
- 名称必须以字母开头
- 名称也可以 `$` 和 `_` 开头（但是在本教程中我们不会这么做）
- 名称对大小写敏感（y 和 Y 是不同的变量）
- 保留字（比如 JavaScript 的关键词）无法用作变量名称

可以在一条语句中声明许多变量。

以 `var` 作为语句的开头，并以*逗号*分隔变量：

```javascript
var person = "Bill Gates", carName = "porsche", price = 15000;
```

未被赋值的变量，其值是undefined

## ECMAScript 2015

ES2015 引入了两个重要的 JavaScript 新关键词：`let` 和 `const`。

这两个关键字在 JavaScript 中提供了块作用域（*Block Scope*）变量（和常量）。

在 ES2015 之前，JavaScript 只有两种类型的作用域：*全局作用域*和*函数作用域*。

通过 `var` 关键词声明的变量没有块*作用域*。

在块 *{}* 内声明的变量可以从块之外进行访问。

```javascript
{ 
  var x = 10; 
}
// 此处可以使用 x
```

在 ES2015 之前，JavaScript 是没有块作用域的。

可以使用 `let` 关键词声明拥有块作用域的变量。

在块 *{}* 内声明的变量无法从块外访问：

```javascript
{ 
  let x = 10;
}
// 此处不可以使用 x
```

使用 JavaScript 的情况下，全局作用域是 JavaScript 环境。

在 HTML 中，全局作用域是 window 对象。

通过 `var` 关键词定义的全局变量属于 window 对象：

```javascript
var carName = "porsche";
// 此处的代码可使用 window.carName
```

通过 `let` 关键词定义的全局变量不属于 window 对象：

```javascript
let carName = "porsche";
// 此处的代码不可使用 window.carName
```

## JavaScript 类型运算符

| 运算符     | 描述                                  |
| :--------- | :------------------------------------ |
| typeof     | 返回变量的类型。                      |
| instanceof | 返回 true，如果对象是对象类型的实例。 |

## 幂

取幂运算符（**）将第一个操作数提升到第二个操作数的幂。

```javascript
var x = 5;
var z = x ** 2;          // 结果是 25
```

```javascript
var x = 5;
var z = Math.pow(x,2);   // 结果是 25
```

yield暂停函数

## JavaScript 数据类型

##### 字符串值，数值，布尔值，数组，对象。

JavaScript 从左向右计算表达式。不同的次序会产生不同的结果

JavaScript 拥有动态类型。这意味着相同变量可用作不同类型

```javascript
var x;               // 现在 x 是 undefined
var x = 7;           // 现在 x 是数值
var x = "Bill";      // 现在 x 是字符串值
```

## JavaScript 布尔值

布尔值只有两个值：`true` 或 `false`。

```javascript
var x = true;
var y = false;
```

布尔值经常用在条件测试中。

typeof 运算符对数组返回 "object"，因为在 JavaScript 中数组属于对象。

## Null

在 JavaScript 中，`null` 是 "nothing"。它被看做不存在的事物。

不幸的是，在 JavaScript 中，`null` 的数据类型是对象。

可以把 `null` 在 JavaScript 中是对象理解为一个 bug。它本应是 `null`。

可以通过设置值为 `null` 清空对象

也可以通过设置值为 `undefined` 清空对象

## 原始数据

原始数据值是一种没有额外属性和方法的单一简单数据值。

`typeof` 运算符可返回以下原始类型之一：

- string
- number
- boolean
- undefined

## 复杂数据

`typeof` 运算符可返回以下两种类型之一：

- function
- object

`typeof` 运算符把对象、数组或 `null` 返回 `object`。

`typeof` 运算符不会把函数返回 `object`。

`typeof` 运算符把数组返回为 "`object`"，因为在 JavaScript 中数组即对象。

函数名可包含字母、数字、下划线和美元符号（规则与变量名相同）。

圆括号可包括由逗号分隔的参数：

```javascript
(参数 1, 参数 2, ...)
```

###### 函数参数（Function parameters）是在函数定义中所列的名称。

###### 函数参数（Function arguments）是当调用函数时由函数接收的真实的值。

在函数中，参数是局部变量。

在其他编程语言中，函数近似程序（Procedure）或子程序（Subroutine）。

## () 运算符调用函数

使用上面的例子，`toCelsius` 引用的是函数对象，而 `toCelsius()` 引用的是函数结果。

访问没有 () 的函数将返回函数定义：

```javascript
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

document.getElementById("demo").innerHTML = toCelsius;
```

全局window对象

## 访问对象属性

能够以两种方式访问属性（property）：

```javascript
objectName.propertyName
```

或者

```javascript
objectName["propertyName"]
```

## 访问对象方法

您能够通过如下语法访问对象方法：

```javascript
objectName.methodName()
```

```javascript
name = person.fullName();
```

如果您*不使用 ()* 访问 fullName 方法，则将返回*函数定义*：

```javascript
name = person.fullName;
```

方法实际上是以属性值的形式存储的函数定义。

## 请不要把字符串、数值和布尔值声明为对象！

如果通过关键词 "new" 来声明 JavaScript 变量，则该变量会被创建为对象：

```
var x = new String();        // 把 x 声明为 String 对象
var y = new Number();        // 把 y 声明为 Number 对象
var z = new Boolean();       //	把 z 声明为 Boolean 对象
```

请避免字符串、数值或逻辑对象。他们会增加代码的复杂性并降低执行速度。