// import { createPinia } from "pinia"
// import useUserStore from "./modules/user/index"

// const pinia = createPinia()

// export { useUserStore }
// export default pinia
import router from "@/router"
import { defineStore } from "pinia"
import { useLocalStorage } from "@vueuse/core"

export const userStore = defineStore("user", {
  state: () => ({
    token: useLocalStorage("token", ""),
    userName: useLocalStorage("userName", ""),
    loginStatus: useLocalStorage("loginStatus", "no"),
    theme: useLocalStorage("theme", "light"),
    lang: useLocalStorage("lang", "cn"),
    menuList: useLocalStorage("menuList", []),
    navbarHistory: useLocalStorage("navbarHistory", []),
    currentTabKey: useLocalStorage("currentTabKey", []),
    storeOpenMenuKey: useLocalStorage("storeOpenMenuKey", []),
  }),
  getters: {
    getMenu: (state) => {
      return state.menuList
    },
  },
  actions: {
    async logout() {
      this.loginStatus = "no"
      // await requestGetLogout()

      this.$reset()
      window.localStorage.clear()
      location.reload()
      router
        .replace({
          path: "/login",
        })
        .finally(() => {
          location.reload()
        })
    },
  },
})
