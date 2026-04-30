import axios from "axios"
import type { AxiosError, AxiosRequestConfig } from "axios"
import { tokenStorage } from "./token-storage"

type RetryConfing = AxiosRequestConfig & {_retry? : boolean; _networkRetryCount?: number}

const API_BASE_URL = "http://localhost:8000"
const MAX_NETWORK_RETRIES = 2;


export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

apiClient.interceptors.request.use((config) => {
    const token =tokenStorage.getAccessToken()
    if(token) {
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

apiClient.interceptors.response.use(
    (response) => response,
    async (error : AxiosError) => {
        const original = error.config as RetryConfing | undefined
        const status = error.response?.status
        if(original && (status === undefined || (status >= 500 && status <= 599))) {
            original._networkRetryCount = original._networkRetryCount ?? 0
            if ( original._networkRetryCount < MAX_NETWORK_RETRIES) {
                original._networkRetryCount += 1
                return apiClient(original)
            }
        }
        const reqUrl = original?.url ?? ""
        if (status === 401 && (reqUrl.includes("/auth/login") || reqUrl.includes("/auth/refresh"))) {
             return Promise.reject(error)
        }

        if (!original || status !==401 || original._retry) {
            return Promise.reject(error)
        }
        original._retry = true

        const refreshToken = tokenStorage.getRefreshToken()
        if (!refreshToken) {
            tokenStorage.clearAllAuth()
            return Promise.reject(error)
        }
        try {
            const refreshResponse = await axios.post<{accessToken: string}>(
                `${API_BASE_URL}/auth/refresh`,
                {},
                {withCredentials:true}
            )
            const d = refreshResponse.data as { accessToken?: string; access_token?: string }
            const newAccessToken = d.accessToken ?? d.access_token
            if (!newAccessToken) {
            tokenStorage.clearAllAuth()
            return Promise.reject(new Error ("Refresh response missing access token"))
            }
            tokenStorage.setAccessToken(newAccessToken)

            original.headers = original.headers ?? {}
            original.headers.Authorization = `Bearer ${newAccessToken}`
            
            return apiClient(original)
        }
        catch (refreshError) {
            tokenStorage.clearAllAuth()
            return Promise.reject(refreshError)
        }
    }
)