import { Calendar, CheckCircle2, Home, MessageSquare, Search, Settings } from "lucide-react"
import { useState } from "react";
import { useAuth } from "@/app"
import { Button } from "@/shared/ui"

import { SidebarLogout } from "./ui"
import { NavLink } from "react-router-dom";

const sidebarItems : { id: string, label: string, icon: React.ElementType, navTo?: string }[] = [
  { id: 'dashboard', label: 'Главная', icon: Home , navTo: "/" },
  { id: 'appointments', label: 'Мои записи', icon: Calendar },
  { id: 'messages', label: 'Сообщения', icon: MessageSquare },
  { id: 'doctors', label: 'Поиск врачей', icon: Search },
  { id: 'settings', label: 'Настройки', icon: Settings },
];

export const Sidebar = () => {
    const [activeTab, setActiveTab] = useState<string>('dashboard');
    const {logout,user} = useAuth()
    return (
        <>
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full">
          <div className="p-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <CheckCircle2 size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-blue-600">MedSync</span>
          </div>
  
          <nav className="flex flex-col justify-items-start space-y-1 gap-5">
            {sidebarItems.map((item) => (
              <NavLink key={item.id} to={item.navTo ?? "/"}>
                <Button 
                  variant="ghost"
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex justify-start text-left text-md items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === item.id 
                    ? 'bg-blue-50 text-blue-600 font-semibold' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </Button>
              </NavLink>
            ))}
          </nav> 
          <div className=" flex absolute bottom-0 w-full border-t border-slate-100">
            {user ? (
              <div className="rounded-xl text-left text-slate-500 py-4">
                <SidebarLogout onLogoutClick={logout} />
              </div>
            ): null}
          </div>
        </aside>
        </>
    )
}