import React from 'react';
import styles from './index.css';

export const Results = ({ users, balances }) => {
  return (
    <table className="results">
      <thead>
        <tr>
          {users.map((user, index) => (
            <th key={index} className="user-name">{user}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {balances.map((balance, index) => (
            <td key={index} className="user-balance">
              {balance}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
