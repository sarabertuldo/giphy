import React, { useState } from "react";
import "./FavoritesPage.css";
import GifDisplay from "../Gif/GifDisplay";

const FavoritesPage = (props) => {
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <h1>Favorites</h1>;
      <div>
        {favorites.map((v) => (
          <GifDisplay key={v.id} gif={v} />
        ))}
      </div>
    </>
  );
};

export default FavoritesPage;
