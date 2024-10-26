import {useEffect, useRef, useState} from "react";
import {useRefSync} from "./useRefSync.js";

/**
 * @param {string} url
 * @param {FetchEventInit} options
 * @returns {{data: unknown, loading: boolean, errors: Error}}
 */
export function useFetch(url, options) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const optionsRef = useRefSync(options);

    useEffect(() => {
        fetch(url, {
            ...optionsRef,
            headers: {
                "Accept": "application/json; charset=UTF-8",
                ...optionsRef.header
            }
        })
            .then((response) => {
                if (!response.ok) {
                    setError(response.status);
                    return null;
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((e) => setError(e))
            .finally(() => setLoading(false));
    }, [url]);

    return {
        loading: loading,
        data: data,
        error: error,
        setData: setData
    }
}