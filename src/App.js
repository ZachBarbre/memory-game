import React from 'react';
import MemoryCard from './components/MemoryCard.jsx';
import './App.css';

const shuffle = deck => {
  let j = '';
  let temp = '';
  for (let i = deck.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

const generateDeck = () => {
  const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`];
  let deck = [];
  for (let i = 0; i < 16; i++){
    deck.push({
      isFlipped: false, 
      symbol: symbols[i % 8]
    });
  }
  return shuffle(deck);
}
console.log(generateDeck());

class App extends MemoryCard {
  state = {
    pickedCards: [],
    deck: generateDeck()
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} />
    });

    return (
      <div className="App">
        <header className="App-header">
         <h1>Memory Game</h1>
         <p className="subtitle">Match Cards to Win</p>
        </header>
        <div>
            {cardsJSX.slice(0,4)}
        </div>
        <div>
          {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;
