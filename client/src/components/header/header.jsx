import headerLogo from '../../assets/logos/hhi_logos/hhi_logo.png';
import './header.scss';
import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";



function Header () {


    return (
        <header className='site__header'>
            <nav className='site__navigation'>
                <Link to='/' id='headerLogoLink' className='header__logo--link'>
                    <img src={headerLogo} alt='Harlem Health initiative logo' />
                </Link>
            </nav>
        </header>
    )

}

export default Header;