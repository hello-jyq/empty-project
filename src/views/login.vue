<template>
  <main class="login-page">
    <a-card class="login-card" :title="$t('app.name')">
      <a-form :model="form" layout="vertical" @submit="submit">
        <a-form-item field="userName" :label="$t('app.username')" :rules="[{ required: true }]">
          <a-input v-model="form.userName" autocomplete="username" />
        </a-form-item>
        <a-form-item field="password" :label="$t('app.password')" :rules="[{ required: true }]">
          <a-input-password v-model="form.password" autocomplete="current-password" />
        </a-form-item>
        <a-button type="primary" html-type="submit" long :loading="submitting">{{ $t("app.signIn") }}</a-button>
      </a-form>
    </a-card>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { Message } from "@arco-design/web-vue"
import { userStore } from "@/stores"
import { signIn } from "@/api/auth"

const form = reactive({ userName: "", password: "" })
const submitting = ref(false)
const route = useRoute()
const router = useRouter()
const store = userStore()

async function submit({ errors }) {
  if (errors || submitting.value) {
    return
  }
  submitting.value = true
  try {
    store.setSession(await signIn(form))
    const redirect = route.query.redirect
    await router.replace(typeof redirect === "string" && redirect.startsWith("/") && !redirect.startsWith("//") ? redirect : "/home")
  } catch (error) {
    if (!error.handledByRequest) {
      Message.error(error.message || "登录失败")
    }
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}
.login-card {
  width: min(100%, 420px);
}
</style>
