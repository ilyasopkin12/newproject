import { useAuth } from '@/app';
import { useDoctors } from '@/entities/doctor';
import {
  Header,
  PopularSpecialists,
  QuickActions,
  Sidebar,
  UpcomingAppointments,
} from '@/widgets';
import { Layout } from '@/app/layout/layout';

export function Home() {
  const { user } = useAuth();
  const { data, isPending, isError } = useDoctors();

  if (isError) {
    console.log('Ошибка загрузки данных с сервера');
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <p>Ошибка загрузки данных, попробуйте позже</p>
      </div>
    );
  }

  if (isPending) {
    return <div>Загрузка...</div>;
  }

  return (
    <Layout
      children={
        <>
          <QuickActions />
          <UpcomingAppointments />
          <PopularSpecialists
            doctors={isPending ? [] : (data ?? [])}
            user={user}
          />
        </>
      }
    ></Layout>
  );
}
