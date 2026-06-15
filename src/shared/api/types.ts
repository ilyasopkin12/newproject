import type { AxiosRequestConfig } from 'axios';

export type RetryConfig = AxiosRequestConfig & {
  _retry?: boolean;
  _networkRetryCount?: number;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginTokensBody = {
  accessToken?: string;
  access_token?: string;
  refreshToken?: string;
  refresh_token?: string;
};