
import { apiClient } from '@/shared/api';
import type { LoginTokensBody, LoginPayload } from '@/shared/api/types';


export async function postLogin(payload: LoginPayload) {
  const { data } = await apiClient.post<LoginTokensBody>(
    '/auth/login',
    payload,
    { withCredentials: true },
  );
  return data;
}