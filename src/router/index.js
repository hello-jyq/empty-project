import { createRouter, createWebHistory } from "vue-router"
import { pinia, userStore } from "@/stores"

export const appRoutes = [
  {
    path: "home",
    name: "home",
    meta: { titleKey: "home.title", menu: true },
    component: () => import("@/views/home.vue"),
  },
  {
    path: "examples",
    name: "examples",
    meta: { titleKey: "app.examples", menu: true },
    redirect: "/examples/help",
    children: [
      { path: "help", name: "example-help", meta: { titleKey: "example.help", menu: true }, component: () => import("@/examples/views/help.vue") },
      {
        path: "users",
        name: "example-users",
        meta: { titleKey: "example.users", menu: true },
        component: () => import("@/examples/views/userList.vue"),
      },
      {
        path: "mine/add",
        name: "example-add",
        meta: { titleKey: "example.add", menu: true },
        component: () => import("@/examples/views/mine/add.vue"),
      },
      {
        path: "mine/add/detail",
        name: "example-add-detail",
        meta: { titleKey: "example.addDetail", menu: true },
        component: () => import("@/examples/views/mine/addDetail.vue"),
      },
      {
        path: "mine/remove",
        name: "example-remove",
        meta: { titleKey: "example.remove", menu: true },
        component: () => import("@/examples/views/mine/remove.vue"),
      },
    ],
  },
  {
    path: ":pathMatch(.*)*",
    name: "not-found",
    meta: { titleKey: "app.notFound" },
    component: () => import("@/views/notFound.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/login", name: "login", component: () => import("@/views/login.vue") },
    {
      path: "/",
      component: () => import("@/layout/layout.vue"),
      redirect: "/home",
      children: appRoutes,
    },
  ],
})

router.beforeEach((to) => {
  if (import.meta.env.VITE_AUTH_ENABLED !== "true" || to.name === "login") {
    return true
  }

  if (userStore(pinia).token) {
    return true
  }

  return { name: "login", query: { redirect: to.fullPath } }
})

export default router
