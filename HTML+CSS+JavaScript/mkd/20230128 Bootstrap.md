## 20230128 Bootstrap

只使用bootstrap样式不需要JQuery 使用Bootstrap插件的话 需要JQuery

一般要先引入JQuary再引入bootstrap

- Bootstrap 是一个免费的前端框架，用于更快、更轻松地进行 Web 开发
- Bootstrap 包括基于 HTML 和 CSS 的设计模板，用于排版、表单、按钮、表格、导航、模态、图像轮播等
- Bootstrap 提供了丰富的 JavaScript 插件
- Bootstrap 可使您能够轻松地创建响应式设计

Bootstrap 5 和 Bootstrap 3 & 4 的主要区别在于 Bootstrap 5 已经切换到 Vanilla JavaScript 而不是 jQuery。

**注释：**其团队仍然支持 Bootstrap 3 和 Bootstrap 4 的关键错误修复和文档更改，继续使用它们是完全安全的。但是不会向其中添加任何新特性。

### 使用bootstrap

#### 1. 添加 HTML5 文档类型

Bootstrap 5 使用的是需要 HTML5 doctype 的 HTML 元素和 CSS 属性。

请始终在页面开头包含 HTML5 doctype，以及 lang 属性和正确的标题、字符集：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Bootstrap 5 实例</title>
    <meta charset="utf-8">
  </head>
</html>
```

#### 2. Bootstrap 5 移动优先

Bootstrap 5 的设计目标是响应移动设备。移动优先的样式是核心框架的一部分。

为确保正确的渲染和触摸缩放，请在 `<head>` 元素内添加以下 `<meta>` 标记：

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

`width=device-width` 设置了页面的宽度以跟随设备的 screen-width（将因设备而异）。

`initial-scale=1` 设置了浏览器首次加载页面时的初始缩放级别。

#### 3. 容器

Bootstrap 5 还需要一个包含元素来包装站点内容。

有两种容器类可供选择：

1. `.container` 类提供了一个响应式的固定宽度容器
2. `.container-fluid` 类提供了一个全宽容器，跨越视口的整个宽度

## 固定容器

使用 `.container` 类创建响应式、固定宽度的容器。

请注意，它的宽度（`max-width`）会在不同的屏幕尺寸上发生变化：

|           | Extra small <576px | Small ≥576px | Medium ≥768px | Large ≥992px | Extra Large ≥1200px | XXL ≥1400px |
| --------- | ------------------ | ------------ | ------------- | ------------ | ------------------- | ----------- |
| max-width | 100%               | 540px        | 720px         | 960px        | 1140px              | 1320px      |

## 流体容器

使用 `.container-fluid` 类创建全宽容器，它总是跨越整个屏幕宽度（`width` 总是 `100%`）

## 容器填充

默认情况下，容器有左右填充（左右内边距），没有顶部或底部填充（上下内边距）。因此，我们常使用 *spacing 工具*（utilities），诸如额外的填充和边距，使它们看起来更好。

### Bootstrap 5 网格系统

Bootstrap 的网格系统是用 flexbox 构建的，页面上最多允许 12 列。

如果您不想单独使用所有 12 列，那么可以将这些列组合在一起，以创建更宽的列：

| span 1  | span 1 | span 1 | span 1 | span 1 | span 1 | span 1 | span 1 | span 1 | span 1 | span 1 | span 1 |
| ------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| span 4  | span 4 | span 4 |        |        |        |        |        |        |        |        |        |
| span 4  | span 8 |        |        |        |        |        |        |        |        |        |        |
| span 6  | span 6 |        |        |        |        |        |        |        |        |        |        |
| span 12 |        |        |        |        |        |        |        |        |        |        |        |

网格系统响应迅速，列会根据屏幕大小自动重新排列。

请确保总和等于或小于 12（如果不需要使用所有 12 个可用列）。

img和span这种属于行列元素 本身可以一行多个

div属于块级元素 本身会占满一整行 若想使其并为一行 要使用栅格系统

## 网格类

Bootstrap 5 网格系统有六个类：

- `.col-` (超小型设备 - 屏幕宽度小于 576px)
- `.col-sm-` (小型设备 - 屏幕宽度等于或大于 576px)
- `.col-md-` (中型设备 - 屏幕宽度等于或大于 768 像素)
- `.col-lg-` (大型设备 - 屏幕宽度等于或大于 992 像素)
- `.col-xl-` (xlarge 设备 - 屏幕宽度等于或大于 1200px)
- `.col-xxl-` (xxlarge 设备 - 屏幕宽度等于或大于 1400px)

您可以组合上述类，以创建更动态和灵活的布局。