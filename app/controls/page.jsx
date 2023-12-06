"use client";

import useLocalStorage from "../useLocalStorage.ts";
import UserNames from "../components/users-table/index.jsx";
import GameEngine from "../components/game-engine/index.jsx";

export default function Controls() {
  const [usernames, setUsers] = useLocalStorage("usernames", ["", "", "", ""]);
  const [boardState, setBoardState] = useLocalStorage("boardState", [1, 2, 3]);
  const [bank, setBank] = useLocalStorage("bank", 12000);
  const [balances, setUsersBalance] = useLocalStorage(
    "balances",
    [2000, 2000, 2000, 2000],
  );

  return (
    <div>
      <UserNames usernames={usernames} setUsers={setUsers} />
      <GameEngine
        boardState={boardState}
        onChangeBoardState={setBoardState}
        bank={bank}
        onChangeBank={setBank}
        balances={balances}
        onChangeUserBalance={setUsersBalance}
      />
    </div>
  );
}
