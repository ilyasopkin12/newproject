import type { Doctor } from '@/entities/doctor';
import type { User } from '@/entities/user';
import { SpecialistCard } from './ui';
import { Lightbulb } from 'lucide-react';

type PopularSpecialistsProps = {
  doctors: Doctor[];
  user?: User | null;
};

export function PopularSpecialists({ doctors, user }: PopularSpecialistsProps) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-bold text-slate-900">
        Популярные специалисты
      </h2>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        <div className="flex min-w-0 flex-1 flex-wrap gap-6">
          {doctors.slice(0, 6).map((item) => (
            <SpecialistCard key={item.id} doctor={item} />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <aside className="w-full shrink-0 rounded-xl border border-slate-200 bg-white p-5 md:w-100">
            <p className="mb-4 text-sm font-semibold text-slate-900">
              Ваша статистика
            </p>
            {user ? (
              <div className="flex flex-col gap-3 text-sm text-slate-600">
                <p>
                  <span className="text-slate-400">
                    Всего визитов: {user?.totalVisits ?? '-'}
                  </span>
                </p>
                <p>
                  <span className="text-slate-400">
                    Предстоящих визитов: {user?.upcomingVisits ?? '-'}
                  </span>
                </p>
              </div>
            ) : (
              <div>
                <p>Авторизируйтесь, чтобы увидеть вашу стастистику</p>
              </div>
            )}
          </aside>
          <div className="w-100 border rounded-xl border-slate-200  p-5 bg-blue-50">
            <div className="flex items-center mb-4">
              <Lightbulb size={16} />
              <p>Совет дня</p>
            </div>
            <p>Какой-то совет, который лежит на сервере</p>
          </div>
        </div>
      </div>
    </section>
  );
}
