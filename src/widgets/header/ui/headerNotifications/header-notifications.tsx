import { Button } from "@/shared/ui"
import { Bell } from "lucide-react"

type HeaderNotificationsProps = {
    onClick: () => void;
}

export const HeaderNotifications = ( {onClick}: HeaderNotificationsProps ) => {
    return (
        <Button variant="outline" size="default" onClick={onClick}>
            <span>Уведомления</span>
            <Bell size={20} className="text-slate-600" />
        </Button>
    )
}