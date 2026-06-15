import { UserAppointments } from '@/widgets';
import { usePatientAppointment } from '@/entities/appointment';
import { Layout } from '@/app/layout/layout';

export function Cabinet() {
  const { data, isError, isPending } = usePatientAppointment();

  if (isError) {
    console.log('Пользователь не авторизирован');
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <p>Пожалуйста, авторизируйтесь на сайте</p>
      </div>
    );
  }

  if (isPending) {
    return <div>Загрузка...</div>;
  }
  return (
    <Layout
      children={<UserAppointments userAppointments={data ?? []} />}
    ></Layout>
  );
}
