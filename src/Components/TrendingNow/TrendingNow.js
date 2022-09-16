import React, { useState, useEffect } from "react";
import "./trendingNow.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import data from "../../data.json";
import { MovieContext } from "../../App";

function TrendingNow() {
  const movieContext = React.useContext(MovieContext);

  const [sortedMovies, setSortedMovies] = useState([]);
  const [sessionMovieId, setSessionMovieId] = useState(null);

  const responsive = {
    0: { items: 8 },
  };

  function custom_sort(a, b) {
    return new Date(b.Date).getTime() - new Date(a.Date).getTime();
  }

  useEffect(() => {
    setSortedMovies(data?.TendingNow?.sort(custom_sort));
    setSessionMovieId(sessionStorage.getItem("movieId"));
  }, []);

  if (sessionMovieId) {
    const found = sortedMovies.find((element) => element.Id == sessionMovieId);
    const index = sortedMovies.indexOf(found);
    sortedMovies.splice(index, 1);
    sortedMovies.unshift(found);
  }

  const selectMovie = (id) => {
    movieContext.movieContext.setFeaturedMovie(id);
    sessionStorage.setItem("movieId", id);
  };
  const handleDragStart = (e) => e.preventDefault();

  const trendings = sortedMovies?.map((m) => (
    <img
      onClick={() => selectMovie(m.Id)}
      src={require(`../../assets/${m.CoverImage}`)}
      onDragStart={handleDragStart}
      alt=""
    />
  ));

  return (
    <>
      <p className="trending-title">Trending Now</p>
      <AliceCarousel
        disableButtonsControls={true}
        mouseTracking
        items={trendings}
        responsive={responsive}
        disableDotsControls={false}
      />
    </>
  );
}

export default TrendingNow;
