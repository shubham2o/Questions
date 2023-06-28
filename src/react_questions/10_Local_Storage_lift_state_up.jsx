// https://codedamn.com/problem/SSmu1idGMzp_dXBS1lbGf

import { useState, useEffect } from "react";

function LocalStorageLiftStateUp() {
    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem('count');
        return storedCount ? parseInt(storedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() => { setCount(count + 1) }}> + </button>
            <button onClick={() => { setCount(count - 1) }}> - </button>
        </div>
    )
}

export default LocalStorageLiftStateUp;