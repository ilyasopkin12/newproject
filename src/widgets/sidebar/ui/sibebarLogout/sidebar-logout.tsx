import { LogOut } from "lucide-react"
import { Button } from "@shared/ui/button"
import { useAuth } from "@/shared/lib/auth/useAuth"

type SidebarLogoutProps = {
    onLogoutClick : () => void
}

export const SidebarLogout = ({onLogoutClick}: SidebarLogoutProps) => {


    return (
        <>
            <Button onClick={onLogoutClick} variant="ghost" className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 transition-colors">
            <LogOut size={20} />
                Выйти
            </Button>
        </>
    )
}