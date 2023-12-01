import styles from './index.css';
import React, { useState } from 'react';

const NumberHistory = ({boardState, onSubmit, bank, onChangeBank, balances, onChangeUserBalance}) => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [gameIsEnabled, setGameIsEnabled] = useState(true);

  const handleNumberInput = (event) => {
    setCurrentNumber(event.target.value);
  };

const giveOutPrizes = (currentPosition, userIndex) => {
  let amount;
  if ([1, 2, 3].includes(currentPosition)) {
    amount = 1000;
  } else if ([13, 14, 15].includes(currentPosition)) {
    amount = 2000;
  } else if ([0, 25, 26, 27].includes(currentPosition)) {
    amount = bank;
  }
  const updatedUserBalance = [...balances];
  updatedUserBalance[userIndex] += amount;
  onChangeUserBalance(updatedUserBalance);
  onChangeBank(bank - amount);
}

const getCurrentUserIdBySpinValue = (currentSpinValue) => {
  if (currentSpinValue === 0) {
    return 3
  }
  const indexMap = { 0: 2, 1: 0, 2: 1 };
  return indexMap[currentSpinValue % 3];
}

const doStepForUsers = (boardState, currentSpinValue) => {
  const usersIndex = getCurrentUserIdBySpinValue(currentSpinValue);
  const currentPosition = boardState[usersIndex];
  
  const updatedBoardState = [...boardState];
  const isFinalNumbers = [25, 26, 27].includes(updatedBoardState[usersIndex]);

  updatedBoardState[usersIndex] += isFinalNumbers ? 9 : 12;
  giveOutPrizes(currentPosition, usersIndex);
  onSubmit(updatedBoardState);
  return isFinalNumbers;
};

const doMove = () => {
  const parsedNumber = parseInt(currentNumber, 10);
  
  if (isNaN(parsedNumber) || parsedNumber < 0 || parsedNumber > 37) return setCurrentNumber('');

  setCurrentNumber('');
  if (parsedNumber === 0) {
    giveOutPrizes(0, 3);
    return setGameIsEnabled(false);
  }
  let wasFinalNumber = doStepForUsers(boardState, parsedNumber);
  if (wasFinalNumber) {
    return setGameIsEnabled(false);
  }

};

  const resetGame = () => {
    setCurrentNumber('');
    onSubmit([1,2,3]);
    setGameIsEnabled(true);
    onChangeBank(12000);
    onChangeUserBalance([2000, 2000, 2000, 2000]);
  };

  return (
    <div className="stepper">
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
  );
};

export default NumberHistory;