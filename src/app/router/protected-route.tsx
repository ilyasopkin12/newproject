import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/app';

type ProtectedRouteProps = {
  redirectTo?: string;
};

export function ProtectedRoute({ redirectTo = '/' }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
