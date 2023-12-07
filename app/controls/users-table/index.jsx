import React from "react";
import "./index.css";

export const UserNames = ({ usernames, setUsers }) => {
  const handleUserInput = (event, index) => {
    setUsers(
      usernames.map((user, i) => (i === index ? event.target.value : user)),
    );
  };
  return (
    <div className="usernames">
      <div className="usernames-row">
        <div>Line 1</div>
        <div>Line 2</div>
        <div>Line 3</div>
        <div>Zero</div>
      </div>

      <div className="usernames-row">
        {usernames.map((username, index) => (
          <div key={index}>
            <input
              type="text"
              className="usernames-input"
              value={username}
              onChange={(event) => handleUserInput(event, index)}
              placeholder="Enter player name"
            />
          </div>
        ))}
      </div>

      <button
        className="reset"
        type="button"
        onClick={() => setUsers(["", "", "", ""])}
      >
        Reset Players
      </button>
    </div>
  );
};
