import { Link } from 'react-router-dom';

type UpcomingAppointment = {
  id: string;
  initials: string;
  doctorName: string;
  specialty: string;
  clinic: string;
  dateTime: string;
  place: string;
  visitType: 'online' | 'offline';
};

const specialtyAvatarStyle: Record<string, { text: string; bg: string }> = {
  Кардиолог: { text: 'text-blue-600', bg: 'bg-blue-100' },
  Терапевт: { text: 'text-green-600', bg: 'bg-green-100' },
};

const appointments: UpcomingAppointment[] = [
  {
    id: '1',
    initials: 'ИС',
    doctorName: 'Иван Сергеевич Петров',
    specialty: 'Кардиолог',
    clinic: 'Клиника "Здоровье"',
    dateTime: '12 апреля, 14:30',
    place: 'Кабинет 305',
    visitType: 'offline',
  },
  {
    id: '2',
    initials: 'МВ',
    doctorName: 'Мария Владимировна Козлова',
    specialty: 'Терапевт',
    clinic: 'Поликлиника №1',
    dateTime: '15 апреля, 10:00',
    place: 'Онлайн консультация',
    visitType: 'online',
  },
];

export function UpcomingAppointments() {
  return (
    <section className="mb-8 w-full">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">Предстоящие записи</h2>
        <Link
          to="/appointments"
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Все записи →
        </Link>
      </div>

      <div className="space-y-3">
        {appointments.map(
          ({
            id,
            initials,
            doctorName,
            specialty,
            clinic,
            dateTime,
            place,
            visitType,
          }) => {
            const avatar = specialtyAvatarStyle[specialty] ?? {
              text: 'text-slate-600',
              bg: 'bg-slate-100',
            };
            const visitBadgeClass =
              visitType === 'online'
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : 'bg-slate-50 text-slate-600 border-slate-200';

            return (
              <div
                key={id}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 "
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${avatar.bg} ${avatar.text}`}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold">{doctorName}</p>
                    <p className="text-sm text-slate-500">
                      {specialty} • {clinic}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">{dateTime}</p>
                  <div className="mt-1 flex items-center justify-end gap-2">
                    <p className="text-sm text-slate-500">{place}</p>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs ${visitBadgeClass}`}
                    >
                      {visitType === 'online' ? 'Онлайн' : 'Очно'}
                    </span>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
