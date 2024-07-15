import "@/assets/fonts/alegreyaSansFont.css" //网站字体
import "@/assets/icon_fonts/iconfont.css" //阿里巴巴图标库
import "./assets/style/arcoReset.css" //自定义字节式样
import "./assets/style/color.css" //自定主题
import "./assets/style/style.css" //共通式样

import overflowTip from "@/components/overflowTip.vue"
import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import i18n from "./local/index"

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(i18n)
app.component("OverflowTip", overflowTip)

app.mount("#app")
