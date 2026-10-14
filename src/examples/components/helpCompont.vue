<template>
  <div style="margin-top: 100px; background-color: blueviolet">
    <h2>孙子组件：依赖注入{{ childMsg }}</h2>
    <a-button @click="aaaa">透传初始化</a-button>
  </div>
</template>
<script setup>
import { inject } from "vue"
const { childMsg, aaaa } = inject("message")
</script>
