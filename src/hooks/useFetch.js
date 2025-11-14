// client/src/hooks/useFetch.js

import { useState, useEffect } from 'react'; // MUST include both
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // The URL is the API endpoint, e.g., '/api/services'
                // Vite proxy handles redirecting this to http://localhost:5000/api/services
                const response = await axios.get(url); 
                setData(response.data);
                setError(null);
            } catch (err) {
                console.error("Fetch Error:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;