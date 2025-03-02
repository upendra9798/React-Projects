import "./App.css";  
import React, { useState } from 'react'
import Front_page from './components/front_page'
import Start_game from "./components/start_game";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  }
  return (

        <>{isGameStarted ? <Start_game/> : <Front_page toggle={toggleGamePlay}/>}</>
   
  )
}

export default App