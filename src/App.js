import React, { useState } from "react";
import "./App.css";

function App() {
  const [userQuery, setUserQuery] = useState("");

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  return (
    <div className="App">
      <h1>Hello Will</h1>
      <div>
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
    </div>
  );
}

export default App;
