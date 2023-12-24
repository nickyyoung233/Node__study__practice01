## 项目基础配置

1. package.json 配置 ejs, [express](https://expressjs.com/)
2. app.js 配置 express
3. express 设置 `view engine` 为 ejs

## MVC

- express 开发，可以理解为 由 MVC 模式编写各种 **中间件**
  - 处理同类型的中间件可以封装为一类 controller，如 用户页 controller，以及管理员 controller；用户也 controller 中就有各种用户页相关的中间件
  - 这些中间件 **接收数据**，采用定义好的 **model 形式** 处理数据，再决定渲染何种 **views**
  - 形成了 MVC pattern
