import axios from  'axios';
import {Link, useNavigate} from "react-router-dom";

// Component import
import Accordion from '../../components/accordion/projectspage_accordion/Accordion';
import TitleSection from '../../components/title section/TitleSection';



// image import
import CommunityImage from '../../assets/photos/stockimages/Community_1.jpg';
import WebinarImage from '../../assets/photos/stockimages/webinar_1.jpg';
import HarlemImage from '../../assets/photos/stockimages/harlem_1.jpg';
import CenterImage from '../../assets/photos/stockimages/center_1.jpg';
import CommunityEngagementImage from '../../assets/photos/stockimages/community_engagement_1.jpg';
import ProjectsImage from '../../assets/photos/stockimages/projects_1.jpg';


function ProjectsPage () {

    const projectData = [
        {
            title: "Community Health Biweekly Bulletin",
            content: "Content for Project 1...",
            image: CommunityImage
        },
        {
            title: "Harlem Health Initiative Webinar Series",
            content: "Content for Project 2...",
            image: WebinarImage
        },
        {
            title: "Cannabis Equity Center",
            content: "Content for Project 3...",
            image: CenterImage
        },
        {
            title: "Community Engagement Impact Project",
            content: "Content for Project 4...",
            image: CommunityEngagementImage
        },
        {
            title: "Harlem Strong",
            content: "Content for Project 5...",
            image: HarlemImage
        }
        
        // ... more projects
      ];


      return (
        <div className='projects__page'>
          <TitleSection title="Our Projects" backgroundImage={ProjectsImage} />
          <div>
            {projectData.map((project, index) => (
              <Accordion 
                key={index}
                title={project.title}
                backgroundImage={project.image}
              >
                <p>{project.content}</p>
              </Accordion>
            ))}
          </div>
        </div>
      );
};

export default ProjectsPage;