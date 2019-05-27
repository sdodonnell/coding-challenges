import React, { useState } from 'react';

const Square = props => {

  const [mark, setMark] = useState(null);

  const handleClick = () => {
    if (mark) return;
    setMark(props.currPlayer);
    props.handleClick(props.pos);
  }

  return (
    <div className="square" onClick={() => handleClick()}>
      <p>{mark ? mark : null}</p>
    </div>
  )
}

export default Square;