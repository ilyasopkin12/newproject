import { Button } from "@/shared/ui/button.js"
import { Bell } from "lucide-react"

interface HeaderNotificationsProps {
    onClick: () => void;
}

export const HeaderNotifications = ( props: HeaderNotificationsProps ) => {
    return (
        <Button variant="outline" size="icon" onClick={props.onClick}>
            <Bell size={20} className="text-slate-600" />
        </Button>
    )
}