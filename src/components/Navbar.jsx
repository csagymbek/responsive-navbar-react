import React, { useState } from "react";

export const Navbar = () => {
  const [navLinkOpen, setNavLinkOpen] = useState(false);

  const handleNavLinksToggle = () => {
    setNavLinkOpen(!navLinkOpen);
  };

  return (
    <nav>
      <div className="navbar__logo">
        <i className="fas fa-mountain"></i>
        <h4>Mountains</h4>
      </div>
      <ul
        className={navLinkOpen ? "navbar__navlinks active" : "navbar__navlinks"}
      >
        <li className="navbar__link">
          <a href="#">Home</a>
        </li>
        <li className="navbar__link">
          <a href="#">About</a>
        </li>
        <li className="navbar__link">
          <a href="#">Services</a>
        </li>
        <li className="navbar__link">
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className="hamburger-toggle" onClick={handleNavLinksToggle}>
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </nav>
  );
};
