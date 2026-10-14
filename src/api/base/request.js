import client from "../client"
import { h } from "vue"
import { Modal } from "@arco-design/web-vue"
import i18n from "@/local"
import router from "@/router"
import { pinia, userStore } from "@/stores"

let showTimeoutErr = false

const showModal = (content, modalClass = "msg_tip_model") =>
  Modal.info({
    maskClosable: false,
    title: "提示",
    titleAlign: "start",
    okText: i18n.global.t("com.okText"),
    content,
    width: "auto",
    modalClass,
  })

const formatMessage = (data) => {
  const details = (Array.isArray(data?.messages) ? data.messages : [])
    .filter((item) => !item.fieldName)
    .map((item) => {
      let message = item.msg || item.message || ""
      Object.values(item.arguments || {}).forEach((value, index) => {
        message = message.split(`{${index}}`).join(String(value))
      })
      return message
    })
  return [data?.msg || data?.message, ...details].filter(Boolean).join("\n")
}

const checkResponse = (data) => {
  if (data?.success === false || (data?.success === true && data?.messages?.length > 0)) {
    throw data
  }
  return data
}

const handleError = async (error) => {
  let data = error?.response?.data || error
  if (data?.type?.includes("json") && typeof data.text === "function") {
    try {
      data = JSON.parse(await data.text())
    } catch {
      data = error
    }
  }

  const status = error?.response?.status
  if (status === 401) {
    userStore(pinia).logout()
    if (!showTimeoutErr && !document.querySelector(".model401")) {
      showTimeoutErr = true
      Modal.info({
        maskClosable: false,
        title: "提示",
        titleAlign: "start",
        okText: i18n.global.t("com.okText"),
        content: i18n.global.t("msg.e094"),
        modalClass: "msg_tip_model model401",
        hideCancel: false,
        cancelText: i18n.global.t("com.cancelButton"),
        onCancel: () => {
          showTimeoutErr = false
        },
        onOk: async () => {
          showTimeoutErr = false
          await router.replace("/login")
        },
      })
    }
  } else if (status === 403) {
    if (!document.querySelector(".model403") && !document.querySelector(".model401")) {
      showModal(i18n.global.t("comm.e0004"), "msg_tip_model model403")
    }
  } else if (status === 500) {
    if (!document.querySelector(".model500")) {
      showModal(data?.msg || i18n.global.t("comm.e0001"), "msg_tip_model model500")
    }
  } else {
    const message = formatMessage(data) || i18n.global.t("comm.e0001")
    showModal(h("div", { style: { whiteSpace: "pre-line" } }, message))
  }
  if (error && typeof error === "object") {
    error.handledByRequest = true
  }
  throw error
}

const request = (promise, check = checkResponse) => promise.then(check).catch(handleError)

export const getRequest = (path, params, config = {}) => request(client.get(path, { ...config, params }))

export const postRequest = (path, data, config = {}) => request(client.post(path, data, config))

export const uploadPost = (path, formData, onProgress, config = {}) =>
  request(client.post(path, formData, { ...config, onUploadProgress: onProgress }))

const getFileName = (disposition) => {
  const encoded = /filename\*\s*=\s*(?:UTF-8'')?([^;]+)/i.exec(disposition)?.[1]
  const plain = /filename\s*=\s*(?:"([^"]+)"|([^;]+))/i.exec(disposition)
  const value = (encoded || plain?.[1] || plain?.[2] || "").trim().replace(/^"|"$/g, "")
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

const saveFile = (response) => {
  const fileName = getFileName(response.headers["content-disposition"] || "")
  if (!fileName) {
    throw new Error("Download response has no filename")
  }

  const url = URL.createObjectURL(response.data)
  const link = document.createElement("a")
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 0)
  return response
}

const checkDownload = async (response, isDownload) => {
  const type = response.headers["content-type"] || response.data?.type || ""
  if (type.includes("json")) {
    checkResponse(JSON.parse(await response.data.text()))
  }
  return isDownload ? saveFile(response) : response
}

export const downloadGet = (path, params, isDownload = true, config = {}) =>
  request(client.get(path, { ...config, params, responseType: "blob", rawResponse: true }), (response) => checkDownload(response, isDownload))

export const downloadPost = (path, data, config = {}) =>
  request(client.post(path, data, { ...config, responseType: "blob", rawResponse: true }), (response) => checkDownload(response, true))
