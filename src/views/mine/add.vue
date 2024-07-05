<template>
  <h1>加</h1>
  <a-button type="outline" @click="Router.push({ path: '/mine/add/detail' })">跳转详细</a-button>
</template>
<script setup>
import { useRouter } from "vue-router"
const Router = useRouter()
</script>
