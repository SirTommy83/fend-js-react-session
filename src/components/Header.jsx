import React, { useEffect, useState } from "react";

export default function Header() {
  const [userName, setUserName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedName = sessionStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
      setIsNameSubmitted(true);
    }
  }, []);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsNameSubmitted(true);
    setIsEditing(false);
    sessionStorage.setItem("userName", userName);
  };

  const handleNameClick = () => {
    setIsEditing(true);
    setIsNameSubmitted(false);
  };

  return (
    <div className="bg-fitness-color-dark text-fitness-color-light flex w-full p-4">
      <h1 className="font-poppins text-h1 font-bold text-left">
        Hi {isNameSubmitted && isEditing ? `${userName}!` : ""}
      </h1>
      {!isNameSubmitted || isEditing ? (
        <form onSubmit={handleSubmit} className="inline-block">
          <label>
            <input
              type="text"
              value={userName}
              onChange={handleNameChange}
              placeholder="Name!"
              className="bg-fitness-color-dark text-fitness-color-light font-poppins border-none text-h1 font-bold outline-none placeholder-white"
              size={userName.length === 0 ? "5" : userName.length}
            />
          </label>
          <button type="submit" className="hidden"></button>
        </form>
      ) : (
        <button
          onClick={handleNameClick}
          className="text-h1 font-bold font-poppins ml-2 bg-transparent border-none text-fitness-color-light cursor-pointer"
        >
          {userName}
        </button>
      )}
    </div>
  );
}
