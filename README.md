# Vue 3 后台管理模板

基于 Vue 3、Vite 6、Pinia、Vue Router、Vue I18n 和 Arco Design，使用 JavaScript 开发。默认菜单包含首页和练习示例，无需后端即可启动。旧练习页面保存在 `src/examples`，通过 `/examples` 访问；API 和资源分别放在 `src/api`、`src/assets`。

`src/main.js` 已引入 `src/assets/icon_fonts` 的阿里巴巴图标和 `src/assets/fonts` 的 Alegreya Sans 字体。图标可用 `<i class="iconfont icon-shouye"></i>`，字体可在样式中指定 `font-family: "AlegreyaSans-Regular"`。

## 启动

需要 Node.js 20.19+（推荐 Node 22）。

```bash
npm ci
npm run dev
```

打开 `http://localhost:3000`。运行 `npm run lint` 检查代码，`npm run build` 生成生产文件，`npm run preview` 预览构建结果。

## 添加页面

在 `src/views` 新建页面，并在 `src/router/index.js` 的 `appRoutes` 中添加路由。页面使用 `() => import(...)` 按需加载。设置 `meta.menu: true` 后，侧边栏会自动显示该路由；`meta.titleKey` 是 `src/local` 中的翻译键。

```js
{
  path: "reports",
  name: "reports",
  meta: { titleKey: "reports.title", menu: true },
  component: () => import("@/views/reports.vue"),
}
```

路由负责页面和菜单入口，接口的访问权限必须由后端校验。练习页在同一份路由表中统一挂在 `/examples` 父路由下，左侧“练习示例”菜单可展开查看各个子页面；访问 `/examples` 会打开帮助示例。示例页首次打开不会请求后端；点击请求按钮后，如未接入接口会显示错误提示。用户列表示例调用 `/localapi`，另一个示例调用 `/devapi`，使用这些功能时需配置对应后端或代理。示例接口在 `src/api/index.js`，通过 `src/api/base/request.js` 的请求封装调用，共用 `src/api/client.js` 的 Axios 客户端。

## 接入登录和 API

需要接入后端时，可自行创建 `.env.local` 并按需设置：

```dotenv
VITE_AUTH_ENABLED=true
VITE_API_BASE_URL=/api
VITE_API_PROXY_TARGET=http://localhost:222/api
```

开启登录后，未登录访问会跳转到 `/login`。登录请求位于 `src/api/auth.js`，默认向 `/user/login` 发送 `{ userName, userPassword }`，期望返回 `{ token, userName }`（也接受带 `success` 字段的响应）。按你的后端协议修改该文件即可。通用 Axios 实例位于 `src/api/client.js`，会发送 `Authorization: Bearer <token>`。生产环境需要在 Web 服务器中代理 API，并将未知前端路径回退到 `index.html`。

`src/api/base/request.js` 提供基础方法：`getRequest`、`postRequest`、`uploadPost`、`downloadGet`、`downloadPost`。HTTP 错误、`success: false` 和成功响应中的错误 `messages` 都在这里按原有弹窗方式提示并拒绝；页面仍可捕获错误处理加载和空状态。上传可传入进度回调，下载从响应头读取文件名并保存，`downloadGet(path, params, false)` 可只取得原始 Blob 响应。

## 分包

路由页面和后台外壳均为懒加载。`vite.config.js` 将 Vue 相关运行库和 HTTP 依赖分别缓存，Arco 组件由构建工具按实际引用拆分，避免示例专用组件进入首页预加载块。示例页面只在访问 `/examples` 下对应路径时加载。修改分包规则后可通过 `npm run build` 检查实际产物。
