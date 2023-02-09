## 20230116 JavaScript对象

在 JavaScript 中，几乎“所有事物”都是对象。

- 布尔是对象（如果用 *new* 关键词定义）
- 数字是对象（如果用 *new* 关键词定义）
- 字符串是对象（如果用 *new* 关键词定义）
- 日期永远都是对象
- 算术永远都是对象
- 正则表达式永远都是对象
- 数组永远都是对象
- 函数永远都是对象
- 对象永远都是对象

所有 JavaScript 值，除了原始值，都是对象。

**对象是包含变量的变量**

值按照*名称 : 值*对的形式编写（名称和值以冒号分隔）。

创建对象：

- 定义和创建单个对象，使用对象文字。
- 定义和创建单个对象，通过关键词 new。
- 定义对象构造器，然后创建构造类型的对象。

在 ECMAScript5 中，也可以通过函数 `Object.create()` 来创建对象

### 使用对象字面量

这是创建对象最简答的方法  对象文字指的是花括号 `{}` 中的名称:值对（比如 age: 62）。

### 使用 JavaScript 关键词 new

下面的例子也创建了带有四个属性的新的 JavaScript 对象：

```js
var person = new Object();
person.firstName = "Bill";
person.lastName = "Gates";
person.age = 50;
person.eyeColor = "blue"; 
```

上面的两个例子结果是一样的。无需使用 `new Object()`。

出于简易性、可读性和执行速度的考虑，请使用第一种创建方法（对象文字方法）

### JavaScript 对象是易变的

对象是易变的：它们通过引用来寻址，而非值。

如果 person 是一个对象，下面的语句不会创建 person 的副本：

```js
var x = person;  // 这不会创建 person 的副本。
```

对象 x *并非* person 的副本。它*就是* person。x 和 person 是同一个对象。

对 x 的任何改变都将改变 person，因为 x 和 person 是相同的对象。

```js
var person = {firstName:"Bill", lastName:"Gates", age:62, eyeColor:"blue"}
 
var x = person;
x.age = 10;           // 这将同时改变 both x.age 和 person.age
```

**注释：**JavaScript 变量不是易变的。只有 JavaScript 对象如此。

### JavaScript 对象属性

**属性是任何 JavaScript 对象最重要的部分。**

属性指的是与 JavaScript 对象相关的值。

JavaScript 对象是无序属性的集合。

属性通常可以被修改、添加和删除，但是某些属性是只读的。

访问对象属性的语法是：

```js
objectName.property           // person.age
```

或者：

```js
objectName["property"]       // person["age"]
```

或者：

```js
objectName[expression]       // x = "age"; person[x]
```

JavaScript `for...in` 语句遍历对象的属性。

```js
for (variable in object) {
    要执行的代码
}
```

`for...in` 循环中的代码块会为每个属性执行一次。

### 添加新属性

您可以通过简单的赋值，向已存在的对象添加新属性。

假设 person 对象已存在 - 那么您可以为其添加新属性：

```js
person.nationality = "English";
```

### 删除属性

`delete` 关键词从对象中删除属性：

```js
var person = {firstName:"Bill", lastName:"Gates", age:62, eyeColor:"blue"};
delete person.age;   // 或 delete person["age"];
```

`delete` 关键词会同时删除属性的值和属性本身。

删除完成后，属性在被添加回来之前是无法使用的。

`delete` 操作符被设计用于对象属性。它对变量或函数没有影响。

`delete` 操作符不应被用于预定义的 JavaScript 对象属性。这样做会使应用程序崩溃。

`delete` 关键词不会删除被继承的属性，但是如果您删除了某个原型属性，则将影响到所有从原型继承的对象。

## 访问对象方法

请使用如下语法创建对象方法：

```
methodName : function() { 代码行 }
```

请通过如下语法来访问对象方法：

```
objectName.methodName()
```

## 添加新的方法

向对象添加方法是在构造器函数内部完成的：

### 实例

```
function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}
```

changeName() 函数 name 的值赋给了 person 的 lastName 属性。

### JavaScript 显示对象

显示 JavaScript 对象的一些常见解决方案是：

- 按名称显示对象属性
- 循环显示对象属性
- 使用 Object.values() 显示对象
- 使用 JSON.stringify() 显示对象

对象的属性可显示为字符串

```js
document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;
```

可以在循环中收集对象的属性：

### 实例

```js
const person = {
  name: "Bill",
  age: 19,
  city: "Seattle"
};

let txt = "";
for (let x in person) {
txt += person[x] + " ";
};

document.getElementById("demo").innerHTML = txt;
```

必须在循环中使用 person[x]。

person.x 将不起作用（因为 x 是一个变量）。

通过使用 `Object.values()`，任何 JavaScript 对象都可以被转换为数组

```
const myArray = Object.values(person);
```

`myArray` 现在是 JavaScript 数组，可以显示了：

任何 JavaScript 对象都可以使用 JavaScript 函数 `JSON.stringify()` 进行字符串化（转换为字符串）

```
let myString = JSON.stringify(person);
```

`myString` 现在是 JavaScript 字符串，可以显示了

结果将是一个遵循 JSON 标记法的字符串：

```json
{"name":"Bill","age":19,"city":"Seattle"}
```

`JSON.stringify` 将日期转换为字符串

`JSON.stringify` 不会对函数进行字符串化

`JSON.stringify` 也可以对 JavaScript 数组进行字符串化

### JavaScript 对象访问器

ECMAScript 5 (2009) 引入了 Getter 和 Setter。

Getter 和 Setter 允许您定义对象访问器（被计算的属性）

**为什么使用 Getter 和 Setter？**

- 它提供了更简洁的语法
- 它允许属性和方法的语法相同
- 它可以确保更好的数据质量
- 有利于后台工作

### JavaScript 对象构造器



