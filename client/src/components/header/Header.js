import React, { useState, useEffect } from 'react';
import headerLogo from '../../assets/logos/hhi_logos/CUNY SPH HHI Logos_png/cunysph__rgb-white_HHI.png';
import './header.scss';
import { Link } from "react-router-dom";

function Header() {
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`site__header ${isScrolled ? 'scrolled' : ''}`}>
      <div className='header__container'>
        <nav className='site__navigation'>
          <div className='header__logo-container'>
            <Link to='/' id='headerLogoLink' className='header__logo--link' onClick={closeMobileMenu}>
              <img src={headerLogo} className='header__logo' alt='CUNY Harlem Health initiative logo' />
            </Link>
          </div>
          <div className='burger__menu' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'navigation__list active' : 'navigation__list'}>
            <li className='nav__item' onClick={closeMobileMenu}>
              <Link to='/' id='homeLink' className='nav__link'>
                <p className='header__page--text'>Home</p>
              </Link>
            </li>
            <li className='nav__item' onClick={closeMobileMenu}>
              <Link to='/aboutUs' id='aboutusLink' className='nav__link'>
                <p className='header__page--text'>About Us</p>
              </Link>
            </li>
            <li className='nav__item' onClick={closeMobileMenu}>
              <Link to='/Projects' id='projectsLink' className='nav__link'>
                <p className='header__page--text'>Projects</p>
              </Link>
            </li>
            <li className='nav__item' onClick={closeMobileMenu}>
              <Link to='/Events' id='eventsLink' className='nav__link'>
                <p className='header__page--text'>Events</p>
              </Link>
            </li>
            <li className='nav__item' onClick={closeMobileMenu}>
              <Link to='/Portal' id='portalLink' className='nav__link'>
                <p className='header__page--text'>Portal</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {click && <div className="overlay" onClick={closeMobileMenu}></div>}
    </header>
  );
}

export default Header;
