import React from 'react';
import Watchlist from './Watchlist';

const WatchlistPage = ({ watchlist, removeFromWatchlist }) => {
  return (
    <div className="watchlist-page">
      <h1>Your Watchlist</h1>
      <Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />
    </div>
  );
};

export default WatchlistPage;
