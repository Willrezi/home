import React from "react";
import "./App.css";
import Joke from "./Joke";
import Stories from "./Stories";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Search />
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div>
  );
}

export default App;
