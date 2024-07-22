<template>
  <div class="menu_box">
    <a-menu
      :default-open-keys="[router.currentRoute.value?.path]"
      :default-selected-keys="[router.currentRoute.value?.path]"
      show-collapse-button
      breakpoint="xl"
    >
      <template v-for="item in menuTree" :key="item.index">
        <a-sub-menu v-if="item?.subMenu?.length > 0" :key="item.path">
          <template #icon><i class="iconfont" :class="item.icon" /></template>
          <template #title>{{ item.name }}</template>
          <a-menu-item v-for="list in item.subMenu" :key="list.path" @click="goto(list)">
            <template #icon><i class="iconfont" :class="list.icon" /></template>
            {{ list.name }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else-if="item?.meta?.level === '0'" @click="goto(item)" :key="item.path">
          <template #icon><i class="iconfont" :class="item.icon" /></template>
          {{ item.name }}
        </a-menu-item>
      </template>
      <div style="margin-top: 60px">鼠标位置: {{ x }}, {{ y }}</div>
    </a-menu>
  </div>
</template>
<script setup>
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import { useMouse } from "@/utils/mouse"
import { userStore } from "@/stores"
const { x, y } = useMouse()
const router = useRouter()

const menuTree = computed(() => {
  let appRoute = router.getRoutes().find((el) => el.name === "root")
  const copyRouter = JSON.parse(JSON.stringify(appRoute.children))
  console.log(11, router.getRoutes(), copyRouter)
  return copyRouter
})

const goto = (item) => {
  router.push({
    path: item.path,
  })
}
</script>
<style scoped>
.menu_box {
  box-sizing: border-box;
  max-width: 200px;
  height: 100%;
}
.menu_box .arco-menu-light {
  background: var(--color-menu-background);
}
.menu_box .arco-menu {
  height: 100%;
}
.menu_box .arco-menu-item {
  width: 150px;
}
</style>
