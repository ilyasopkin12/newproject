
import { Dialog, DialogContent } from "@shared/ui"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shared/ui/card"
import { Input } from "@shared/ui/input"
import { Label } from "@shared/ui/label"


type AppointmentsModalProps = {
    open: boolean
    onClose: () => void
}

export const AppointmentsModal= ({open, onClose}: AppointmentsModalProps) => {
    return (
        <Dialog open={open} onOpenChange={(next)=> !next && onClose()}>
            <DialogContent className="sm:max-w-md">
                <Card className="w-full max-w-sm">

                </Card>
        </DialogContent>
    </Dialog>
    )
}