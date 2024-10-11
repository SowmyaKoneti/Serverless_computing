import React from 'react';
import NavBar from './components/Navbar';
import Content from './components/Content';
import Home from './components/Home';
import Taxonomy from './components/Taxonomy';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Content />
      <Taxonomy />
      <Team />
    </div >
  );
}

export default App;
