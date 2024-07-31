import React from 'react';
import './Scoreboard.css';

function Scoreboard({ playerScore, computerScore, ties }) {
  return (
    <div className="scoreboard">
      <h2>Placar</h2>
      <p>Jogador: {playerScore}</p>
      <p>Computador: {computerScore}</p>
      <p>Empates: {ties}</p>
    </div>
  );
}

export default Scoreboard;
