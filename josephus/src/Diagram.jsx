import React, { useState, useEffect } from 'react';
import Chair from './Chair';

const Diagram = ({ 
  numChairs, 
  ms, 
  isRunning,
  setIsRunning, 
  nextChair, 
  setNextChair, 
  currChair, 
  setCurrChair,
  step,
  setStep
}) => {

  const [unmarked, setUnmarked] = useState(numChairs)

  const renderChairs = num => {
    // jQuery equivalent = $(listItems[i]).css("transform", "rotate(" + rotateAngle + "deg) translate(0, -200px) rotate(-" + rotateAngle + "deg)")
    const offsetAngle = 360 / num;
    return Array.from(Array(num)).map((el, i) => {
      const rotateAngle = offsetAngle * i;
      return <Chair key={i + 1} num={i + 1} angle={rotateAngle}/>
    })
  }

  const singleStep = async () => {
    /* Takes one step through the chairs, using a DOM query to get 
    the chairs that are still in play and changing their class to show
    that they are out of play.
    */
    let unmarkedChairs = document.getElementsByClassName("unmarked");
    let nextOutChair = (currChair + step) % unmarkedChairs.length;
    unmarkedChairs[nextOutChair].className = "chair marked";
    await setCurrChair(nextOutChair);
  }

  useEffect(() => {
    if (nextChair) {
      singleStep();
      setNextChair(false);
      setStep(step => step + 1);
      setUnmarked(unmarked => unmarked - 1);
    } 
  }, [nextChair])

  useEffect(() => {
    if (!isRunning) {
      return;
    } else if (isRunning && unmarked > 1) {
      var timer = setTimeout(() => {
          singleStep();
          setStep(step => step + 1)
          setUnmarked(unmarked => unmarked - 1);
        }, ms);
    } else if (unmarked === 1) {
      let finalChair = document.getElementsByClassName('unmarked')[0];
      lastChair.className = "chair final";
      setIsRunning(false)
    }
    
    return () => clearTimeout(timer);
  }, [isRunning, unmarked])

  useEffect(() => {
    setUnmarked(numChairs)
  }, [numChairs])

  return (
    <div className="diagram">
      {renderChairs(+numChairs)}
    </div>
  )
}

export default Diagram;