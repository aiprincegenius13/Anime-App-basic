import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Carousel from "./Carousel";
import WatchlistPage from "./WatchlistPage";

const App = () => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (anime) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, anime]);
  };

  const removeFromWatchlist = (animeId) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter(anime => anime.id !== animeId));
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/watchlist">Watchlist</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Carousel addToWatchlist={addToWatchlist} />} />
          <Route path="/watchlist" element={<WatchlistPage watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;