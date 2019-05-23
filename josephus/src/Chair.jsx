import React from 'react';
import chairImg from './chair.png';

const Chair = ({ num }) => (
  <div className="chair">
    <img src={chairImg} alt={`chair_${num}`}/>
  </div>
)

export default Chair