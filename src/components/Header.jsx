import React, { useState } from "react";

function Header() {
  const [userName, setUserName] = useState("");
  const [showInput, setShowInput] = useState(true);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowInput(false);
  };

  return (
    <div>
      <h1 style={{ display: "inline-block" }}>Hi {userName}</h1>
      {showInput && (
        <form>
          <label>
            <input
              type="text"
              value={userName}
              onChange={handleNameChange}
              placeholder="Name"
            />
          </label>
        </form>
      )}
    </div>
  );
}

export default Header;
