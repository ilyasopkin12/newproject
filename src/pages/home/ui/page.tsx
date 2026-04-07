import { Header } from "@widgets/header/index.js";
import { Sidebar } from "@widgets/sidebar/index.js";
import { PopularSpecialists } from "@/widgets/popularSpecialists/index.js";
import { useEffect, useState } from "react";
import { getDoctorsMock } from "@/entities/doctor/api/getDoctorsMock.js";
import type { Doctor } from "@/entities/doctor/model/types.js";
export function Page() {
  const [doctors,setDoctors] = useState<Doctor[]>([])
  useEffect(()=>{
    const loadDoctors = async () => {
      const doctorsData = await getDoctorsMock()
      setDoctors(doctorsData)
    }
    void loadDoctors()
  },[])

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <main className="ml-64 p-6">
        <div className="flex flex-col items-center justify-between h-screen">
          <Header />
          <PopularSpecialists doctors={doctors}/>
        </div>
      </main>
    </div>
  );
}
