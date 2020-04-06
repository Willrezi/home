import React, { useState } from "react";

const Search = () => {
  const [userQuery, setUserQuery] = useState("");

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  const handleKeyPress = event => {
    if (event === "enter") {
      searchQuery();
    }
  };

  return (
    <div>
      <h1>Hello Will</h1>
      <input
        value={userQuery}
        onChange={updateUserQuery}
        onKeyPress={handleKeyPress}
      />
      <button onClick={searchQuery}>Search</button>
    </div>
  );
};

export default Search;
