<template>
  <h1>{{ $t("home.title") }}------ {{ $t("home.date", { para: dayjs().format("YYYY-MM-DD  hh:mm:ss") }) }}</h1>

  {{ count }}
  <a-button @click="count++">点击 </a-button>
  <div style="margin: 60px 0">
    <OverflowTip :tip="tipsValue" :maxWidth="100">{{ tipsValue }}</OverflowTip>
  </div>
  <a-input v-model="tipsValue"></a-input>

  <div class="container">
    <img
      src="https://png.pngtree.com/png-clipart/20220404/original/pngtree-d-rendering-male-character-profile-or-avatar-happy-young-man-with-png-image_7512919.png"
      alt="This is a image"
    />
  </div>
</template>
<script setup>
import { ref } from "vue"
import dayjs from "dayjs"
const count = ref(0)
const aaa = ref([1, 2, 3, 4, 5])
const tipsValue = ref("1")

aaa.value.reduce((a, b) => {
  a + b, 0
  console.log(222222, a, b)
})
</script>
<style scoped>
:root {
  --columns: 3;
}

.container {
  margin: 0;
  display: grid;
  place-content: center;
  background: #e0e4cc;
}
.container img {
  --s: 200px; /* image 大小*/
  --b: 6px; /* border 像素*/
  --c: #ae3ec9; /* border 颜色 */
  --cb: #e9ecef; /* 背景色 */
  --f: 1; /* 初始缩放 */

  width: var(--s);
  aspect-ratio: 1;
  padding-top: calc(var(--s) / 5);
  cursor: pointer;
  border-radius: 0 0 999px 999px;
  --_g: 50% / calc(100% / var(--f)) 100% no-repeat content-box;
  --_o: calc((1 / var(--f) - 1) * var(--s) / 2 - var(--b));
  outline: var(--b) solid var(--c);
  outline-offset: var(--_o);
  background: radial-gradient(circle closest-side, var(--cb) calc(99% - var(--b)), var(--c) calc(100% - var(--b)) 99%, #0000) var(--_g);
  -webkit-mask:
    linear-gradient(#000 0 0) no-repeat 50% calc(1px - var(--_o)) / calc(100% / var(--f) - 2 * var(--b) - 2px) 50%,
    radial-gradient(circle closest-side, #000 99%, #0000) var(--_g);
  transform: scale(var(--f));
  transition: 0.5s;
}
.container img:hover {
  --f: 1.4;
}
</style>
