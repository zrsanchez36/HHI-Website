import axios from  'axios';
import { useRef } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { motion, useInView, useAnimation, useScroll } from 'framer-motion';
import './aboutUs.scss';


///picture components
import BuildingPic1 from '../../assets/photos/aboutus/sphbuilding/CUNY_SPH_building.jpg';
import CommunityPic from '../../assets/photos/hompage/gallery/CUNY_SPH_Harlem_125-1024x683.jpg';
import CopePic from '../../assets/photos/hompage/gallery/galleryphoto_4.jpeg';
import StudentPic from '../../assets/photos/aboutus/misc/CUNY-SPH-students-in-deans-conference-room.jpg';
import Arielsela from '../../assets/photos/aboutus/headshots/arielsela_headshot.jpeg';


function AboutUs () {
    const ref = useRef(null);
    useScroll({
        target: '',
        offset: ["0 1", "1.33 1"]
    });

    // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };



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
                        <h3 className='section__subtitle'><a href='#ourHistory'>Background info and history</a></h3>
                        <h3 className='section__subtitle'><a href='#communityWork'>Community Work</a></h3>
                        <h3 className='section__subtitle'><a href='#studentWork'>Student Work</a></h3>
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
                <img src={CommunityPic} className='community__pic' alt='Harlem Community'></img>
            </div>

            <div className='aboutus__history--container' id='ourHistory'>
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

            <div className='communitycare--container' id='communityWork'>
                <section className='community__care--section'>
                    <article className='community__care'>
                        <h3 className='inner__heading'>Continuum of community care model</h3>
                        <h4> CUNY SPH Community</h4>
                            <p className='sph__community--text'>
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

                            <p>
                            <b>Responsibility to provide elected officials with academic/research/policy support</b><br></br>
                            <b>Accountability and Responsibility to Student Body</b> - create spaces where students are able to take theory and put into practice
	                        Create ongoing relationships with respect to expertise brought to table by partners.<br></br>
	                        Learn to listen to efforts going on in the work in that vein?
	                        Intersectionality of work influence how they do their work
                            Accountability & Responsibility to funders 
                            Fellowship funders
                            Foundation relationship and deliverables
                            “Foot in both worlds” academia and community 

                            </p>

                    </article>
                    {/* 800 x1200 */}
                    <div className='building__pic--container'>
                        <img src={BuildingPic1} alt='cuny sph' width='400px' height='600px'></img>
                    </div>
                </section>

                <section className='harlem__community--section'>
                    {/* 3319x1817 */}
                <img src={CopePic} alt='CopePicture' className='cope__pic' width='331.9px'  height='181.7px'></img>
                    <section className='harlem__community--info'>
                    <h4> Harlem Community</h4>
                    <p>Through the Harlem Health Initiative’s programming it supports the Harlem community’s 
                        diverse and plentiful collection of community and faith-based organizations by 
                        providing them with capacity building, technical assistance, and development tools. 
                        Some ways in which this is accomplished include: <br></br>
                        <ul className='aboutus__inner--list'>
                            <li>Technical support with research, evaluation, and data management</li>
                            <li>Facilitating opportunities for inter-agency collaboration and shared resources</li>
                            <li>Communications training to ensure key messages reach their target audience</li>
                            <li>Operational training, including finance, information technology, and human resources</li>
                            <li>Training in fundraising, grant writing, and grant management</li>
                            <li>Placement of graduate student interns to provide support in these areas and more</li>
                        </ul>

                    </p>

                    <p>
                    HHI also connects partners with CUNY SPH faculty members who share their expertise in a broad range of urban health issues, including:<br></br>
                        <ul className='aboutus__inner--list'> 
                            <li>Maternal, child, and reproductive health</li>
                            <li>Obesity and diabetes</li>
                            <li>HIV prevention and treatment</li>
                            <li>Opioid use disorder and Hepatitis C prevention and treatment</li>
                            <li>Food policy</li>
                            <li>The built environment</li>
                        </ul>
                    </p>
                    </section>
                </section>
            </div>

            <div className='student__work--container'id='studentWork'>
                <section className='student__work--section'>
                    {/* 2164x1411 */}
                    <img src={StudentPic} alt='cuny sph' width='541px' height='352.75px'></img>
                    <article className='student__work--text'>
                        <h4> Student Work</h4>
                            <p><b>Workforce development</b> - putting theory in to practice <br></br>
                            We support the CUNY Graduate School of Public Health and Health Policy’s 
                            masters and doctoral students through internship and fellowship opportunities as fieldwork and capstone students within HHI and with our partners. 
                            Students have the opportunity to practice the theory and skills they learn in the classroom with real-world applications to support their host organizations and communities.<br></br>

                            <b>Notable Projects:</b> Cannabis newsletter, mapping of Harlem community boards,<br></br> 

                            <b>Fellowships:</b> Gil Addo Fellowship, Ruth Wooden Fellowship<br></br>

                            <b>Notable Placements:</b> HCCI 

                            </p>
                    </article>
                </section>
            </div>

            <div className='team__section--container'>
                <div className='team__section--header'>
                    <h3>Meet the Team</h3>
                </div>
                <sectiom className='meet__the--team'>
                    <div className='card'>
                        <img className='card__img--top' src={Arielsela} alt='Arielsela'></img>
                        <div className='card__body'>
                            <div className='card__title--container'>
                                <h4 className='card__title'>Arielsela</h4>
                            </div>
                            <p className='card__text'>We are thrilled to have Arielsela join this signature initiative 
                            delivering on our mission of social justice and better health outcomes for all.Thanks to the vision of the Booth Ferris Foundation and our Foundation Board, CUNY SPH continues to lead in our city’s efforts to enhance health equity,” 
                            said Adam M. Doyno, CUNY SPH Foundation executive director and director of development</p>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='card__img--top' src={Arielsela} alt='Arielsela '></img>
                        <div className='card__body'>
                            <div className='card__title--container'>
                                <h4 className='card__title'>Arielsela</h4>
                            </div>
                            <p className='card__text'>We are thrilled to have Arielsela join this signature initiative 
                            delivering on our mission of social justice and better health outcomes for all.Thanks to the vision of the Booth Ferris Foundation and our Foundation Board, CUNY SPH continues to lead in our city’s efforts to enhance health equity,” 
                            said Adam M. Doyno, CUNY SPH Foundation executive director and director of development</p>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='card__img--top' src={Arielsela} alt='Arielsela '></img>
                        <div className='card__body'>
                            <div className='card__title--container'>
                                <h4 className='card__title'>Arielsela</h4>
                            </div>
                            <p className='card__text'>We are thrilled to have Arielsela join this signature initiative 
                            delivering on our mission of social justice and better health outcomes for all.Thanks to the vision of the Booth Ferris Foundation and our Foundation Board, CUNY SPH continues to lead in our city’s efforts to enhance health equity,” 
                            said Adam M. Doyno, CUNY SPH Foundation executive director and director of development</p>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='card__img--top' src={Arielsela} alt='Arielsela '></img>
                        <div className='card__body'>
                            <div className='card__title--container'>
                                <h4 className='card__title'>Arielsela</h4>
                            </div>
                            <p className='card__text'>We are thrilled to have Arielsela join this signature initiative 
                            delivering on our mission of social justice and better health outcomes for all.Thanks to the vision of the Booth Ferris Foundation and our Foundation Board, CUNY SPH continues to lead in our city’s efforts to enhance health equity,” 
                            said Adam M. Doyno, CUNY SPH Foundation executive director and director of development</p>
                        </div>
                    </div>
                </sectiom>
            </div>
        </div>

    )
};

export default AboutUs;