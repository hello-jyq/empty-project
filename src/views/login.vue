<template>
  <div class="login_box">
    <a-form ref="formRef" :model="loginForm" :style="{ width: '600px' }" :label-col-props="{ flex: '80px' }" @submit="handleSubmit">
      <h1>登陆</h1>

      <a-form-item
        field="userName"
        label="用户名"
        :rules="[
          { required: true, message: 'name is required' },
          { minLength: 5, message: 'must be greater than 5 characters' },
        ]"
      >
        <a-input v-model="loginForm.userName" placeholder="please enter your username..." allow-clear />
      </a-form-item>
      <a-form-item field="passWorld" label="用户名" :rules="[{ required: true, message: 'passWorld is required' }]">
        <a-input v-model="loginForm.passWorld" placeholder="please enter your username..." allow-clear />
      </a-form-item>

      <a-space direction="vertical">
        <a-button status="success" long shape="round" html-type="submit">登陆</a-button>
        <a-button shape="round" long @click="$refs.formRef.resetFields()">Reset</a-button>
      </a-space>
    </a-form>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { userStore } from "@/stores"
const Store = userStore()
const Router = useRouter()
let loginInfo = {
  token: "aaaa-bbbb-cccc-dddd",
  userName: "test",
  menu: [
    {
      id: "menu-home",
      resName: "首页",
      parentId: "",
      resUrl: "/home",
      resFile: "/views/home",
      resLevel: "0",
      displayOrder: 1,
      icon: "icon-shouye",
      children: [],
    },
    {
      id: "menu-mine",
      resName: "我的",
      parentId: "",
      resUrl: "/mine",
      resFile: "/views/mine",
      resLevel: "0",
      displayOrder: 2,
      icon: "icon-sucai",
      children: [
        {
          id: "menu-add",
          resName: "加",
          parentId: "menu-mine",
          resUrl: "/mine/add",
          resFile: "/views/mine/add",
          resLevel: "1",
          displayOrder: 3,
          icon: "icon-jia",
          children: [],
        },
        {
          id: "menu-remove",
          resName: "查询一览",
          parentId: "menu-mine",
          resUrl: "/mine/remove",
          resFile: "/views/mine/remove",
          resLevel: "1",
          displayOrder: 4,
          icon: "icon-jian",
          children: [],
        },
      ],
    },
    {
      id: "menu-help",
      resName: "帮助",
      parentId: "",
      resUrl: "/help",
      resFile: "/views/help",
      resLevel: "0",
      displayOrder: 5,
      icon: "icon-bangzhu",
      children: [],
    },
  ],
}
const formRef = ref(null)
const loginForm = ref({
  userName: "",
  passWorld: "",
})
const handleSubmit = ({ values, errors }) => {
  console.log(values)
  if (errors == undefined) {
    Store.$patch({
      token: loginInfo.token,
      userName: loginInfo.userName,
      menuList: loginInfo.menu,
      loginStatus: "yes",
    })
    Router.push({
      path: "/home",
    })
  }
}
</script>
<style>
:root {
  --text-border-color: #7d2ae8;
  --title-animation-color: #6d1ed3;
  --button-animation-color: #7d2ae8;
  --input-bottom-animation-color: #7d2ae8;
}
.login_box {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
