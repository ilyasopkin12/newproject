import { Link } from "react-router-dom";

interface UpcomingAppointment {
  id: string;
  initials: string;
  initialsColor: string;
  initialsBackground: string;
  doctorName: string;
  meta: string;
  dateTime: string;
  place: string;
}

const appointments: UpcomingAppointment[] = [
  {
    id: "1",
    initials: "ИС",
    initialsColor: "text-blue-600",
    initialsBackground: "bg-blue-100",
    doctorName: "Иван Сергеевич Петров",
    meta: "Кардиолог • Клиника \"Здоровье\"",
    dateTime: "12 апреля, 14:30",
    place: "Кабинет 305",
  },
  {
    id: "2",
    initials: "МВ",
    initialsColor: "text-green-600",
    initialsBackground: "bg-green-100",
    doctorName: "Мария Владимировна Козлова",
    meta: "Терапевт • Поликлиника №1",
    dateTime: "15 апреля, 10:00",
    place: "Онлайн консультация",
  },
];

export function UpcomingAppointments() {
  return (
    <section className="mb-8 w-full">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">Предстоящие записи</h2>
        <Link to="/appointments" className="text-sm text-blue-600 hover:text-blue-700">Все записи →</Link>
      </div>

      <div className="space-y-3">
        {appointments.map(({ id, initials, initialsBackground, initialsColor, doctorName, meta, dateTime, place }) => (
          <div
            key={id}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full font-bold ${initialsBackground} ${initialsColor}`}
              >
                {initials}
              </div>
              <div>
                <p className="font-semibold">{doctorName}</p>
                <p className="text-sm text-slate-500">{meta}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">{dateTime}</p>
              <p className="text-sm text-slate-500">{place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
