import type { Doctor } from "@/entities/doctor/model/types.js"
interface specialistCardProps {
    doctor: Doctor
}
export const SpecialistCard = ( {doctor}: specialistCardProps ) => {
    return (
    <div className="wrapper rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-300 transition cursor-pointer w-200">
        <div className="cardHeader flex items-center gap-3 mb-3">
            <div className="doctorProfile flex h-10 w-10 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
            {`${doctor.fullName[0]} ${doctor.fullName[0]}`}
            </div>
            <div className="doctorInfo ">
                <p className="font-semibold text-sm">{`${doctor.fullName}`}</p>
                <p className="text-xs text-slate-500">{`${doctor.specialization}`}</p>
            </div>
        </div>
        <div className="rating flex"></div>
        <div className="doctorExpirience ">
            <p className="text-xs text-slate-500 mt-2">Опыт: {`${doctor.expirienceYears}`} лет</p>
        </div>
    </div>
    )
}