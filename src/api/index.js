import { getRequest, postRequest } from "./base/request"

// The examples keep their original endpoints outside the template's /api namespace.
export const requestPostTest = (params) => getRequest("/devapi/posts", params, { baseURL: "/" })

export const getUserList = (params) => postRequest("/localapi/user/list", params, { baseURL: "/" })
