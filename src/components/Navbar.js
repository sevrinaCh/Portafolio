import React from "react";
export default function Navbar() {
  return (
  <header style={{
    backgroundColor: "#61d8e7",
    height: 40
   }}>
    <nav>
    
      <ul>
      <a href="#about" style={{
         color:"#333",
         fontSize:"1.1rem",
         fontWeight:"bold",
         marginLeft: 20
        }}>
        About me
      </a>
      <a href="#skills" style={{
         color:"#333",
         fontSize:"1.1rem",
         fontWeight:"bold",
         marginLeft: 20
        }}>
        Skills
      </a>
      <a href="#projects" style={{
         color:"#333",
         fontSize:"1.1rem",
         fontWeight:"bold",
         marginLeft: 20
        }}>
        Projects
      </a>
      <a href="#experience" style={{
         color:"#333",
         fontSize:"1.1rem",
         fontWeight:"bold",
         marginLeft: 20
        }}>
        Work Experience
      </a>
      <a href="#education" style={{
         color:"#333",
         fontSize:"1.1rem",
         fontWeight:"bold",
         marginLeft: 20
        }}>
        Education
      </a>
      <a href="#contact" style={{
         color:"#333",
         fontSize:"1.1rem",
         fontWeight:"bold",
         marginLeft: 20
        }}>
        Contact
      </a>  
    </ul>  
    </nav>
  </header>
  );
}