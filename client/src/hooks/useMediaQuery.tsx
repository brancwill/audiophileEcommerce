//Imports ---------------------

//React/Router Imports
import { useState, useEffect } from "react";

export default function useMediaQuery() {
    const [ view, setView ] = useState<string>('desktop');
    const queries: string[] = [ "(max-width: 450px)", "(min-width: 451px) and (max-width: 840px)", "(min-width: 841px)"]
    

    const handleResize: Function = (): string => {
        let windowSize = '';
        const isMatch = ( query: string ): boolean => {
            return window.matchMedia(query).matches;
        }

        if ( isMatch(queries[0]) ) {
            windowSize = 'mobile';
        } else if ( isMatch(queries[1]) ) {
            windowSize = 'tablet';
        } else if ( isMatch(queries[2]) ) {
            windowSize = 'desktop';
        }
        return windowSize;
    }

    useEffect(() => {
        setView(handleResize());
    }, [])

    useEffect(() => {
        const handleResizeWrapper = () => setView(handleResize());

        window.addEventListener("resize", handleResizeWrapper);

        return () => {
            window.removeEventListener("resize", handleResizeWrapper)
        }
    }, [])

    return { view }
}