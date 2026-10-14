import { createI18n } from "vue-i18n"
import cn from "./cn-lang/cn_language"
import en from "./en-lang/en_language"
import { pinia, userStore } from "@/stores"
const Store = userStore(pinia)
const defaultLocale = Store.lang // localStorage.getItem("lang")

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: "cn",
  globalInjection: true,
  messages: {
    cn,
    en,
  },
})
export default i18n
