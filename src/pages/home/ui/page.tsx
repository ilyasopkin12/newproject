import { Header } from "@widgets/header/index.js";
import { Sidebar } from "@widgets/sidebar/index.js";
import { UpcomingAppointments } from "@/widgets/upcomingAppointments/index.js";

export function Page() {

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <main className="ml-64 p-6">
        <div className="h-screen">
          <Header />
          <UpcomingAppointments />
        </div>
      </main>
    </div>
  );
}
