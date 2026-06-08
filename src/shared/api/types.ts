import type { AxiosRequestConfig } from "axios"

export type RetryConfig = AxiosRequestConfig & {
  _retry?: boolean
  _networkRetryCount?: number
}