import React from 'react';
import chairImg from './chair.png';

const Chair = ({ num, angle }) => (
  <div className="chair unmarked" >
    <img 
      src={chairImg} 
      alt={`chair_${num}`} 
      style={{transform: `rotate(${angle}deg) translate(0, -210px)`}}/>
    <p 
      style={{transform: `rotate(${angle}deg) translate(0, -225px) rotate(-${angle}deg)`}}>
      {num}
    </p>
  </div>
)

export default Chair