import { Header } from "@widgets/header/index.js";
import { Sidebar } from "@widgets/sidebar/sidebar.js";

export function Page() {

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <main className="ml-64 p-6">
        <div className="flex flex-col items-center justify-between h-screen">
          <Header />
        </div>
      </main>
    </div>
  );
}
