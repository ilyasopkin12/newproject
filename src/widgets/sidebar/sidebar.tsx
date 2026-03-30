import { Calendar, CheckCircle2, Home, LogOut, MessageSquare, Search, Settings } from "lucide-react"
import { useState } from "react";

export const Sidebar = () => {
    const sidebarItems = [
        { id: 'dashboard', label: 'Дашборд', icon: Home },
        { id: 'appointments', label: 'Мои записи', icon: Calendar },
        { id: 'messages', label: 'Сообщения', icon: MessageSquare },
        { id: 'doctors', label: 'Поиск врачей', icon: Search },
        { id: 'settings', label: 'Настройки', icon: Settings },
      ];
    const [activeTab, setActiveTab] = useState('dashboard');
    return (
        <>
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full">
          <div className="p-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <CheckCircle2 size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-blue-600">MedSync</span>
          </div>
  
          <nav className="flex-1 px-4 py-4 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id 
                  ? 'bg-blue-50 text-blue-600 font-semibold' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </nav>
  
          <div className="p-4 border-t border-slate-100">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 transition-colors">
              <LogOut size={20} />
              Выйти
            </button>
          </div>
        </aside>
        </>
    )
}