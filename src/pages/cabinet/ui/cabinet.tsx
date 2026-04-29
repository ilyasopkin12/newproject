import { Header } from "@/widgets"
import { Sidebar } from "@/widgets/sidebar"
import { Stats } from "@widgets/stats"
import { usePatientAppointment } from "@/entities/appointment/model/use-appointments"

export function Cabinet() {
    const {data} = usePatientAppointment()
    return (
        <div className="min-h-screen bg-slate-50 ">
            <Sidebar/>
            <main className="ml-64 p-6">
                <div className="space-y-20">
                    <Header/>
                    <Stats Appointments={data} />
                </div>
            </main>
        </div>
    )
}