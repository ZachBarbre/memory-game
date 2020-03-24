import React from 'react';
import MemoryCard from './components/MemoryCard.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Memory Game</h1>
       <p className="subtitle">Match Cards to Win</p>
      </header>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
      <div>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </div>
    </div>
  );
}

export default App;
