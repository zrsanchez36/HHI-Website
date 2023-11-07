import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";
import './aboutUs.scss';


///picture components
import BuildingPic1 from '../../assets/photos/aboutus/sphbuilding/CUNY_SPH_building.jpg';
import CommunityPic from '../../assets/photos/hompage/gallery/CUNY_SPH_Harlem_125-1024x683.jpg';

function AboutUs (){



    return (
        <div className='about__us--page'>
            <section className='aboutus__header'>
                <div className='opaque__filter'>
                </div>
                    <div className='aboutus__title'>
                        <h1>About Us</h1>
                    </div>
            </section>
            {/* <section className='aboutus__pictures'>
                <img src={BuildingPic1} alt='Cuny School of public health building' width='100%'  height='240px'></img>
                <img src='office picture' alt='Cuny School of public health Harlem health initiative office'></img>
                <img src='team picture' alt='Harlem Health Initiative Team'></img>
                <img src='Event Picture' alt='Harlem Health Initiative Event'></img>
            </section> */}
            <div className='aboutus__link--container'>
                <section className='aboutus__link--section'>
                    <section className='aboutus_links' id='aboutUsLinks'>
                        <h3 className='section__subtitle'>Background info and history</h3>
                        <h3 className='section__subtitle'>Community Work</h3>
                        <h3 className='section__subtitle'>Student Work</h3>
                    </section>
                </section>
            </div>
            <div className='aboutus__intro--container'>
                <section className='aboutus__text'>
                    <article className='aboutus__paragraph1'>
                        <h3>“Our job isn’t always to stand in the front of the room; sometimes, we need to sit in the back to give our support.” </h3>
                            <p>CUNY SPH Community Outreach Director and Harlem Health Initiative Director Deborah Levine often uses this phrase to describe our role as public health advocates. 
                            The Harlem Health Initiative (HHI) serves as the outreach arm of the CUNY Graduate School of Public Health & Health Policy, New York City’s only public school of public health, with a vision of promoting health and social justice in NYC and across the globe through innovation and leadership. 
                            As a Harlem neighbor located at the intersection of Martin Luther King Boulevard and Malcolm X Avenue, the school has committed to providing and enhancing health services to our shared community.
                            </p>
                    </article>
                </section>
                <img src={CommunityPic} alt='Harlem Community' width='512px'  height='341.5px'></img>
            </div>

            <div className='aboutus__history--container'>
                <section className='aboutus__history'>
                    <article className='history'>
                        <h3>Our History</h3>
                            <p>HHI was established in March 2020, after the Harlem Mapping Project (launched in April 2018) revealed the necessity of increased coordination between community organizations with the shared goal of improving the health and well-being of Harlem’s residents. 
                               Since its conception, HHI has had one aim:<br></br></p> 
                                    <h3 className='inner__heading'>Improve the health and well-being of the Harlem community by supporting its existing community-based organizations.</h3>

                               <p>We have been able to achieve this mission by fostering a network of partners and resources in the Harlem community including Harlem Strong, the NY Vaccine Literacy Campaign, and the Cannabis Equity Center.</p>
                    </article>
                </section>
            </div>

            <div className='communitycare--container'>
                <section className='community__care--section'>
                    <article className='community__care'>
                        <h3 className='inner__heading'>Continuum of community care model</h3>
                        <h4> CUNY SPH Community</h4>
                            <p>
                            Responsibility to faculty<br></br> 
                            Responsibility as part of Dean’s Public Health Advisory Council<br></br> 
                            Frieda Foster<br></br> 
                            Barbara Askins<br></br> 
                            Curtis Archer<br></br> 
                            Oxiris Barbot<br></br> 
                            Susan J. Beane<br></br> 
                            Deneane Brown-Blackmon<br></br> 
                            Wellington Chen<br></br> 
                            Andrea G. Cohen<br></br> 
                            Maximo Gomez<br></br> 
                            Lyndon Haviland<br></br> 
                            Khary Lazarre-White<br></br> 
                            Fred Rich<br></br> 
                            Mitchell J. Silver<br></br> 
                            Pat Wang<br></br> 
                            Jennifer Walden Weprin<br></br> 

                            </p>
                    </article>
                </section>
            </div>

        </div>

    )
};

export default AboutUs;