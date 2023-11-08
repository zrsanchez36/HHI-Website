import headerLogo from '../../assets/logos/hhi_logos/hhi_logo.png';
import './header.scss';
import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";
import Burger from '../../assets/icons/MenuIcon_2.png';


function Header () {


    return (
        <header className='site__header'>
            <div className='header__container'>
                <nav className='site__navigation'>
                    <div className='header__logo-container'>
                        <Link to='/' id='headerLogoLink' className='header__logo--link'>
                            {/* 427x118 */}
                            <img src={headerLogo} className='header__logo' alt='CUNY Harlem Health initiative logo'  />
                        </Link>
                    </div>
                    {/* 350wx270h */}
                    <img src={Burger} className='accordion__icon' alt='accordion icon for menu' />
                    <ul className='navigation__list' >
                        <Link to='/' id='homeLink' className='nav__link'> <li><h4>Home</h4></li></Link>
                        <Link to='/aboutUs' id='aboutusLink' className='nav__link'> <li><h4>About Us</h4></li></Link>
                        <Link to='/Projects' id='projectsLink' className='nav__link'> <li><h4>Projects</h4></li></Link>
                        <Link to='/Events' id='eventsLink' className='nav__link'> <li><h4>Events</h4></li></Link>
                        <Link to='/Portal' id='portalLink' className='nav__link'> <li><h4>Portal</h4></li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header;