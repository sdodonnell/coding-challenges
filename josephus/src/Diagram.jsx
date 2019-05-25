import React, { useEffect } from 'react';
import Chair from './Chair';

const Diagram = ({ 
  numChairs, 
  ms, 
  isRunning, 
  nextChair, 
  setNextChair, 
  currChair, 
  setCurrChair,
  step,
  setStep
}) => {

  const renderChairs = num => {
    return Array.from(Array(num)).map((el, i) => {
      return <Chair key={i + 1} num={i + 1}/>
    })
  }

  const singleStep = () => {
    /* Takes one step through the chairs, using a DOM query to get 
    the chairs that are still in play and changing their class to show
    that they are out of play.
    */
    let unmarkedChairs = document.getElementsByClassName("unmarked");
    let nextOutChair = (currChair + step) % unmarkedChairs.length;
    unmarkedChairs[nextOutChair].className = "chair marked";
    setCurrChair(nextOutChair);
  }

  useEffect(() => {
    if (nextChair) {
      singleStep();
      setNextChair(false);
      setStep(step + 1)
    } 

    /*
    Handle runSimulation() function here. Include effect hook to respond
    to isRunning prop. runSimulation() should call singleStep() using setTimeout()
    or setInterval(), passing in the ms prop, to call singleStep() until all but one chair
    component has been transformed.
    */
  })

  return (
    <div className="diagram">
      {renderChairs(+numChairs)}
    </div>
  )
}

export default Diagram;