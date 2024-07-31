import React, { useState } from 'react';
import './Game.css';

function Game({ onResult }) {
  const choices = ['pedra', 'papel', 'tesoura'];
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

  const playGame = (choice) => {
    const computer = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      onResult('tie');
    } else if (
      (choice === 'pedra' && computer === 'tesoura') ||
      (choice === 'papel' && computer === 'pedra') ||
      (choice === 'tesoura' && computer === 'papel')
    ) {
      onResult('win');
    } else {
      onResult('lose');
    }
  };

  return (
    <div className="game">
      <h2>Escolha sua jogada:</h2>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="result">
        <p>Você escolheu: {playerChoice}</p>
        <p>O computador escolheu: {computerChoice}</p>
      </div>
    </div>
  );
}

export default Game;
