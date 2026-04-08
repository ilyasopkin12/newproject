import { Header } from "@widgets/header/index.js";
import { QuickActions } from "@widgets/quickActions/index.js";
import { Sidebar } from "@widgets/sidebar/index.js";

export function Page() {

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <main className="ml-64 p-6">
        <div className="space-y-8">
          <Header />
          <QuickActions />
        </div>
      </main>
    </div>
  );
}
