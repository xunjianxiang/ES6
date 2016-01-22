# ES6语法
## 解构赋值
  - 交换变量的值
  - 提取json中部分key
  - 引入模块的指定方法

## 箭头函数

## Promise
  - Promise.prototype.then(resolve)
  - Promise.prototype.catch(reject)
  - Promise.all
## Generator
  - 配合Promise可以用同步的方式实现异步编程

## Modules
  - extends
  - export
  - import


# Tern
  1. tern_for_sublime (具体配置参考Github, Settings-User添加自动提示)
  2. 在项目中添加.tern-project文件
  ```javascripts
    {
      "libs": ["browser", "es6"],
      "loadEagerly": [
        // 存放js的路径
        './scripts/*.js',
        './scripts/*/*.js'
      ],
      "plugins": {
        "es_modules": {}
      }
    }
  ```

# Eslint
  1. eslint, babel-eslint(可能依赖于babel)
  2. SublimeLinter, SublimeLinter-contrib-eslint,sublimelint
  3. 在SublimeLinter.sublime-settings中进行配置
  ```javascripts

    user.linters中添加新的linter
    "eslint": {
      "@disable": false,
      "args": [],
      "excludes": []
    }

    user.paths中相应操作系统下配置eslint的执行脚本
    windows下是eslint.cmd,在全局npm包安装目录下
  ```

# 在sublime中执行ES6片段(windows)
  1. babel-cli(可能依赖于babel, babel-core, babel-preset-es2015, babel-node从babel-core中迁移到了babel-cli)
  2. Tools -> Build System -> New Build System
  3. 自定义一个Build System
  ```javascripts
  {
  	"cmd": ["ES6.cmd", "$file"],
  	"selector": "source.js"
  }
  // 保存为*.sublime-build
  ```
  4. 写一个脚本,放到全局目录中(可查看环境变量)
  ```
  babel-node --presets es2015 %1
  // 保存为ES6.cmd
  ```
