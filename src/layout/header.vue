<template>
  <header class="header">
    <strong class="page-title">{{ $t(route.meta.titleKey || "app.name") }}</strong>
    <div class="actions">
      <a-select v-model="store.theme" :aria-label="$t('home.theme')" class="theme-select">
        <a-option value="light">{{ $t("app.light") }}</a-option>
        <a-option value="dark">{{ $t("app.dark") }}</a-option>
      </a-select>
      <a-select v-model="language" :aria-label="$t('home.lang')" class="lang-select">
        <a-option value="cn">中文</a-option>
        <a-option value="en">English</a-option>
      </a-select>
      <span v-if="authEnabled && store.userName" class="user-name">{{ store.userName }}</span>
      <a-button v-if="authEnabled" @click="logout">{{ $t("home.logout") }}</a-button>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { userStore } from "@/stores"
import i18n from "@/local"

const route = useRoute()
const router = useRouter()
const store = userStore()
const authEnabled = import.meta.env.VITE_AUTH_ENABLED === "true"
const language = computed({
  get: () => store.lang,
  set: (value) => {
    store.lang = value
    i18n.global.locale.value = value
  },
})

function logout() {
  store.logout()
  router.replace({ name: "login" })
}
</script>

<style scoped>
.header {
  min-height: 64px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: var(--color-header-background);
  border-bottom: 1px solid var(--color-border);
}
.page-title {
  font-size: 18px;
}
.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.theme-select {
  width: 100px;
}
.lang-select {
  width: 110px;
}
.user-name {
  white-space: nowrap;
}
@media (max-width: 680px) {
  .header {
    flex-wrap: wrap;
    padding: 12px 16px;
  }
  .actions {
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
