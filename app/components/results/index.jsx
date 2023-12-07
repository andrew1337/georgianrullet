import React from "react";
import "./index.css";

const Results = ({ usernames, balances, bank, boardState }) => {
  const indexes = [0, 1, 2, 3]; // boardState[4] is undefined so comparison with int works fine
  return (
    <div className="results">
      <div className="table">
        {indexes.map((index) => (
          <div className="row" key={index}>
            <div className="name">{usernames[index]}</div>
            <div className="prize">2000</div>
            <div className="prize">
              {boardState[index] >= 13 ? 1000 : "\u00A0"}
            </div>
            <div className="prize">
              {boardState[index] >= 25 ? 2000 : "\u00A0"}
            </div>
            <div className="balance">{balances[index]}</div>
          </div>
        ))}
      </div>
      <div className="bank">
        <div className="whole-sum">Prize pool 20000 Gel</div>
        <div className="remaining">Balance {bank} Gel</div>
      </div>
    </div>
  );
};
export default Results;
