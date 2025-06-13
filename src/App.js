// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Valorant from './pages/Conteudos/Valorant';
import CounterStrike from './pages/Conteudos/Cs';
import LeagueOfLegends from './pages/Conteudos/Lol';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/valorant" element={<Valorant />} />
        <Route path="/counterstrike" element={<CounterStrike />} />
        <Route path="/leagueoflegends" element={<LeagueOfLegends />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
