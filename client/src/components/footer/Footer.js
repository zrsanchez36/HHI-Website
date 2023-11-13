import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";
import './footer.scss';

// Logo import
import MetaLogo from '../../assets/logos/socialmedia_logos/facebook/facebook-logo-2019_Transparent.png';
import XLogo from '../../assets/logos/socialmedia_logos/x_formerlytwitter/Twitter-Logо.svg';
import LinkedInLogo from '../../assets/logos/socialmedia_logos/linkedin/linkedin-svgrepo_black.svg';
import InstagramLogo from '../../assets/logos/socialmedia_logos/instagram/Instagram_logo_2016.svg.webp';
import FooterLogo from '../../assets/logos/hhi_logos/CUNY SPH HHI Logos_png/cuny sph hhi logo.png';



function Footer (){




    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    {/* Your about or logo section */}
                    <h3 className='footer__subheading'>Community Health Equity Bulletin</h3>
                    <a href="https://cuny.us10.list-manage.com/subscribe?u=af086f9d74120dca081e07d08&id=0bf74fa748">Suscribe Here!</a>

                </div>
                <div className="footer-section links">
                    <h3 className='footer__subheading'>Stay Connected with the Harlem Health Initiative</h3>
                    <div className='social__logo--container'>
                        <img src={MetaLogo} className='social__logo'></img>
                    </div>
                    <div className='social__logo--container'>
                        <img src={XLogo} className='social__logo'></img>
                    </div>
                    <div className='social__logo--container'>
                        <img src={LinkedInLogo} className='social__logo'></img>
                    </div>
                    <div className='social__logo--container'>
                        <img src={InstagramLogo} className='social__logo'></img>
                    </div>
                </div>
                <div className="footer-section contact-form">
                    <h3 className='footer__subheading'>Contact Us!</h3>
                        <p>HarlemHealth@sph.cuny.edu</p>
                </div>
            </div>
            <div className="footer-bottom">
            <img src={FooterLogo} className='footer__logo' alt='CUNY Harlem Health initiative logo'  />
                {/* Copyright and other legal information */}
                &copy; {new Date().getFullYear()} Your Company Name
            </div>
        </footer>
    );
};

export default Footer;