import React, { useState } from 'react';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';
import ResetButton from './components/ResetButton';
import './App.css';

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [ties, setTies] = useState(0);

  const handleGameResult = (result) => {
    if (result === 'win') {
      setPlayerScore(playerScore + 1);
    } else if (result === 'lose') {
      setComputerScore(computerScore + 1);
    } else {
      setTies(ties + 1);
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setTies(0);
  };

  return (
    <div className="App">
      <h1>Pedra, Papel, Tesoura</h1>
      <Game onResult={handleGameResult} />
      <Scoreboard playerScore={playerScore} computerScore={computerScore} ties={ties} />
      <ResetButton onReset={resetGame} />
    </div>
  );
}

export default App;
