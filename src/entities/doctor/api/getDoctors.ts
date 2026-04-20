import { apiClient } from "@/shared/api/client";
import type { Doctor } from "../model/types";

export async function getDoctors(): Promise<Doctor[]> {
    const { data } = await apiClient.get<{items: Doctor[]}>("/doctors")
    return data.items
}