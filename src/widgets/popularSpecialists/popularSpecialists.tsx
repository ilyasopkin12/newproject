import type { Doctor } from "@/entities/doctor/model/types.js"
import { SpecialistCard } from "./ui/index.js"

type PopularSpecialistsProps = {
    doctors: Doctor[];
}

export function PopularSpecialists({doctors}: PopularSpecialistsProps ) {
    return (
    <div className="flex flex-col w-full">
        <div>
            <p className="text-lg font-bold mb-4">Популярные специалисты</p>
        </div>
        <div className="flex gap-10">
            {doctors.slice(0,4).map((item)=>(
                <SpecialistCard key={item.id} doctor={item}/>
            ))}
        </div>
    </div>
    )
}