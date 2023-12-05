"use client";

import React from "react";
import GameField from "./components/game-field";
import { Results } from "./components/results";
import { useUserMedia } from "./useUserMedia";
import useLocalStorage from "./useLocalStorage.ts";

const MainPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [usernames, setUsers] = useLocalStorage("usernames", ["", "", "", ""]); // users without names (first 3 is moving, last is 0)
  // eslint-disable-next-line no-unused-vars
  const [boardState, setBoardState] = useLocalStorage("boardState", [1, 2, 3]); // initial position for each user who moves
  // eslint-disable-next-line no-unused-vars
  const [bank, setBank] = useLocalStorage("bank", 12000);
  // eslint-disable-next-line no-unused-vars
  const [balances, setUsersBalance] = useLocalStorage(
    "balances",
    [2000, 2000, 2000, 2000],
  );

  const { stream, error } = useUserMedia({ audio: false, video: true });

  return (
    <div className="main">
      <div className="desc">
        <GameField usernames={usernames} boardState={boardState} />
      </div>
      <div className="content">
        <div id="stream">
          {error ? (
            <p>error running vudeo</p>
          ) : (
            <video
              className="video"
              muted
              autoPlay
              ref={(video) => {
                if (video) {
                  video.srcObject = stream;
                }
              }}
            />
          )}
        </div>
        <Results usernames={usernames} balances={balances} bank={bank} />
      </div>
    </div>
  );
};

export default MainPage;
