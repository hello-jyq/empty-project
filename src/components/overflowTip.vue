<template>
  <a-tooltip :content="tip" :disabled="!tooltipDisabled" :align-point="true" :position="position" :show-arrow="showArrow" background-color="#ffffff">
    <div
      ref="textElementRef"
      v-resize="domResize"
      class="ellipsis"
      :style="{
        width: maxWidth + 'px',
        height: maxHeight + 'px',
        lineClamp: lineClamp,
        WebkitLineClamp: lineClamp,
      }"
    >
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </a-tooltip>
</template>
<script setup>
import { ref, watch, toRefs, onMounted } from "vue"
const props = defineProps({
  // 提示文字
  tip: {
    type: String,
    required: false,
    default: "",
  },
  maxWidth: {
    type: Number,
    required: false,
    default: null,
  },
  maxHeight: {
    type: Number,
    required: false,
    default: null,
  },
  // 显示行数
  lineClamp: {
    type: Number,
    required: false,
    default: 1,
  },
  // 弹出框是否跟随鼠标
  alignPoint: {
    type: Boolean,
    required: false,
    default: false,
  },
  // 弹出框是否显示箭头
  showArrow: {
    type: Boolean,
    required: false,
    default: true,
  },
  // 弹出位置
  position: {
    type: String,
    required: false,
    default: "top",
  },
})

const textElementRef = ref(null)
const tooltipDisabled = ref(false)
const { tip } = toRefs(props)

const compareSize = () => {
  const el = textElementRef.value
  const compareWidth = el ? el.scrollWidth > el.clientWidth : false
  const compareHeight = el ? el.scrollHeight > el.clientHeight : false
  tooltipDisabled.value = compareWidth || compareHeight
}
onMounted(() => {
  compareSize()
})

watch(
  () => tip.value,
  () => {
    setTimeout(() => {
      compareSize()
    })
  },
  { deep: true },
)
// 自定义指令
const vResize = {
  mounted(el, binding) {
    let width = 0
    let height = 0
    function isResize() {
      const style = document.defaultView.getComputedStyle(el)
      if (width !== style.width || height !== style.height) {
        binding.value({ width: style.width, height: style.height })
      }
      width = style.width
      height = style.height
    }
    el.__vueSetInterval__ = setInterval(isResize, 300)
  },
  onMounted(el) {
    clearInterval(el.__vueSetInterval__)
  },
}

const domResize = () => {
  compareSize()
}
</script>
<style scoped>
.ellipsis {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  word-break: break-all;
  white-space: normal;
}
</style>
