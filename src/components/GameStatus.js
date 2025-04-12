import React from 'react';

const GameStatus = ({ gameWon, onNewGame }) => {
  if (!gameWon) return null;
  
  return (
    <div>
      <h2>You won!!!</h2>
      <button onClick={onNewGame}>New game</button>
    </div>
  );
};

export default GameStatus;