import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";
import './home.scss';
import Slide1 from '../../assets/photos/hompage/gallery/galleryphoto_1.jpeg';
import Slide2 from '../../assets/photos/hompage/gallery/galleryphoto_2.jpeg';
import Slide3 from '../../assets/photos/hompage/gallery/galleryphoto_3.jpeg';
import Slide4 from '../../assets/photos/hompage/gallery/galleryphoto_4.jpeg';
import Logo from '../../assets/logos/hhi_logos/hhi_logo.png';

function Home (){



    return (
        <div className='home__page'>
            <section className='homepage__gallery'>
                <div className='slider__wrapper'>
                    <div className='opaque__filter'>
                        <div className='slider'>
                            <img src={Slide1} id='slide_1' className='img__slide active' width='100%' height='100%' alt='cope event podium selfie'></img>
                            <img src={Slide2} id='slide_2' className='img__slide' width='100%' height='100%'alt='cope event team '></img>
                            <img src={Slide3} id='slide_3' className='img__slide' width='100%' height='100%'alt='cope event group '></img>
                            <img src={Slide4} id='slide_4' className='img__slide' width='100%' height='100%'alt='cope event group '></img>
                        </div>
                    </div>
                    {/* <div className='slider__nav'>
                        <a href='#slide_1'></a>
                        <a href='#slide_2'></a>
                        <a href='#slide_3'></a>
                    </div> */}
                    <div className='slider__content'>
                    <img src={Logo} className='homepage__logo' width='213.5px' height='59px'></img>
                        <h1>Harlem</h1>
                        <h1>Health</h1>
                        <h1>Initiative</h1>
                    </div>
                </div>
            </section>

        </div>

    )
};

export default Home;