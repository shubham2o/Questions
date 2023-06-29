// https://codedamn.com/problem/TXnfCuxR5j6TUOMXsshhb

import { useState } from 'react';

const LocalStorage = () => {
    const [value, setValue] = useState(localStorage.getItem('inputValue') || '');

    const handleChange = (e) => {
        setValue(e.target.value);
        localStorage.setItem('inputValue', e.target.value);
    }

    return (
        <div>
            <input
                type="text"
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

export default LocalStorage;