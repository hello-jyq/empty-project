import { getRequest, postRequest, downloadGet, downloadPost } from "./base/request"
export const requestPostTest = (params) => {
  return getRequest("/api/posts", params)
}

export const requestApi1 = () => {
  return getRequest("/api/crm/comm/mcflist")
}

export const requestApi2 = ({ itemType, file }, progress = () => {}) => {
  return postRequest(`/api/image/${itemType}/attachmentupload`, file, progress)
}

export const requestApi3 = (params) => {
  return downloadGet(`/api/${params.funcDiv}/download/${params.id}`)
}

export const requestApi4 = (params) => {
  return downloadPost("/api/crm/comm/download", params)
}
