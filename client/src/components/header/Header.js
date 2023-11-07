import headerLogo from '../../assets/logos/hhi_logos/hhi_logo.png';
import './header.scss';
import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";



function Header () {


    return (
        <header className='site__header'>
            <div className='header__container'>
                <nav className='site__navigation'>
                    <div className='header__logo-container'>
                        <Link to='/' id='headerLogoLink' className='header__logo--link'>
                            <img src={headerLogo} alt='CUNY Harlem Health initiative logo' />
                        </Link>
                    </div>
                    <ul className='navigation__list' >
                        <Link to='/' id='homeLink' className='nav__link'> <li><h3>Home</h3></li></Link>
                        <Link to='/aboutUs' id='aboutusLink' className='nav__link'> <li><h3>About Us</h3></li></Link>
                        <Link to='/Projects' id='projectsLink' className='nav__link'> <li><h3>Projects</h3></li></Link>
                        <Link to='/Events' id='eventsLink' className='nav__link'> <li><h3>Events</h3></li></Link>
                        <Link to='/Portal' id='portalLink' className='nav__link'> <li><h3>Portal</h3></li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header;