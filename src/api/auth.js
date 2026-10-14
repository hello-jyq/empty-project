import { postRequest } from "./base/request"

export async function signIn({ userName, password }) {
  const result = await postRequest("/user/login", { userName, userPassword: password })
  if (!result.token) {
    throw new Error(result.msg || "登录失败")
  }
  return { token: result.token, userName: result.userName || userName }
}
