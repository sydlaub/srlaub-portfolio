import { useState } from 'react';
import React from 'react';
// import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Nav />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>
  );
}


