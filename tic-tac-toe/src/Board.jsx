import React, { useState } from 'react';
import Square from './Square';

const Board = ({size}) => {

  const [currPlayer, setCurrPlayer] = useState("x");
  const [grid, setGrid] = useState(Array(size).fill(Array(size)))

  // const gameOver = () => {
  //   xWins() || oWins()
  // }

  const populateBoard = () => {
    let squares = [];
    for (let row in grid) {
      for (let col in grid) {
        squares.push(<Square pos={[row, col]} currPlayer={currPlayer} handleClick={handleClick}/>)
      }
    }
    return squares;
  }

  const handleClick = pos => {
    let [x, y] = [pos[0], pos[1]];
    let updatedGrid = grid;
    updatedGrid[x][y] = currPlayer;
    setGrid(updatedGrid);
    // return if gameOver();
    currPlayer === "x" ? setCurrPlayer("o") : setCurrPlayer("x");
  }

  return (
    <div className="board">
      {populateBoard()}
    </div>
  )
}

export default Board;