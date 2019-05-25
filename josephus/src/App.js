/*
N.B.: There are two big things left to do to make this properly functional:

  1) Finish the functionality for the "runSimulation" function. Currently I'm
  setting a boolean "isRunning" variable in my App component which gets passed
  down to the Diagram component. If this changes to true, it should trigger a function
  defined within that component, probably in an effect hook, that runs the singleStep()
  function an appropriate number of times, probably with setTimeout() or setInterval().

  2) Organize the diagram UI better so that the chairs are in a circle, and a more
  interesting animation happens that shows which chair wins at the end. I'm thinking of 
  doing this using either CSS transform or jQuery, or likely some combination, to do this,
  possibly by passing a style prop into the chair components as they render and using that
  in the components themselves to define a transform style.

*/


import React, { useState } from 'react';
import './App.scss';
import Sidebar from './Sidebar';
import Diagram from './Diagram';

const App = () => {
  
  // Store state variables in various hooks.
  const [numChairs, setNumChairs] = useState(100);
  const [ms, setMs] = useState(200);
  const [isRunning, setIsRunning] = useState(false);
  const [currChair, setCurrChair] = useState(0);
  const [nextChair, setNextChair] = useState(false);
  const [step, setStep] = useState(0)

  const runSimulation = e => {
    e.preventDefault();
    setIsRunning(true)
  }

  const singleStep = e => {
    e.preventDefault();
    setNextChair(true)
  }

  const resetState = e => {
    e.preventDefault();
    setStep(0);
    setIsRunning(false);
    setNumChairs(100);
    setMs(200);
    setCurrChair(0);
    Array
      .from(document.getElementsByClassName("marked"))
      .forEach(el => el.className = "chair unmarked");
  }

  return (
    <>
      <Sidebar 
        numChairs={numChairs} 
        setNumChairs={setNumChairs}
        ms={ms}
        setMs={setMs}
        runSimulation={runSimulation}
        singleStep={singleStep}
        resetState={resetState}/>
      <Diagram 
        numChairs={numChairs}
        ms={ms}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        nextChair={nextChair}
        setNextChair={setNextChair}
        currChair={currChair}
        setCurrChair={setCurrChair}
        step={step}
        setStep={setStep}/>
    </>
  );
}


export default App;
