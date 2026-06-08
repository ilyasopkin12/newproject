import { apiClient } from "@/shared/api"
import type { User } from "../model"

export async function getCurrentUser(): Promise<User> {
  const { data } = await apiClient.get<User>("/auth/me")
  return data
}