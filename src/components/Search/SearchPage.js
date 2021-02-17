import React, { useState, useEffect } from "react";

// State - query, limit, rating, gifs (pieces of data user is entering in)
// Props - username??

const SearchPage = (props) => {
  // inputs
  // button
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState("g");
  const [limit, setLimit] = useState(25);
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState("");

  // function (here or elsewhere) to actually trigger the fetch call

  async function getGifs(query, rating, limit) {
    const key = "2BkANBTRPYGKHGFxk2I5cfkAYdDoendB";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=${limit}&offset=0&rating=${rating}&lang=en`;
    try {
      setError("");
      let response = await fetch(url);
      let json = await response.json();
      let resGifs = json.data.map((val) => {
        return { id: val.id, title: val.title, url: val.images.original.url };
      });
      setGifs(resGifs);
    } catch (e) {
      setError("Something went wrong. Please try again later!");
      setGifs([]);
    }
  }

  return (
    <>
      <h1>Search</h1>
      <div className="form-container">
        <label htmlFor="query">Search</label>
        <input
          type="text"
          id="query"
          value={query}
          className="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="form-container">
        <label htmlFor="rating">Rating </label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="g">G</option>
          <option value="pg">PG</option>
          <option value="pg-13">PG-13</option>
          <option value="r">R</option>
        </select>
      </div>
      <div className="form-container">
        <label htmlFor="limit">Limit</label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <button onClick={() => getGifs(query, rating, limit)}>Search</button>
        <div class="gif-area">
          {error.length > 0 && <h1>{error}</h1>}
          {error.length === 0 &&
            gifs.map((v) => <img key={v.id} src={v.url} />)}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
