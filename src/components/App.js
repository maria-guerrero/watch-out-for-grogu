import '../styles/App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div>

      <Header />
      
      <Routes>
        
        <Route path="rules" />
        <Route path="pieces" />
        <Route path="game" />
        
      </Routes>

      <Main />

      <Footer />
    </div>
  );
}

export default App;
