
项目代码：

```bash
# 前端项目
git clone  git@github.com:mouday/spider-admin-pro-web.git spider-admin-pro-web

# 后端接口
git clone git@github.com:mouday/spider-admin-pro.git spider_admin_server
```

# 主要文件

路由配置   src/router/index.js

接口统一管理   src/api

视图文件夹   src/views

# 二、开发

1、启动接口服务
```bash
$ python dev.py
```

2、启动前端开发环境
```bash
$ npm i
$ npm run dev
```

# 三、发布

发布打包
```bash
$ npm run build:prod
```

将打包文件夹 拷贝到如下目录

```
dist -> spider_admin_server/spider_admin_pro/web/public
```

启动生成环境
```bash
$ python spider_admin_pro/run.py
```


深入学习可以阅读这个站点， vue-admin-template 作者写的
https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/

