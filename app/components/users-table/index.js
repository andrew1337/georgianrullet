import React from 'react';
import styles from './index.css';

export const UserNames = ({ users, setUsers }) => {
  const handleUserInput = (event, index) => {
    const newUsers = [...users];
    newUsers[index] = event.target.value;
    setUsers(newUsers);
  }
  return (
    <div className="">
      <table className="">
        <thead>
          <tr>
            <th className="">Player 1</th>
            <th className="">Player 2</th>
            <th className="">Player 3</th>
            <th className="">Player 0</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">
              <input
                type="text"
                value={users[0]}
                onChange={(event) => handleUserInput(event, 0)}
                className=""
              />
            </td>
            <td className="">
              <input
                type="text"
                value={users[1]}
                onChange={(event) => handleUserInput(event, 1)}
                className=""
              />
            </td>
            <td className="">
              <input
                type="text"
                value={users[2]}
                onChange={(event) => handleUserInput(event, 2)}
                className=""
              />
            </td>
            <td className="">
              <input
                type="text"
                value={users[3]}
                onChange={(event) => handleUserInput(event, 3)}
                className=""
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => setUsers(['', '', '', ''])} className="">Reset Players</button>
    </div>
  );
};
