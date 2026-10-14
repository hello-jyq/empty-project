<template>
  <a-tooltip
    :content="tip"
    :disabled="!tooltipDisabled"
    :align-point="alignPoint"
    :position="position"
    :show-arrow="showArrow"
    background-color="#ffffff"
  >
    <div
      ref="textElementRef"
      v-resize="domResize"
      class="ellipsis"
      :style="{
        width: maxWidth == null ? undefined : maxWidth + 'px',
        height: maxHeight == null ? undefined : maxHeight + 'px',
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
import { ref, watch, onMounted, nextTick } from "vue"
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
  () => [props.tip, props.maxWidth, props.maxHeight, props.lineClamp],
  async () => {
    await nextTick()
    compareSize()
  },
)
// 自定义指令
const vResize = {
  mounted(el, binding) {
    el.__resizeObserver__ = new ResizeObserver(() => binding.value())
    el.__resizeObserver__.observe(el)
  },
  unmounted(el) {
    el.__resizeObserver__.disconnect()
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
