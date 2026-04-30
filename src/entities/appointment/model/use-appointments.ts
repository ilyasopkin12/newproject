import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "../api/get-appointments";
import { useAuth } from "@/shared/lib/auth/useAuth";
export function usePatientAppointment() {
    const { isAuthenticated } = useAuth()
    return useQuery({
      queryKey: ["appointments", "patient"],
      queryFn: getAppointments,
      enabled: isAuthenticated,
    });
  }