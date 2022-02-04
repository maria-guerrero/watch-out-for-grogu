import "../styles/App.scss";
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
  const [textResult, setTextResult] = useState('');

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
      setCookies(cookies -1);

      if(cookies === 3) {
        setTextResult('¡Una galleta azul menos!');
      } else if(cookies === 2) {
        setTextResult('¡Solo queda una galleta azul!');        
      } else if(cookies === 1){
        setTextResult('¡Recogiste todas las galletas azules!');        
      } else if(cookies === 0) {
        setCookies(cookies + 0);
        setTextResult('¡No hay más galletas azules!');
      }    
    } 
    else if(randomNum === 2) {
      computerSelection = 'grogu';
      setGrogu(grogu + 1);
      setTextResult('¡Grogu se acerca!');
      if(grogu === 7) {
        setGrogu(grogu + 0);
        setTextResult('¡Grogu ha llegado y has perdido!');
      }
    } 
    else if(randomNum === 3) {
      computerSelection = 'frogs';
      setFrogs(frogs - 1);

      if(frogs === 3) {
        setTextResult('¡Ya quedan dos ranas!');       
      } else if(frogs === 2) {
        setTextResult('¡Una rana menos!');      
      } else if(frogs === 1){
        setTextResult('¡Recogiste todas las ranas!');      
      } else if(frogs <= 0) {
        setFrogs(frogs + 0);
        setTextResult('¡No hay más ranas!');
      }
    }
    else {
      computerSelection = 'eggs';
      setEggs(eggs - 1);

      if(eggs === 3) {
        setTextResult('¡Vamos que quedan dos huevos!');       
      } else if(eggs === 2) {
        setTextResult('¡A por el último huevo!');      
      } else if(eggs === 1){
        setTextResult('¡Recogiste todos los huevos!');      
      } else if(eggs <= 0) {
        setEggs(eggs + 0);
        setTextResult('¡No hay más huevos!');
      }
    }
    return computerSelection;
  }

  return (
    <div className="body">
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Main/>} />
          <Route path="rules" element={<Rules/>} />
          <Route path="pieces" element={<Pieces/>} />
          <Route path="game" element={<Game textResult={textResult} eggs={eggs} frogs={frogs} grogu={grogu} cookies={cookies} numberComputer={numberComputer} />} />
        </Route>
      </Routes>  

      <Footer />
    </div>
  );
}

export default App;
