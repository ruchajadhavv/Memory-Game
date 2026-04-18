import { Card } from './components/card';
import { GameHeader } from './components/GameHeader';
import { WinMessage } from './components/WinMessage';
import { useGameLogic } from './hooks/useGameLogic';

const cardValues =[
  "🍎",
  "🍌",
  "🍇",
  "🍓",
  "🍊",
  "🥑",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍓",
  "🍊",
  "🥑",
  "🍑",
  "🍒",
];

function App() {
  const {
    cards,
    score,
    moves,
    handleCardClick,
    initializeGame,
    isGameComplete,
  } = useGameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />

      {isGameComplete && <WinMessage moves={moves} />}

      <div className="cards-grid">
        {cards.map((card) => (
          <Card
            key={card.id}          // ✅ unique key
            card={card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
