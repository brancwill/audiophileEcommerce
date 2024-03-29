//Imports ---------------

//React Router Imports
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

//Image Imports
import cart from '/assets/shared/desktop/icon-cart.svg';
import logo from '/assets/shared/desktop/logo.svg';
import MobileMenu from './MobileMenu';

//Component --------------
const Navbar = ( props: { isOpen: boolean, setIsOpen: Function }) => {

    //React Hooks ----------

    //Router
    const location = useLocation();

    //State
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    //Functions --------------

    //Handlers
    const handleClick: Function = (): void => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return(
        <div className="Navbar">
            <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
            <div className="container">
                <div className="navText">
                    <div onClick={() => handleClick()} className="menu">
                        <img src="/assets/shared/tablet/icon-hamburger.svg" alt="Menu" />
                    </div>
                    <Link to="/"><img className="logo" src={ logo } alt="Audiophile"/></Link>
                    <div className="navLinks">
                        <Link className="navLink SubTitle" to='/'>HOME</Link>
                        <Link className="navLink SubTitle" to='headphones'>HEADPHONES</Link>
                        <Link className="navLink SubTitle" to='speakers'>SPEAKERS</Link>
                        <Link className="navLink SubTitle" to='earphones'>EARPHONES</Link>
                    </div>
                </div>
                    <div className={ props.isOpen ?
                                            //Removes option to open cart when it's
                                            //already open, or at checkout. 
                                            "cartToggle cartToggleDisabled" 
                                        :   location.pathname === "/checkout" ?
                                            "cartToggle cartToggleDisabled" 
                                        :   "cartToggle" 
                                    } 
                    onClick={() => props.setIsOpen(!props.isOpen)}>
                        <img className="cartIcon" src={ cart } alt="cart"/>
                    </div>
            </div>
        </div>
    )
}

export default Navbar;