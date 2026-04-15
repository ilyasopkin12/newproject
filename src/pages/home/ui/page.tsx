import { Header } from "@widgets/index.js";
import { QuickActions } from "@widgets/index.js";
import { Sidebar } from "@widgets/index.js";
import { UpcomingAppointments } from "@/widgets/index.js";
import { PopularSpecialists } from "@/widgets/index.js";
import { getDoctors } from "@/entities/doctor/api/getDoctors.js";
import { useEffect, useState } from "react";
import type { Doctor } from "@/entities/doctor/model/types.js";

export function Page() {
   const [doctors,setDoctors] = useState<Doctor[]>([])
   useEffect(()=>{
     const loadDoctors = async () => {
       const doctorsData = await getDoctors()
       setDoctors(doctorsData)
     }
     void loadDoctors()
   },[])

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <main className="ml-64 p-6">
        <div className="space-y-8">
          <Header />
          <QuickActions />
          <UpcomingAppointments/>
          <PopularSpecialists doctors={doctors}/>
        </div>
      </main>
    </div>
  );
}
