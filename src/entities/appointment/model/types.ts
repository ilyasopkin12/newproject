import type { Doctor } from "@/entities/doctor/model/types"
import type { User } from "@/entities/user/model/types"
import type { Doc } from "zod/v4/core";

export type ScheduleSlot = {
    id: string,
    doctorId: string,
    doctor: Doctor,
    startTime: Date,
    endTime: Date,
    isBooked: boolean,
    consultationType: ConsultationType,
    createdAt: Date
}
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
    slot: ScheduleSlot,
    status: AppointmentStatus[],
    consultationType: ConsultationType[],
    comment: string | null,
    createdAt: string,
    cancelledAt: string | null
}