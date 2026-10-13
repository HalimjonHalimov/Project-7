import { type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import { api } from "./api";

const token: string = "A123"

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (token) {
        config.headers.set("Authorization", `Bearer ${token}`)
    }
    return config
})

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => Promise.reject(error)
)