<template>
  <a-config-provider :locale="locale" :update-at-scroll="true">
    <router-view />
  </a-config-provider>
</template>
<script setup>
import { computed, watch } from "vue"
import { userStore } from "@/stores"
import enUS from "@arco-design/web-vue/es/locale/lang/en-us"
import zhCN from "@arco-design/web-vue/es/locale/lang/zh-cn"
const store = userStore()
watch(
  () => store.lang,
  (lang) => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN"
  },
  { immediate: true },
)
watch(
  () => store.theme,
  (theme) => {
    document.body.setAttribute("theme", theme)
    document.body.setAttribute("arco-theme", theme)
  },
  { immediate: true },
)
const locale = computed(() => {
  switch (store.lang) {
    case "cn":
      return zhCN
    case "en":
      return enUS
    default:
      return zhCN
  }
})
</script>
<style scoped></style>
