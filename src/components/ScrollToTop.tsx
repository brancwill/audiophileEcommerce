import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo( -80, 0 );
    }, [ pathname ])

    return null
};

export default ScrollToTop;
