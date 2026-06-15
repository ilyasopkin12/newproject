import { useQuery } from '@tanstack/react-query';

import { getDoctors } from '../api';

export function useDoctors() {
  return useQuery({
    queryKey: ['doctors'],
    queryFn: getDoctors,
  });
}
