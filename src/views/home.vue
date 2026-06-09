<template>
  <h1>{{ $t("home.title") }}------ {{ $t("home.date", { para: dayjs().format("YYYY-MM-DD  hh:mm:ss") }) }}</h1>

  {{ count }}

  <a-button @click="count++" type="primary">
    <template #icon> <icon-plus /> </template>点击
  </a-button>
  <a-space fill>
    <a-typography-text>
      <OverflowTip :tip="tipsValue" :maxWidth="100"> {{ tipsValue }}</OverflowTip>
    </a-typography-text>
    <a-input v-model="tipsValue"></a-input>
  </a-space>
  <div style="margin: 60px 0"></div>
</template>
<script setup>
import { ref } from "vue"
import dayjs from "dayjs"
const count = ref(0)
const aaa = ref([1, 2, 3, 4, 5])
const tipsValue = ref("1")

aaa.value.reduce((a, b) => {
  a + b, 0
})
</script>
<style scoped></style>
