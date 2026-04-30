import { Navigate } from "react-router-dom"
import { useAuth } from "@/shared/lib/auth/useAuth"

type ProtectedRouteProps = {
    children: React.ReactNode
    redirectTo?: string
}

export function ProtectedRoute({
    children,
    redirectTo = "/"
}: ProtectedRouteProps) {
    const {isAuthenticated, isLoading} = useAuth()
    
    if(isLoading) {
        return <div>Загрузка...</div>
    }
    if(!isAuthenticated) {
        return <Navigate to={redirectTo} replace />
    }

return <>{children}</>
}