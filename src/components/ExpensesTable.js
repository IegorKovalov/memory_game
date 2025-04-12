import { useState, useEffect } from "react";
import Card from './Card';
import GameStatus from './GameStatus';
import './Expenses.css';

const allImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuivABB78lOMZO79z_1884cdml564R3UO_NA&s",
  "https://www.freesvgdownload.com/wp-content/uploads/2024/04/stitch-and-angel.webp",
  "https://img2.embroiderydesigns.com/printart/xlarge/method_man_designs/pgmm1102.webp",
  "https://img2.embroiderydesigns.com/printart/xlarge/method_man_designs/pgmm199.webp",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/853px-NewTux.svg.png",
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20151118161041",
  "https://i.etsystatic.com/31309176/r/il/99849e/3517313579/il_570xN.3517313579_t9u6.jpg",
  "https://i0.wp.com/svgfile.co/wp-content/uploads/2024/11/3a-1.jpg?fit=500%2C500&ssl=1"
];

export default function ExpensesTable({pic, numOfPairs = 4}) {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameWon, setGameWon] = useState(false);

  const initGame = () => {
    const selectedImages = allImages.slice(0, numOfPairs);
    const shuffleCards = [...selectedImages, ...selectedImages]
      .map((img, index) => ({
        id: index, 
        src: img,
        isFliped: false,
        isMatched: false
      }))
      .sort(() => Math.random() - 0.5);
    
    setCards(shuffleCards);
    setGameWon(false);
  };

  useEffect(() => {
    initGame();
  }, [numOfPairs]);
  
  const handleCardClick = (card) => {
    if (selectedCards.length < 2 && !card.isFliped && !card.isMatched) {
      setCards((prevCards) => 
        prevCards.map((c) => 
          c.id === card.id ? {...c, isFliped: true} : c));
      setSelectedCards((prevSelected) => [...prevSelected, card]);
    }
  };
  
  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;
      if (first.src === second.src) {
        setCards((prevCards) => 
          prevCards.map((c) => 
            c.src === first.src ? {...c, isMatched: true} : c
        ));
      } else {
        setTimeout(() => {
          setCards((prevCards) => 
            prevCards.map((c) => 
              c.id === first.id || c.id === second.id
                ? {...c, isFliped: false} : c
            ));
        }, 2000);
      }
      setSelectedCards([]);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.isMatched)) {
      setGameWon(true);
    }
  }, [cards]);

  return (
    <div>
      <GameStatus gameWon={gameWon} onNewGame={() => initGame()} />
      
      {!gameWon && (
        <div className="expense-grid"> 
          {cards.filter((card) => !card.isMatched)
            .map((card) => (
              <Card 
                key={card.id}
                card={card}
                pic={pic}
                onClick={() => handleCardClick(card)}
              />
            ))}
        </div>
      )}
      
      <button onClick={() => initGame()}>Init game</button>
    </div>
  );
}