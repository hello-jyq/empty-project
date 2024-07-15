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
<script>
export default {
  name: "getOrderDetail",
  data() {
    return {
      orderNo: "",
      preOrderNo: "",
      orderDetail: {},
      orderDetails: [], //商品明细
      loading: true,
    }
  },
  filters: {
    dateFilter(dateStr) {
      return dateStr.substring(0, 19)
    },
    // 千分位
    fmoney(s) {
      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(2) + ""
      var l = s.split(".")[0].split("").reverse()
      var r = s.split(".")[1]
      var t = ""
      // console.log(123321);
      for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "")
      }
      return t.split("").reverse().join("") + "." + r
    },
    qtyFilter(qty) {
      return parseInt(qty)
    },
  },
}
</script>
