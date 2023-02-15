# ESLint

[ESLint](http://eslint.cn/) 是一个代码检查工具，用来检查你的代码是否符合指定的规范

使用ESLint可以保证多人协作时风格统一

ESLint是法官  Standard是法律

### 改正错误的四种方式

有四种方法来修正错误：

- 手动修正: 人肉修改
- 命令修正：npm run lint
- 修改规则：让代码符合修改之后的规则，当然也就不报错了
- 插件修正: 配合vscode 中的eslint插件

#### 手动修改

根据错误提示、错误规则名称去 ESLint 规则列表网站中查找其具体含义

#### 命令修正

vuecli创建项目时 提供了自动修复功能（有些复杂的错误还是要手动来改正），具体做法是运行：

```
npm run lint
```

## ESLint-自定义规则

要求：了解eslint的自定义规则，能看懂.eslintrc.js的配置

先放一放

## ESLint-在vscode中使用插件

1. 有错误立即提示（显示波浪线）
2. ctrl+s保存时立即自动修正错误

用vscode打开项目时，将脚手架工程作为vscode根目录, 因为eslint要使用配置文件.eslintrc