// https://codedamn.com/problem/hZpPIyy96tZv8JW9XCBkr

import { useState } from 'react';

const backgroundTheme = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return { theme, toggleTheme };
}

const UseTheme = () => {
    const { theme, toggleTheme } = backgroundTheme();

    return (
        <div
            style={{
                height: '10vh',
                transition: '0.3s ease-in',
                backgroundColor: theme === 'light' ? 'white' : 'black',
            }}
        >
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default UseTheme;