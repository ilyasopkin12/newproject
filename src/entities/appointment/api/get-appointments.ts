import { apiClient } from "@/shared/api"

import type { Appointment } from "../model"

export async function getAppointments (): Promise<Appointment[]> {
    const { data } = await apiClient.get<Appointment[]>("/me/appointments")
    return data
}
