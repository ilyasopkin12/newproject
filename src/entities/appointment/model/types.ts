import type { Doctor } from "@/entities/doctor/model/types"
import type { User } from "@/entities/user/model/types"

export type AppointmentStatus = 
    | "CONFRIMED"
    | "CANCELLED_BY_PATIENT"
    | "CANCELLED_BY_ADMIN";

export type ConsultationType =
    | "IN_PERSON"
    | "ONLINE";

export type Appointment = {
    id: string,
    patient: User,
    doctor: Doctor,
    status: AppointmentStatus[],
    consultationType: ConsultationType[],
    comment: string | null,
    createdAt: string,
    cancelledAt: string | null
}