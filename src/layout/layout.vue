<template>
  <div class="layout">
    <Menu />
    <div class="main-area">
      <Header />
      <main class="content"><router-view /></main>
    </div>
  </div>
</template>

<script setup>
import Header from "./header.vue"
import Menu from "./menu.vue"
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
}
.main-area {
  flex: 1;
  min-width: 0;
}
.content {
  padding: 24px;
}
@media (max-width: 680px) {
  .layout {
    display: block;
  }
  .content {
    padding: 16px;
  }
}
</style>
