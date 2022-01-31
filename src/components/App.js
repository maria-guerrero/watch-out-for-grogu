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

  const [grogu, setGrogu] = useState(0);
  const [cookies, setCookies] = useState(3);
  const [frogs, setFrogs] = useState(3);
  const [eggs, setEggs] = useState(3);

  // Función que generará un número aleatorio
  const getRandomNumber = (max) => {
    return Math.ceil(Math.random() * max);
   }

  // Función donde elegimos la elección del pc según el número aleatorio
  const numberComputer = () => {
    const randomNum = getRandomNumber(4);
    let computerSelection;

    if(randomNum === 1) {
      computerSelection = 'cookies';
      setCookies(-1);
    } 
    else if(randomNum === 2) {
      computerSelection = 'grogu';
      setGrogu(+1);
    } 
    else if(randomNum === 3) {
      computerSelection = 'frogs';
      setFrogs(-1);
    }
    else {
      computerSelection = 'eggs';
      setEggs(-1);
    }
    return computerSelection;
  }

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Main/>} />
          <Route path="rules" element={<Rules/>} />
          <Route path="pieces" element={<Pieces/>} />
          <Route path="game" element={<Game/>} />
        </Route>
      </Routes>  

      <Footer />
    </div>
  );
}

export default App;
