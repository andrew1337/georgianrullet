import React from "react";
import "./index.css";

const Results = ({ usernames, balances, bank, boardState }) => {
  const indexes = [0, 1, 2, 3]; // boardState[4] is undefined so comparison with int works fine
  return (
    <div className="results">
      <div className="table">
        {indexes.map((index) => (
          <div className="row" key={index}>
            {console.log(usernames[index])}
            <div className="name">{usernames[index]}</div>
            <div className="count">2000</div>
            <div className="count">
              {boardState[index] >= 13 ? 1000 : "\u00A0"}
            </div>
            <div className="count">
              {boardState[index] >= 25 ? 2000 : "\u00A0"}
            </div>
            <div className="count">{balances[index]}</div>
          </div>
        ))}
      </div>
      <div className="bank">
        <div className="bank-block">
          <div className="title">Prize pool</div>
          <div className="sum">
            20000 <span className="gel">Gel</span>
          </div>
        </div>
        <div className="bank-block">
          <div className="title">Balance</div>
          <div className="sum">
            {bank} <span className="gel">Gel</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Results;
