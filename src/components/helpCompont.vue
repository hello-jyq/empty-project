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
import { getOrderDetail } from "@/api/J206_AgentMyOrdersDetail"
import { addToCart } from "@/api/J206_AgentMyOrdersDetail"
import { cancelOrder } from "@/api/J206_AgentMyOrdersDetail"
import { getOrderDetails } from "@/api/J206_AgentMyOrdersDetail"
import { getLogisticsDetails } from "@/api/J206_AgentMyOrdersDetail"

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
  created() {
    this.orderNo = this.$route.query.orderNo
    this.preOrderNo = this.$route.query.preOrderNo
    console.log(22222, this.orderNo, this.preOrderNo)
    if (this.orderNo || this.preOrderNo) {
      this.loading = true
      this.orderDetail = {
        spots: {
          confirmDate: "",
          confirmUser: "",
          customerName: "南京鼓楼区恒沙廊美发店 Bright salon[全球洗护]",
          customerNo: "00001011",
          deliveryDate: "",
          invoiceCode: "",
          invoiceDate: "",
          j006GetOrderDetails: [],
          j103GetOrderDetails: null,
          mainCorpNo: "01",
          orderDate: "2024-05-06 18:13:45",
          orderNo: "01-AO202405-0053",
          orderStatus: "待确认",
          orderUser: "Brigh",
          outerOrderNo: "AO202405-0053",
          paymentDate: "",
          preOrderNo: "",
          preOuterOrderNo: "",
          shipTo: "江苏省南京市鼓楼区湖南路一号凤凰广场C座F1",
          shipToName: "Bright salon[全球洗护]",
          shipToNo: "00001011001",
          transportCompanyName: "",
          transportCompanyNo: "",
          transportNo: "",
        },
        futures: "",
      }
      this.orderDetail = []
      if (this.orderNo) {
        getOrderDetail(this.orderNo, "").then((response) => {
          this.orderDetail.futures = response.data.content
          console.log()
          // this.orderDetail = response.data.content;
          // this.orderDetails = response.data.content.j006GetOrderDetails;
          this.loading = false
        })
      }
      if (this.preOrderNo) {
        getOrderDetail("", this.preOrderNo).then((response) => {
          this.orderDetail.spots = response.data.content
          // this.orderDetail = response.data.content;
          // this.orderDetails = response.data.content.j006GetOrderDetails;
          this.loading = false
        })
      }
      console.log(343333, this.orderDetail)
    } else {
      this.$router.push({
        name: "J206_AgentMyOrders",
      })
    }
  },
  methods: {
    show() {},
    // 再次购买
    repurchase() {
      getOrderDetails(this.orderNo).then((response) => {
        if (response.data.success) {
          var data = response.data.content
          // console.log(data);
          this.$router.push({
            name: "J205_AgentSubmitOrder",
            params: {
              carts: data,
              flag: true,
              submintFlag: true,
              lastOrder: this.orderNo,
            },
          })
        }
      })
    },
    // 加入购物车
    addToCart() {
      this.loading = false
      var data = this.orderDetail.j006GetOrderDetails.filter((t) => t.salesMode == "C11")
      this.$confirm("是否加入到购物车?", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning",
      }).then(() => {
        addToCart(data)
          .then((response) => {
            var result = response.data
            if (result.success) {
              this.loading = false
              this.$message({
                message: "添加成功",
                type: "success",
              })
              this.$emit("countShopping")
            } else {
              this.$message({
                message: response.data.message,
                type: "warning",
              })
            }
          })
          .catch((error) => {
            this.loading = false
          })
      })
    },
    // 物流详细
    logisticsDetail() {
      this.$router.push({
        name: "J206_LogisticsDetail",
        params: { orderNo: this.orderNo, orderDetail: this.orderDetail },
      })
    },
    // 取消订单
    cancelOrder() {
      this.$confirm("是否要取消订单?", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning",
      })
        .then(() => {
          this.loading = true
          cancelOrder(this.orderNo).then((response) => {
            var result = response.data
            if (result.success) {
              // console.log(response.data.content);
              getOrderDetail(this.orderNo).then((response2) => {
                var result2 = response2.data
                if (result2.success) {
                  this.loading = false
                  this.orderDetail = response2.data.content
                  // console.log(this.orderDetail);
                  this.$message({
                    message: "订单已取消",
                    type: "success",
                  })
                } else {
                  this.$message({
                    message: response2.data.message,
                    type: "warning",
                  })
                }
              })
            } else {
              this.$message({
                message: response.data.message,
                type: "warning",
              })
            }
          })
        })
        .catch((error) => {
          this.loading = false
        })
    },
    back() {
      this.$router.push({
        name: "J206_AgentMyOrders",
      })
    },
    totalAmountAll: function () {
      var sum = this.orderDetails.reduce(function (total, item2) {
        var price = item2.qty * item2.afterTaxPrice
        // console.log(total + price);
        return total + price
      }, 0)
      return sum.toFixed(2)
    },
  },
  computed: {
    ...mapGetters(["agentUserName", "agentUserNo", "customerNo"]),
  },
}
</script>
