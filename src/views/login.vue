<template>
  <div class="login_box">
    <a-form ref="formRef" :model="loginForm" :style="{ width: '600px' }" :label-col-props="{ flex: '80px' }" @submit="handleSubmit">
      <!-- <h1>登陆</h1> -->
      <!-- <a-form-item
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
      </a-space> -->

      <div class="login">
        <button class="title" data-text="Awesome">
          <span class="actual-text">&nbsp;LOGIN&nbsp;FORM&nbsp;</span>
          <span aria-hidden="true" class="hover-text"> &nbsp;LOGIN&nbsp;FORM&nbsp; </span>
        </button>
        <div class="field-box">
          <input class="account field" type="text" required="required" />
          <span class="holder">account</span>
          <span class="active-border"></span>
        </div>
        <div class="field-box">
          <input class="account field" type="password" required="required" />
          <span class="holder">password</span>
          <span class="active-border"></span>
        </div>
        <button class="submit" type="submit">登录</button>
        <button class="submit" style="background-color: #f9f9f9; color: #666665" @click="$refs.formRef.resetFields()">Reset</button>
        <!-- <a-space direction="vertical">
          <a-button status="success" class="submit" long shape="round" html-type="submit">登陆</a-button>
          <a-button shape="round" long @click="$refs.formRef.resetFields()">Reset</a-button>
        </a-space> -->
        <!-- <button class="submit">登录</button>
      <a-button shape="round" long @click="$refs.formRef.resetFields()">Reset</a-button> -->
      </div>
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
          resName: "减",
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
    {
      id: "menu-thres",
      resName: "thres学习",
      parentId: "",
      resUrl: "/thress",
      resFile: "/views/thres",
      resLevel: "0",
      displayOrder: 6,
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
  /* --title-animation-color: #37ff8b; */
  /* --button-animation-color: #7d2ae8; */
  /* --input-bottom-animation-color: #7d2ae8; */
  /* --text-border-color: rgba(255, 255, 255, 0.6); */
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
/* .login_box .arco-form {
  height: 400px;
  justify-content: space-evenly;
} */
.title {
  margin: 0 0 15px 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  text-align: center;
}
.submit {
  position: relative;
  display: block;
  top: 15px;
  width: 100px;
  margin: 20px auto 0;
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: var(--button-animation-color);
  transition: all 0.2s ease;
  z-index: 2;
}

.submit:active {
  transform: scale(0.96);
}

.submit:before,
.submit:after {
  position: absolute;
  z-index: 2;
  content: "";
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.submit:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, var(--button-animation-color) 20%, transparent 30%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, var(--button-animation-color) 15%, transparent 20%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%);
  background-size:
    10% 10%,
    20% 20%,
    15% 15%,
    20% 20%,
    18% 18%,
    10% 10%,
    15% 15%,
    10% 10%,
    18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position:
      5% 90%,
      10% 90%,
      10% 90%,
      15% 90%,
      25% 90%,
      25% 90%,
      40% 90%,
      55% 90%,
      70% 90%;
  }

  50% {
    background-position:
      0% 80%,
      0% 20%,
      10% 40%,
      20% 0%,
      30% 30%,
      22% 50%,
      50% 50%,
      65% 20%,
      90% 30%;
  }

  100% {
    background-position:
      0% 70%,
      0% 10%,
      10% 30%,
      20% -10%,
      30% 20%,
      22% 40%,
      50% 40%,
      65% 10%,
      90% 20%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
}

.submit:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, var(--button-animation-color) 15%, transparent 20%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%),
    radial-gradient(circle, var(--button-animation-color) 20%, transparent 20%);
  background-size:
    15% 15%,
    20% 20%,
    18% 18%,
    20% 20%,
    15% 15%,
    20% 20%,
    18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
  0% {
    background-position:
      10% -10%,
      30% 10%,
      55% -10%,
      70% -10%,
      85% -10%,
      70% -10%,
      70% 0%;
  }

  50% {
    background-position:
      0% 80%,
      20% 80%,
      45% 60%,
      60% 100%,
      75% 70%,
      95% 60%,
      105% 0%;
  }

  100% {
    background-position:
      0% 90%,
      20% 90%,
      45% 70%,
      60% 110%,
      75% 80%,
      95% 70%,
      110% 10%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
}
/* title styling */
.title {
  letter-spacing: 3px;
  text-decoration: none;
  font-size: 2em;
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-border-color);
}
/* this is the text, when you hover on title */
.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--title-animation-color);
  width: 0%;
  inset: 0;
  border-right: 6px solid var(--title-animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--title-animation-color);
}
/* hover */
.title:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--title-animation-color));
}

.title {
  -webkit-text-stroke: 1px #fff;
  -webkit-text-fill-color: #32325d;
  text-align: center;
}

.login {
  margin: 200px auto;
  width: 500px;
  padding: 60px 80px;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 #23234a;
  background: #32325d;
}

.active-border {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 1px;
  width: 100%;
  transform: scaleX(0);
  background-color: var(--input-bottom-animation-color);
  transition: all 0.5s;
  transform-origin: center;
}

.field:focus ~ .active-border {
  transform: scaleX(1);
}

.field-box {
  border-bottom: 1px solid #b2b2b2;
  position: relative;
  font-size: 18px;
  margin-top: 40px;
}

.field {
  border: none;
  outline: none;
  width: 100%;
  height: 34px;
  background: none;
  transition: all 0.5s;
  caret-color: #fff;
  color: #cfc4c4;
  font-size: 16px;
}

.holder {
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 1;
  transition: all 0.5s;
}

.field:focus ~ .holder,
.field:valid ~ .holder {
  top: -30px;
  color: #fff;
  font-size: 22px;
}
</style>
