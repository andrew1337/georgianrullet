// GameField component
import React from 'react';
import styles from './index.css';

  const numbers = Array.from({ length: 34 }, (_, i) => i).slice(1); // Create an array from 1 to 34
  const columns = [1, 2, 0];

  const tableData = columns.reduce((memo, remainder) => {
    memo.push(numbers.filter((num) => num % 3 === remainder))
    return memo
  }, [])

const renderCell = (boardState, num, users, userId) => {
  if (boardState.includes(num) && num !== 0) {
      return <div key={num}>{num} ({users[userId]})</div>;      
  }
  return <div key={num}>{num}</div>;
}

const GameField = ({ users, boardState }) => {
  return (
    <div className="game-field">
      <div className="top-row flex justify-center items-center">
        <div className="border px-4 py-2 gap-2 rounded-md">0 ({users[3]})</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {tableData.map((item, index) => (
          <div key={index} className="column flex flex-col items-center gap-2">
            {item.map((num) => renderCell(boardState, num, users, index))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameField;
