import { apiClient } from "@/shared/api/client";
import { tokenStorage } from "@/shared/api/token-storage";
import type { User } from "@/entities/user/model/types";

export type LoginPayload = {
    email : string
    password : string
}

type LoginTokensResponse = {
    accessToken : string
    refreshToken : string
}

export async function loginRequest(payload: LoginPayload): Promise<User> {
    const {data : tokens} = await apiClient.post<LoginTokensResponse>("/auth/login", payload, {withCredentials: true})
    tokenStorage.setAccessToken(tokens.accessToken)
    const {data: me} = await apiClient.get<User>("/auth/me")
    tokenStorage.setUser(me)
    return me
}
