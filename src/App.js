import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Skills from "./components/skills";
import Projects from "./components/projects";

import Contact from "./components/contact";
import Ghar from "./components/Ghar";

import "./css/style.css";
import "./css/utilityclass.css";
import "./css/blobz.min.css";
import Service from "./components/Service";

function App() {
  return (
    <Router>
      <>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Ghar />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      </>
    </Router>
  );
}

export default App;
