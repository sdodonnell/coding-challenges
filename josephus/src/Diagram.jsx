import React, { useEffect } from 'react';
import Chair from './Chair';

const Diagram = ({ chairs, ms, isRunning }) => {

  const renderChairs = () => {
    return Array.from(Array(+chairs)).map((el, i) => {
      return <Chair key={i + 1} num={i + 1} marked="false"/>
    })
  }
  
  const runSimulation = () => {
    let chairs = document.getElementsByClassName("chair");
    let markedChairs = document.getElementsByClassName("marked");
  }

  useEffect(() => isRunning ? runSimulation : null)

  return (
    <div className="diagram">
      {renderChairs()}
    </div>
  )
}

export default Diagram;