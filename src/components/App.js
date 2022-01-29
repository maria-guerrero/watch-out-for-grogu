import "../styles/App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Game from "./Game";
import Pieces from "./Pieces";
import Rules from "./Rules";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="rules" element={<Rules />} />
        <Route path="pieces" element={<Pieces />} />
        <Route path="game" element={<Game />} />
      </Routes>

      <Main />

      <Footer />
    </div>
  );
}

export default App;
