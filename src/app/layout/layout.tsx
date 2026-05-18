import { Header } from "@/widgets";
import { Sidebar } from "@/widgets";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-slate-50 ">
        <Sidebar/>
        <main className="ml-64 p-6">
            <div className="space-y-20">
                <Header/>
                {children}
            </div>
        </main>
    </div>
    );
  };
