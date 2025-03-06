// import React from 'react';

// function Navigation() {
//   return (
//     <nav className="navigation">
//       <div className="logo">M.</div>
//       <div className="nav-links">
//         <a href="#home" className="active">Home</a>
//         <a href="#about">About</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </div>
//       <div className="nav-links-right">
//         <a href="#hire" className="hire-button">HIRE ME</a>
//       </div>
//     </nav>
//   );
// }

// export default Navigation;

import React, { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="logo">LOGO</div>

      {/* Center - Navigation Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Project</a>

        <a href="#">Contact</a>
      </div>

      {/* Right - Button */}
      <div className="nav-button">
        <button>Get Started</button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navigation;
