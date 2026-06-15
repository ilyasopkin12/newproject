export type User = {
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
