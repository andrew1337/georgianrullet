import React from "react";
import "./index.css";

const UserNames = ({ usernames, setUsers }) => {
  const handleUserInput = (event, index) => {
    console.log(index, event.target.value);
    setUsers(
      usernames.map((user, i) => (i === index ? event.target.value : user)),
    );
  };
  return (
    <div>
      <table className="usernames-table">
        <thead>
          <tr>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Player 3</th>
            <th>Player 0</th>
            <th>.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {usernames.map((username, index) => (
              <td key={index}>
                <input
                  type="text"
                  value={username}
                  onChange={(event) => handleUserInput(event, index)}
                  placeholder="Enter player name"
                />
              </td>
            ))}
            <td>
              <button type="button" onClick={() => setUsers(["", "", "", ""])}>
                Reset Players
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserNames;
