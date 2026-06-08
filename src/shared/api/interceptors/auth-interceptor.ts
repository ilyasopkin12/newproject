import type { AxiosInstance } from "axios"
import { tokenStorage } from "@/shared/api/token-storage"

export function attachAuthInterceptor(client: AxiosInstance): void {
    client.interceptors.request.use((config) => {
    const token =tokenStorage.getAccessToken()
    if(token) {
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
}