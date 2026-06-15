export type AppointmentDoctor = {
  id: string;
  name: string;
  surname: string;
  specialization: {
    name: string;
    id: string;
  };
  city: string;
  experienceYears: number;
  description?: string | null;
  visitCount: number;
  ratingStars: number;
  clinic: string;
  cabinet: string;
  isActive?: boolean;
};

export type AppointmentPatient = {
  id: string;
  email: string;
  name: string;
  surname: string;
  phone?: string;
  createdAt?: Date;
  passwordHash: string;
  lastSeenAt?: Date | null;
  totalVisits: number | null;
  upcomingVisits: number | null;
  role: string;
};

export type ScheduleSlot = {
  id: string;
  doctorId: string;
  doctor: AppointmentDoctor;
  startTime: Date;
  endTime: Date;
  isBooked: boolean;
  consultationType: ConsultationType;
  createdAt: Date;
};

export type AppointmentStatus =
  | 'CONFRIMED'
  | 'CANCELLED_BY_PATIENT'
  | 'CANCELLED_BY_ADMIN';

export type ConsultationType = 'IN_PERSON' | 'ONLINE';

export type Appointment = {
  id: string;
  patient: AppointmentPatient;
  doctor: AppointmentDoctor;
  slot: ScheduleSlot;
  status: AppointmentStatus[];
  consultationType: ConsultationType[];
  comment: string | null;
  createdAt: string;
  cancelledAt: string | null;
};
