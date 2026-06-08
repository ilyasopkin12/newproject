import type { AxiosInstance, AxiosError, AxiosRequestConfig } from "axios";
import { MAX_NETWORK_RETRIES } from "../config";

import type { RetryConfig } from "../types";



export function attachRetryInterceptor(client: AxiosInstance) : void {
    client.interceptors.response.use(
    (response) => response,
    async (error : AxiosError) => {
        const original = error.config as RetryConfig | undefined
        const status = error.response?.status
        if(original && (status === undefined || (status >= 500 && status <= 599))) {
            original._networkRetryCount = original._networkRetryCount ?? 0
            if ( original._networkRetryCount < MAX_NETWORK_RETRIES) {
                original._networkRetryCount += 1
                return client(original)
            }
        return Promise.reject(error)
        }
}
)}