<template>
  <div class="child_box">
    <h2>子组件 （{{ props.msg }}）</h2>
    <a-space>
      <a-button type="primary" @click="emit('sendMsg', '子传父')">子传父</a-button>
      <a-button type="primary" @click="childMsg++">双向绑定(defineModel)({{ childMsg }})</a-button>
      <a-button type="primary">Item3</a-button>
    </a-space>
    <helpCompont />
  </div>
</template>
<script setup>
import helpCompont from "./helpCompont.vue"
defineOptions({
  inheritAttrs: false,
})
const props = defineProps({
  msg: {
    type: String,
    require: false,
    default: "",
  },
})
const emit = defineEmits(["sendMsg"])
const childMsg = defineModel()
</script>
<style scoped>
.child_box {
  margin-top: 60px;
  background-color: coral;
}
</style>
