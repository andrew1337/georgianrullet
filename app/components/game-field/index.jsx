// GameField component
import React from "react";
import "./index.css";
import Image from "next/image";
import chip from "../../assets/chip.svg";

const columns = [1, 2, 0];

const list = [
  [1, true],
  [2, false],
  [3, true],
  [4, false],
  [5, true],
  [6, false],
  [7, true],
  [8, false],
  [9, true],
  [10, false],
  [11, false],
  [12, true],
  [13, false],
  [14, true],
  [15, false],
  [16, true],
  [17, false],
  [18, true],
  [19, true],
  [20, false],
  [21, true],
  [22, false],
  [23, true],
  [24, false],
  [25, true],
  [26, false],
  [27, true],
  [28, false],
  [29, false],
  [30, true],
  [31, false],
  [32, true],
  [33, false],
  [34, true],
  [35, false],
  [36, true],
];

const tableData = columns.reduce((memo, remainder) => {
  memo.push(list.filter((num) => num[0] % 3 === remainder));
  return memo;
}, []);

const renderCell = (boardState, item, usernames, userId) => {
  const [num, isRed] = item;
  if (boardState.includes(num) && num !== 0) {
    return (
      <div key={num} className={isRed ? "cell red" : "cell"}>
        <div className="chip">
          <Image className="chip-icon" src={chip} alt="*" />
          <span className="chip-name">{usernames[userId]}</span>
        </div>
      </div>
    );
  }
  return (
    <div key={num} className={isRed ? "cell red" : "cell"}>
      {num}
    </div>
  );
};

const GameField = ({ usernames, boardState }) => (
  <div className="game-field">
    <div className="top">0</div>
    <div className="table">
      {tableData.map((column, index) => (
        <div key={index} className="column">
          {column.map((item) => renderCell(boardState, item, usernames, index))}
        </div>
      ))}
    </div>
  </div>
);

export default GameField;
