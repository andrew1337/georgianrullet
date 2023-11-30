import { Gamja_Flower } from 'next/font/google';
import React, { useState } from 'react';

const NumberHistory = ({boardState, onSubmit}) => {
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState('');
  const [gameIsEnabled, setGameIsEnabled] = useState(true);

  const handleNumberInput = (event) => {
    setCurrentNumber(event.target.value);
  };

const cslculatePrize = () => {
  // this function will increase i-th user's balance
  // by 1000 first time, by 2000 second time and 
  // the last will increase it by rest of shared amount of money

}

const doStepForUsers = (boardState, currentSpinValue) => {
  let usersIndex;

  switch (currentSpinValue % 3) {
    case 0:
      usersIndex = 2;
      break;
    case 1:
      usersIndex = 0;
      break;
    case 2:
      usersIndex = 1;
      break;
  }

  const updatedBoardState = [...boardState];
  const isFinalNumbers =
    updatedBoardState[usersIndex] === 25 ||
    updatedBoardState[usersIndex] === 26 ||
    updatedBoardState[usersIndex] === 27;

  updatedBoardState[usersIndex] += isFinalNumbers ? 9 : 12;
  
  onSubmit(updatedBoardState);
  return isFinalNumbers;
};

const doMove = () => {
  const parsedNumber = parseInt(currentNumber, 10);
  
  if (isNaN(parsedNumber) || parsedNumber < 0 || parsedNumber > 37) return setCurrentNumber('');

  setNumbers([...numbers, parsedNumber]);
  setCurrentNumber('');
  if (parsedNumber === 0) {
    // cslculatePrize();
    return setGameIsEnabled(false);
  }
  let wasFinalNumber = doStepForUsers(boardState, parsedNumber);
  if (wasFinalNumber) {
    // cslculatePrize();
    return setGameIsEnabled(false);
  }

};

  const resetGame = () => {
    setNumbers([]);
    setCurrentNumber('');
    onSubmit([1,2,3]);
    setGameIsEnabled(true)
  };

  return (
    <div className="">
      <h2 className="">Number History</h2>
      <div className="">
        <input
          type="number"
          min="0"
          max="33"
          placeholder="Enter number"
          value={currentNumber}
          disabled={!gameIsEnabled}
          onChange={handleNumberInput}
          className=""
        />
      </div>
      <div className="">
        <button 
        onClick={doMove} 
        disabled={!gameIsEnabled}
        className="">
          Move Users
        </button>
        <button onClick={resetGame} className="">
          Reset Game
        </button>
      </div>
      <div className="">
        <h3 className="">Number History:</h3>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>Spin  {index + 1}, value: {number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NumberHistory;
