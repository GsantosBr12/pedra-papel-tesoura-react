import React from 'react';
import './ResetButton.css';

function ResetButton({ onReset }) {
  return (
    <button className="reset-button" onClick={onReset}>
      Reiniciar Jogo
    </button>
  );
}

export default ResetButton;
