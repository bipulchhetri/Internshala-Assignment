import React, { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">M</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Project</a>

        <a href="#">Contact</a>
      </div>

      <div className="nav-button">
        <button>Get Started</button>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navigation;
