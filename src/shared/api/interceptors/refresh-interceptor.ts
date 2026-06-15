import type { AxiosError, AxiosInstance } from 'axios';
import type { RetryConfig } from '../types';

export function attachRefreshInterceptor(client: AxiosInstance): void {
  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const original = error.config as RetryConfig | undefined;
      const status = error.response?.status;
      const reqUrl = original?.url ?? '';

      if (
        status === 401 &&
        (reqUrl.includes('/auth/login') || reqUrl.includes('/auth/refresh'))
      ) {
        return Promise.reject(error);
      }

      if (!original || status !== 401 || original._retry) {
        return Promise.reject(error);
      }

      original._retry = true;
    }
  );
}
