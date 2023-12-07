"use client";

import React from "react";
import { Stream } from "./components/stream";
import GameField from "./components/game-field";
import Results from "./components/results";
import useLocalStorage from "./useLocalStorage.ts";

const MainPage = () => {
  const [usernames] = useLocalStorage("usernames", ["", "", "", ""]); // users without names (first 3 is moving, last is 0)
  const [boardState] = useLocalStorage("boardState", [1, 2, 3]); // initial position for each user who moves
  const [bank] = useLocalStorage("bank", 12000);
  const [balances] = useLocalStorage("balances", [2000, 2000, 2000, 2000]);

  return (
    <div className="main">
      <GameField usernames={usernames} boardState={boardState} />
      <div className="content">
        <Results
          usernames={usernames}
          balances={balances}
          bank={bank}
          boardState={boardState}
        />

        <Stream />
      </div>
    </div>
  );
};

export default MainPage;
