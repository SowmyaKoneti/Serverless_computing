import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Link to="/" className="home-link">Home</Link>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isOpen ? "open" : ""}>
        <li><Link to="/content" onClick={toggleMenu}>Findings</Link></li>
        <li><Link to="/taxonomy" onClick={toggleMenu}>Taxonomy</Link></li>
        <li><Link to="/team" onClick={toggleMenu}>Team</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
