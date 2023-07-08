import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

const WindowDimensionsHook = () => {
    const { width, height } = useWindowDimensions()

    return (
        <div>
            <h2>Window Dimensions:</h2>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    )
}

export default WindowDimensionsHook;
