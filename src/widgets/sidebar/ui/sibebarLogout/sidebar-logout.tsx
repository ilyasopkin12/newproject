import { LogOut } from "lucide-react"
import { Button } from "@shared/ui/button.js"

export const SidebarLogout = () => {
    return (
        <>
            <Button variant="ghost" className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 transition-colors">
            <LogOut size={20} />
                Выйти
            </Button>
        </>
    )
}