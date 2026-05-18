import React, { useEffect, useState} from 'react'

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedVal = localStorage.getItem(key);
        return storedVal ? JSON.parse(storedVal) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
