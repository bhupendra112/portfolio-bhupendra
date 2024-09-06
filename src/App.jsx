import './App.css';
import { useRef } from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hire from './components/Hire';
import Contact from './components/Contact';
import Massage from './components/Massage';
import CompanyMessage from './components/CompanyMessage';


function App() {
    // Create refs for each section
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null); // Updated ref to match "Project"
    const skillRef = useRef(null); // Updated ref to match "Skill"
    // const contactRef = useRef(null);

  // Scroll handler function
  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "project": // Updated case to "project"
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case "skill": // Updated case to "skill"
        skillRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      // case "contact":
      //   contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      //   break;
      default:
        break;
    }
  };

  return (
    <Router>
      <Routes>
        {/* Main Content Route */}
        <Route
          path="/"
          element={
            <>
              <Header onScrollToSection={scrollToSection} />
              <div ref={homeRef}>
                <Banner />
              </div>
              <div ref={aboutRef}>
                <About />
              </div>
              <div ref={projectRef}> {/* Updated ref to "projectRef" */}
                <Services />
              </div>
              <div ref={skillRef}> {/* Updated ref to "skillRef" */}
                <Expertise />
              </div>
              <div ref={skillRef}>
                <Footer />
              </div>
            </>
          }
        />

        {/* Separate Route for Hire */}
        <Route path="/hire" element={<Hire />} />
        <Route path="/contact" element={<Hire />} />
        <Route path="/message" element={<Massage />} />
        <Route path="/company-message" element={<CompanyMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
