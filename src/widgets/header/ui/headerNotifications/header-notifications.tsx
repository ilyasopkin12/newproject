import { Button } from "@/shared/ui/button.js"
import { Bell } from "lucide-react"

interface HeaderNotificationsProps {
    onClick: () => void;
}

export const HeaderNotifications = ( props: HeaderNotificationsProps ) => {
    return (
        <Button variant="outline" size="default" onClick={props.onClick}>
            <span>Уведолмения</span>
            <Bell size={20} className="text-slate-600" />
        </Button>
    )
}