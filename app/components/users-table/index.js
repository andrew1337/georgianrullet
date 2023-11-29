import React from 'react';
import styles from './index.css';

const UserTable = ({ users, setUsers }) => {
  const handleUserInput = (event, index) => {
    const newUsers = [...users];
    newUsers[index] = event.target.value;
    setUsers(newUsers);
  }
  return (
    <div className="container mx-auto p-4">
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Player 1</th>
            <th className="border px-4 py-2">Player 2</th>
            <th className="border px-4 py-2">Player 3</th>
            <th className="border px-4 py-2">Player 0</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <input
                type="text"
                value={users[0]}
                onChange={(event) => handleUserInput(event, 0)}
                className="w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                value={users[1]}
                onChange={(event) => handleUserInput(event, 1)}
                className="w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                value={users[2]}
                onChange={(event) => handleUserInput(event, 2)}
                className="w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </td>
            <td className="border px-4 py-2">
              <input
                type="text"
                value={users[3]}
                onChange={(event) => handleUserInput(event, 3)}
                className="w-full rounded border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => setUsers(['', '', '', ''])} className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">Reset Players</button>
    </div>
  );
};

export default UserTable;
