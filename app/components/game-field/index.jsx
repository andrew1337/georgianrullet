// GameField component
import React from "react";
import "./index.css";
import Image from "next/image";
import gold from "../../assets/gold.png";
import black from "../../assets/black.png";
import blue from "../../assets/blue.png";
import light from "../../assets/light.png";

const mapping = {
  1: 1.2,
  2: 1.2,
  3: 1.2,
  13: 5,
  14: 5,
  15: 5,
  25: 8.9,
  26: 8.9,
  27: 8.9,
  34: 11.9,
  35: 11.9,
  36: 11.9,
};

const GameField = ({ usernames, boardState }) => (
  <div className="game-field">
    <div className="chip" style={{ right: "15%" }}>
      <Image className="chip-icon" src={gold} alt="*" />
      <span className="chip-name">{usernames[3]}</span>
    </div>
    <div
      className="chip"
      style={{
        left: "39%",
        transform: `translateY(calc(80vh / 14 * ${mapping[boardState[0]]}))`,
      }}
    >
      <Image className="chip-icon" src={black} alt="*" />
      <span className="chip-name">{usernames[0]}</span>
    </div>
    <div
      className="chip"
      style={{
        left: "58%",
        transform: `translateY(calc(80vh / 14 * ${mapping[boardState[1]]}))`,
      }}
    >
      <Image className="chip-icon" src={blue} alt="*" />
      <span className="chip-name">{usernames[1]}</span>
    </div>
    <div
      className="chip"
      style={{
        left: "76%",
        transform: `translateY(calc(80vh / 14 * ${mapping[boardState[2]]}))`,
      }}
    >
      <Image className="chip-icon" src={light} alt="*" />
      <span className="chip-name">{usernames[2]}</span>
    </div>
  </div>
);

export default GameField;
