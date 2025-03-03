import React, { useEffect, useState } from "react";
import { fetchAnimeData } from "./animeAPI";

const Carousel = ({ addToWatchlist }) => {
  const [animeList, setAnimeList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getAnimeData = async () => {
      const data = await fetchAnimeData();
      setAnimeList(data);
    };
    getAnimeData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + animeList.length) % animeList.length);
  };

  const visibleAnime = animeList.slice(currentIndex, currentIndex + 5);

  return (
    <div className="carousel">
      <button onClick={prevSlide}>{"<"}</button>
      {visibleAnime.map((anime, index) => (
        <div key={anime.id} className="carousel-item">
          <img src={anime.image} alt={anime.title} />
          <h3>{anime.title}</h3>
          <button onClick={() => addToWatchlist(anime)}>Add to Watchlist</button>
        </div>
      ))}
      <button onClick={nextSlide}>{">"}</button>
    </div>
  );
};

export default Carousel;
