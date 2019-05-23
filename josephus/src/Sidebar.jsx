import React, { useState } from 'react';

const Sidebar = () => {

  let [chairs, setChairs] = useState(100);
  let [ms, setMs] = useState(200);

  const handleChairChange = e => {
    setChairs(e.target.value)
  }

  const handleMsChange = e => {
    setMs(e.target.value)
  }

  return (
    <div className="sidebar">
      <h1>The 100 Chair Problem</h1>
      <p>
        This simulation represents a modified version of the Josephus problem. Given the inputs of a number of chairs and a timer value, it visualizes the elimination of the participants using the timer as the delay between eliminations. Additionally you may step through the simulation manually by using the remove chair button.
      </p>
      <form>
        <input type="number" min="2" value={chairs} onChange={handleChairChange} />
        <input type="number" min="0" step="100" value={ms} onChange={handleMsChange} />
      </form>
    </div>
  )
}

export default Sidebar;