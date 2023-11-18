import { BrowserRouter, Routes, Route } from "react-router-dom";

// Css and SCSS import
import "./App.scss";



//Msal Imports
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./authConfig";



// navigation components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.js";

// page components

import Home from "./pages/home/Home.js";
import AboutUs from "./pages/aboutUs/AboutUs.js";
import ProjectsPage from "./pages/projects/Projects.js";
import EventPage from "./pages/eventPage/EventPage.js";
import Portal from "./pages/portal/Portal";

// Sub-page Imports

import CommunityHealthBulletin from "./pages/projects/temp_project_description_pages/CommunityHealthBulletin.js";
import HhiWebinar from "./pages/projects/temp_project_description_pages/HhiWebinarSeries.js";
import CannabisEquityCenter from "./pages/projects/temp_project_description_pages/Cannabis.js";
import CommunityEngagementImpactProject from "./pages/projects/temp_project_description_pages/CommunityEngagement.js";
import HarlemStrong from "./pages/projects/temp_project_description_pages/HarlemStrong.js";
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard.js";


function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Events" element={<EventPage />} />
          <Route path="Portal" element={<Portal />} />
          <Route path="/CommunityHealthBulletin" element={<CommunityHealthBulletin />} />
          <Route path="/HhiWebinar" element={<HhiWebinar />} />
          <Route path="/CannabisEquityCenter" element={<CannabisEquityCenter />} />
          <Route path="/CommunityEngagementImpactProject" element={<CommunityEngagementImpactProject />} />
          <Route path="/HarlemStrong" element={<HarlemStrong />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </MsalProvider>
  );
}

export default App;
