import { apiClient } from "@/shared/api/client";
import { tokenStorage } from "@/shared/api/token-storage";
import type { User } from "@/entities/user/model/types";

export type RegisterPayload = {
    email: string;
    password: string;
    name: string;
    surname: string;
}

type RegisterTokensResponse = {
    accessToken: string;
    refreshToken: string;
}

export async function registerRequest(payload: RegisterPayload): Promise<User> {
    const { data: tokens } = await apiClient.post<RegisterTokensResponse>(
        "/auth/register",
        payload,
        { withCredentials: true }
    )
    tokenStorage.setAccessToken(tokens.accessToken)
    const { data: me } = await apiClient.get<User>("/auth/me")
    tokenStorage.setUser(me)
    return me;
}