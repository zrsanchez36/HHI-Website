import headerLogo from '../../assets/logos/hhi_logos/hhi_logo.png';
import './header.scss';
import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";



function Header () {


    return (
        <header className='site__header'>
            <nav className='site__navigation'>
                <div className='header__logo-container'>
                    <Link to='/' id='headerLogoLink' className='header__logo--link'>
                        <img src={headerLogo} alt='Harlem Health initiative logo' />
                    </Link>
                </div>
                <ul className='navigation__list'>
                    <li></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;