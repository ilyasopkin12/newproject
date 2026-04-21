import { Header } from "@widgets/index";
import { QuickActions } from "@widgets/index";
import { Sidebar } from "@widgets/index";
import { UpcomingAppointments } from "@/widgets/index";
import { PopularSpecialists } from "@/widgets/index";
import { useDoctors } from "@/entities/doctor/model/use-doctors";
import { useAuth } from "@/shared/lib/auth/useAuth";

export function Page() {
  const { user } = useAuth()
  const {data, isPending,isError} = useDoctors()
  
  if(isError) {
    console.log("Ошибка загрузки данных с сервера")
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <p>Ошибка загрузки данных, попробуйте позже</p>
      </div>
    )
  }

  if (isPending) {
    return (
      <div>Загрузка...</div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <main className="ml-64 p-6">
        <div className="space-y-8">
          <Header />
          <QuickActions />
          <UpcomingAppointments/>
          <PopularSpecialists doctors={isPending? [] : (data)} user={user}/>
        </div>
      </main>
    </div>
  );
}
