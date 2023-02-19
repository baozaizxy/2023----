# Webpack

webpack是一个现在的javaScript应用的静态模块化打包工具。（从两点概括这句话即**模块**和**打包**）

**打包如何理解**？
webpack可以帮助我们进行模块化，并且处理模块间的各种复杂关系后，打包的概念就很好理解了。
就是将webpack中的各种资源模块进行打包合并成一个多个包（Bundle）
并且在打包的过程中，还可对资源进行处理，比如压缩图片，将scss转成css，将ES6语法转成ES5语法，将TypeScript转成JavaScript等等操作。
打包工具还有grunt/gulp

**webpack和grunt/gulp的对比**

grunt/gulp的核心是Task
1.可以配置一系列的task，并且定义task要处理的事务（例如ES6、ts转化、图片压缩、scss转成css）
2.之后让grunt/gulp来依次执行这些task，而且让整个流程自动化

来看一个gulp的task
1.下面的task就是将src下面的所有js文件转成ES5的语法。
2.并且最终输出到dist文件夹中。

什么时候用grunt/gulp？
1.工程模块依赖非常简单，甚至没有用到模块化的概念
2.只需要进行简单的合并、压缩，就使用grunt/gulp即可
3.如果整个项目使用了模块化管理，而且相互依赖非常强，我们就可以使用webpack。

grunt/gulp和webpack有什么不同？
1.grunt/gulp更加强调的事前端流程的自动化，模块化不是它的核心
2.webpack更加强调模块化开发管理，而文件压缩合并、预处理等功能，是他附带的功能

## webpack的配置

1、文件和文件夹解析
dist文件夹：用于存放之后打包的文件
src文件夹：用于存放我们写的源文件
main.js：项目的入口文件。
mathUtils.js:定义了一些数学工具函数，可以在其他地方引用，并且使用。
index.html: 浏览器打开展示的首页html（在这里引用的是src内最终打包的文件即dist文件夹的内容）。
package.json：通过npm init生成的，npm包管理的文件。

CommonJS模块化规范，CommonJS是模块化的标准，nodejs就是CommodJS（模块化）的实现

webpack ./src/main.js ./dist/bundle.js(将main.js文件打包成bundle.js文件)

npx让我们可以直接运行node_modules下自带的命令行，而不用写node_modules相对路径  打包完成后会使得文件夹下多出现一个dist目录，目录下有一个main.js