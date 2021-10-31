import {useState, useEffect} from 'react';

const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({width: 640, height: 480});

    useEffect(() => {
        
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }

        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;