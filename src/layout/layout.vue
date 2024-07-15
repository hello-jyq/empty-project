<template>
  <div class="layout">
    <Menu />
    <div class="content">
      <Header class="header" />
      <router-view v-slot="{ Component }">
        <!-- <keep-alive :include="keepAliveCache"> -->
        <component :is="Component" />
        <!-- </keep-alive> -->
      </router-view>
      <!-- <router-view /> -->
    </div>
  </div>
</template>

<script setup>
import { userStore } from "@/stores"
import { computed, watch } from "vue"
const Store = userStore()

import Header from "./header.vue"
import Menu from "./menu.vue"
// const keepAliveCache = computed(() => {
//   return ["/help", "/home"]
//   // return appStore.keepAlivePage
// })
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
  width: 100vw;
  height: 100vh;
  min-width: 1600px;
  position: relative;
  display: flex;
}

.content {
  flex: auto;
  height: 100%;
  background: var(--color-background);
  margin: 0 auto;
  position: relative;
}
.layout_box {
  display: flex;
  flex-direction: row;
}
.header {
  height: 60px;
  width: 100%;
  background: var(--color-header-background);
  justify-content: space-between;
}
</style>
