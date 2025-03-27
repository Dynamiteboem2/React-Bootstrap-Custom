import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import NewsSection from './components/NewsSection';

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-4">
        <h2 className="mb-4">News articles</h2>
        <NewsSection />
      </div>
    </>
  );
}

export default App;
