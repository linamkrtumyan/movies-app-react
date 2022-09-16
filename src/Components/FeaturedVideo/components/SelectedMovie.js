import React, { useState, useEffect } from "react";
import data from "../../../data.json";
import { MovieContext } from "../../../App";

function SelectedMovie() {
  const movieContext = React.useContext(MovieContext);

  const [videoPlayer, setVideoPlayer] = useState(false);

  const result = data.TendingNow.filter(
    (word) => word.Id == movieContext.state.featuredId
  );

  useEffect(() => {
    setTimeout(() => {
      setVideoPlayer(true);
    }, 2000);
  });

  useEffect(() => {
    if (videoPlayer) setVideoPlayer(false);
  }, [movieContext.state.featuredId]);

  console.log(result, "result");
  return (
    <div className="featured-container">
      <div className="featured-text-container">
        <p className="featured-text-category">{result[0].Category}</p>
        <p className="featured-text-title">{result[0].Title}</p>
        <div className="featured-flex-cont">
          <p className="featured-text-date">
            {new Date(result[0].Date)?.getFullYear()}
          </p>
          <p className="featured-text-rating">{result[0].MpaRating}</p>
          <p className="featured-text-duration">{result[0].Duration}</p>
        </div>

        <p className="featured-text-desc">{result[0].Description}</p>

        <div className="actions-container">
          <button className="btn primary-btn">
            {" "}
            <img
              style={{ width: "24px" }}
              src={require("../../../assets/icons/play.png")}
            />{" "}
            Play
          </button>
          <button className="btn secondary-btn">More info</button>
        </div>
      </div>
      {videoPlayer ? (
        <iframe width="100%" height="800" src={result[0].VideoUrl}></iframe>
      ) : (
        <img
          className="featured-image"
          src={require(`../../../assets/${result[0].Cover}`)}
        />
      )}
    </div>
  );
}

export default SelectedMovie;
