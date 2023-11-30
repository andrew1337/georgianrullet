import React from 'react';
import styles from './index.css';

export const Results = ({ users, balances, bank}) => {
  return (
    <table className="results">
      <thead>
        <tr>
          {users.map((user, index) => (
            <th key={index} className="user-name">{user}</th>
          ))}
          <th className="user-name">Bank</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {balances.map((balance, index) => (
            <td key={index} className="user-balance">
              {balance}
            </td>
          ))}
          <td className="user-balance bank" >{bank}</td>
        </tr>
      </tbody>
    </table>
  );
};
