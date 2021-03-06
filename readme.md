## Webpack +jQuery 单页面Demo 

预览链接:[点击访问](https://www.haohome.top/webpack-spa/)

Demo结构:

```shell
├── config
│   ├── config.js
│   ├── utils.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   ├── webpack.prod.js
│   └── webpack.test.js
├── favicon.ico
├── package-lock.json
├── package.json
├── postcss.config.js
├── readme.md
├── src
│   ├── assets
│   │   ├── css
│   │   └── img
│   ├── common
│   │   └── utils.js
│   ├── index.html
│   ├── main.js
│   ├── route
│   │   └── router.js
│   └── views
│       ├── error
│       ├── index
│       ├── proxy
│       ├── state
│       ├── subscribe
│       └── visualDom
└── static
   ├── favicon.ico
   └── lib
       └── jquery-3.2.1.js
```

### 2018-11-18 更新日志

1. 完成hash和history两种路由模式

### 2018-11-13 更新日志

1. 添加状态管理demo,目前有一个**bug**: 路由切换会不断向事件中push新的监听事件,后续再优化解决
2. 添加404页面处理,侧边导航栏的高亮
3. 添加了解虚拟DOM的Demo

### 2018-11-12 更新日志

1. 采用ES6 class类
2. 添加代理模式、订阅模式菜单

### 2018-11-9 更新日志

1. 更新webpack编译配置,开发环境不导出独立css文件,开发环境css修改静默更新,减少开发环境资源消耗,添加友好控制台代码日志显示;
2. 添加单页面**路由控制器**,配置好路径即可实例化访问组件,实现多级单页面控制;
3. 优化组件内事件绑定逻辑,让绑定事件更简单;

### 2018-7-6 更新日志

1. webpack版本为3.11.0;
2. 实现了js、html、css的自动化打包，同时识别并编译html中url，css中url（主要为img图片）；
3. 引入jQuery并生成全局变量，个人认为这是最佳的引入方式；
4. 利用babel将代码中的ES6语法转为ES5；
5. 利用postcss-loder 自动追加css浏览器前缀；
6. 配置了部分代码js和css的压缩;
7. 可根据环境配置变量,如接口api;

能力有限,如有BUG可在[Issues区](https://github.com/yifoo/webpack-demo/issues)留言
