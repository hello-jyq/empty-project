<template>
  <h1>减</h1>
  <a-form :model="searchForm" label-align="left" :label-col-props="{ flex: '100px' }" :wrapper-col-props="{ flex: 'auto' }" class="head_form">
    <a-form-item label="表ID" field="id">
      <a-select v-model="searchForm.id" allow-clear allow-search :placeholder="i18n.global.tc('msg.v002')">
        <a-option v-for="item in idOptions || []" :key="item.id" :value="item.id">{{ item.name }}</a-option>
        <template #arrow-icon>
          <icon-down style="font-size: large" />
        </template>
      </a-select>
    </a-form-item>
    <a-form-item label="用户id" field="userId">
      <a-select v-model="searchForm.userId" allow-clear allow-search :placeholder="i18n.global.tc('msg.v002')">
        <a-option v-for="item in userIdOptions || []" :key="item.id" :value="item.id">{{ item.name }}</a-option>
        <template #arrow-icon>
          <icon-down style="font-size: large" />
        </template>
      </a-select>
    </a-form-item>
    <a-form-item field="title" label="标题">
      <a-input v-model="searchForm.title" :placeholder="i18n.global.tc('msg.v001')" allow-clear />
    </a-form-item>
    <a-button type="primary" :loading="loading" @click="getApi">请求</a-button>
  </a-form>

  <a-table :data="pageInfo" style="margin-top: 30px" :bordered="{ cell: true }" :size="'small'" :stripe="true">
    <template #columns>
      <a-table-column title="userInfo">
        <a-table-column title="userId" data-index="userId"></a-table-column>
        <a-table-column title="id" data-index="id" :width="50"></a-table-column>
      </a-table-column>
      <a-table-column title="title" data-index="title"></a-table-column>
      <a-table-column title="body" data-index="body"></a-table-column>
      <a-table-column title="Optional" :width="200">
        <template #cell="{ record }">
          <a-button @click="Modal.info({ title: record.title, content: record.body })">view</a-button>
        </template>
      </a-table-column>
    </template>
  </a-table>
</template>
<script setup>
import { ref } from "vue"
import { Modal } from "@arco-design/web-vue"
import { requestPostTest } from "@/api/index"
import i18n from "@/local/index.js"
const searchForm = ref({
  id: null,
  userId: null,
  title: null,
  body: null,
})

const loading = ref(false)
const idOptions = ref([
  { id: 1, name: "一号" },
  { id: 2, name: "二号" },
  { id: 3, name: "三号" },
  { id: 4, name: "四号" },
])
const userIdOptions = ref([
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" },
  { id: 6, name: "6" },
  { id: 7, name: "7" },
  { id: 8, name: "8" },
])

const pageInfo = ref([])
const getApi = () => {
  // 检索结果下载
  Modal.info({
    maskClosable: false,
    content: "是否确认请求？",
    okText: "确认",
    cancelText: "取消",
    hideCancel: false,
    titleAlign: "start",
    onOk: () => {
      loading.value = true
      requestPostTest(searchForm.value)
        .then((res) => {
          pageInfo.value = res
        })
        .catch((err) => {
          pageInfo.value = err
        })
        .finally(() => {
          loading.value = false
        })
    },
  })
}
</script>
