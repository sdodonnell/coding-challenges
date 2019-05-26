import React, { useState } from 'react';
import './App.css';
import Board from './Board';

function App() {

  const [size, setSize] = useState(3);

  return (
    <div className="App">
      <Board size={size}/>
    </div>
  );
}

export default App;
