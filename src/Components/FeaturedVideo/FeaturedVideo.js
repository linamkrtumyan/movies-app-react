import React from "react";
import "./featuredVideo.css";
import data from "../../data.json";
import { MovieContext } from "../../App";
import SelectedMovie from "./components/SelectedMovie";

function FeaturedVideo() {
  const movieContext = React.useContext(MovieContext);


  if (movieContext.state.featuredId) {
    return <SelectedMovie selected={movieContext.state.featuredId} />;
  }

  return (
    <div className="featured-container">
      <div className="featured-text-container">
        <p className="featured-text-category">{data.Featured.Category}</p>
        <p className="featured-text-title">{data.Featured.Title}</p>
        <div className="featured-flex-cont">
          <p className="featured-text-date">
            {new Date(data.Featured.Date)?.getFullYear()}
          </p>
          <p className="featured-text-rating">{data.Featured.MpaRating}</p>
          <p className="featured-text-duration">{data.Featured.Duration}</p>
        </div>

        <p className="featured-text-desc">{data.Featured.Description}</p>

        <div className="actions-container">
          <button className="btn primary-btn">
            {" "}
            <img
              style={{ width: "24px" }}
              src={require("../../assets/icons/play.png")}
            />{" "}
            Play
          </button>
          <button className="btn secondary-btn">More info</button>
        </div>
      </div>

      <img
        className="featured-image"
        src={require("../../assets/FeaturedCoverImage.png")}
      />
    </div>
  );
}

export default FeaturedVideo;
