import { apiClient } from "@/shared/api/client";
import { tokenStorage } from "@/shared/api/token-storage";
import type { User } from "@/entities/user/model/types";

export type LoginPayload = {
    email : string
    password : string
}

type LoginTokensBody = {
    accessToken?: string
    access_token?: string
    refreshToken?: string
    refresh_token?: string
  }
  
  function readLoginTokens(body: unknown): { access: string; refresh?: string } {
    if (!body || typeof body !== "object") {
      throw new Error("Некорректный ответ сервера при входе")
    }
    const o = body as LoginTokensBody
    const access = o.accessToken ?? o.access_token
    const refresh = o.refreshToken ?? o.refresh_token
    if (!access || typeof access !== "string") {
      throw new Error("В ответе входа нет access-токена")
    }
    return {
        access,
        ...(typeof refresh === "string" ? { refresh } : {}),
    }
  }
  
  export async function loginRequest(payload: LoginPayload): Promise<User> {
    const { data } = await apiClient.post<LoginTokensBody>(
      "/auth/login",
      payload,
      { withCredentials: true },
    )
    const { access, refresh } = readLoginTokens(data)
    tokenStorage.setAccessToken(access)
    if (refresh) {
      tokenStorage.setRefreshToken(refresh)
    }
    const { data: me } = await apiClient.get<User>("/auth/me")
    tokenStorage.setUser(me)
    return me
  }
