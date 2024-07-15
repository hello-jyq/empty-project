import { createI18n } from "vue-i18n"
import cn from "./cn-lang/cn_language"
import en from "./en-lang/en_language"
import { createPinia } from "pinia"
const pinia = createPinia()
import { userStore } from "@/stores"
const Store = userStore(pinia)
const defaultLocale = Store.lang // localStorage.getItem("lang")

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: "cn",
  globalInjection: true,
  messages: {
    cn,
    en,
  },
})
export default i18n
