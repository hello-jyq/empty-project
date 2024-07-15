const ComponentList = [
  {
    url: "/home", //ホーム
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
  },
  {
    url: "/mine/add", //我的-加
    component: () => import(/* webpackChunkName: "home" */ "../views/mine/add.vue"),
  },
  {
    url: "/mine/add/detail", //我的-加
    component: () => import(/* webpackChunkName: "home" */ "../views/mine/addDetail.vue"),
  },

  {
    url: "/mine/remove", //我的-减
    component: () => import(/* webpackChunkName: "home" */ "../views/mine/remove.vue"),
  },
  {
    url: "/help", //ヘルプ
    component: () => import(/* webpackChunkName: "manage" */ "../views/help.vue"),
  },
  {
    url: "/thres", //ヘルプ
    component: () => import(/* webpackChunkName: "manage" */ "../views/thres.vue"),
  },
]

export default ComponentList
