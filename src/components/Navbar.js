import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isOpen ? "open" : ""}>
        <li><a href="#home" className="home-link">Home</a></li>
        <li><a href="#content">Findings</a></li>
        <li><a href="#taxonomy">Taxonomy</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
