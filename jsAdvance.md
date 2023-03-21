# jsAdvance

#### 原型prototype

1. 函数的prototype属性(图)

 \* 每个函数都有一个prototype属性, 它默认指向一个Object空对象(没有我们的属性)(即称为: 原型对象)

prototype属性是引用变量属性  指向对象（原型对象）

  **原型对象上的方法是给实例对象使用的**

 \* 原型对象中有一个属性constructor, 它指向函数对象

构造函数和原型对象相互引用

2. 给原型对象添加属性(一般都是方法)

 \* 作用: 函数的所有实例对象自动拥有原型中的属性(方法)

**如果B函数的显式原型对象在A对象的原型链上, 返回true, 否则返回false**

B走一步 A可以走N多步

###### 所有函数的原型对象默认都是object的实例 （Object除外 Object是Function的实例）

```
new实例的时候产生__proto__  在此时声明this.__proto__ = Fn.prototype（传递地址值）
```

Function是new自己形成的，因此

```js
Function.__proto__ = Function.prototype
```

**明白创建函数时执行什么语句 创建实例对象时又执行什么语句**

显示原型属性先于隐式原型属性产生 因为要先产生函数 然后根据函数new出来实例

constructor用来找爹的

原型链用来查找实例对象的属性，是一条由隐式原型组成的链

JS是基于原型的继承 又可以说JS是基于对象的继承（像java是基于类的继承）



实参的个数如果多于形参的个数，可以通过arguments访问

arguments只有length 转化为数组的方法：

```js
function argText(a,b,c){
    var actual = arguments.length;   //实际传参个数
    var hope = argText.length   //期望传参个数
    console.log(actual,hope);
    //转换数组：
    var args = [].slice.call(arguments);   //第一种
    var args = Array.prototype.slice.call(arguments);   //第二种
    let args = Array.from(arguments);   //第三种
    let args = [...arguments];   //第四种
    console.log(args)
}
argText(1,2)
//输出: 2 3   

```

