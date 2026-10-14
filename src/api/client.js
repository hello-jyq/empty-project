import axios from "axios"
import { pinia, userStore } from "@/stores"

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  timeout: 15000,
})

client.interceptors.request.use((config) => {
  const token = userStore(pinia).token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

client.interceptors.response.use((response) => (response.config.rawResponse ? response : response.data))

export default client
