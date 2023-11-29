import { Gamja_Flower } from 'next/font/google';
import React, { useState } from 'react';

const NumberHistory = ({boardState, onSubmit}) => {
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState('');
  const [gameIsEnabled, setGameIsEnabled] = useState(true);

  const handleNumberInput = (event) => {
    setCurrentNumber(event.target.value);
  };

  const doStepForUsers = (boardState, userNum) => {
    const div = userNum % 3;  // tricky logic here
    let userToMove = NaN;
    if (div === 0) {
      userToMove = 3;
    } else if (div === 1) {
      userToMove = 0;
    } else if (div === 2) {
      userToMove = 1;
    }
    const updatedBoardState = [...boardState];
    updatedBoardState[userToMove] = updatedBoardState[userToMove] + 12;
    onSubmit(updatedBoardState);
  };

  const doMove = () => {
    const numberValue = parseInt(currentNumber, 10);
    
    if (isNaN(numberValue) || numberValue < 0 || numberValue > 34) return setCurrentNumber('');

    setNumbers([...numbers, numberValue]);
    setCurrentNumber('');
    if (numberValue === 0) return setGameIsEnabled(false);
    doStepForUsers(boardState, numberValue);
    if (boardState.includes(25) || boardState.includes(26) || boardState.includes(27)) {
      setGameIsEnabled(false);
    }
  };

  const resetGame = () => {
    setNumbers([]);
    setCurrentNumber('');
    onSubmit([1,2,3]);
    setGameIsEnabled(true)
  };
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md justify-center">
      <h2 className="text-lg font-semibold mb-4">Number History</h2>
      <div className="mb-4">
        <input
          type="number"
          min="0"
          max="33"
          placeholder="Enter number"
          value={currentNumber}
          disabled={!gameIsEnabled}
          onChange={handleNumberInput}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>
      <div className="flex gap-4 mb-6">
        <button 
        onClick={doMove} 
        disabled={!gameIsEnabled}
        className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none">
          Move Users
        </button>
        <button onClick={resetGame} className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
          Reset Game
        </button>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Number History:</h3>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>Roll {index + 1} - {number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NumberHistory;
