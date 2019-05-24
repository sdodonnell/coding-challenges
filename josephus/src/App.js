import React, { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';
import Diagram from './Diagram';

const App = () => {
  
  const [chairs, setChairs] = useState(100);
  const [ms, setMs] = useState(200);
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = () => {
    setIsRunning(true)
  }

  const singleStep = () => {

  }

  const resetState = () => {
    setChairs(100);
    setMs(200);
  }

  return (
    <>
      <Sidebar 
        chairs={chairs} 
        setChairs={setChairs}
        ms={ms}
        setMs={setMs}
        runSimulation={runSimulation}
        singleStep={singleStep}
        resetState={resetState}/>
      <Diagram 
        chairs={chairs}
        ms={ms}
        isRunning={isRunning}/>
    </>
  );
}


export default App;
