import { useState, useEffect } from 'react';
import { getDashboardData } from '../api/getDashboardData.js';

export function useDashboardData() {
  const [data, setData] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const result = await getDashboardData();
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err as Error);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
}
