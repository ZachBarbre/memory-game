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


class App extends MemoryCard {
  state = {
    pickedCards: [],
    deck: generateDeck()
  }

  pickCard = (cardIndex) => {
    if (!!this.state.deck[cardIndex].isFlipped){
      return
    }
    const cardToFlip = {...this.state.deck[cardIndex]};
    cardToFlip.isFlipped = true;
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    const newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index){
        return cardToFlip;
      }
        return card;
    });
    if (newPickedCards.length === 2){
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol){
        setTimeout(this.unflipCards(card1Index, card2Index), 1000);
      }
      newPickedCards = [];
    }
    this.setState(
      {deck: newDeck, pickedCards: newPickedCards}
    );
  }

  unflipCards = (card1Index, card2Index) => {
    const card1 = {...this.state.deck[card1Index]};
    const card2 = {...this.state.deck[card2Index]};
    card1.isFlipped = false;
    card2.isFlipped = false;
    console.log('original', this.state.deck)
    const newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index){
        return card1;
      }
      if (card2Index === index){
        return card2;
      }
      return card;
    });
    console.log('new', newDeck)
    this.setState(
      {deck: newDeck}
    );
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} 
              key={index} pickCard={this.pickCard.bind(this, index)} />
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
