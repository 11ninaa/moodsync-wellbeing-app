import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = window.localStorage.getItem(key);
            return stored ? JSON.parse(stored) : initialValue;
        } catch (err) {
            console.warn(`Не можев да прочитам ${key} од localStorage:`, err);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.warn(`Не можев да зачувам ${key} во localStorage:`, err);
        }
    }, [key, value]);

    return [value, setValue];
}
