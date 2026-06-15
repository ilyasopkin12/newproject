import { apiClient } from './client';
import { attachAuthInterceptor, attachRetryInterceptor, attachRefreshInterceptor } from './interceptors';

attachAuthInterceptor(apiClient);
attachRetryInterceptor(apiClient);
attachRefreshInterceptor(apiClient);
