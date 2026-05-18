import { useQuery } from "@tanstack/react-query"

import { tokenStorage } from "@/shared/api"

import { getAppointments } from "../api"

export function usePatientAppointment() {
    const isAuthenticated = Boolean(tokenStorage.getUser())

    return useQuery({
      queryKey: ["appointments", "patient"],
      queryFn: getAppointments,
      enabled: isAuthenticated,
    })
}
