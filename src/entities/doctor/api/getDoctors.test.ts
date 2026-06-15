jest.mock('@/shared/api', () => ({
  apiClient: {
    get: jest.fn(),
  },
}));

import { getDoctors } from '@/entities/doctor';
import type { Doctor } from '@/entities/doctor';
import { apiClient } from '@/shared/api';

const mockedGet = jest.mocked(apiClient.get);

describe('getDoctors', () => {
  beforeEach(() => {
    mockedGet.mockReset();
  });

  it('Должен возвращаться список докторов из GET /doctors', async () => {
    const items: Doctor[] = [
      {
        id: '1',
        name: 'Name',
        surname: 'Surname',
        specialization: {
          id: 'id1',
          name: 'Терапевт',
        },
        city: 'Ижевск',
        experienceYears: 666,
        visitCount: 0,
        ratingStars: 0,
        clinic: '',
        cabinet: '',
      },
    ];

    mockedGet.mockResolvedValueOnce({ data: { items } });

    await expect(getDoctors()).resolves.toEqual(items);
    expect(mockedGet).toHaveBeenCalledTimes(1);
    expect(mockedGet).toHaveBeenLastCalledWith('/doctors');
  });
  it('пробрасывает ошибку наружу ', async () => {
    mockedGet.mockRejectedValueOnce(new Error('error'));
    await expect(getDoctors()).rejects.toThrow('error');
  });
});
