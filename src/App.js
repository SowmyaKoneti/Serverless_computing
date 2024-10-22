import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Taxonomy from './components/Taxonomy';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <Router basename='Serverless_security'>
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
