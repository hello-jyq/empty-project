<template>
  <a-config-provider :locale="locale" :update-at-scroll="true">
    <router-view />
  </a-config-provider>
</template>
<script setup>
import { computed } from "vue"
import enUS from "@arco-design/web-vue/es/locale/lang/en-us"
import zhCN from "@arco-design/web-vue/es/locale/lang/zh-cn"
import jaJP from "@arco-design/web-vue/es/locale/lang/ja-jp"
const locale = computed(() => {
  switch (localStorage.lang) {
    case "zh-CN":
      return zhCN
    case "en-US":
      return enUS
    case "ja-JP":
      return jaJP
    default:
      return zhCN
  }
})
</script>
<style scoped></style>
