<template>
  <div class="layout">
    <Menu />
    <div class="container">
      <Header class="header" />
      <div class="content_box">
        <router-view v-slot="{ Component }">
          <keep-alive :include="keepAliveCache">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userStore } from "@/stores"
import { computed, watch } from "vue"
const Store = userStore()

import Header from "./header.vue"
import Menu from "./menu.vue"
// 需要缓存的页面
const keepAliveCache = computed(() => {
  return ["/help", "/home"]
  // return appStore.keepAlivePage
})
watch(
  () => Store.theme,
  () => {
    document.body.setAttribute("theme", Store.theme)
  },
  { immediate: true },
)
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
}

.container {
  flex: 1;
  height: 100%;
  background: var(--color-background);
  position: relative;
  display: flex;
  flex-direction: column;
}
.header {
  height: 60px;
  width: 100%;
  background: var(--color-header-background);
  justify-content: space-between;
}
.content_box {
  flex: 1;
  overflow: auto;
}
</style>
