import React from 'react';

const Watchlist = ({ watchlist, removeFromWatchlist }) => {
  return (
    <div className="watchlist">
      <h2>Watchlist</h2>
      {watchlist.map(anime => (
        <div key={anime.id} className="watchlist-item">
          <img src={anime.image} alt={anime.title} />
          <h3>{anime.title}</h3>
          <button onClick={() => removeFromWatchlist(anime.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
