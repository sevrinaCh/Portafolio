import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App () {
  return (
   
    <div className="navbar">
      <Navbar/>
      <About title="About" id="about"/>
      <Skills title="Skills" id="skills"/>
      <Projects title="Projects" id="projects"/>
      <Experience title="Experience" id="experience"/>
      <Education title="Education " id="education"/>
      <Contact title="Contact" id="contact"/>
      
    </div>
  
  );
};



export default App;
