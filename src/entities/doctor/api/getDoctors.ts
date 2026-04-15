import { apiClient } from "@/shared/api/client.js";
import type { Doctor } from "../model/types.js";

export async function getDoctors(): Promise<Doctor[]> {
    const { data } = await apiClient.get<{items: Doctor[]}>("/doctors")
    return data.items
}