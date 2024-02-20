import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Services from "./components/services";
import Contact from "./components/contact";
// import Footer from "./components/footer";
import Preloader from "./components/preloader";
import './css/style.css';
import './css/utilityclass.css';
import './css/blobz.min.css';

function App() {
  const [isLoading , setIsLoading ] = useState(true);

  useEffect(() => {
    // Simulating a delay to showcase the preloader
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <Footer /> */}
          </>
        )}
      </>
    </Router>
  );
}

export default App; 