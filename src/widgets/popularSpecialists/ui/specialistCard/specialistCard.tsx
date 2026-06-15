import type { Doctor } from '@/entities/doctor';
import { Star } from 'lucide-react';

type specialistCardProps = {
  doctor: Doctor;
};
export const SpecialistCard = ({ doctor }: specialistCardProps) => {
  return (
    <div className="wrapper rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-300 transition cursor-pointer w-90">
      <div className="cardHeader flex items-center gap-3 mb-3">
        <div className="doctorProfile flex h-10 w-10 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
          {`${doctor.name[0]} ${doctor.surname[0]}`}
        </div>
        <div className="doctorInfo ">
          <p className="font-semibold text-sm">{`${doctor.name} ${doctor.surname}`}</p>
          <p className="text-xs text-slate-500">{`${doctor.specialization.name}`}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: doctor.ratingStars }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-400 text-amber-400"
          ></Star>
        ))}
      </div>
      <div className="doctorExpirience ">
        <p className="text-xs text-slate-500 mt-2">
          Опыт: {`${doctor.experienceYears}`} лет
        </p>
      </div>
    </div>
  );
};
