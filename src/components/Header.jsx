import React, { useState } from "react";

function Header() {
  const [userName, setUserName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsNameSubmitted(true);
  };

  return (
    <div className="bg-[#282c34] p-5 text-white flex items-center">
      <h1 className="text-3xl font-bold mr-3">
        Hi {isNameSubmitted ? userName : !""}
      </h1>
      {!isNameSubmitted && (
        <form onSubmit={handleSubmit} className="inline-block">
          <label>
            <input
              type="text"
              value={userName}
              onChange={handleNameChange}
              placeholder="Name!"
              className="bg-[#282c34] text-white border-none text-3xl font-bold outline-none placeholder-white"
              size={userName.length === 0 ? "5" : userName.length}
            />
          </label>
          <button type="submit" className="hidden"></button>
        </form>
      )}
    </div>
  );
}

export default Header;
