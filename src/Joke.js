import React, { useState, useEffect } from "react";

const Joke = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
        setJoke(json);
      });
  }, []);

  const { setup, punchline } = joke;
  return (
    <div>
      <h3>Joke of the session</h3>
      <p>{setup}</p>
      <p>
        <em>{punchline}</em>
      </p>
    </div>
  );
};

export default Joke;
