import { apiClient } from "@/shared/api/client";
import type { Appointment } from "../model/types";

export async function getAppointments (): Promise<Appointment[]> {
    const { data } = await apiClient.get<Appointment[]>("/me/appointments")
    return data
}