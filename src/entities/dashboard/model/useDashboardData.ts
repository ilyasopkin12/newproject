import { useState, useEffect } from "react";
import { getDashboardData } from "../api/getDashboardData.js";


export function useDashboardData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        let isMounted = true;
        (async () => {
            try {
                const result = await getDashboardData();
                if (isMounted) setData(result);
            } catch (err) {
                if (isMounted) setError(error);
            } finally {
                if (isMounted) setLoading(false);
            }
        })();

        return () => {
            isMounted = false;
        }
    }, []);

    return { data, loading, error };
}