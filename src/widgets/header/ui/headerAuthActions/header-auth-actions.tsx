import { Button } from "@/shared/ui/button"

type AuthActionsProps = {
    onLoginClick: () => void
    onRegisterClick: () => void
}

export const AuthActions = ( {onLoginClick, onRegisterClick} : AuthActionsProps )=> {
    return (
        <div className="flex items-center gap-2">
            <Button variant="outline" size="default" onClick={onLoginClick}>
                Войти
            </Button>
            <Button variant="default" size="default" onClick={onRegisterClick}>
                Регистрация
            </Button>
    </div>
    )
}