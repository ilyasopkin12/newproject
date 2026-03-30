import { useEffect, useState } from "react";

const useDataFetcher = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/data");
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    }, []);
}