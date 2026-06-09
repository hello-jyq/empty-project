// 配置页面路径
const ComponentList = [
  {
    url: "/home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
  },
  {
    url: "/mine/add",
    component: () => import(/* webpackChunkName: "home" */ "../views/mine/add.vue"),
  },
  {
    url: "/mine/add/detail",
    component: () => import(/* webpackChunkName: "home" */ "../views/mine/addDetail.vue"),
  },

  {
    url: "/mine/remove",
    component: () => import(/* webpackChunkName: "home" */ "../views/mine/remove.vue"),
  },
  {
    url: "/help",
    component: () => import(/* webpackChunkName: "manage" */ "../views/help.vue"),
  },
  // {
  //   url: "/thress",
  //   component: () => import(/* webpackChunkName: "manage" */ "../views/thress.vue"),
  // },
]

export default ComponentList
