<template>
  <a-space>
    <a-breadcrumb>
      <a-breadcrumb-item>
        <i class="iconfont icon-shouye" @click="router.push({ path: '/home' })" />
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        {{ router.currentRoute.value?.meta?.name }}
      </a-breadcrumb-item>
    </a-breadcrumb>

    <a-space align="center">
      {{ $t("home.theme") }}：
      <a-select :style="{ width: '320px' }" v-model="theme" placeholder="选择主题" allow-clear>
        <a-option value="light">默认</a-option>
        <a-option value="dark">暗黑</a-option>
      </a-select>
    </a-space>
    <a-space align="center">
      {{ $t("home.lang") }}：
      <a-select :style="{ width: '120px' }" v-model="lang" placeholder="选择语言" @change="changeLang" allow-clear>
        <a-option value="cn">中文</a-option>
        <a-option value="en">english</a-option>
      </a-select>
    </a-space>
    <a-button @click="loginout">{{ $t("home.logout") }}</a-button>
  </a-space>
</template>
<script setup>
import { Message } from "@arco-design/web-vue"
import { computed } from "vue"
import { RouterLink, useRouter } from "vue-router"
import { userStore } from "@/stores"
const router = useRouter()
const Store = userStore()

const theme = computed({
  get() {
    return Store.theme
  },
  set(newVal) {
    Store.theme = newVal
  },
})
const lang = computed({
  get() {
    return Store.lang
  },
  set(newVal) {
    Store.lang = newVal
  },
})

// const changeTheme = (val) => {
//   console.log(val)
//   Store.theme = val
// }
const changeLang = (val) => {
  window.location.reload()
}

const loginout = () => {
  Store.logout()

  Message.info({
    content: "退出",
    duration: 1000,
    position: "top",
  })
}
</script>
