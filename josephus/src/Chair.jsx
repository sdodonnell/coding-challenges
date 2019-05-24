import React from 'react';
import chairImg from './chair.png';

const Chair = ({ num, marked }) => (
  <div className={marked === "false" ? "chair" : "chair marked"}>
    <img src={chairImg} alt={`chair_${num}`}/>
    {num}
  </div>
)

export default Chair