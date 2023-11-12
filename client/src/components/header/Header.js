import headerLogo from '../../assets/logos/hhi_logos/CUNY SPH HHI Logos_png/no background_white.png';
import './header.scss';
import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";
import Burger from '../../assets/icons/MenuIcon_2.png';
import { useState } from 'react';
import HeaderButton from './headerbutton/HeaderButton';
import Dropdown from './dropdown/Dropdown'


function Header () {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);




    return (
        <header className='site__header'>
            <div className='header__container'>
                <nav className='site__navigation'>
                    <div className='header__logo-container'>
                        <Link to='/' id='headerLogoLink' className='header__logo--link'>
                            {/* 1080x1080 */}
                            <img src={headerLogo} className='header__logo' alt='CUNY Harlem Health initiative logo'  />
                        </Link>
                    </div>
                    {/* 350wx270h */}
                    <div className='burger__menu' onClick={handleClick}>
                        {/* <img src={Burger} className='accordion__icon' alt='accordion icon for menu' /> */}
                        {/* this is the icon from font awesome manipulated  by state */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                    </div>
                        <ul className={click ? 'navigation__list active' : 'navigation__list'} >
                            <li className='nav__item' onClick={closeMobileMenu}><Link to='/' id='homeLink' className='nav__link'><h4 className='header__page--text'>Home</h4></Link></li>
                            <li className='nav__item' onClick={closeMobileMenu}><Link to='/aboutUs' id='aboutusLink' className='nav__link'><h4 className='header__page--text'>About Us</h4></Link></li>
                            <li className='nav__item' onClick={closeMobileMenu}><Link to='/Projects' id='projectsLink' className='nav__link'><h4 className='header__page--text'>Projects</h4></Link></li>
                            <li className='nav__item' onClick={closeMobileMenu}><Link to='/Events' id='eventsLink' className='nav__link'><h4 className='header__page--text'>Events</h4></Link></li>
                            <li className='nav__item' onClick={closeMobileMenu}><Link to='/Portal' id='portalLink' className='nav__link'><h4 className='header__page--text'>Portal</h4></Link></li>
                        </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header;