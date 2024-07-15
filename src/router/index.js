import { createRouter, createWebHistory } from "vue-router"
import { userStore } from "@/stores"
import { storeToRefs } from "pinia"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css"
import Layout from "@/layout/layout.vue"
import ComponentList from "./components.js"
import extRouters from "./ext-routers-config.js"
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      meta: {
        name: "登陆",

        requiresAuth: false,
      },
      component: () => import("@/views/login.vue"),
    },
    {
      path: "/",
      name: "root",
      component: Layout,
      children: [
        // {
        //   path: "/home",
        //   name: "Home",
        //   meta: {
        //     name: "首页",
        //   },
        //   component: () => import(/* webpackChunkName: "layout" */"@/views/home.vue"),
        // },
        // {
        //   path: "/help",
        //   name: "Help",
        //   meta: {
        //     name: "帮助",
        //   },
        //   component: () => import(/* webpackChunkName: "layout""@/views/help.vue"),
        // },
        // {
        //   path: "/add",
        //   name: "Add",
        //   meta: {
        //     name: "加",
        //   },
        //   component: () => import(/* webpackChunkName: "layout""@/views/add.vue"),
        // },
        // {
        //   path: "/remove",
        //   name: "Remove",
        //   meta: {
        //     name: "减",
        //   },
        //   component: () => import(/* webpackChunkName: "layout""@/views/remove.vue"),
        // },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const Store = userStore()
  const { menuList } = storeToRefs(Store)
  const rootRouter = router.getRoutes().filter((item) => {
    return item.name === "root"
  })[0]
  if (to.path === "/login") {
    next()
  } else {
    if (localStorage.getItem("loginStatus") === "yes") {
      if (Store.token?.length > 1) {
        if (to.path !== "/login" && !rootRouter.children?.length > 0) {
          if (menuList.value?.length > 0) {
            addDynamicMenuAndRoutes(menuList.value)

            router
              .push({
                name: "root",
              })
              .then(() => {
                if (to.path == "/") {
                  router.push({
                    path: "/home",
                    query: to.query,
                  })
                } else {
                  router.push({
                    path: to.path,
                    query: to.query,
                  })
                }
              })
          } else {
            localStorage.setItem("loginStatus", "no")
            localStorage.removeItem("token")
            next({
              path: "/login",
            })
          }
        } else {
          next()
        }
      } else if (to.path !== "/login") {
        next({
          path: "/login",
        })
      } else {
        next()
      }
    } else {
      // 该用户未登录，跳转到登入页面
      window.location.href = window.location.protocol + "//" + window.location.host + "/login"
    }
  }
})

let lastNavbarHistory = []
let isRootPage = true
window.onpopstate = function () {
  const Store = userStore()
  const { navbarHistory } = storeToRefs(Store)
  if (lastNavbarHistory?.length > 2 && !isRootPage) {
    navbarHistory.value = lastNavbarHistory[lastNavbarHistory?.length - 3]
    lastNavbarHistory.pop()
    lastNavbarHistory.pop()
  }
  isRootPage = true
}
router.afterEach((to, from) => {
  const { menuList, navbarHistory, currentTabKey, storeOpenMenuKey } = storeToRefs(userStore())
  if ((from.path != "/" || (from.path == "/" && to.path == "/home")) && from.path?.length > 0) {
    if (to.path != "/" && to.path != from.path) {
      navbarHistory.value = [
        { path: from.path, name: from.name, query: from.query },
        { path: to.path, name: to.name, query: to.query },
      ]
      lastNavbarHistory.push(navbarHistory.value)
    }
  }
  if (to.path === "/login") {
    navbarHistory.value = []
    lastNavbarHistory = []
  }
  let tabList = []
  dynamicRoutes.forEach((element) => {
    if (to.path?.indexOf(element.path) != -1) {
      if (hasMenuPath(menuList.value, element.path)) {
        tabList.push(element.path)
      }
      if (element.path?.lastIndexOf("/") > 0) {
        const idx = element.path?.lastIndexOf("/")
        if (idx > 0) {
          storeOpenMenuKey.value = [element.path?.substring(0, idx)]
        }
      }
    }
  })
  if (tabList?.length > 0) {
    currentTabKey.value = tabList
  }
})

function hasMenuPath(menuList, currentPath) {
  let has = false
  try {
    menuList.forEach((menu) => {
      if (menu.id?.length > 0) {
        if (menu.children?.length > 0) {
          menu.children.forEach((subMenu) => {
            if (currentPath == subMenu.resUrl) {
              has = true
              throw "Break"
            }
          })
        } else {
          if (currentPath == menu.resUrl) {
            has = true
          }
        }
      }
    })
  } catch (e) {}
  return has
}

const creatOneRoute = (item) => {
  item.resFile = item.resFile?.replace(/^\//, "")
  console.log(22222222222, item.resFile)
  var route = {
    path: item.resUrl,
    component: null,
    name: item.resName,
    icon: item.icon,
    sortNo: item.displayOrder,
    meta: {
      level: item.resLevel,
    },
  }
  let oneComponent = {}
  try {
    ComponentList.forEach((oneComp) => {
      if (oneComp.url == item.resUrl) {
        oneComponent = oneComp.component
        throw "Break"
      }
    })
    // eslint-disable-next-line no-empty
  } catch (error) {}
  route["component"] = oneComponent
  return route
}

export function addDynamicRoutes(menuList = []) {
  let routes = []
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].children?.length > 0 && menuList[i].children.length >= 1) {
      const route = creatOneRoute(menuList[i])
      let temp = []
      for (var idx = 0; idx < menuList[i].children.length; idx++) {
        const childRoute = creatOneRoute(menuList[i].children[idx])
        temp.push(childRoute)
        routes.push(childRoute)
      }
      route.subMenu = temp
      routes.push(route)
    } else if (menuList[i].resUrl && /\S/.test(menuList[i].resUrl)) {
      const route = creatOneRoute(menuList[i])
      routes.push(route)
    }
  }
  return routes
}

export function addChildRoute(path, value) {
  const existRouter = router.getRoutes().filter((item) => {
    return item.path === path
  })
  if (existRouter?.length > 0) {
    return
  }
  const { menuList } = storeToRefs(userStore())
  let newMenuList = [].concat(menuList.value)
  newMenuList.push({
    resFile: value.filePath,
    resUrl: path,
    resName: value.name,
  })
  menuList.value = newMenuList
  let oneComponent = {}
  try {
    ComponentList.forEach((oneComp) => {
      if (oneComp.url == path) {
        oneComponent = oneComp.component
        throw "Break"
      }
    })
  } catch (error) {
    console.log(111, error)
  }
  router.addRoute("root", {
    path: path,
    name: value.name,
    component: oneComponent,
  })
}
let dynamicRoutes = []
export function addDynamicMenuAndRoutes(menus) {
  menus = menus.filter((item) => {
    return item.id?.indexOf("menu") === 0
  })
  router.removeRoute("root")
  dynamicRoutes = addDynamicRoutes(menus)
  router.addRoute({
    name: "root",
    path: "/",
    component: Layout,
    children: dynamicRoutes,
  })

  for (const [key, value] of Object.entries(extRouters)) {
    addChildRoute(key, value)
  }
}

export default router
