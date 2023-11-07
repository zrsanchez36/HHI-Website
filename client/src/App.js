import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// navigation components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.js";

// page components

import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import ProjectsPage from "./pages/projects/Projects";
import EventPage from "./pages/eventPage/EventPage";
import Portal from "./pages/portal/Portal";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Events" element={<EventPage />} />
        <Route path="Portal" element={<Portal />} />
      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
