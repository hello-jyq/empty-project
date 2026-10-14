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
  <div style="margin: 60px 0">
    <a-form :model="searchParams" auto-label-width @submit="getUserListApi">
      <a-row :gutter="24">
        <a-col :span="6">
          <a-form-item field="name" label="Username" label-col-flex="100px">
            <a-input v-model="searchParams.userName" placeholder="please enter your username..." />
          </a-form-item>
        </a-col>
        <a-col :span="4">
          <a-form-item>
            <a-button type="primary" html-type="submit" :loading="loading">检索</a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-alert v-if="requestError" type="error">{{ requestError }}</a-alert>
    <a-alert v-else-if="!requested" type="info">{{ $t("example.requestHint") }}</a-alert>
    <h2>用户列表</h2>
    <a-table :columns="columns" :data="tableData" :loading="loading">
      <template #optional="{ record }">
        <a-button @click="$modal.info({ title: 'Name', content: record.Username })">编辑</a-button>
      </template>
    </a-table>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"
import { getUserList } from "@/api"
import OverflowTip from "@/examples/components/overflowTip.vue"
import dayjs from "dayjs"
const count = ref(0)

const tipsValue = ref("1")
const searchParams = ref({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  userName: "",
})
const columns = [
  {
    title: "ID",
    dataIndex: "uid",
  },
  {
    title: "用户名",
    dataIndex: "userName",
  },
  {
    title: "操作",
    slotName: "optional",
  },
]
const tableData = ref([])
const loading = ref(false)
const requested = ref(false)
const requestError = ref("")
const { t } = useI18n()

const getUserListApi = async () => {
  if (loading.value) {
    return
  }
  requested.value = true
  requestError.value = ""
  loading.value = true
  try {
    const res = await getUserList(searchParams.value)
    if (!Array.isArray(res?.data?.list)) {
      throw new Error("Invalid user list response")
    }
    tableData.value = res.data.list
  } catch {
    tableData.value = []
    requestError.value = t("example.requestFailed")
  } finally {
    loading.value = false
  }
}
</script>
<style scoped></style>
