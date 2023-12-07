// GameField component
import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Image from "next/image";
import rulet from "../../assets/rulet.png";
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

const GameField = ({ usernames, boardState }) => {
  const $box = useRef(null);
  const [height, setHeight] = useState(0);
  const [position, setPosition] = useState([0, 0, 0]);

  const countMove = (k) => {
    if (!height) return 0;
    return (height / 14) * k;
  };

  useEffect(() => {
    if ($box.current) {
      const { top, bottom } = $box.current.getBoundingClientRect();
      setHeight(bottom - top);
    }
  }, [$box.current]); // eslint-disable-line

  useEffect(() => {
    setPosition(boardState.map((el, i) => countMove(mapping[boardState[i]])));
  }, [boardState]); // eslint-disable-line 

  return (
    <div className="game-field" ref={$box}>
      <Image className="rulet" src={rulet} alt="*" />
      <div className="chip" style={{ right: "11%" }}>
        <Image className="chip-icon" src={gold} alt="*" />
        <span className="chip-name">{usernames[3]}</span>
      </div>
      <div
        className="chip"
        style={{
          left: "39%",
          transform: `translateY(${position[0]}px)`,
        }}
      >
        <Image className="chip-icon" src={black} alt="*" />
        <span className="chip-name">{usernames[0]}</span>
      </div>
      <div
        className="chip"
        style={{
          left: "59%",
          transform: `translateY(${position[1]}px)`,
        }}
      >
        <Image className="chip-icon" src={blue} alt="*" />
        <span className="chip-name">{usernames[1]}</span>
      </div>
      <div
        className="chip"
        style={{
          left: "80%",
          transform: `translateY(${position[2]}px)`,
        }}
      >
        <Image className="chip-icon" src={light} alt="*" />
        <span className="chip-name">{usernames[2]}</span>
      </div>
    </div>
  );
};

export default GameField;
