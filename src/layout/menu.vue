<template>
  <nav class="menu" :aria-label="$t('app.navigation')">
    <div class="brand">{{ $t("app.name") }}</div>
    <a-menu v-model:open-keys="openKeys" :selected-keys="selectedKeys">
      <template v-for="item in menuItems" :key="item.path">
        <a-sub-menu v-if="item.children.length" :key="item.path" :title="$t(item.titleKey)">
          <template #icon><span class="menu-mark" aria-hidden="true" /></template>
          <a-menu-item v-for="child in item.children" :key="child.path" @click="router.push(child.path)">
            {{ $t(child.titleKey) }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="item.path" @click="router.push(item.path)">
          <template #icon><span class="menu-mark" aria-hidden="true" /></template>
          {{ $t(item.titleKey) }}
        </a-menu-item>
      </template>
    </a-menu>
  </nav>
</template>

<script setup>
import { computed, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { appRoutes } from "@/router"

const router = useRouter()
const route = useRoute()
const openKeys = ref([])
const toMenuItem = (item) => ({
  name: item.name,
  path: router.resolve({ name: item.name }).path,
  titleKey: item.meta.titleKey,
})
const menuItems = appRoutes
  .filter((item) => item.meta?.menu)
  .map((item) => ({
    ...toMenuItem(item),
    children: (item.children || []).filter((child) => child.meta?.menu).map(toMenuItem),
  }))
const selectedKeys = computed(() => {
  const selectedRoute = [...route.matched].reverse().find((record) => record.meta.menu)
  return selectedRoute ? [router.resolve({ name: selectedRoute.name }).path] : []
})
watch(
  () => route.path,
  () => {
    const parent = menuItems.find((item) => item.children.length && route.matched.some((record) => record.name === item.name))
    if (parent && !openKeys.value.includes(parent.path)) {
      openKeys.value = [...openKeys.value, parent.path]
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.menu {
  width: 200px;
  min-height: 100%;
  background: var(--color-menu-background);
  border-right: 1px solid var(--color-border);
}
.brand {
  height: 64px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
}
.menu-mark {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
}
.menu :deep(.arco-menu) {
  background: transparent;
}
@media (max-width: 680px) {
  .menu {
    width: 100%;
    min-height: 0;
    border-right: 0;
    border-bottom: 1px solid var(--color-border);
  }
  .brand {
    height: 52px;
  }
}
</style>
