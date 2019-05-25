import React from 'react';
import chairImg from './chair.png';

const Chair = ({ num }) => (
  <div className="chair unmarked">
    <img src={chairImg} alt={`chair_${num}`}/>
    {num}
  </div>
)

export default Chair