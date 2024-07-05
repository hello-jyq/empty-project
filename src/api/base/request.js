import axios from "axios"
import { Modal } from "@arco-design/web-vue"
import router from "@/router"
import i18n from "@/local/index"
import { userStore } from "@/stores"
import { h } from "vue"

let showTimeoutErr = false
axios.defaults.baseURL = import.meta.env.BASE_URL
const instance = axios.create()
// config
instance.defaults.timeout = 60 * 1000
instance.defaults.headers.post["Content-Type"] = "application/json;application/x-www-form-urlencoded;charset=utf8;multipart/form-data"
instance.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest"
instance.interceptors.request.use(
  function (config) {
    config.headers["X-CSRF-TOKEN"] = `${localStorage.getItem("token")}` || ""
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// intercept response
instance.interceptors.response.use(
  (result) => {
    if (result.status === 200) {
      showTimeoutErr = false
      if (result.data && result.data) {
        return Promise.resolve(result.data)
      }
      return Promise.reject(result)
    }
    return Promise.reject(result)
  },
  (err) => {
    // const app = require("../../main")
    // const { proxy } = app
    // if (proxy && proxy.$loading) {
    //   proxy.$loading.hide()
    // }

    if (err.response?.status === 403) {
      // 多个弹窗的情况下只触发一次
      if (document.querySelector(".model403") || document.querySelector(".model401")) {
        return
      }
      Modal.info({
        maskClosable: false,
        okText: i18n.global.tc("com.okText"),
        content: i18n.global.tc("comm.e0004"),
        width: "auto",
        title: "エラー",
        titleAlign: "start",
        modalClass: "msg_tip_model model403",
      })
    }
    if (err.response?.status === 500) {
      // 多个弹窗的情况下只触发一次
      if (document.querySelector(".model500")) {
        return
      }
      Modal.info({
        maskClosable: false,
        okText: i18n.global.tc("com.okText"),
        content: i18n.global.tc("comm.e0001"),
        width: "auto",
        title: "エラー",
        titleAlign: "start",
        modalClass: "msg_tip_model model500",
      })
    }
    if (err.response?.status === 401) {
      localStorage.setItem("loginStatus", "no")
      localStorage.removeItem("token")
      if (!showTimeoutErr) {
        showTimeoutErr = true
        // 多个弹窗的情况下只触发一次
        if (document.querySelector(".model401")) {
          return
        }
        Modal.info({
          maskClosable: false,
          title: "エラー",
          titleAlign: "start",
          okText: i18n.global.tc("com.okText"),
          content: i18n.global.tc("msg.e094"),
          modalClass: "msg_tip_model model401",
          hideCancel: false,
          cancelText: i18n.global.tc("com.cancelButton"),
          onCancel: () => {
            showTimeoutErr = false
          },
          onOk: () => {
            const store = userStore()
            window.localStorage.clear()
            store.$reset()
            window.localStorage.clear()
            router
              .replace({
                path: "/login",
              })
              .finally(() => {
                location.reload()
              })
          },
        })
      }
    }
    return Promise.reject(err)
  },
)
const handleError = (response, width) => {
  const { message, messages, success, messageId } = response
  // const app = require("@/main")
  // const { proxy } = app
  // if (!success && proxy && proxy.$loading) {
  //   proxy.$loading.hide()
  // }
  if (message || messages) {
    let messageStr = ""
    //
    if (
      message &&
      message?.length > 0 &&
      messageId &&
      (messageId.indexOf("ERR") === 0 || messageId.indexOf("COMM") === 0 || messageId.indexOf("INFO") === 0)
    ) {
      messageStr = message
      if (messages.length > 0) {
        messages?.forEach((element) => {
          if (!element.fieldName?.length > 0) {
            let tempMsg = element.message
            if (element.arguments && Object.keys(element.arguments)?.length > 0) {
              Object.keys(element.arguments)?.forEach((key) => {
                let idx = Object.keys(element.arguments).indexOf(key)
                tempMsg = tempMsg.replace(`{${idx}}`, element.arguments[key])
              })
            }
            messageStr = messageStr + "\n" + tempMsg
          }
        })
      }
    }
    if (messageStr?.length > 1) {
      Modal.info({
        maskClosable: false,
        okText: i18n.global.tc("com.okText"),
        content: h("div", { class: "content-text" }, messageStr),
        width: "auto",
        title: "エラー",
        titleAlign: "start",
        modalClass: width == "800width" ? "msg_tip_model msg_800_model" : "msg_tip_model",
      })
    }
  }
}

// Post
export const postRequest = (path, params, confirmWarningContinues, progress = () => {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(path, params, {
        onUploadProgress: progress,
      })
      .then((res) => {
        if (res.success === true) {
          if (res.messages?.length > 0) {
            handleError(res)
            reject(res)
          } else {
            if (res.datas?.searchResult?.results === null) {
              let newData = res.datas
              newData.searchResult.results = []
              resolve(newData)
            } else {
              resolve(res.datas || {})
            }
          }
        } else {
          // if (confirmWarningContinues && res.datas?.hasWarning) {  //&& res.messages[0]?.messageId.includes("WARNING")
          if (confirmWarningContinues && res.datas?.hasWarning) {
            resolve(res)
          } else {
            handleError(res, confirmWarningContinues)
            reject(res)
          }
        }
      })
      .catch((err) => {
        reject(err.message)
      })
  })
}

// Get
export const getRequest = (path, params) => {
  // const contextPath = process.env.VUE_APP_CONTEXT_PATH ? process.env.VUE_APP_CONTEXT_PATH : ""
  // path = contextPath + path
  return new Promise((resolve, reject) => {
    instance
      .get(path, {
        params: { ...params },
      })
      .then((res) => {
        // const blob = new Blob([res], {
        //   type: "application/octet-stream;charset=utf-8",
        // })
        // let url = window.URL.createObjectURL(blob)
        if (res.success === true) {
          if (res.datas?.searchResult?.results === null) {
            let newData = res.datas
            newData.searchResult.results = []
            resolve(newData)
          } else {
            resolve(res.datas || {})
          }
        } else {
          handleError(res)
          reject(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

//Get-downloadFile
export function downloadGet(path, params, isDownload = true) {
  const contextPath = process.env.VUE_APP_CONTEXT_PATH ? process.env.VUE_APP_CONTEXT_PATH : ""
  path = contextPath + path
  return new Promise((resolve, reject) => {
    instance
      .get(path, { ...params, responseType: "blob" }, { responseType: "blob" })
      .then((res) => {
        if (res.data) {
          if (isDownload) {
            const blob = new Blob([res.data], {
              type: "application/octet-stream;charset=utf-8",
            })
            const content = res.headers["content-disposition"]
            if (!content) {
              if (res?.data?.type == "application/json") {
                const fr = new FileReader()
                fr.onload = (e) => {
                  handleError(JSON.parse(e.target.result))
                }
                fr.readAsText(res.data)
              }
              reject({})
              return
            }
            const index = content.indexOf("filename=")
            // 下载后文件名
            const fileName = decodeURIComponent(content.substring(index + 9))

            // for IE
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
              window.navigator.msSaveOrOpenBlob(blob, fileName)
            } else {
              // for Non-IE (chrome, firefox etc.)
              const downloadElement = document.createElement("a")
              const href = window.URL.createObjectURL(blob)
              downloadElement.href = href
              downloadElement.download = fileName
              document.body.appendChild(downloadElement)
              downloadElement.click()
              document.body.removeChild(downloadElement)
              window.URL.revokeObjectURL(href)
            }
          }
          resolve(res)
        } else {
          handleError(res)
          reject(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

//post-downloadFile
export function downloadPost(path, params) {
  const contextPath = process.env.VUE_APP_CONTEXT_PATH ? process.env.VUE_APP_CONTEXT_PATH : ""
  path = contextPath + path
  return new Promise((resolve, reject) => {
    instance
      .post(path, params, { responseType: "blob" })
      .then((res) => {
        if (res.data) {
          const fileType = res.headers["application/octet-stream;charset=utf-8"]
          const blob = new Blob([res.data], {
            type: fileType,
          })
          const content = res.headers["content-disposition"]
          if (!content) {
            if (res?.data?.type == "application/json") {
              const fr = new FileReader()
              fr.onload = (e) => {
                handleError(JSON.parse(e.target.result))
              }
              fr.readAsText(res.data)
            }
            reject({})
            return
          }
          const index = content?.indexOf("filename=")
          // 下载后文件名
          let fileName = ""
          if (index >= 0) {
            fileName = decodeURIComponent(content?.substring(index + 9))
          }

          // for IE
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, fileName)
          } else {
            // for Non-IE (chrome, firefox etc.)
            const downloadElement = document.createElement("a")
            const href = window.URL.createObjectURL(blob)
            downloadElement.href = href
            if (fileName?.length > 0) {
              downloadElement.download = fileName
            }
            document.body.appendChild(downloadElement)
            downloadElement.click()
            document.body.removeChild(downloadElement)
            window.URL.revokeObjectURL(href)
          }
          resolve(res)
        } else {
          handleError(res)
          reject(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
