import { Link } from 'react-router-dom';
import CategoryIconList from '../components/CategoryIconList';
import PageEnder from '../components/PageEnder';
import { toTopOfPage } from '../utility/Functions';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        toTopOfPage();
    })
    
    return (
        <div className="Home">
            <div className="hero">
                <div className="heroContainer">
                    <p className="Overline">New Product</p>
                    <h1>XX99 Mark II Headphones</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Link to="/headphones/xx99-mark-two-headphones"><button className="button1">See Product</button></Link>
                </div>
            </div>
            <div className="underHero">
                <CategoryIconList />
                <div className='homePageProducts'>
                    <div className="zx9Speaker">
                        <div className="zx9SpeakerContainer">
                            <div className="title">
                                <h1>ZX9</h1>
                                <h1>Speaker</h1>
                            </div>
                            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <Link to="/speakers/zx9-speaker"><button className='button4'>See Product</button></Link>
                        </div>
                    </div>
                    <div className='zx7Speaker'>
                        <div className='homeProductContainer'>
                            <h4>ZX7 Speaker</h4>
                            <Link to="/speakers/zx7-speaker"><button className='button2'>See Product</button></Link>
                        </div>
                    </div>
                    <div className='yx1Earphones'>
                        <span className="yx1Image"> </span>
                        <div className='homeProductContainer'>
                                <h4>YX1 Earphones</h4>
                                <Link to="/earphones/yx1-earphones"><button className='button2'>See Product</button></Link>
                            </div>
                        </div>
                </div>
                <PageEnder />
            </div>
            
        </div>
    );
};

export default Home;