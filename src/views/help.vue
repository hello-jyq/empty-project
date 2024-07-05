<template>
  <h1>帮助(父组件)</h1>
  <a-space>
    <a-button status="success" @click="msg = '父传子'">父传子</a-button>
    <a-button status="success" @click="childMsg++">双向绑定(defineModel)({{ childMsg }})</a-button>
    <a-button status="success">Item3</a-button>
  </a-space>
  <ChildCompont :msg="msg" v-model="childMsg" @send-msg="(val) => (msg = val)" />
</template>
<script setup>
import { ref, provide } from "vue"
import ChildCompont from "@/components/helpChild.vue"

const msg = ref("父传子")

const childMsg = ref("1")
const aaaa = () => {
  childMsg.value = 0
}
provide(
  /* 注入名 */ "message",
  /* 值 */ {
    childMsg,
    aaaa,
  },
)
</script>
