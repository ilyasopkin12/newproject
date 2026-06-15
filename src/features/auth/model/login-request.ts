import type { LoginPayload } from "@shared/api/types";
import { tokenStorage } from "@/shared/api";
import { getCurrentUser } from '@/entities/user';
import { readLoginTokens } from "@/shared/api/lib";
import type { User } from "@/entities/user";
import { postLogin } from "../api";


export async function loginRequest(payload: LoginPayload): Promise<User> {
    const data = await postLogin(payload)
    const { access, refresh } = readLoginTokens(data);
    tokenStorage.setAccessToken(access);
    if (refresh) {
      tokenStorage.setRefreshToken(refresh);
    }
    const me = await getCurrentUser();
    tokenStorage.setUser(me);
    return me;
  }