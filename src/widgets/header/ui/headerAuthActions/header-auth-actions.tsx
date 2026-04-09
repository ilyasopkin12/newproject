import { Button } from "@/shared/ui/button.js"

interface AuthActionsProps {
    onLoginClick: () => void
}

export const AuthActions = ( props: AuthActionsProps )=> {
    return (
        <Button variant="outline" size="default" onClick={props.onLoginClick}>
            Войти
        </Button>
    )
}