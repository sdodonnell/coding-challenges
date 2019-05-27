import React, { useState } from 'react';
import './App.css';
import Board from './Board';

function App() {

  const [size, setSize] = useState(3);
  const [reset, setReset] = useState(0);

  const handleReset = e => {
    e.preventDefault(); 
    setSize(3);
    setReset(Math.random());
  }

  return (
    <div className="App">
      <Board key={reset} size={size} />
      <form className="board-input">
        <input type="number" min="3" value={size} onChange={e => setSize(e.target.value)}/>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default App;
