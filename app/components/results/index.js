import React from 'react';
import './index.css';

export const Results = ({ usernames, balances, bank}) => {
  return (
    <table className="results">
      <thead>
        <tr>
          {usernames.map((username, index) => (
            <th key={index} className="user-name">{username}</th>
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
