import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// import postcsspxtoviewport8plugin from "postcss-px-to-viewport-8-plugin"
import { vitePluginForArco } from "@arco-plugins/vite-vue"

const Timestamp = new Date().getTime()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginForArco({ style: "css" })],
  // viewport自适应
  // css: {
  //   postcss: {
  //     plugins: [
  //       postcsspxtoviewport8plugin({
  //         unitToConvert: "px", // 需要转换的单位，默认为"px"
  //         viewportWidth: 1920,
  //         // (file) => {
  //         //   let num = 786
  //         //   //van是375
  //         //   if (file.indexOf("vant") > 0) {
  //         //     num = 375
  //         //   }
  //         //   return num
  //         // },
  //         unitPrecision: 6, // 指定`px`转换为视窗单位值的小数位数(很多时候无法整除)
  //         propList: ["*"], // 能转化为vw的属性列表
  //         viewportUnit: "vw", // 指定需要转换成的视窗单位，建议使用vw
  //         fontViewportUnit: "vw", // 字体使用的视口单位
  //         selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
  //         minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
  //         mediaQuery: false, // 允许在媒体查询中转换`px`
  //         replace: true, // 是否直接更换属性值，而不添加备用属性
  //         exclude: [], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
  //         include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
  //         landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
  //         landscapeUnit: "vw", // 横屏时使用的单位
  //         landscapeWidth: 1920, // 横屏时使用的视口宽度
  //       }),
  //     ],
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 打包配置
  build: {
    target: "modules",
    outDir: "dist", //指定输出路径
    assetsDir: "assets", // 指定生成静态资源的存放路径
    minify: "terser", // 混淆器，terser构建后文件体积更小
    rollupOptions: {
      manualChunks: (id) => {
        if (id.includes("node_modules")) {
          return "vendor"
        }
      },
      output: {
        entryFileNames: `js/[name]-[hash].${Timestamp}.js`, // 指定 JS 文件的输出路径及命名规则
        chunkFileNames: `js/[name]-[hash].${Timestamp}.js`, // 指定分片文件的输出路径及命名规则
        assetFileNames: (assetInfo) => {
          // 设置不同类型文件的输出路径及命名规则
          if (assetInfo.type === "asset" && /\.(jpe?g|png|gif|svg)$/i.test(assetInfo.name)) {
            return `img/[name].[hash].${Timestamp}.[ext]` // 图像文件输出路径及命名规则
          }
          if (assetInfo.type === "asset" && /\.(ttf|woff|woff2|eot|otf)$/i.test(assetInfo.name)) {
            return `fonts/[name].[hash].${Timestamp}.[ext]` // 字体文件输出路径及命名规则
          }
          return `[ext]/name1-[hash].${Timestamp}.[ext]` // 其他资源文件输出路径及命名规则
        },
      },
    },
  },
  server: {
    host: "0.0.0.0", //内网ip
    port: 3000, // 自定义端口号
    cors: true, // 默认启用并允许任何源
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      "/api": {
        target: "https://jsonplaceholder.typicode.com", // 通过代理接口访问实际地址。这里是实际访问的地址。vue会通过代理服务器来代理请求
        changeOrigin: true,
        ws: true, // 允许websocket代理
        rewrite: (path) => path.replace(/^\/api/, ""), // 将api替换为空
      },
    },
  },
})
