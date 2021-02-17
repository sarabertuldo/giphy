import React from "react";
import "./GifDisplay.css";

// taking one GIF result and displaying it on the page

const GifDisplay = ({ gif }) => {
  return (
    <div class="gif-container">
      <h3>{gif.title}</h3>
      <img className="gif" src={gif.url} />
    </div>
  );
};

export default GifDisplay;
