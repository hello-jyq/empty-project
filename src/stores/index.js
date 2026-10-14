import { createPinia, defineStore } from "pinia"
import { useLocalStorage } from "@vueuse/core"

export const pinia = createPinia()

export const userStore = defineStore("user", {
  state: () => ({
    token: useLocalStorage("token", ""),
    userName: useLocalStorage("userName", ""),
    theme: useLocalStorage("theme", "light"),
    lang: useLocalStorage("lang", "cn"),
  }),
  actions: {
    setSession({ token, userName }) {
      this.token = token
      this.userName = userName || ""
    },
    logout() {
      this.token = ""
      this.userName = ""
    },
  },
})
