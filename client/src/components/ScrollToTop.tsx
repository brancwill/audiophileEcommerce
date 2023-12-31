//Imports --------------

//React/Router Imports
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Component ------------
const ScrollToTop = () => {

    //React Hooks -----------

    //Router
    const { pathname } = useLocation();

    //useEffect
    useEffect(() => {
        //Scrolls to top on page change.
        window.scrollTo( -80, 0 );
    }, [ pathname ])

    return null
};

export default ScrollToTop;
