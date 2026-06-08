import App from "@/app/App"
import type { Appointment } from "@/entities/appointment"
import { formatSlotLabels } from "@/entities/appointment"
import { AppointmentsModal } from "@/widgets"
import { useState } from "react"
type UserAppointmentsProps = {
    userAppointments?: Appointment[]
}

export function UserAppointments({ userAppointments }: UserAppointmentsProps) {
    const next = userAppointments?.[0]
    const { startLabel, endLabel } = formatSlotLabels(
        next?.slot.startTime,
        next?.slot.endTime,
    )

    const [ appointmentmodalOpen, setAppointmentModalOpen] = useState<boolean>(false)

    return (
    <div className="w-100">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Ваши записи</h2>
        <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div>
                    <p className="text-lg font-bold">Начало приема: {startLabel}</p>
                    <p className="text-slate-500 text-sm">Окончание приема: {endLabel}</p>
                </div>
            </div>
            <div className="space-y-1 mb-6">
                <p className="font-bold text-slate-900">Врач: {`${next?.doctor.name} ${next?.doctor.surname}`}</p>
                <p className="text-sm text-slate-500">Кабинет врача: №{next?.doctor.cabinet}</p>
            </div>
            <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors" onClick={()=>setAppointmentModalOpen(true)}>
                Детали записи
            </button>
            {appointmentmodalOpen && (<AppointmentsModal open={appointmentmodalOpen} onClose={()=> setAppointmentModalOpen(false)}/>)}
        </div>
    </div>
    )
}
