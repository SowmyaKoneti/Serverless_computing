import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Taxonomy from './components/Taxonomy';
import Team from './components/Team';
import './App.css';


function App() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const addHoverClass = () => cursor.classList.add('hover');
    const removeHoverClass = () => cursor.classList.remove('hover');

    // Track cursor movement
    document.addEventListener('mousemove', moveCursor);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, td, th');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
      document.body.removeChild(cursor);
    };
  }, []);
  return (
    <Router>
      < div className="App" >
        <NavBar />
        <Routes>
          {/* Redirect from the root path to the /home path */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/taxonomy" element={<Taxonomy />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div >
    </Router >
  );
}

export default App;
