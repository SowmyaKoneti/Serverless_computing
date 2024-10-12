import React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content';
import Taxonomy from './components/Taxonomy';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="content">
        <Content />
      </section>
      <section id="taxonomy">
        <Taxonomy />
      </section>
      <section id="team">
        <Team />
      </section>
    </div>
  );
}

export default App;
