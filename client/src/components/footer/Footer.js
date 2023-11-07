import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";
import './footer.scss';

function Footer (){



    return (
        <footer className='basic__footer'>
            <div className='footer-container'>
                <div className='footer__col1'>
                    <h3 className='footer__title'>Community Health Equity Bulletin</h3>
                    <a className='subcribe__link' href='https://cuny.us10.list-manage.com/subscribe?u=af086f9d74120dca081e07d08&id=0bf74fa748'>Subcribe Here!</a>
                </div>
                <div className='footer__col2'>
                    <h3 className='footer__title'>Stay Connected with the Harlem Health Initiative</h3>
                    
                </div>
                <div className='footer__col3'>
                    
                </div>
            </div>
        </footer>

    )
};

export default Footer;