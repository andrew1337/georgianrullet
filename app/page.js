'use client'

import React, { useCallback, useState } from 'react';
import GameField from './components/game-field';
import { UserNames } from './components/users-table';
import NumberHistory from './components/gane-engine';
import { Results } from './components/results';
import { useUserMedia } from './useUserMedia';

const YourPage = () => {
  // Sample users data
  const [users, setUsers] = useState(['', '', '', '']); // users without names (first 3 is moving, last is 0)
  const [bank, setBank] = useState(12000);
  const [usersBalance, setUsersBalance] = useState([2000, 2000, 2000, 2000]);
  const [boardState, setBoardState] = useState([1,2,3]); // initial position for each user who moves

  const handleSetUsers = useCallback((value) => setUsers(value), [])
  const handleChange = useCallback((value) => setBoardState(value), [])
  const handleUserBalance = useCallback((value) => setUsersBalance(value), [])
  const handleBank = useCallback((value) => setBank(value), [])
  
  const { stream, error } = useUserMedia({ audio: false, video: true });

  return (
    <>
    <div className='main'>
      <div className='desc'>
        <div/>
        <GameField users={users} boardState={boardState} />
      </div>
      <div className='content'>
          <div id='stream'>
          {error ? 
            (<p>error running vudeo</p>) 
            : 
            (<video className='video'
                    muted
                    autoPlay
                    ref={video => {if (video) {video.srcObject = stream;}}}
                    />
            )}
          </div>
          <Results users={users} balances={usersBalance} bank={bank} />
      </div>
    </div>
    <div className='control-panel'>
      <UserNames users={users} setUsers={handleSetUsers} />
      <NumberHistory 
      boardState={boardState} 
      onSubmit={handleChange} 
      bank={bank} 
      onChangeBank={handleBank}
      balances={usersBalance}
      onChangeUserBalance={handleUserBalance}
      />
    </div>
    </>
  );
};

export default YourPage;
