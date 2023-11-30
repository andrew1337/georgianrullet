'use client'

import React, { useCallback, useState } from 'react';
import GameField from './components/game-field';
import UserTable from './components/users-table';
import NumberHistory from './components/gane-engine';

const YourPage = () => {
  // Sample users data
  const [users, setUsers] = useState(['', '', '', '']); // users without names (first 3 is moving, last is 0)
  const [boardState, setBoardState] = useState([1,2,3]); // initial position for each user who moves
  const handleSetUsers = useCallback((value) => setUsers(value), [])
  const handleChange = useCallback((value) => setBoardState(value), [])

console.log('boardState', boardState);
  return (
    <div>
      <UserTable users={users} setUsers={handleSetUsers} />
      <GameField users={users} boardState={boardState} />
      <NumberHistory boardState={boardState} onSubmit={handleChange} />
    </div>
  );
};

export default YourPage;
