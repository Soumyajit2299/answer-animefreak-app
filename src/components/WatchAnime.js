import React, { useState } from "react";

const WatchAnime = () => {
  const [searchText, setSearchText] = useState("");
  const [animeArray, setAnimeArray] = useState([]);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/search/?keyw=${searchText}`);
      const data = await response.json();
      console.table(data);
      console.log(data);
      setAnimeArray(data);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    
      <div className="container">
        <div style={{ padding: "50px" }}>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Anime To Watch..."
              aria-label="Search"
              value={searchText}
              onChange={handleChange}
            />
            <button className="btn btn-outline-success" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
          {animeArray.map((opt) =>
            <div id={opt.animeId} key={opt.animeId} className="card" style={{ width: "18rem", margin: "10px" }}>
              <img src={opt.animeImg} className="card-img-top" alt="Anime" />
              <div className="card-body">
                <h5 className="card-title">{opt.animeTitle}</h5>
                <p className="card-text">{opt.status}</p>
                <a href={opt.animeUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Watch Now!
                </a>
              </div>
            </div>)}
        </div>
      </div>
    
  );
};

export default WatchAnime;
