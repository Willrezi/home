import React, { useState, useEffect } from "react";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://news-proxy-server.appspot.com/topstories")
      .then(response => response.json())
      .then(json => {
        console.log("json", json);
        setStories(json);
      });
  }, []);

  return (
    <div>
      <h3>Top Stories</h3>
      {stories.map(story => {
        const { id, by, time, title, url } = story;
        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <div>
              {by} - {new Date(time * 1000).toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
