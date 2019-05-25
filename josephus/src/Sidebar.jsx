import React from 'react';

const Sidebar = ({
  numChairs,
  setNumChairs,
  ms,
  setMs,
  runSimulation,
  isRunning,
  singleStep,
  resetState
}) => (
  <div className="sidebar">
    <h1>The 100 Chair Problem</h1>
    <p>
      This simulation represents a modified version of the Josephus problem. Given the inputs of a number of chairs and a timer value, it visualizes the elimination of the participants using the timer as the delay between eliminations. Additionally you may step through the simulation manually by using the single step button.
    </p>
    <form>
      <div className="chairs-input">
        <input type="number" min="2" value={numChairs} onChange={e => setNumChairs(e.target.value)} />
        <p>chairs</p>
      </div>
      <div className="ms-input">
        <button className="simulation-btn" onClick={e => runSimulation(e)}>
          {isRunning ? "Pause Simulation" : "Run Simulation"}
        </button>
        <input type="number" min="0" step="100" value={ms} onChange={e => setMs(e.target.value)} />
        <p>ms</p>
      </div>
      <div className="buttons">
        <button className="step-btn" onClick={e => singleStep(e)}>Single Step</button>
        <button className="reset-btn" onClick={e => resetState(e)}>Reset</button>
      </div>
    </form>
  </div>
)

export default Sidebar;