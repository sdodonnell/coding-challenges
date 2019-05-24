import React from 'react';

const Sidebar = props => (
  <div className="sidebar">
    <h1>The 100 Chair Problem</h1>
    <p>
      This simulation represents a modified version of the Josephus problem. Given the inputs of a number of chairs and a timer value, it visualizes the elimination of the participants using the timer as the delay between eliminations. Additionally you may step through the simulation manually by using the remove chair button.
    </p>
    <form>
      <input type="number" min="2" value={props.chairs} onChange={e => props.setChairs(e.target.value)} />
      <input type="number" min="0" step="100" value={props.ms} onChange={e => props.setMs(e.target.value)} />
      <button className="simulation-btn" onClick={() => props.runSimulation}>Run Simulation</button>
      <button className="step-btn" onClick={() => props.singleStep}>Single Step</button>
      <button className="reset-btn" onClick={() => props.resetState}>Reset</button>
    </form>
  </div>
)

export default Sidebar;