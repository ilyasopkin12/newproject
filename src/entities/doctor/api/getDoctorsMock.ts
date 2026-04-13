import type { Doctor } from "@/entities/doctor/model/types.js";
const MOCK_DOCTORS: Doctor[] = [
  {
    id: "1",
    fullName: "Ольга Смирнова",
    specialization: "Кардиолог",
    city: "Москва",
    expirienceYears: 8,
  },
  {
    id: "2",
    fullName: "Иван Петров",
    specialization: "Терапевт",
    city: "Санкт-Петербург",
    expirienceYears: 12,
  },
  {
    id: "3",
    fullName: "Мария Кузнецова",
    specialization: "Невролог",
    city: "Казань",
    expirienceYears: 6,
  },
  {
    id: "4",
    fullName: "Алексей Орлов",
    specialization: "Офтальмолог",
    city: "Екатеринбург",
    expirienceYears: 10,
  },
];
export async function getDoctorsMock(): Promise<Doctor[]> {
  await new Promise((resolve) => setTimeout(resolve, 700)); // имитация сети
  return MOCK_DOCTORS;
}