import { apiClient } from "./client";
import { attachAuthInterceptor } from "./interceptors/auth-interceptor"
import { attachRetryInterceptor } from "./interceptors/retry-interceptor"
import { attachRefreshInterceptor } from "./interceptors/refresh-interceptor"

attachAuthInterceptor(apiClient)
attachRetryInterceptor(apiClient)
attachRefreshInterceptor(apiClient)