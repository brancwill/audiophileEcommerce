import { useEffect } from 'react';
import { toTopOfPage } from '../utility/Functions';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

    useEffect(() => {
        toTopOfPage();
    })
    
    return (
        <div className="NotFoundPage">
            <h2 className="pageTitle">Page Not Found</h2>
            <h4 className="couldntFind">We couldn't find the page you were looking for.</h4>
            <Link to="/"><button className='button1'>Return Home</button></Link>
        </div>
    );
};

export default NotFoundPage;