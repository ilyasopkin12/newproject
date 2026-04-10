import { Button } from "@/shared/ui/button.js"

interface AuthActionsProps {
    onLoginClick: () => void
}

export const AuthActions = ( {onLoginClick} : AuthActionsProps )=> {
    return (
        <Button variant="outline" size="default" onClick={onLoginClick}>
            Войти
        </Button>
    )
}