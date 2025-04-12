import React from 'react';

const Card = ({ card, pic, onClick }) => {
  return (
    <div key={card.id} onClick={onClick}>
      {card.isFliped ? (
        <img src={card.src} alt="card" />
      ) : (
        <img src={pic} alt="back" />
      )}
    </div>
  );
};

export default Card;