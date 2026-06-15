import { apiClient } from '@/shared/api';

import type { Doctor } from '../model';

export async function getDoctors(): Promise<Doctor[]> {
  const { data } = await apiClient.get<{ items: Doctor[] }>('/doctors');
  return data.items;
}
