import React, { useState, useLayoutEffect } from 'react';
import Square from './Square';

const Board = ({size}) => {

  const createGrid = () => {
    let grid = Array(size);
    for (let i = 0; i < size; i++) {
      grid[i] = Array(size).fill(null)
    }
    return grid;
  }

  const [currPlayer, setCurrPlayer] = useState("x");
  const [grid, setGrid] = useState(createGrid());
  const [won, setWon] = useState(false);

  useLayoutEffect(() => {
    setGrid(createGrid());
  }, [size])

  const winner = mark => {

    // Row win
    for (let row of grid) {
      if (row.every(el => el === mark)) {
        console.log('row')
        return true
      }
    }

    // Col win
    for (let i = 0; i < size; i++) {
      let col = [];
      for (let j = 0; j < size; j++) {
        if (grid[j][i] === mark) {
          col.push(mark);
        } else {
          continue;
        }
      }
      if (col.length === size) {
        console.log('col')
        return true
      }
    }

    // Diagonal win 
    let diag = [];
    for (let row in grid) {
      for (let col in grid) {
        if (row === col && grid[row][col] === mark) {
          diag.push(mark)
        } 
      }
    }
    if (diag.length === size) {
      console.log('diag')
      return true
    }

    return false
  }

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
    if (won) return;
    let [x, y] = [pos[0], pos[1]];
    let updatedGrid = grid;
    updatedGrid[x][y] = currPlayer;
    setGrid(updatedGrid);
    if (winner('x') || winner('o')) {
      setWon(true)
    }
    currPlayer === "x" ? setCurrPlayer("o") : setCurrPlayer("x");
  }

  return (
    <div className="board">
      <div className="board-interior" style={{gridTemplateColumns: `repeat(${size}, auto)`}}>
        {populateBoard()}
      </div>
    </div>
  )
}

export default Board;