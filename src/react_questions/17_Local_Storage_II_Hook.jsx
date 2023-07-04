// https://codedamn.com/problem/q74itxTtwFXNvwvrLyi8w

import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(localStorage.getItem(key) || initialValue);

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return { value, setValue };
}

const LocalStorageIIHook = () => {
    const { value, setValue } = useLocalStorage('inputValue', '');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    )
}

export default LocalStorageIIHook;