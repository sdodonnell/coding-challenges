import React from 'react';

const Square = props => {
  return (
    <div className="square" onClick={e => props.handleClick(props.pos)}>

    </div>
  )
}

export default Square;