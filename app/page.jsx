"use client";

import React from "react";
import Image from "next/image";
import GameField from "./components/game-field";
import Results from "./components/results";
import useUserMedia from "./useUserMedia";
import useLocalStorage from "./useLocalStorage.ts";
import frame from "./assets/frame.png";
import top from "./assets/frame-top.png";
import bottom from "./assets/frame-bottom.png";

const MainPage = () => {
  const [usernames] = useLocalStorage("usernames", ["", "", "", ""]); // users without names (first 3 is moving, last is 0)
  const [boardState] = useLocalStorage("boardState", [1, 2, 3]); // initial position for each user who moves
  const [bank] = useLocalStorage("bank", 12000);
  const [balances] = useLocalStorage("balances", [2000, 2000, 2000, 2000]);

  const { stream, error } = useUserMedia({ audio: false, video: true });

  return (
    <div className="main">
      <div className="desc">
        <GameField usernames={usernames} boardState={boardState} />
      </div>
      <div className="content">
        <Results
          usernames={usernames}
          balances={balances}
          bank={bank}
          boardState={boardState}
        />

        <div className="stream-box" id="stream">
          <Image className="frame" id="frame-top" src={frame} alt="*" />
          {!error && (
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
          {/* <Image className="frame" id="frame-bottom" src={bottom} alt="*" /> */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
